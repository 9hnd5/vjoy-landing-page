export const pageview = (url: string) => {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "undefined") return;

  window.gtag("config", `'${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'`, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent): void => {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "undefined") return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
