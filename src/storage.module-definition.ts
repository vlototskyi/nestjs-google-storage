import { StorageOptions } from '@google-cloud/storage';
import { ConfigurableModuleBuilder } from '@nestjs/common';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<StorageOptions>()
    .setClassMethodName('forRoot')
    .build();
