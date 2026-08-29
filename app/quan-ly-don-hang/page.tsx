import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Zap,
  MessageSquare,
  Database,
  CheckCircle2,
  AlertTriangle,
  ShoppingCart,
  Cpu,
  Code,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quản lý Đơn hàng Đa kênh — n8n Automation | Angelo Portfolio",
  description:
    "Hệ thống tự động đồng bộ đơn hàng từ Shopee, Lazada, TikTok Shop & Website. Chuẩn hóa dữ liệu, cảnh báo Telegram, báo cáo hàng ngày.",
};

const architecture = [
  { num: 1, title: "Webhook Trigger", desc: "Nhận tín hiệu từ cron job hoặc webhook bên ngoài để kích hoạt quy trình đồng bộ." },
  { num: 2, title: "Read & Sign API", desc: "Đọc dữ liệu từ 4 kênh bán hàng (Shopee, Lazada, TikTok, Website), tạo chữ ký xác thực API." },
  { num: 3, title: "Normalize & Merge", desc: "Chuẩn hóa schema khác nhau của từng kênh về một định dạng chung, gộp vào kho dữ liệu tập trung." },
  { num: 4, title: "Telegram Alert & Report", desc: "Cảnh báo đơn quan trọng ngay lập tức, báo cáo tổng hợp hàng ngày tự động lúc 8h sáng." },
];

const techStack = [
  "n8n", "Python", "Telegram Bot API", "REST API",
  "HuggingFace Dataset", "Tailscale VPN", "Raspberry Pi 4",
  "Shopee Open API", "Lazada Open Platform", "TikTok Shop Partner API",
];

const workflows = [
  {
    title: "Order Sync Đa Kênh",
    desc: "Webhook → Read 4 data tables → Sign → Normalize → Merge → Upsert Warehouse → Telegram alerts",
    icon: Layers,
  },
  {
    title: "Báo Cáo Hàng Ngày",
    desc: "Schedule (8h sáng) → Read Warehouse → Aggregate → Gửi báo cáo Telegram",
    icon: BarChart3,
  },
  {
    title: "Error Handler",
    desc: "Error Trigger → Format → Telegram notification cho admin",
    icon: AlertTriangle,
  },
];

const stats = [
  { value: "4", label: "Kênh bán hàng" },
  { value: "3", label: "Workflow n8n" },
  { value: "160", label: "Đơn hàng demo" },
  { value: "24/7", label: "Tự động hóa" },
  { value: "~235M", label: "Doanh thu demo" },
  { value: "<10s", label: "Thời gian sync" },
];

export default function EcommercePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-purple-600 transition"
          >
            <ArrowLeft size={16} /> Về trang chủ
          </Link>

          <div className="mt-6 mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
              <ShoppingCart size={14} />
              Dự án n8n Automation
            </span>
            <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Hệ thống Quản lý Đơn hàng Đa kênh
            </h1>
            <p className="mt-3 text-lg text-slate-600">
              Tự động đồng bộ đơn hàng từ Shopee, Lazada, TikTok Shop &amp; Website —
              chuẩn hóa dữ liệu, báo cáo hàng ngày qua Telegram.
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-4 sm:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-purple-100 bg-white p-4 text-center shadow-sm">
                <p className="text-xl font-bold text-purple-600 sm:text-2xl">{s.value}</p>
                <p className="mt-1 text-[11px] text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Layers size={24} className="text-purple-600" />
                Kiến trúc hệ thống
              </h2>
              <div className="mt-6 space-y-4">
                {architecture.map((step) => (
                  <div key={step.num} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-600 text-sm font-bold text-white">
                      {step.num}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">{step.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Tech Stack */}
              <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-6">
                <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                  <Code size={18} className="text-purple-600" />
                  Công nghệ sử dụng
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-purple-200 bg-white px-3 py-1 text-xs font-medium text-purple-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Workflows */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6">
                <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                  <Zap size={18} className="text-amber-600" />
                  3 Workflow n8n
                </h3>
                <div className="mt-4 space-y-3">
                  {workflows.map((w) => (
                    <div key={w.title} className="flex items-start gap-3 rounded-lg bg-white p-3 border border-amber-100">
                      <w.icon size={18} className="mt-0.5 text-amber-600" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">{w.title}</p>
                        <p className="text-xs text-slate-500">{w.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Preview */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Báo cáo Telegram mẫu
          </h2>
          <p className="mt-2 text-center text-slate-600">
            Tự động gửi lúc 8:00 AM mỗi ngày — tổng hợp đơn hàng và doanh thu theo kênh
          </p>
          <div className="mt-6 mx-auto max-w-lg rounded-2xl border border-slate-200 bg-slate-900 p-5 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white">T</span>
              <span className="text-xs text-slate-400">Telegram Bot • Báo cáo tự động 8:00 AM</span>
            </div>
            <pre className="text-xs text-emerald-400 font-mono leading-relaxed whitespace-pre-wrap">
{`📊 BAO CAO DON HANG DA KENH
Tong don: 160 | Tong doanh thu: 234.778.000d

--- Theo kenh ---
▪ Shopee:       40 don, 58.254.000d
▪ Lazada:       40 don, 63.519.000d
▪ TikTok Shop:  40 don, 53.955.000d
▪ Website:      40 don, 59.050.000d

--- Top 3 san pham ---
▪ Máy làm bánh mì PETRUS 8855GS (15 sp)
▪ Combo Dày Dép Cho Khách (13 sp)
▪ áo croptop hot hit (13 sp)`}</pre>
            <p className="mt-2 text-[10px] text-slate-500 italic">
              * Dữ liệu demo — sản phẩm thật từ catalog Shopee (HuggingFace)
            </p>
          </div>
        </div>
      </section>

      {/* Status & Next Steps */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Trạng thái & Kế hoạch
            </h2>
            
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-semibold text-amber-800 flex items-center gap-2">
                <AlertTriangle size={18} />
                Demo hoàn chỉnh — Chờ API thật
              </h3>
              <p className="mt-2 text-sm text-amber-700">
                Kiến trúc và workflow đã hoàn thiện, dữ liệu demo sử dụng catalog sản phẩm 
                thật từ HuggingFace. Để đưa vào production, cần đăng ký API từ các sàn TMĐT.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <h3 className="font-semibold text-slate-900">Các bước tiếp theo:</h3>
              {[
                "Đăng ký Shopee Partner API, Lazada Open Platform, TikTok Shop Partner",
                "Thay thế n8n DataTable Read nodes bằng HTTP Request nodes gọi API thật",
                "Cấu hình authentication/API keys cho từng kênh trong n8n",
                "Thay seed data bằng scheduled API polling/cron jobs",
                "Thêm xử lý lỗi và retry logic cho API calls",
                "Dashboard web để xem đơn hàng real-time (tuỳ chọn)",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-slate-200 p-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-slate-300" />
                  <span className="text-sm text-slate-600">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              <ArrowLeft size={16} /> Về trang chủ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}