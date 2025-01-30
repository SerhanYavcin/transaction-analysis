import { Module } from '@nestjs/common';
import {
  AnalyzeController,
  HealthController,
  UploadController,
} from './controllers';
import { AnalyzeService, UploadService } from './services';
import { SharedModule } from './shared/shared.module';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, TerminusModule, SharedModule],
  controllers: [UploadController, AnalyzeController, HealthController],
  providers: [UploadService, AnalyzeService],
})
export class AppModule {}
