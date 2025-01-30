export type NormalizedTransaction = {
  original: string;
  normalized: {
    merchant: string;
    category: string;
    sub_category: string;
    flags: Array<string>;
    confidence: number;
    is_subscription: boolean;
  };
};
