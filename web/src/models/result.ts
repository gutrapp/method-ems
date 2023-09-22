export type Result = {
  expired: boolean;
  testTaken: boolean;
  test: "MB" | "LI" | "SK" | "LO";
  key: string;
  seen: boolean;
  created_at: string;
  expires_at: string;
};
