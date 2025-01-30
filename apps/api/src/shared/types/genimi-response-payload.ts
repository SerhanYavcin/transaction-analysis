/**
 * GeminiResponsePayloadDto
 * @description Gemini response payload type for the transaction analytics
 * @property {string} merchant - The name of the merchant that the transaction was made to
 * @property {number} amount - The amount of the transaction
 * @property {string} category - The category of the transaction
 * @property {string} sub_category - The sub-category of the transaction
 * @property {number} confidence - The confidence of the transaction
 * @property {boolean} is_subscription - Whether the transaction is a subscription
 * @property {string[]} flags - The flags of the transaction
 * @property {string} frequency - The frequency of the transaction
 * @property {string} notes - The notes of the transaction
 * @property {string} next_expected - The next expected transaction date
 */
export type GeminiResponsePayload = {
  /**
   * The name of the merchant that the transaction was made to
   * @type {string}
   */
  merchant: string;
  /**
   * The amount of the transaction
   * @type {number}
   */
  amount: number;
  /**
   * The category of the transaction
   * @type {string}
   */
  sub_category: string;
  /**
   * The confidence of the transaction
   * @type {number}
   */
  confidence: number;
  /**
   * Whether the transaction is a subscription
   * @type {boolean}
   */
  is_subscription: boolean;
  /**
   * The flags of the transaction
   * @type {string[]}
   */
  flags: string[];
  /**
   * The frequency of the transaction
   * @type {string}
   */
  frequency: string;
  /**
   * The notes of the transaction
   * @type {string}
   */
  notes: string;
  /**
   * The next expected transaction date
   * @type {string}
   */
  next_expected: string;
};
