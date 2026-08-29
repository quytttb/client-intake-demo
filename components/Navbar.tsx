"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/bot-nhan-khach", label: "Bot Nhận Khách", icon: Bot },
  { href: "/quan-ly-don-hang", label: "Quản lý Đơn hàng", icon: ShoppingCart },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

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

        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-600 md:flex">
          {links.map((l) => {
            const isActive = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 transition ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <l.icon size={16} />
                {l.label}
              </Link>
            );
          })}
          {!isHome && (
            <Link
              href="/"
              className="ml-2 rounded-full border border-emerald-600 px-4 py-1.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition"
            >
              ← Home
            </Link>
          )}
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
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-2 py-2 ${
                  isHome ? "bg-emerald-50 text-emerald-700" : "hover:bg-slate-50"
                }`}
              >
                Home
              </Link>
            </li>
            {links.map((l) => {
              const isActive = pathname.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 rounded-lg px-2 py-2 ${
                      isActive ? "bg-emerald-50 text-emerald-700" : "hover:bg-slate-50"
                    }`}
                  >
                    <l.icon size={16} />
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}