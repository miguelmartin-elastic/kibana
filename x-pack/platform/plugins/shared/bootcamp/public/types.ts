/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { SpacesPluginSetup, SpacesPluginStart } from '@kbn/spaces-plugin/public';
import type {
  FieldsMetadataPublicSetup,
  FieldsMetadataPublicStart,
} from '@kbn/fields-metadata-plugin/public';

export interface BootcampPublicPluginSetupDeps {
  // Add dependencies here

  spaces: SpacesPluginSetup;
  fieldsMetadata?: FieldsMetadataPublicSetup;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BootcampPublicSetup {}

export interface BootcampPlublicPluginStartDeps {
  // Add dependencies here. Aligned with the BootcampServerPluginSetupDeps
  spaces: SpacesPluginStart;
  fieldsMetadata?: FieldsMetadataPublicStart;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BootcampPublicStart {}
