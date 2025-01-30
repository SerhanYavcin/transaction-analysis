export type DetectedPattern = {
  type: string;
  merchant: string;
  amount: number;
  frequency: string;
  confidence: number;
  next_expected?: string;
  notes?: string;
};
