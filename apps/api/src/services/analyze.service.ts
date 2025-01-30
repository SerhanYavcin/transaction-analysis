import { Injectable } from '@nestjs/common';
import {
  AnalyzeMerchantRequestDto,
  AnalyzePatternRequestDto,
  AnalyzePatternResponseDto,
} from 'src/dtos';
import { AnalyzeMerchantResponseDto } from 'src/dtos/analyze-merchant-response.dto';
import { GeminiProvider } from 'src/shared/providers';

/**
 * Analyze Service
 * @description This service is used to analyze transactions and patterns
 * @method analyzeMerchant - Analyze a merchant and return the normalized response
 * @method analyzePatterns - Analyze a set of transactions and return the patterns
 */
@Injectable()
export class AnalyzeService {
  /**
   * Analyze Service Constructor
   * @param geminiProvider - The Gemini provider
   */
  constructor(private readonly geminiProvider: GeminiProvider) {}

  /**
   * Analyze a merchant and return the normalized response
   * @param body - The analyze merchant request body
   * @returns The analyze merchant response
   */
  async analyzeMerchant(body: AnalyzeMerchantRequestDto) {
    const geminiResponse = await this.geminiProvider.generate(
      JSON.stringify(body.transaction),
    );
    return new AnalyzeMerchantResponseDto(geminiResponse);
  }

  /**
   * Analyze a set of transactions and return the patterns
   * @param body - The analyze pattern request body
   * @returns The analyze pattern response
   */
  async analyzePatterns(body: AnalyzePatternRequestDto) {
    const geminiResponse = await this.geminiProvider.generate(
      JSON.stringify(body.transactions),
    );
    return new AnalyzePatternResponseDto(geminiResponse);
  }
}
