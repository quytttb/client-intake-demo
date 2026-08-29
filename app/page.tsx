import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Package,
  ShoppingCart,
  Database,
  BarChart3,
  Cpu,
  Wrench,
  Send,
  MessageCircle,
  Mail,
  Code2,
  MapPin,
} from "lucide-react";
import { CONTACT } from "@/lib/config";

export const metadata: Metadata = {
  title: "Angelo — Automation & AI Engineer",
  description:
    "Portfolio của Hải Quy (Angelo) — kỹ sư tự động hóa, chuyên n8n workflow, IoT ESP32, web scraping và quản trị hệ thống Linux.",
};

const solutions = [
  {
    icon: Bot,
    title: "Bot Nhận Khách",
    desc: "Bot tự động nhận thông tin khách hàng, phân loại nhu cầu và báo ngay cho chủ shop qua Telegram/Zalo 24/7.",
    tags: ["n8n", "Telegram Bot", "Zalo", "Google Sheets"],
    href: "/bot-nhan-khach",
    color: "emerald",
  },
  {
    icon: ShoppingCart,
    title: "Quản lý Đơn hàng Đa kênh",
    desc: "Tự động đồng bộ đơn từ Shopee, Lazada, TikTok Shop & Website. Chuẩn hóa dữ liệu, báo cáo hàng ngày.",
    tags: ["n8n", "Python", "REST API", "Telegram"],
    href: "/quan-ly-don-hang",
    color: "purple",
  },
];

const skills = [
  { icon: Cpu, label: "n8n Workflow Automation" },
  { icon: Database, label: "Web Scraping & Data Pipeline" },
  { icon: Wrench, label: "IoT ESP32 Development" },
  { icon: BarChart3, label: "Linux System Administration" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
              <MapPin size={14} />
              Việt Nam — Remote-first
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Angelo
            </h1>
            <p className="mt-2 text-xl text-emerald-400 font-medium">
              Automation & AI Engineer
            </p>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
              Xây dựng giải pháp tự động hóa cho doanh nghiệp nhỏ và freelancer.
              Từ bot nhận khách đến hệ thống quản lý đơn hàng đa kênh — tất cả
              chạy trên hạ tầng nhẹ, chi phí thấp.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {skills.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  <s.icon size={14} />
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Giải pháp
            </h2>
            <p className="mt-3 text-slate-600">
              Mỗi giải pháp được thiết kế để giải quyết một vấn đề thực tế —
              bấm vào để xem chi tiết và demo.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {solutions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${s.color}-100 text-${s.color}-700`}
                >
                  <s.icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-emerald-700">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[11px] text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-emerald-600 group-hover:gap-2 transition-all">
                  Xem chi tiết <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Về tôi</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Tôi là <strong>Hải Quy (Angelo)</strong> — kỹ sư tự động hóa với
            kinh nghiệm về n8n workflow, phát triển thiết bị IoT ESP32, web
            scraping và quản trị hệ thống Linux. Tôi xây dựng các giải pháp
            automation giúp doanh nghiệp nhỏ tiết kiệm thời gian và vận hành
            hiệu quả hơn.
          </p>
          <p className="mt-3 text-slate-500 text-sm">
            Hiện đang vận hành server Raspberry Pi 4, phát triển thiết bị IoT
            và tìm kiếm cơ hội freelance automation.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="https://github.com/quytttb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
            >
              <Code2 size={16} /> GitHub
            </a>
            <a
              href={CONTACT.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition"
            >
              <Send size={16} /> Liên hệ
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-slate-900 py-14 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Bắt đầu một dự án?
          </h2>
          <p className="mt-3 text-slate-300">
            Nhắn cho tôi qua Telegram hoặc Zalo — tư vấn miễn phí, không ràng buộc.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CONTACT.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 font-semibold text-white transition hover:bg-white/20 sm:w-auto"
            >
              <Send size={18} /> Telegram: {CONTACT.telegramHandle}
            </a>
            <a
              href={CONTACT.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 font-semibold text-white transition hover:bg-white/20 sm:w-auto"
            >
              <MessageCircle size={18} /> Zalo: {CONTACT.zaloLabel}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 font-semibold text-white transition hover:bg-white/20 sm:w-auto"
            >
              <Mail size={18} /> Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}