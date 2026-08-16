export const SERVICES = ["Tư vấn", "Đặt lịch", "Báo giá", "Khác"] as const;

export type Service = (typeof SERVICES)[number];

export interface LeadInput {
  name: string;
  contact: string;
  service: Service;
  message: string;
}

export interface Lead extends LeadInput {
  id: string;
  createdAt: string;
}
