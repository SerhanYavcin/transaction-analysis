import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Pattern Response DTO
 * @description This DTO is used to return the pattern response
 * @property {string} type - The type of the pattern
 * @property {string} merchant - The merchant name
 * @property {number} amount - The amount of the pattern
 * @property {string} frequency - The frequency of the pattern
 * @property {number} confidence - The confidence of the pattern
 * @property {string} next_expected - The next expected date of the pattern
 * @property {string} notes - The notes of the pattern
 */
export class PatternResponseDto {
  /**
   * The type of the pattern
   * @type {string}
   */
  @ApiProperty({
    type: String,
    description: 'The type of the pattern',
    required: true,
  })
  type: string;

  /**
   * The merchant name
   * @type {string}
   */
  @ApiProperty({
    type: String,
    description: 'The merchant name',
    required: true,
  })
  merchant: string;

  /**
   * The amount of the pattern
   * @type {number}
   */
  @ApiProperty({
    type: Number,
    description: 'The amount of the pattern',
    required: true,
  })
  amount: number;

  /**
   * The frequency of the pattern
   * @type {string}
   */
  @ApiPropertyOptional({
    type: String,
    description: 'The frequency of the pattern',
  })
  frequency?: string;

  /**
   * The confidence of the pattern
   * @type {number}
   */
  @ApiProperty({
    type: Number,
    description: 'The confidence of the pattern',
    required: true,
  })
  confidence: number;

  /**
   * The next expected date of the pattern
   * @type {string}
   */
  @ApiPropertyOptional({
    type: String,
    description: 'The next expected date of the pattern',
  })
  next_expected?: string;

  /**
   * The notes of the pattern
   * @type {string}
   */
  @ApiPropertyOptional({
    type: String,
    description: 'The notes of the pattern',
  })
  notes?: string;
}
