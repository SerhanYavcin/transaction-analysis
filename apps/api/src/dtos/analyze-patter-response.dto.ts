import { ApiProperty } from '@nestjs/swagger';
import { PatternResponseDto } from './pattern-response.dto';
import { Type } from 'class-transformer';
import { GeminiResponsePayload } from 'src/shared/types';

/**
 * Analyze Pattern Response DTO
 * @description This DTO is used to return the patterns
 * @property {PatternResponseDto[]} patterns - The patterns
 */
export class AnalyzePatternResponseDto {
  /**
   * The patterns
   * @type {PatternResponseDto[]}
   */
  @ApiProperty({
    type: PatternResponseDto,
    isArray: true,
    description: 'The patterns',
  })
  @Type(() => PatternResponseDto)
  patterns: PatternResponseDto[];

  constructor(data: GeminiResponsePayload[]) {
    const patterns: PatternResponseDto[] = data.map((item) => ({
      amount: item.amount,
      confidence: item.confidence,
      merchant: item.merchant,
      type: item.is_subscription ? 'subscription' : 'transaction',
      frequency: item.frequency,
      next_expected: item.next_expected,
      notes: item.notes,
    }));

    this.patterns = patterns;
  }
}
