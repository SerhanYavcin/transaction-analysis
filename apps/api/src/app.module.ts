import { Module } from '@nestjs/common';
import { AnalyzeController, UploadController } from './controllers';
import { AnalyzeService, UploadService } from './services';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [UploadController, AnalyzeController],
  providers: [UploadService, AnalyzeService],
})
export class AppModule {}
