import { Module } from '@nestjs/common';
import { StorageClient } from './storage.client';
import { ConfigurableModuleClass } from './storage.module-definition';

@Module({
  providers: [StorageClient],
  exports: [StorageClient],
})
export class StorageModule extends ConfigurableModuleClass {}
