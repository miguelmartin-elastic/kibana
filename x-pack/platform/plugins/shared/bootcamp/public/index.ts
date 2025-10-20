/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
export type {
  BootcampPublicSetup as BootcampServerSetup,
  BootcampPublicStart as BootcampServerStart,
} from './types';

export async function plugin() {
  const { BootcampPlugin } = await import('./plugin'); // <-- Lazy loading for importing the plugin only when it's required
  return new BootcampPlugin();
}
