import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configurations, configValidationSchema } from './config';
import { GeminiProvider } from './providers';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [...configurations],
      validate: (env) => configValidationSchema.parse(env),
      isGlobal: true,
    }),
  ],
  providers: [GeminiProvider],
  exports: [GeminiProvider],
})
export class SharedModule {}
