import { Inject, Injectable } from '@nestjs/common';
import { File, Storage, StorageOptions } from '@google-cloud/storage';
import { MODULE_OPTIONS_TOKEN } from './storage.module-definition';

@Injectable()
export class StorageClient extends Storage {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) options: StorageOptions) {
    super(options);
  }

  createFile(bucketName: string, filePath: string) {
    const bucket = this.bucket(bucketName);
    const file = bucket.file(filePath);
    return file;
  }

  async removeFile(bucketName: string, filePath: string) {
    const bucket = this.bucket(bucketName);
    const file = bucket.file(filePath);
    await file.delete();
  }

  async makePublic(file: File) {
    const publicFile = await file.makePublic();
    return `https://storage.googleapis.com/${publicFile[0].bucket}/${publicFile[0].object}`;
  }
}
