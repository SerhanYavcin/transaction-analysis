import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import {
  AnalyzeMerchantRequestDto,
  AnalyzePatternRequestDto,
  AnalyzePatternResponseDto,
} from 'src/dtos';
import { AnalyzeMerchantResponseDto } from 'src/dtos/analyze-merchant-response.dto';
import { AnalyzeService } from 'src/services';

/**
 * Analyze Controller
 * @description This controller is used to analyze transactions and patterns
 * @method analyzeMerchant - Analyze a merchant and return the normalized response
 * @method analyzePatterns - Analyze a set of transactions and return the patterns
 */
@Controller('analyze')
export class AnalyzeController {
  /**
   * Analyze Controller Constructor
   * @param service - The analyze service
   */
  constructor(private readonly service: AnalyzeService) {}

  /**
   * Analyze a merchant and return the normalized response
   * @param body - The analyze merchant request body
   * @returns The analyze merchant response
   */
  @Post('merchant')
  @ApiResponse({
    type: AnalyzeMerchantResponseDto,
    description: 'Analyze a merchant and return the normalized response',
    status: 200,
  })
  @HttpCode(HttpStatus.OK)
  analyzeMerchant(
    @Body() body: AnalyzeMerchantRequestDto,
  ): Promise<AnalyzeMerchantResponseDto> {
    return this.service.analyzeMerchant(body);
  }

  /**
   * Analyze a set of transactions and return the patterns
   * @param body - The analyze pattern request body
   * @returns The analyze pattern response
   */
  @Post('patterns')
  @ApiResponse({
    type: AnalyzePatternResponseDto,
    description: 'Analyze patterns and return the normalized response',
    status: 200,
  })
  @HttpCode(HttpStatus.OK)
  analyzePatterns(
    @Body() body: AnalyzePatternRequestDto,
  ): Promise<AnalyzePatternResponseDto> {
    return this.service.analyzePatterns(body);
  }
}
