/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { i18n } from '@kbn/i18n';
import type { SavedObject, SavedObjectsImportWarning } from '@kbn/core/server';

/**
 * Generates import warnings for rules that need to be enabled after import.
 * @param rulesSavedObjects - Array of rule saved objects being imported
 * @param useUnifiedRulesPage - Whether to use the unified rules page URL (default: false)
 * @returns Array of import warnings
 */
export function getImportWarnings(
  rulesSavedObjects: Array<SavedObject<unknown>>,
  useUnifiedRulesPage: boolean = false
): SavedObjectsImportWarning[] {
  if (rulesSavedObjects.length === 0) {
    return [];
  }
  const message = i18n.translate('xpack.alerting.savedObjects.onImportText', {
    defaultMessage:
      '{rulesSavedObjectsLength} {rulesSavedObjectsLength, plural, one {rule} other {rules}} must be enabled after the import.',
    values: {
      rulesSavedObjectsLength: rulesSavedObjects.length,
    },
  });

  const actionPath = useUnifiedRulesPage
    ? '/app/rules'
    : '/app/management/insightsAndAlerting/triggersActions/rules';

  return [
    {
      type: 'action_required',
      message,
      actionPath,
      buttonLabel: GO_TO_RULES_BUTTON_LABLE,
    } as SavedObjectsImportWarning,
  ];
}

export const GO_TO_RULES_BUTTON_LABLE = i18n.translate(
  'xpack.alerting.savedObjects.goToRulesButtonText',
  { defaultMessage: 'Go to rules' }
);
