import { registerAs } from '@nestjs/config';
import { ConfigKey } from './enums';
import { AppConfig, GeminiConfig } from './interfaces';
import { z } from 'zod';

export const appConfig = registerAs(
  ConfigKey.APP,
  (): AppConfig => ({
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  }),
);

export const geminiConfig = registerAs(
  ConfigKey.GEMINI,
  (): GeminiConfig => ({
    apiKey: process.env.GEMINI_API_KEY || '',
    model: process.env.GEMINI_MODEL || '',
  }),
);

export const configurations = [appConfig, geminiConfig];

export const configValidationSchema = z.object({
  PORT: z.coerce.number().optional().default(3000),
  GEMINI_API_KEY: z.string(),
  GEMINI_MODEL: z.string(),
});
