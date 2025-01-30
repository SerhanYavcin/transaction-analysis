import { ApiProperty } from '@nestjs/swagger';
import { AnalyzeMerchantResponseDto } from './analyze-merchant-response.dto';
import { PatternResponseDto } from './pattern-response.dto';
import { Type } from 'class-transformer';
import { GeminiResponsePayload } from 'src/shared/types';

/**
 * Upload Response DTO
 * @description This DTO is used to return the upload response
 * @property {AnalyzeMerchantResponseDto[]} normalized_transactions - The normalized transactions
 * @property {PatternResponseDto[]} detected_patterns - The detected patterns
 */
export class UploadResponseDto {
  /**
   * The normalized transactions
   * @type {AnalyzeMerchantResponseDto[]}
   */
  @ApiProperty({
    type: AnalyzeMerchantResponseDto,
    isArray: true,
    description: 'The normalized transactions',
  })
  @Type(() => AnalyzeMerchantResponseDto)
  normalized_transactions: AnalyzeMerchantResponseDto[];

  /**
   * The detected patterns
   * @type {PatternResponseDto[]}
   */
  @ApiProperty({
    type: PatternResponseDto,
    isArray: true,
    description: 'The detected patterns',
  })
  @Type(() => PatternResponseDto)
  detected_patterns: PatternResponseDto[];

  constructor(data: GeminiResponsePayload[]) {
    const normalized_transactions: AnalyzeMerchantResponseDto[] = data.map(
      (item) => ({
        original: item.original,
        normalized: {
          merchant: item.merchant,
          category: item.category,
          sub_category: item.sub_category,
          confidence: item.confidence,
          is_subscription: item.is_subscription,
          flags: item.flags,
        },
      }),
    );

    const detected_patterns: PatternResponseDto[] = data.map((item) => ({
      type: item.is_subscription ? 'subscription' : 'transaction',
      merchant: item.merchant,
      amount: item.amount,
      confidence: item.confidence,
      next_expected: item.next_expected,
      notes: item.notes,
      frequency: item.frequency,
    }));

    this.normalized_transactions = normalized_transactions;
    this.detected_patterns = detected_patterns;
  }
}
