"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/#van-de", label: "Vấn đề" },
  { href: "/#quy-trinh", label: "Quy trình" },
  { href: "/#loi-ich", label: "Lợi ích" },
  { href: "/#du-an", label: "Dự án" },
  { href: "/#bang-gia", label: "Bảng giá" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onLanding = pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
            <Bot size={20} />
          </span>
          <span>
            Portfolio
            <span className="block text-[11px] font-normal leading-3 text-slate-400">
              Automation & AI
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden hover:text-emerald-600 lg:inline">
              {l.label}
            </a>
          ))}
          <Link
            href="/demo"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              onLanding
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "border border-emerald-600 text-emerald-700 hover:bg-emerald-50"
            }`}
          >
            {onLanding ? "Xem demo" : "← Về trang chủ"}
          </Link>
        </nav>

        <button
          className="rounded-lg p-2 text-slate-600 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Mở menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          <ul className="space-y-1 text-sm font-medium text-slate-700">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-2 hover:bg-slate-50">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/demo"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-emerald-600 px-2 py-2 text-center font-semibold text-white"
              >
                Xem demo
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
