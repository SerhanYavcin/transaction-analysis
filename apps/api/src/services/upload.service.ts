import { File } from '@nest-lab/fastify-multer';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UploadResponseDto } from 'src/dtos';
import { GeminiProvider } from 'src/shared/providers';

@Injectable()
export class UploadService {
  constructor(private readonly geminiProvider: GeminiProvider) {}

  async run(file: File): Promise<UploadResponseDto> {
    this.validateMimeType(file);

    const data = this.csvToJson(file);

    const geminiResponse = await this.geminiProvider.generate(
      JSON.stringify(data),
    );

    return new UploadResponseDto(geminiResponse);
  }

  private csvToJson(file: File) {
    const csv = file.buffer?.toString('utf-8');

    const lines = csv?.split('\n');

    if (!lines) {
      throw new BadRequestException('Invalid file format');
    }

    const headers = lines[0].split(',');

    const data = lines.slice(1).map((line) => {
      const values = line.split(',');
      return headers.reduce<Record<string, string>>((acc, header, index) => {
        acc[header] = values[index];
        return acc;
      }, {});
    });

    return data;
  }

  private validateMimeType(file: File) {
    const { mimetype } = file;

    if (mimetype !== 'text/csv') {
      throw new BadRequestException('Invalid file type');
    }
  }
}
