import { ApiProperty } from '@nestjs/swagger';

/**
 * Normalized Response DTO
 * @description This DTO is used to return the normalized response
 * @property {string} merchant - The merchant name
 * @property {string} category - The category of the merchant
 * @property {string} sub_category - The sub category of the merchant
 * @property {number} confidence - The confidence of the merchant
 * @property {boolean} is_subscription - Whether the merchant is a subscription
 * @property {Array<string>} flags - The flags of the merchant
 */
export class NormalizedResponseDto {
  /**
   * The merchant name
   * @type {string}
   */
  @ApiProperty({
    type: String,
    description: 'The merchant name',
  })
  merchant: string;

  /**
   * The category of the merchant
   * @type {string}
   */
  @ApiProperty({
    type: String,
    description: 'The category of the merchant',
  })
  category: string;

  /**
   * The sub category of the merchant
   * @type {string}
   */
  @ApiProperty({
    type: String,
    description: 'The sub category of the merchant',
  })
  sub_category: string;

  /**
   * The confidence of the merchant
   * @type {number}
   */
  @ApiProperty({
    type: Number,
    description: 'The confidence of the merchant',
  })
  confidence: number;

  /**
   * Whether the merchant is a subscription
   * @type {boolean}
   */
  @ApiProperty({
    type: Boolean,
    description: 'Whether the merchant is a subscription',
  })
  is_subscription: boolean;

  /**
   * The flags of the merchant
   * @type {Array<string>}
   */
  @ApiProperty({
    type: Array,
    description: 'The flags of the merchant',
  })
  flags: Array<string>;
}
