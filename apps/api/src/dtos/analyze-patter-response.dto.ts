import { ApiProperty } from '@nestjs/swagger';
import { PatternResponseDto } from './pattern-response.dto';
import { Type } from 'class-transformer';

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
}
