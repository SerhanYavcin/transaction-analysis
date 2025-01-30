import { IsNotEmpty, IsArray } from 'class-validator';
import { TransactionRequestDto } from './transaction-request.dto';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Analyze Pattern Request DTO
 * @description This DTO is used to analyze a pattern
 * @property {TransactionRequestDto[]} transactions - The transactions to analyze
 */
export class AnalyzePatternRequestDto {
  /**
   * The transactions to analyze
   * @type {TransactionRequestDto[]}
   */
  @ApiProperty({
    type: TransactionRequestDto,
    isArray: true,
    required: true,
    description: 'The transaction to analyze',
  })
  @IsNotEmpty()
  @IsArray()
  transactions: TransactionRequestDto[];
}
