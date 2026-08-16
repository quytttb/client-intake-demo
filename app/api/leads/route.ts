import { createLead, getStore, notifyOwner } from "@/lib/lead-store";
import { SERVICES, type LeadInput, type Service } from "@/lib/types";

const MAX_LEN = 500;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validate(body: unknown): LeadInput | { error: string } {
  if (typeof body !== "object" || body === null) {
    return { error: "Dữ liệu không hợp lệ." };
  }
  const data = body as Record<string, unknown>;
  const name = clean(data.name);
  const contact = clean(data.contact);
  const service = clean(data.service) as Service;
  const message = clean(data.message);

  if (!name) return { error: "Vui lòng nhập họ tên." };
  if (name.length > 100) return { error: "Họ tên tối đa 100 ký tự." };

  if (!contact) {
    return { error: "Vui lòng nhập số điện thoại hoặc Telegram/Zalo." };
  }
  if (contact.length > 100) {
    return { error: "Thông tin liên hệ tối đa 100 ký tự." };
  }

  if (!SERVICES.includes(service)) {
    return {
      error: `Dịch vụ phải là một trong: ${SERVICES.join(", ")}.`,
    };
  }

  if (!message) return { error: "Vui lòng mô tả ngắn nhu cầu của bạn." };
  if (message.length > MAX_LEN) {
    return { error: `Mô tả tối đa ${MAX_LEN} ký tự.` };
  }

  return { name, contact, service, message };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Body JSON không hợp lệ." },
      { status: 400 }
    );
  }

  const result = validate(body);
  if ("error" in result) {
    return Response.json({ error: result.error }, { status: 400 });
  }

  const lead = createLead(result);
  const store = await getStore();
  await store.save(lead);

  // Không chờ/Await lỗi thông báo ảnh hưởng tới response.
  notifyOwner(lead).catch((err) => console.error("Lỗi gửi thông báo:", err));

  return Response.json(
    {
      ok: true,
      lead: {
        id: lead.id,
        name: lead.name,
        contact: lead.contact,
        service: lead.service,
        message: lead.message,
        createdAt: lead.createdAt,
      },
    },
    { status: 201 }
  );
}
