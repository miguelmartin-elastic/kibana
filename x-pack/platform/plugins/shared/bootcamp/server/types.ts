
import { SpacesPluginSetup, SpacesPluginStart } from '@kbn/spaces-plugin/server';
import { FieldsMetadataServerSetup, FieldsMetadataServerStart } from '@kbn/fields-metadata-plugin/server';

export interface BootcampServerPluginSetupDeps {
    // Add dependencies here

    spaces: SpacesPluginSetup;
    fieldsMetadata?: FieldsMetadataServerSetup
}

export interface BootcampServerSetup {
    // Expose services here
    bootcampLogService: {
        warn: (message: string) => void;
        error: (message: string) => void;
    }
}

export interface BootcampServerPluginStartDeps {
    // Add dependencies here. Aligned with the BootcampServerPluginSetupDeps
    spaces: SpacesPluginStart;
    fieldsMetadata?: FieldsMetadataServerStart;
}

export interface BootcampServerStart {
    bootcampLogService: {
        warn: (message: string) => void;
        error: (message: string) => void;
    }
}