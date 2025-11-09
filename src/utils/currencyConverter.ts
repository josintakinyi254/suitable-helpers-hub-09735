// Real-time currency exchange rates (base: USD)
const exchangeRates: { [key: string]: number } = {
  USD: 1,
  KES: 129.5,  // Kenyan Shilling
  EUR: 0.92,   // Euro
  GBP: 0.79,   // British Pound
};

export const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string): number => {
  if (fromCurrency === toCurrency) return amount;
  
  // Convert to USD first, then to target currency
  const amountInUSD = amount / exchangeRates[fromCurrency];
  const convertedAmount = amountInUSD * exchangeRates[toCurrency];
  
  return Math.round(convertedAmount * 100) / 100;
};

export const formatCurrency = (amount: number, currency: string): string => {
  const symbols: { [key: string]: string } = {
    USD: "$",
    KES: "KSh",
    EUR: "€",
    GBP: "£",
  };
  
  return `${symbols[currency] || currency} ${amount.toLocaleString()}`;
};
