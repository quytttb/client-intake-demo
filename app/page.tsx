import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  Bell,
  Clock,
  Inbox,
  NotebookPen,
  ClipboardList,
  Timer,
  Eye,
  CheckCircle2,
  Sparkles,
  Send,
  MessageCircle,
} from "lucide-react";
import Faq from "@/components/Faq";
import { CONTACT } from "@/lib/config";

export const metadata: Metadata = {
  title: "Bot Nhận Khách — Không bỏ sót khách hàng",
};

const problems = [
  {
    icon: Clock,
    title: "Khách nhắn ngoài giờ",
    desc: "11 giờ đêm khách hỏi giá, bạn đang ngủ. Sáng dậy thì khách đã đi nơi khác.",
  },
  {
    icon: Inbox,
    title: "Bỏ sót inbox",
    desc: "Tin nhắn dồn dập, trả lời không kịp. Khách chờ lâu là mất đơn.",
  },
  {
    icon: NotebookPen,
    title: "Ghi chép thủ công",
    desc: "Sổ sách, file Excel rời rạc. Không nhớ ai đã hỏi gì, đã báo giá chưa.",
  },
];

const steps = [
  {
    icon: MessageSquare,
    step: "Bước 1",
    title: "Hỏi thông tin khách",
    desc: "Bot tự chào hỏi, xin tên và số điện thoại/Telegram/Zalo của khách với giọng thân thiện.",
  },
  {
    icon: ClipboardList,
    step: "Bước 2",
    title: "Ghi nhận yêu cầu",
    desc: "Khách chọn nhu cầu: tư vấn, đặt lịch hay báo giá. Bot tóm tắt lại trước khi lưu.",
  },
  {
    icon: Bell,
    step: "Bước 3",
    title: "Báo ngay cho chủ shop",
    desc: "Thông tin được lưu gọn gàng và gửi thông báo cho bạn qua Telegram/Zalo ngay lập tức.",
  },
];

const benefits = [
  {
    icon: Timer,
    title: "Tiết kiệm thời gian",
    desc: "Không cần trực tin nhắn cả ngày. Bot nhận khách 24/7, bạn chỉ tập trung chốt đơn.",
  },
  {
    icon: CheckCircle2,
    title: "Không bỏ sót lead",
    desc: "Mọi khách nhắn đến đều được ghi nhận đầy đủ, kể cả nửa đêm hay ngày lễ.",
  },
  {
    icon: Eye,
    title: "Dễ theo dõi",
    desc: "Toàn bộ yêu cầu nằm một chỗ: ai, liên hệ gì, cần gì, lúc nào — rõ ràng, tra cứu nhanh.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <Sparkles size={14} />
              Automation cho shop nhỏ & freelancer Việt Nam
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Không bỏ sót khách hàng,{" "}
              <span className="text-emerald-600">kể cả khi bạn đang bận</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Bot nhận thông tin khách, phân loại nhu cầu và báo ngay cho bạn.
              Khách nhắn lúc nào cũng được tiếp nhận — bạn rảnh tay lo việc khác.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 sm:w-auto"
              >
                Xem demo <ArrowRight size={18} />
              </Link>
              <a
                href={CONTACT.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-600 bg-white px-7 py-3.5 text-base font-semibold text-emerald-700 transition hover:bg-emerald-50 sm:w-auto"
              >
                <Send size={18} /> Nhắn Telegram tư vấn
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Demo 30 giây, không cần đăng ký • Tư vấn miễn phí qua Zalo/Telegram.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white py-4 text-center shadow-sm">
              <div className="px-2">
                <p className="text-xl font-bold text-emerald-600 sm:text-2xl">24/7</p>
                <p className="mt-1 text-xs text-slate-500">Bot trực khách cả đêm</p>
              </div>
              <div className="px-2">
                <p className="text-xl font-bold text-emerald-600 sm:text-2xl">&lt;30s</p>
                <p className="mt-1 text-xs text-slate-500">Tiếp nhận mỗi khách</p>
              </div>
              <div className="px-2">
                <p className="text-xl font-bold text-emerald-600 sm:text-2xl">0</p>
                <p className="mt-1 text-xs text-slate-500">Lead bị bỏ sót</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="van-de" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Bạn có đang gặp những vấn đề này?
            </h2>
            <p className="mt-3 text-slate-600">
              Đây là lý do nhiều shop nhỏ mất khách mỗi ngày mà không biết.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {problems.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quy-trinh" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Bot xử lý như thế nào?
            </h2>
            <p className="mt-3 text-slate-600">
              3 bước đơn giản — khách được chăm sóc, bạn được thông báo.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  {s.step}
                </span>
                <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Chạy thử demo ngay <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="loi-ich" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Lợi ích cho bạn</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-emerald-50 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <b.icon size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bang-gia" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Bảng giá minh hoạ</h2>
            <p className="mt-3 text-slate-600">
              Mỗi shop một nhu cầu khác nhau — liên hệ để nhận báo giá phù hợp.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-lg font-semibold text-slate-900">Gói Khởi động</h3>
              <p className="mt-2 text-sm text-slate-600">
                Phù hợp shop/freelancer mới bắt đầu: bot nhận khách cơ bản, lưu
                lead, thông báo Telegram.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {[
                  "Bot nhận thông tin khách 24/7",
                  "Phân loại nhu cầu tự động",
                  "Thông báo lead mới cho chủ shop",
                  "Thiết lập nhanh trong vài ngày",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <p className="font-semibold text-emerald-700">
                  Liên hệ để nhận báo giá phù hợp
                </p>
                <a
                  href="#lien-he"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  Nhận tư vấn
                </a>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl border-2 border-emerald-600 bg-white p-7 shadow-lg shadow-emerald-600/10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Gói Theo yêu cầu</h3>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                  Linh hoạt
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Tích hợp theo đúng quy trình của bạn: Zalo/Telegram/Facebook,
                Google Sheets, lịch hẹn, và hơn thế.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {[
                  "Mọi tính năng gói Khởi động",
                  "Tích hợp kênh chat của bạn",
                  "Đồng bộ Google Sheets / CRM",
                  "Tùy chỉnh kịch bản theo yêu cầu",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <p className="font-semibold text-emerald-700">
                  Liên hệ để nhận báo giá phù hợp
                </p>
                <a
                  href="#lien-he"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Nhận tư vấn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <section id="lien-he" className="bg-slate-900 py-14 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Sẵn sàng không bỏ sót khách?
          </h2>
          <p className="mt-3 text-slate-300">
            Xem demo trước, thích thì nhắn cho chúng tôi — tư vấn miễn phí,
            không ràng buộc.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3 font-semibold text-white transition hover:bg-emerald-400 sm:w-auto"
            >
              Xem demo ngay <ArrowRight size={18} />
            </Link>
            <a
              href={CONTACT.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 font-semibold text-white transition hover:bg-white/20 sm:w-auto"
            >
              <Send size={18} /> Telegram
            </a>
            <a
              href={CONTACT.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 font-semibold text-white transition hover:bg-white/20 sm:w-auto"
            >
              <MessageCircle size={18} /> Zalo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
