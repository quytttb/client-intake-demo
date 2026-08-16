import type { Metadata } from "next";
import Link from "next/link";
import { Bot, Mail, Send, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { CONTACT } from "@/lib/config";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bot Nhận Khách - Không bỏ sót khách hàng",
  description:
    "Bot nhận thông tin khách, phân loại nhu cầu và báo ngay cho chủ shop. Demo dịch vụ automation cho shop nhỏ & freelancer Việt Nam.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
              <div>
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                    <Bot size={18} />
                  </span>
                  Bot Nhận Khách
                </div>
                <p className="mt-2 max-w-sm text-sm text-slate-500">
                  Demo dịch vụ automation: nhận yêu cầu khách hàng, phân loại
                  nhu cầu, lưu lead và báo ngay cho chủ shop.
                </p>
              </div>
              <div className="text-sm text-slate-600">
                <p className="mb-2 font-medium text-slate-900">Liên hệ</p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href={CONTACT.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-emerald-600"
                    >
                      <Send size={16} className="text-emerald-600" />
                      Telegram: {CONTACT.telegramHandle}
                    </a>
                  </li>
                  <li>
                    <a
                      href={CONTACT.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-emerald-600"
                    >
                      <MessageCircle size={16} className="text-emerald-600" />
                      Zalo: {CONTACT.zaloLabel}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="flex items-center gap-2 hover:text-emerald-600"
                    >
                      <Mail size={16} className="text-emerald-600" />
                      Email: {CONTACT.email}
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/demo"
                      className="font-medium text-emerald-600 hover:underline"
                    >
                      Xem demo ngay →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-center text-xs text-slate-400">
              © {new Date().getFullYear()} Bot Nhận Khách — bản demo minh hoạ.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
