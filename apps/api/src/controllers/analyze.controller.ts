import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import {
  AnalyzeMerchantRequestDto,
  AnalyzePatternRequestDto,
  AnalyzePatternResponseDto,
} from 'src/dtos';
import { AnalyzeMerchantResponseDto } from 'src/dtos/analyze-merchant-response.dto';
import { AnalyzeService } from 'src/services';

@Controller('analyze')
export class AnalyzeController {
  constructor(private readonly service: AnalyzeService) {}

  @Post('merchant')
  @ApiResponse({
    type: AnalyzeMerchantResponseDto,
    description: 'Analyze a merchant and return the normalized response',
    status: 200,
  })
  @HttpCode(HttpStatus.OK)
  analyzeMerchant(@Body() body: AnalyzeMerchantRequestDto) {}

  @Post('patterns')
  @ApiResponse({
    type: AnalyzePatternResponseDto,
    description: 'Analyze patterns and return the normalized response',
    status: 200,
  })
  @HttpCode(HttpStatus.OK)
  analyzePatterns(@Body() body: AnalyzePatternRequestDto) {}
}
