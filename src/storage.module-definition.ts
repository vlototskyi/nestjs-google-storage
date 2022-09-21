import { StorageOptions } from '@google-cloud/storage';
import { ConfigurableModuleBuilder } from '@nestjs/common';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<StorageOptions>()
    .setExtras<{ isGlobal?: boolean }>(
      { isGlobal: true },
      (definition, extras) => {
        console.log('extras', extras);
        return {
          ...definition,
          global: extras.isGlobal !== undefined ? extras.isGlobal : true,
        };
      },
    )
    .setClassMethodName('forRoot')
    .build();
