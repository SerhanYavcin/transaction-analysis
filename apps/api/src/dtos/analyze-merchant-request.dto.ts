import { IsNotEmpty, IsObject, ValidateNested } from 'class-validator';
import { TransactionRequestDto } from './transaction-request.dto';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Analyze Merchant Request DTO
 * @description This DTO is used to analyze a merchant
 * @property {TransactionRequestDto} transaction - The transaction to analyze
 */
export class AnalyzeMerchantRequestDto {
  /**
   * The transaction to analyze
   * @type {TransactionRequestDto}
   */
  @ApiProperty({
    type: TransactionRequestDto,
    required: true,
    description: 'The transaction to analyze',
  })
  @ValidateNested()
  @IsNotEmpty()
  @IsObject({
    message: 'Merchant must be an object',
  })
  transaction: TransactionRequestDto;
}
