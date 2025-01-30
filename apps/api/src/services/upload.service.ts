import { File } from '@nest-lab/fastify-multer';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UploadResponseDto } from 'src/dtos';
import { GeminiProvider } from 'src/shared/providers';

/**
 * Upload Service
 * @description This service is used to upload a file and analyze it
 * @method run - Run the upload service
 */
@Injectable()
export class UploadService {
  constructor(private readonly geminiProvider: GeminiProvider) {}

  /**
   * Run the upload service
   * @param file - The file to upload
   * @returns The upload response
   */
  async run(file: File): Promise<UploadResponseDto> {
    this.validateMimeType(file);

    const data = this.csvToJson(file);

    const geminiResponse = await this.geminiProvider.generate(
      JSON.stringify(data),
    );

    return new UploadResponseDto(geminiResponse);
  }

  /**
   * Convert a CSV file to a JSON object
   * @param file - The file to convert
   * @returns The JSON object
   */
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

  /**
   * Validate the MIME type of the file
   * @param file - The file to validate
   */
  private validateMimeType(file: File) {
    const { mimetype } = file;

    if (mimetype !== 'text/csv') {
      throw new BadRequestException('Invalid file type');
    }
  }
}
