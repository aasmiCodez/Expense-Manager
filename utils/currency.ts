export const formatCurrency = (
  amount: number,
  currency: string = "INR",
): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatNumber = (amount: number): string => {
  return new Intl.NumberFormat("en-IN").format(amount);
};

export const parseAmount = (amount: string): number => {
  return parseFloat(amount.replace(/[^\d.-]/g, "")) || 0;
};

export const CURRENCY_SYMBOL = "₹";
export const DEFAULT_CURRENCY = "INR";

export const currencyOptions = [
  { value: "INR", label: "INR (₹)", symbol: "₹" },
  { value: "USD", label: "USD ($)", symbol: "$" },
  { value: "EUR", label: "EUR (€)", symbol: "€" },
  { value: "GBP", label: "GBP (£)", symbol: "£" },
  { value: "JPY", label: "JPY (¥)", symbol: "¥" },
];
