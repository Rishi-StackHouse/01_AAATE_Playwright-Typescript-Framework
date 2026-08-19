import 'dotenv/config';

/*1.*/
export type EnvName = 'dev' | 'qa' | 'prod';
/*All the configuration will be done in form of  nested object*/

/* 2.Defining interface for Each specific stack to hold necessary details*/
export interface WebCredConfig {
    url: string;
    username?: string;
    password?: string;
    browser?: 'chromium' | 'firefox' | 'webkit';
    headless?: boolean;
    loginRequired?: boolean; //set false for apps ave no login , #url authentication
}

export interface DbCredConfig {
    server: string;
    user: string;
    password: string;
}

export interface ApiCredConfig {
    baseUrl: string;
    timeout: number;
    authType: 'bearer' | 'basic' | 'none';
}

export interface SmtpCredConfig {
    server: string;
}

/* 1.Predefining Stack Configuration with interface for configuring each stack details */
export interface AppConfig {
    web: WebCredConfig;
    db?: DbCredConfig;
    api?: ApiCredConfig;
    smtp?: SmtpCredConfig;
}

/* Object */
export interface AppsDeclaration {
    apps: Record<string, AppConfig>;
}

//Final Object with all apps configuration accross all the environments
export const environments: Record<EnvName, AppsDeclaration> = {

    // ════════════════════  DEV  ════════════════════
    dev: {
        apps: {
            auto: {
                web: {
                    url: process.env.DEV_AUTO_WEB_URL!,
                    browser: 'chromium',
                    headless: false,
                    loginRequired: false,
                },
                db: {
                    server: process.env.DEV_AUTO_DB_SERVER!,
                    user: process.env.DEV_AUTO_DB_USER!,
                    password: process.env.DEV_AUTO_DB_PASSWORD!,
                },
                api: {
                    baseUrl: process.env.DEV_AUTO_API_BASEURL!,
                    timeout: 30000,
                    authType: 'bearer',
                },
                smtp: {
                    server: process.env.DEV_AUTO_SMTP_SERVER!,
                },
            },
            rshet: {
                web: {
                    url: process.env.DEV_RSHET_WEB_URL!,
                    browser: 'chromium',
                    headless: false,
                    loginRequired: false,
                },
                db: {
                    server: process.env.DEV_RSHET_DB_SERVER!,
                    user: process.env.DEV_RSHET_DB_USER!,
                    password: process.env.DEV_RSHET_DB_PASSWORD!,
                },
                api: {
                    baseUrl: process.env.DEV_RSHET_API_BASEURL!,
                    timeout: 30000,
                    authType: 'bearer',
                },
                smtp: {
                    server: process.env.DEV_RSHET_SMTP_SERVER!,
                },
            },
            orge: {
                web: {
                    url: process.env.DEV_ORGE_WEB_URL!,
                    username: process.env.DEV_ORGE_WEB_USERNAME!,
                    password: process.env.DEV_ORGE_WEB_PASSWORD!,
                    browser: 'chromium',
                    headless: false,
                    loginRequired: true,
                },
                db: {
                    server: process.env.DEV_ORGE_DB_SERVER!,
                    user: process.env.DEV_ORGE_DB_USER!,
                    password: process.env.DEV_ORGE_DB_PASSWORD!,
                },
                api: {
                    baseUrl: process.env.DEV_ORGE_API_BASEURL!,
                    timeout: 30000,
                    authType: 'bearer',
                },
                smtp: {
                    server: process.env.DEV_ORGE_SMTP_SERVER!,
                },
            },
            facets: {
                web: {
                    url: process.env.DEV_FACETS_WEB_URL!,
                    username: process.env.DEV_FACETS_WEB_USERNAME!,
                    password: process.env.DEV_FACETS_WEB_PASSWORD!,
                    browser: 'chromium',
                    headless: false,
                    loginRequired: true,
                },
                db: {
                    server: process.env.DEV_FACETS_DB_SERVER!,
                    user: process.env.DEV_FACETS_DB_USER!,
                    password: process.env.DEV_FACETS_DB_PASSWORD!,
                },
                api: {
                    baseUrl: process.env.DEV_FACETS_API_BASEURL!,
                    timeout: 30000,
                    authType: 'bearer',
                },
                smtp: {
                    server: process.env.DEV_FACETS_SMTP_SERVER!,
                },
            },
        },
    },

    // ════════════════════  QA  ════════════════════
    qa: {
        apps: {
            auto: {
                web: {
                    url: process.env.QA_AUTO_WEB_URL!,
                    browser: 'chromium',
                    headless: false,
                    loginRequired: false,
                },
                db: {
                    server: process.env.QA_AUTO_DB_SERVER!,
                    user: process.env.QA_AUTO_DB_USER!,
                    password: process.env.QA_AUTO_DB_PASSWORD!,
                },
                api: {
                    baseUrl: process.env.QA_AUTO_API_BASEURL!,
                    timeout: 30000,
                    authType: 'bearer',
                },
                smtp: {
                    server: process.env.QA_AUTO_SMTP_SERVER!,
                },
            },
            rshet: {
                web: {
                    url: process.env.QA_RSHET_WEB_URL!,
                    browser: 'chromium',
                    headless: false,
                    loginRequired: false,
                },
                db: {
                    server: process.env.QA_RSHET_DB_SERVER!,
                    user: process.env.QA_RSHET_DB_USER!,
                    password: process.env.QA_RSHET_DB_PASSWORD!,
                },
                api: {
                    baseUrl: process.env.QA_RSHET_API_BASEURL!,
                    timeout: 30000,
                    authType: 'bearer',
                },
                smtp: {
                    server: process.env.QA_RSHET_SMTP_SERVER!,
                },
            },
            orge: {
                web: {
                    url: process.env.QA_ORGE_WEB_URL!,
                    username: process.env.QA_ORGE_WEB_USERNAME!,
                    password: process.env.QA_ORGE_WEB_PASSWORD!,
                    browser: 'chromium',
                    headless: false,
                    loginRequired: true,
                },
                db: {
                    server: process.env.QA_ORGE_DB_SERVER!,
                    user: process.env.QA_ORGE_DB_USER!,
                    password: process.env.QA_ORGE_DB_PASSWORD!,
                },
                api: {
                    baseUrl: process.env.QA_ORGE_API_BASEURL!,
                    timeout: 30000,
                    authType: 'bearer',
                },
                smtp: {
                    server: process.env.QA_ORGE_SMTP_SERVER!,
                },
            },
            facets: {
                web: {
                    url: process.env.QA_FACETS_WEB_URL!,
                    username: process.env.QA_FACETS_WEB_USERNAME!,
                    password: process.env.QA_FACETS_WEB_PASSWORD!,
                    browser: 'chromium',
                    headless: false,
                    loginRequired: true,
                },
                db: {
                    server: process.env.QA_FACETS_DB_SERVER!,
                    user: process.env.QA_FACETS_DB_USER!,
                    password: process.env.QA_FACETS_DB_PASSWORD!,
                },
                api: {
                    baseUrl: process.env.QA_FACETS_API_BASEURL!,
                    timeout: 30000,
                    authType: 'bearer',
                },
                smtp: {
                    server: process.env.QA_FACETS_SMTP_SERVER!,
                },
            },
        },
    },

    // ════════════════════  PROD  ════════════════════
    prod: {
        apps: {
            auto: {
                web: {
                    url: process.env.PROD_AUTO_WEB_URL!,
                    browser: 'chromium',
                    headless: true,
                    loginRequired: false,
                },
                db: {
                    server: process.env.PROD_AUTO_DB_SERVER!,
                    user: process.env.PROD_AUTO_DB_USER!,
                    password: process.env.PROD_AUTO_DB_PASSWORD!,
                },
                api: {
                    baseUrl: process.env.PROD_AUTO_API_BASEURL!,
                    timeout: 30000,
                    authType: 'bearer',
                },
                smtp: {
                    server: process.env.PROD_AUTO_SMTP_SERVER!,
                },
            },
            rshet: {
                web: {
                    url: process.env.PROD_RSHET_WEB_URL!,
                    browser: 'chromium',
                    headless: true,
                    loginRequired: false,
                },
                db: {
                    server: process.env.PROD_RSHET_DB_SERVER!,
                    user: process.env.PROD_RSHET_DB_USER!,
                    password: process.env.PROD_RSHET_DB_PASSWORD!,
                },
                api: {
                    baseUrl: process.env.PROD_RSHET_API_BASEURL!,
                    timeout: 30000,
                    authType: 'bearer',
                },
                smtp: {
                    server: process.env.PROD_RSHET_SMTP_SERVER!,
                },
            },
            orge: {
                web: {
                    url: process.env.PROD_ORGE_WEB_URL!,
                    username: process.env.PROD_ORGE_WEB_USERNAME!,
                    password: process.env.PROD_ORGE_WEB_PASSWORD!,
                    browser: 'chromium',
                    headless: true,
                    loginRequired: true,
                },
                db: {
                    server: process.env.PROD_ORGE_DB_SERVER!,
                    user: process.env.PROD_ORGE_DB_USER!,
                    password: process.env.PROD_ORGE_DB_PASSWORD!,
                },
                api: {
                    baseUrl: process.env.PROD_ORGE_API_BASEURL!,
                    timeout: 30000,
                    authType: 'bearer',
                },
                smtp: {
                    server: process.env.PROD_ORGE_SMTP_SERVER!,
                },
            },
            facets: {
                web: {
                    url: process.env.PROD_FACETS_WEB_URL!,
                    username: process.env.PROD_FACETS_WEB_USERNAME!,
                    password: process.env.PROD_FACETS_WEB_PASSWORD!,
                    browser: 'chromium',
                    headless: true,
                    loginRequired: true,
                },
                db: {
                    server: process.env.PROD_FACETS_DB_SERVER!,
                    user: process.env.PROD_FACETS_DB_USER!,
                    password: process.env.PROD_FACETS_DB_PASSWORD!,
                },
                api: {
                    baseUrl: process.env.PROD_FACETS_API_BASEURL!,
                    timeout: 30000,
                    authType: 'bearer',
                },
                smtp: {
                    server: process.env.PROD_FACETS_SMTP_SERVER!,
                },
            },
        },
    },
};


export const ACTIVE_ENV: EnvName = (process.env.TEST_ENV as EnvName) || 'qa';
//const activeEnv = environments[ACTIVE_ENV];

/**
 *   import { getAppConfig } from '../../Config/Config';
 *   const auto = getAppConfig('auto');
 *   auto.web.url           // → '...'
 *   auto.web.loginRequired // → false
 */
export function getAppConfig(appKey: string): AppConfig {
    const key = appKey.toLowerCase();
    const app = environments[ACTIVE_ENV].apps[key];
    if (!app) {
        throw new Error(
            `App "${appKey}" not found in Config.ts for environment "${ACTIVE_ENV}". ` +
            `Available apps: ${Object.keys(environments[ACTIVE_ENV].apps).join(', ')}`
        );
    }
    return app;
}

/* Apps access finl values of creds*/
export const autoConfig = getAppConfig('auto');
export const rshetConfig = getAppConfig('rshet');
export const orgeConfig = getAppConfig('orge');
export const facetsConfig = getAppConfig('facets');

/*

function x (appName: string) {
    const appLower = appName.toLowerCase();  changing to lowercase
    const app = environments[ACTIVE_ENV].apps[appLower];
}

*/
