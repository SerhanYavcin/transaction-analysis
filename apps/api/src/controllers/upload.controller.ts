import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiResponse } from '@nestjs/swagger';
import { FileInterceptor, File } from '@nest-lab/fastify-multer';
import { UploadResponseDto } from 'src/dtos';
import { UploadService } from 'src/services';

/**
 * Upload Controller
 * @description This controller is used to upload a file and analyze it
 * @method upload - Upload a file and analyze it
 */
@Controller('upload')
export class UploadController {
  /**
   * Upload Controller Constructor
   * @param service - The upload service
   */
  constructor(private readonly service: UploadService) {}

  /**
   * Upload a file and analyze it
   * @param file - The file to upload
   * @returns The upload response
   */
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({
    type: UploadResponseDto,
  })
  @HttpCode(HttpStatus.OK)
  upload(@UploadedFile() file: File) {
    return this.service.run(file);
  }
}
