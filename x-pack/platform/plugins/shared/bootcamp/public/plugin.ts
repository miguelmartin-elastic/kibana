/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { Plugin } from '@kbn/core/public';
import type { CoreSetup, CoreStart } from '@kbn/core/public';
import type {
  BootcampPublicPluginSetupDeps,
  BootcampPlublicPluginStartDeps,
  BootcampPublicSetup,
  BootcampPublicStart,
} from './types';

export class BootcampPlugin
  implements
    Plugin<
      BootcampPublicSetup,
      BootcampPublicStart,
      BootcampPublicPluginSetupDeps,
      BootcampPlublicPluginStartDeps
    >
{
  // private readonly logger: Logger;

  // constructor(private readonly initContext: PluginInitializerContext) {
  //     this.logger = initContext.logger.get();
  // }

  setup(core: CoreSetup, plugins: BootcampPublicPluginSetupDeps): BootcampPublicSetup {
    return {};
  }

  start(core: CoreStart, plugins: BootcampPlublicPluginStartDeps): BootcampPublicStart {
    return {};
  }

  // stop() {}
}
