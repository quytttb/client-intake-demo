import { promises as fs } from "fs";
import path from "path";
import type { Lead, LeadInput } from "./types";

/**
 * Interface lưu trữ lead.
 *
 * Sau này khi triển khai thật, chỉ cần viết một class khác implement
 * interface này (Google Sheets, Supabase, ...) và thay đổi `getStore()`
 * bên dưới — toàn bộ API route không cần sửa.
 *
 * TODO(production):
 * - GoogleSheetsLeadStore: dùng googleapis + service account, đọc credential
 *   từ biến môi trường (GOOGLE_SERVICE_ACCOUNT_*). Không hardcode secret.
 * - SupabaseLeadStore: dùng @supabase/supabase-js với SUPABASE_URL /
 *   SUPABASE_SERVICE_ROLE_KEY từ .env.
 */
export interface LeadStore {
  save(lead: Lead): Promise<void>;
  list(): Promise<Lead[]>;
}

/**
 * TODO(production): Tích hợp thông báo Telegram cho chủ shop.
 * Triển khai hàm này bằng cách gọi Telegram Bot API:
 *   POST https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/sendMessage
 * với TELEGRAM_BOT_TOKEN và TELEGRAM_CHAT_ID đọc từ biến môi trường.
 * Gọi sau khi `store.save()` thành công, không chặn nếu gửi lỗi (log lại).
 */
export async function notifyOwner(_lead: Lead): Promise<void> {
  // Demo: chỉ log ra console thay cho tin nhắn Telegram/Zalo.
  console.log(`[${new Date().toISOString()}] Lead mới:`, _lead);
}

function newLeadId(): string {
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `LD-${Date.now().toString(36).toUpperCase()}-${suffix}`;
}

export function createLead(input: LeadInput): Lead {
  return { ...input, id: newLeadId(), createdAt: new Date().toISOString() };
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "leads.json");

/** Lưu lead vào data/leads.json (chỉ chạy server-side). */
class JsonFileLeadStore implements LeadStore {
  private pending: Promise<unknown> = Promise.resolve();

  async save(lead: Lead): Promise<void> {
    // Xếp hàng các thao tác ghi để tránh race condition.
    this.pending = this.pending.then(async () => {
      const leads = await this.readAll();
      leads.push(lead);
      await fs.mkdir(DATA_DIR, { recursive: true });
      await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), "utf-8");
    });
    await this.pending;
  }

  async list(): Promise<Lead[]> {
    return this.readAll();
  }

  private async readAll(): Promise<Lead[]> {
    try {
      const raw = await fs.readFile(DATA_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as Lead[]) : [];
    } catch {
      return [];
    }
  }
}

/** Fallback khi filesystem không ghi được (VD: môi trường read-only). */
class InMemoryLeadStore implements LeadStore {
  private leads: Lead[] = [];

  async save(lead: Lead): Promise<void> {
    this.leads.push(lead);
  }

  async list(): Promise<Lead[]> {
    return [...this.leads];
  }
}

let store: LeadStore | null = null;

async function isWritable(dir: string): Promise<boolean> {
  try {
    await fs.mkdir(dir, { recursive: true });
    await fs.access(dir, fs.constants.W_OK);
    return true;
  } catch {
    return false;
  }
}

/**
 * Trả về store đang dùng. Ưu tiên JSON file, fallback in-memory.
 * TODO(production): đọc LEAD_STORE từ env để chọn implementation
 * ("json" | "supabase" | "google-sheets").
 */
export async function getStore(): Promise<LeadStore> {
  if (!store) {
    store = (await isWritable(DATA_DIR))
      ? new JsonFileLeadStore()
      : new InMemoryLeadStore();
  }
  return store;
}
