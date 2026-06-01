export type TgUser = {
  id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  photo_url?: string;
};

export function getTelegram(): any | null {
  if (typeof window === "undefined") return null;
  return (window as any).Telegram?.WebApp ?? null;
}

export function initTelegram() {
  const tg = getTelegram();
  if (!tg) return null;
  try {
    tg.ready();
    tg.expand();
    tg.setHeaderColor?.("#000000");
    tg.setBackgroundColor?.("#000000");
  } catch {}
  return tg;
}

export function getTgUser(): TgUser | null {
  const tg = getTelegram();
  const u = tg?.initDataUnsafe?.user;
  if (u && u.id) return u as TgUser;

  // Dev fallback so the preview works outside Telegram
  if (import.meta.env.DEV) {
    return { id: 1000001, username: "dev_user", first_name: "Dev", photo_url: "" };
  }
  return null;
}

export function getStartParam(): string | null {
  const tg = getTelegram();
  return tg?.initDataUnsafe?.start_param ?? null;
}

export function isInsideTelegram(): boolean {
  return !!getTelegram()?.initData;
}
