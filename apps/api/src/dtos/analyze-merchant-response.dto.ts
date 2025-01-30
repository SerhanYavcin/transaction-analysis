import { Type } from 'class-transformer';
import { NormalizedResponseDto } from './normalized-response.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Analyze Merchant Response DTO
 * @description This DTO is used to return the normalized response
 * @property {NormalizedResponseDto} normalized - The normalized response
 * @property {string} original - The original merchant name
 */
export class AnalyzeMerchantResponseDto {
  /**
   * The normalized response
   * @type {NormalizedResponseDto}
   */
  @ApiProperty({
    type: NormalizedResponseDto,
    required: true,
    description: 'The normalized response',
  })
  @Type(() => NormalizedResponseDto)
  normalized: NormalizedResponseDto;

  /**
   * The original merchant name
   * @type {string}
   */
  @ApiPropertyOptional({
    type: String,
    description: 'The original merchant name',
  })
  original?: string;
}
