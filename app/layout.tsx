import type { Metadata } from "next";
import Link from "next/link";
import { Bot, Mail, Send, MessageCircle, Code2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { CONTACT } from "@/lib/config";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Angelo — Automation & AI Engineer",
    template: "%s | Angelo Portfolio",
  },
  description:
    "Portfolio của Hải Quy (Angelo) — kỹ sư tự động hóa, chuyên n8n workflow, IoT ESP32, web scraping và quản trị hệ thống Linux.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
                  Angelo — Automation & AI
                </div>
                <p className="mt-2 max-w-sm text-sm text-slate-500">
                  Portfolio kỹ sư tự động hóa: n8n workflow, IoT ESP32, web scraping, quản trị Linux.
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
                    <a
                      href="https://github.com/quytttb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-emerald-600"
                    >
                      <Code2 size={16} className="text-emerald-600" />
                      GitHub: quytttb
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-center text-xs text-slate-400">
              © {new Date().getFullYear()} Angelo — Portfolio. Built with Next.js, deployed on GitHub Pages.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}