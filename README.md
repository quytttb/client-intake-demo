# Bot Nhận Khách — `client-intake-demo`

Demo dịch vụ **bot nhận khách & đặt lịch cho shop nhỏ/freelancer Việt Nam**.

Đây là một **landing page + demo chat** dùng để quảng cáo dịch vụ
automation/bot: nhận yêu cầu khách hàng, phân loại nhu cầu, lưu lead và gửi
thông báo cho chủ shop. Không phải sản phẩm SaaS hoàn chỉnh.

- Landing page `/`: giới thiệu vấn đề, quy trình 3 bước, lợi ích, bảng giá minh hoạ, FAQ.
- Trang demo `/demo`: chat widget mô phỏng bot nhận khách, gửi lead tới API và hiển thị panel **"Góc nhìn chủ shop"** theo thời gian thực trong phiên.
- API `POST /api/leads`: validate server-side, sinh id + createdAt, lưu lead.

## Yêu cầu môi trường

- Node.js >= 20 (khuyến nghị 22+)
- npm >= 10

## Cài đặt & chạy local

```bash
npm install
npm run dev        # http://localhost:3000
```

Các lệnh khác:

```bash
npm run build      # build production
npm start          # chạy bản build
npm run lint       # eslint
```

## Test luồng demo

1. Mở `http://localhost:3000`, bấm **"Xem demo"**.
2. Chat với bot: nhập họ tên → SĐT/Telegram/Zalo → chọn dịch vụ
   (Tư vấn / Đặt lịch / Báo giá / Khác) → mô tả nhu cầu.
3. Kiểm tra phần tóm tắt, bấm **"Gửi yêu cầu"**.
4. Thấy trạng thái thành công + **mã lead** (VD: `LD-xxx`).
5. Panel **"Góc nhìn chủ shop"** hiện lead vừa tạo (mặc định lưu ở `data/leads.json`).
6. Bấm **"Chạy lại demo"** để thử lại.

## Kiến trúc thư mục

```
app/
  layout.tsx            # layout chung + footer (tiếng Việt)
  page.tsx              # landing page /
  demo/page.tsx         # trang demo /demo
  api/leads/route.ts    # POST /api/leads (validate + lưu lead)
components/
  Navbar.tsx            # navbar responsive (đổi tên thương hiệu ở đây)
  Faq.tsx               # FAQ accordion
  DemoChat.tsx          # chat widget + panel chủ shop
lib/
  types.ts              # kiểu Lead / LeadInput / SERVICES
  lead-store.ts         # module lưu lead (LeadStore interface)
data/
  leads.json            # lưu lead demo (tự tạo, không commit)
.env.example            # ví dụ biến môi trường cho production
```

### Thiết kế lưu lead (dễ thay thế sau này)

`lib/lead-store.ts` định nghĩa interface `LeadStore` (`save`, `list`).
Demo dùng `JsonFileLeadStore` ghi vào `data/leads.json`; nếu filesystem
không ghi được sẽ tự động dùng `InMemoryLeadStore` (fallback, mất khi
restart server). API route chỉ gọi `getStore()`, nên khi chuyển sang
Google Sheets/Supabase **chỉ cần viết class mới implement `LeadStore`**
và sửa `getStore()` — không đụng API route.

> Lưu ý: trên một số nền tảng serverless read-only, lead chỉ nằm trong
> bộ nhớ của phiên hiện tại. Đây là giới hạn đã biết của bản demo.

## Hướng phát triển tiếp (production)

- **Google Sheets**: viết `GoogleSheetsLeadStore` dùng `googleapis` +
  service account; đọc credential từ `.env` (xem `.env.example`).
- **Telegram bot**: bổ sung `notifyOwner()` trong `lib/lead-store.ts`,
  gọi Telegram Bot API `sendMessage` với `TELEGRAM_BOT_TOKEN` +
  `TELEGRAM_CHAT_ID` từ `.env` (đã có TODO trong code).
- **Xác thực/admin**: thêm trang quản lý lead cho chủ shop, phân quyền.
- **Deploy**:
  - Docker: đóng gói image Next.js standalone, chạy cùng volume cho `data/`.
  - Cloudflare Tunnel: chạy `npm start` trên server, expose qua
    `cloudflared tunnel` để có HTTPS công khai cho khách xem demo.
- **Rate limit & chống spam** cho endpoint `/api/leads`.

## TODO hợp lý cho production

- [ ] Triển khai `GoogleSheetsLeadStore` / `SupabaseLeadStore`.
- [ ] Gửi thông báo Telegram/Zalo thật trong `notifyOwner()`.
- [ ] Rate limit cho API.
- [ ] Trang dashboard xem lịch sử lead (có phân quyền).
- [ ] Kết nối bot thật với kênh Telegram/Zalo/Facebook.
