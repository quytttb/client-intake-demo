"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Bot hoạt động trên nền tảng nào?",
    a: "Trong demo này, bot chạy ngay trên website. Khi triển khai thật, bot có thể tích hợp vào Telegram, Zalo hoặc trang chat hiện có của bạn.",
  },
  {
    q: "Tôi không rành kỹ thuật, có dùng được không?",
    a: "Được. Chúng tôi cài đặt sẵn cho bạn, bạn chỉ cần nhận thông báo và liên hệ lại khách. Không cần cài app hay cấu hình phức tạp.",
  },
  {
    q: "Chi phí bao nhiêu?",
    a: "Chi phí phụ thuộc vào kênh tích hợp và tính năng bạn cần. Liên hệ để nhận báo giá phù hợp — demo hoàn toàn miễn phí.",
  },
  {
    q: "Dữ liệu khách của tôi được lưu ở đâu?",
    a: "Trong bản demo, dữ liệu chỉ lưu tạm trên chính trang này. Khi triển khai thật, dữ liệu nằm ở nơi bạn kiểm soát: Google Sheets, Supabase hoặc hệ thống do bạn chọn.",
  },
  {
    q: "Mất bao lâu để cài đặt?",
    a: "Với gói cơ bản, thường chỉ vài ngày là bot bắt đầu nhận khách cho bạn.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = useMemo(() => faqs, []);

  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Câu hỏi thường gặp
        </h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-slate-900 hover:bg-slate-50"
                  aria-expanded={open}
                >
                  {item.q}
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open && (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
