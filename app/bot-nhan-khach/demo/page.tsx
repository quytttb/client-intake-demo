import type { Metadata } from "next";
import DemoChat from "@/components/DemoChat";

export const metadata: Metadata = {
  title: "Demo — Bot Nhận Khách",
};

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-slate-900">Demo: Bot nhận khách</h1>
        <p className="mt-2 text-slate-600">
          Trải nghiệm thử như khách thật: bot sẽ hỏi thông tin, ghi nhận nhu cầu
          và lead sẽ hiện ngay ở{" "}
          <span className="font-semibold text-emerald-700">Góc nhìn chủ shop</span>.
        </p>
      </div>
      <DemoChat />
    </div>
  );
}
