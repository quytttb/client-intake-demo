"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Send,
  CheckCircle2,
  Store,
  RotateCcw,
  Loader2,
  User,
} from "lucide-react";
import { SERVICES, type Service } from "@/lib/types";
import { CONTACT } from "@/lib/config";

type Step = "name" | "contact" | "service" | "message" | "confirm" | "done";

interface Message {
  role: "bot" | "user";
  text: string;
}

interface CreatedLead {
  id: string;
  name: string;
  contact: string;
  service: Service;
  message: string;
  createdAt: string;
}

interface Draft {
  name: string;
  contact: string;
  service: Service | "";
  message: string;
}

const EMPTY_DRAFT: Draft = { name: "", contact: "", service: "", message: "" };

const GREETING =
  "Xin chào! Mình là trợ lý của shop. Mình sẽ ghi nhận yêu cầu để shop liên hệ lại sớm nhất. Bạn cho mình xin họ tên nhé?";

function BotBubble({ text }: { text: string }) {
  return (
    <div className="flex items-end gap-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
        <Bot size={15} />
      </span>
      <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm">
        {text}
      </div>
    </div>
  );
}

export default function DemoChat() {
  const [step, setStep] = useState<Step>("name");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: GREETING },
  ]);
  const [draft, setDraft] = useState<Draft>(EMPTY_DRAFT);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lead, setLead] = useState<CreatedLead | null>(null);
  const [shopLeads, setShopLeads] = useState<CreatedLead[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, step]);

  useEffect(() => {
    if (step === "name" || step === "contact" || step === "message") {
      inputRef.current?.focus();
    }
  }, [step]);

  function botSays(text: string) {
    setMessages((m) => [...m, { role: "bot", text }]);
  }

  function pushUser(text: string) {
    setMessages((m) => [...m, { role: "user", text }]);
  }

  function handleSubmitText(value: string) {
    setError(null);
    const v = value.trim();

    if (step === "name") {
      if (!v) {
        setError("Vui lòng nhập họ tên của bạn.");
        return;
      }
      setDraft((d) => ({ ...d, name: v }));
      pushUser(v);
      botSays(
        `Cảm ơn ${v}! Cho mình xin số điện thoại hoặc tài khoản Telegram/Zalo để shop tiện liên hệ nhé.`
      );
      setStep("contact");
      return;
    }

    if (step === "contact") {
      if (!v) {
        setError("Vui lòng nhập thông tin liên hệ.");
        return;
      }
      setDraft((d) => ({ ...d, contact: v }));
      pushUser(v);
      botSays("Bạn đang quan tâm dịch vụ nào? Chọn một mục bên dưới nhé.");
      setStep("service");
      return;
    }

    if (step === "message") {
      if (!v) {
        setError("Vui lòng mô tả ngắn nhu cầu của bạn.");
        return;
      }
      const next = { ...draft, message: v };
      setDraft(next);
      pushUser(v);
      botSays(
        "Mình tóm tắt lại thông tin nhé. Kiểm tra rồi bấm “Gửi yêu cầu” giúp shop nha!"
      );
      setStep("confirm");
    }
  }

  function pickService(s: Service) {
    if (step !== "service") return;
    setDraft((d) => ({ ...d, service: s }));
    pushUser(s);
    botSays(
      "Bạn mô tả ngắn nhu cầu giúp mình nhé (VD: cần đặt lịch chiều thứ 7, muốn báo giá gói cơ bản...)."
    );
    setStep("message");
  }

  async function submitLead() {
    setBusy(true);
    setError(null);
    try {
      // Mock client-side: GitHub Pages static hosting, khong can server API
      const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
      const mockId = `LD-${Date.now().toString(36).toUpperCase()}-${suffix}`;
      // Gia lap delay nhe cho cam giac that
      await new Promise((r) => setTimeout(r, 600));
      const mockLead: CreatedLead = {
        id: mockId,
        name: draft.name,
        contact: draft.contact,
        service: draft.service as Service,
        message: draft.message,
        createdAt: new Date().toISOString(),
      };
      pushUser(`✅ Gửi yêu cầu • ${draft.service}`);
      botSays(
        `Đã gửi thành công! Mã yêu cầu của bạn là ${mockLead.id}. Shop sẽ liên hệ lại sớm nhất. Cảm ơn bạn!`
      );
      setLead(mockLead);
      setShopLeads((ls) => [mockLead, ...ls]);
      setStep("done");
    } catch {
      setError("Co loi xay ra, vui long thu lai.");
    } finally {
      setBusy(false);
    }
  }

  function restart() {
    setDraft(EMPTY_DRAFT);
    setLead(null);
    setInput("");
    setError(null);
    setMessages([{ role: "bot", text: GREETING }]);
    setStep("name");
  }

  const showServiceButtons = step === "service";
  const showConfirm = step === "confirm";
  const showDone = step === "done";
  const showInput = step === "name" || step === "contact" || step === "message";

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
        <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white">
            <Bot size={18} />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Trợ lý Bot Nhận Khách
            </p>
            <p className="flex items-center gap-1.5 text-xs text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Đang hoạt
              động
            </p>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex h-[55dvh] min-h-[320px] flex-col gap-3 overflow-y-auto p-4 sm:h-[420px]"
        >
          {messages.map((m, i) =>
            m.role === "bot" ? (
              <BotBubble key={i} text={m.text} />
            ) : (
              <div key={i} className="flex items-end justify-end gap-2">
                <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-emerald-600 px-4 py-2.5 text-sm text-white shadow-sm">
                  {m.text}
                </div>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                  <User size={15} />
                </span>
              </div>
            )
          )}

          {showConfirm && (
            <div className="flex items-end gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                <Bot size={15} />
              </span>
              <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-sm shadow-sm">
                <p className="mb-2 font-semibold text-slate-900">
                  Thông tin của bạn
                </p>
                <ul className="space-y-1 text-slate-700">
                  <li>
                    👤 <b>Họ tên:</b> {draft.name}
                  </li>
                  <li>
                    📞 <b>Liên hệ:</b> {draft.contact}
                  </li>
                  <li>
                    🧭 <b>Dịch vụ:</b> {draft.service}
                  </li>
                  <li>
                    📝 <b>Nhu cầu:</b> {draft.message}
                  </li>
                </ul>
                <button
                  onClick={submitLead}
                  disabled={busy}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
                >
                  {busy ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {busy ? "Đang gửi..." : "Gửi yêu cầu"}
                </button>
              </div>
            </div>
          )}

          {showDone && lead && (
            <div className="mt-2 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm">
              <p className="flex items-center gap-2 font-semibold text-emerald-800">
                <CheckCircle2 size={18} /> Gửi thành công!
              </p>
              <p className="mt-1 text-emerald-700">
                Mã yêu cầu:{" "}
                <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs">
                  {lead.id}
                </code>
              </p>
              <p className="mt-1 text-xs text-emerald-600">
                Xem lead ở panel “Góc nhìn chủ shop” bên cạnh/bên dưới. Khi triển
                khai thật, shop còn nhận được tin nhắn Telegram/Zalo ngay lập tức.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <button
                  onClick={restart}
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600 px-4 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100"
                >
                  <RotateCcw size={14} /> Chạy lại demo
                </button>
                <a
                  href={CONTACT.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
                >
                  Muốn bot này cho shop bạn? Nhắn Telegram
                </a>
              </div>
            </div>
          )}
        </div>

        {showServiceButtons && (
          <div className="border-t border-slate-200 bg-white px-4 py-3">
            <p className="mb-2 text-xs text-slate-500">Chọn dịch vụ:</p>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  onClick={() => pickService(s)}
                  className="rounded-full border border-emerald-500 bg-white px-4 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {showInput && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.trim()) return;
              handleSubmitText(input);
              setInput("");
            }}
            className="flex items-center gap-2 border-t border-slate-200 bg-white px-3 py-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                step === "name"
                  ? "Nhập họ tên..."
                  : step === "contact"
                    ? "Nhập SĐT hoặc Telegram/Zalo..."
                    : "Mô tả ngắn nhu cầu..."
              }
              className="flex-1 rounded-full border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />
            <button
              type="submit"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700"
              aria-label="Gửi"
            >
              <Send size={17} />
            </button>
          </form>
        )}

        {error && (
          <p className="border-t border-rose-100 bg-rose-50 px-4 py-2 text-xs font-medium text-rose-600">
            {error}
          </p>
        )}
      </div>

      <aside className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Store size={16} />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Góc nhìn chủ shop
            </p>
            <p className="text-xs text-slate-400">Lead mới trong phiên hiện tại</p>
          </div>
        </div>
        <div className="max-h-[420px] space-y-3 overflow-y-auto p-4">
          {shopLeads.length === 0 ? (
            <p className="rounded-xl bg-slate-50 p-4 text-center text-sm text-slate-400">
              Chưa có lead nào. Hoàn thành luồng chat bên cạnh để xem lead đổ về
              đây.
            </p>
          ) : (
            shopLeads.map((l) => (
              <div
                key={l.id}
                className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                    {l.service}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-700">
                    {l.id}
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {l.name}
                </p>
                <p className="text-xs text-slate-500">📞 {l.contact}</p>
                <p className="mt-1 line-clamp-2 text-xs text-slate-600">
                  “{l.message}”
                </p>
                <p className="mt-2 text-[10px] text-slate-400">
                  🕒 {new Date(l.createdAt).toLocaleString("vi-VN")}
                </p>
              </div>
            ))
          )}
        </div>
      </aside>
    </div>
  );
}
