import { ApiProperty } from '@nestjs/swagger';
import { AnalyzeMerchantResponseDto } from './analyze-merchant-response.dto';
import { PatternResponseDto } from './pattern-response.dto';
import { Type } from 'class-transformer';

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
}
