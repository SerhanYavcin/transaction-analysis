import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

/**
 * Transaction Request DTO
 * @description This DTO is used to create a transaction
 * @property {string} description - The description of the transaction
 * @property {number} amount - The amount of the transaction
 * @property {string} date - The date of the transaction
 */
export class TransactionRequestDto {
  /**
   * The description of the transaction
   * @type {string}
   */
  @ApiProperty({
    type: String,
    required: true,
    description: 'The description of the transaction',
    example: 'Amazon.com',
  })
  @IsNotEmpty({
    message: 'Description is required',
  })
  @IsString({
    message: 'Description must be a string',
  })
  description: string;

  /**
   * The amount of the transaction
   * @type {number}
   */
  @ApiProperty({
    type: Number,
    required: true,
    description: 'The amount of the transaction',
    example: 100,
  })
  @IsNotEmpty({
    message: 'Amount is required',
  })
  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
      maxDecimalPlaces: 2,
    },
    {
      message: 'Amount must be a number',
    },
  )
  amount: number;

  /**
   * The date of the transaction
   * @type {string}
   */
  @ApiProperty({
    type: String,
    required: true,
    description: 'The date of the transaction',
    example: '2024-01-01',
  })
  @IsNotEmpty({
    message: 'Date is required',
  })
  @IsDateString()
  date: string;
}
