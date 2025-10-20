import type { PluginInitializerContext, Logger, CoreSetup, CoreStart, Plugin } from "@kbn/core/server";
import type { BootcampServerPluginSetupDeps, BootcampServerPluginStartDeps, BootcampServerSetup, BootcampServerStart } from "./types";

export class BootcampPlugin implements Plugin<
    BootcampServerSetup,
    BootcampServerStart,
    BootcampServerPluginSetupDeps,
    BootcampServerPluginStartDeps
> {

    private readonly logger: Logger;

    constructor(private readonly initContext: PluginInitializerContext) {
        this.logger = initContext.logger.get();
    }


    setup(core: CoreSetup<BootcampServerPluginStartDeps, BootcampServerStart>, plugins: BootcampServerPluginSetupDeps): BootcampServerSetup {
        this.logger.info('Bootcamp plugin setup');

        const bootcampLogService = {
            warn: (message: string) => this.logger.warn(message),
            error: (message: string) => this.logger.error(message),
        }

        core.getStartServices()
            .then(([coreStart, pluginsStart, bootcampStart]) => {
                bootcampStart.bootcampLogService.warn('Bootcamp plugin setup');
                // pluginsStart.fieldsMetadata?.getClient()
            });

        return {
            bootcampLogService
        };
    }

    start(core: CoreStart, plugins: BootcampServerPluginStartDeps): BootcampServerStart {
        this.logger.info('Bootcamp plugin start');

        // if (plugins.fieldsMetadata) {
        //     plugins.fieldsMetadata.getClient();
        // }

        const bootcampLogService = {
            warn: (message: string) => this.logger.warn(message),
            error: (message: string) => this.logger.error(message),
        }

        return { bootcampLogService };
    }

    // stop() {}
}