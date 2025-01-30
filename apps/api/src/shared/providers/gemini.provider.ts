import {
  GenerativeModel,
  GoogleGenerativeAI,
  SchemaType,
} from '@google/generative-ai';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GeminiConfig } from '../config/interfaces';
import { ConfigKey } from '../config/enums';
import { GeminiResponsePayload } from '../types';

@Injectable()
export class GeminiProvider {
  private readonly model: GenerativeModel;

  constructor(private readonly configService: ConfigService) {
    const config = this.configService.get<GeminiConfig>(ConfigKey.GEMINI);

    const client: GoogleGenerativeAI = new GoogleGenerativeAI(
      config?.apiKey as string,
    );

    this.model = client.getGenerativeModel({
      model: config?.model as string,
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.OBJECT,
            nullable: false,
            properties: {
              original: {
                type: SchemaType.STRING,
                description: 'The original transaction data',
                example: '2025-01-01, Amazon, $100.00',
                nullable: false,
              },
              merchant: {
                type: SchemaType.STRING,
                description:
                  'The name of the merchant that the transaction was made to',
                example: 'Amazon, Netflix, Uber',
              },
              amount: {
                type: SchemaType.NUMBER,
                description: 'The amount of the transaction',
                example: '100.00',
                nullable: false,
              },
              category: {
                type: SchemaType.STRING,
                description: 'The category of the transaction',
                example: 'Transportation, Entertainment, Shopping',
                nullable: false,
              },
              sub_category: {
                type: SchemaType.STRING,
                description: 'The sub-category of the transaction',
                example: 'Online Retail, Streaming Service, Ride Sharing',
                nullable: false,
              },
              confidence: {
                type: SchemaType.NUMBER,
                description:
                  'The confidence score of the transaction, e.g. 0.95',
                example: '0.95',
                nullable: false,
              },
              is_subscription: {
                type: SchemaType.BOOLEAN,
                description: 'Whether the transaction is a subscription',
                example: 'true, false',
                nullable: false,
              },
              flags: {
                description:
                  'The flags of the transaction. These are the flags that are used to classify the transaction into a category or sub-category. For example, if the transaction is an online purchase, the flag would be "online_purchase".',
                type: SchemaType.ARRAY,
                nullable: false,
                items: {
                  type: SchemaType.STRING,
                  nullable: false,
                  example: [
                    'online_purchase',
                    'marketplace',
                    'subscription',
                    'digital_service',
                    'transportation',
                    'service',
                  ],
                },
              },
              frequency: {
                type: SchemaType.STRING,
                description: 'The frequency of the transaction',
                example: 'Monthly, Weekly, Daily',
                nullable: true,
              },
              notes: {
                type: SchemaType.STRING,
                description: 'The notes of the transaction',
                example:
                  'Regular weekend activity, Subscription to a streaming service',
                nullable: false,
              },
              next_expected: {
                type: SchemaType.STRING,
                description: 'The next expected transaction date',
                example: '2025-02-01',
                nullable: true,
              },
            },
            required: [
              'original',
              'merchant',
              'amount',
              'category',
              'sub_category',
              'confidence',
              'is_subscription',
              'flags',
              'frequency',
              'notes',
              'next_expected',
            ],
          },
        },
      },
    });
  }

  async generate(prompt: string): Promise<GeminiResponsePayload[]> {
    const response = await this.model.generateContent(
      `Create financial transaction analytics for trader normalization and pattern detection. \r\n ${prompt}`,
    );
    return JSON.parse(response.response.text()) as GeminiResponsePayload[];
  }
}
