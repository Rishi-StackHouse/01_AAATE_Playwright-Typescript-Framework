/*
Purpose of this file:-
   1. Acts as a configuration layer for credentials for different environments (dev, qa, prod)
Problem statement - If we are directly using the .env env variables
                  - Each and every time we need to change it if we want to run tests in a certain environment (dev, qa, prod)
Solution -
  1. 1-Complete object that contains nested object for each environment (dev, qa, prod)
  2. All creds will be injected from .env file into that nested object for (dev, qa, prod) as env variables
  3. Every level of that nested object is shaped by an interface, so a missing/misspelled key is caught at compile time
  4. The active env will be picked from .env file and assigned to a variable (ACTIVE_ENV) - defaults to qa (if not found)
  5. A function accessCreds(appName) will be used to retrieve the creds from the nested objects based on the app Name
  6. The retrieved creds object will be assigned to a variable and imported used in the page methods
*/

import 'dotenv/config';
export type EnvName = "dev" | "qa" | "prod";

/* Interface for each stack (web / db / api / smtp) that an app can hold */
export interface WebConfig {
    url: string;
    browser?: "chromium" | "firefox" | "webkit";
    headless?: boolean;
    loginRequired?: boolean;      // set false for apps that have no login, #url authentication
    username?: string;            // optional - only needed when loginRequired is true
    password?: string;
}

export interface DbConfig {
    server: string;
    username: string;
    password: string;
}

export interface ApiConfig {
    baseUrl: string;
    timeout?: number;
    authType?: "bearer" | "basic" | "none";
}

export interface SmtpConfig {
    server: string;
}

/* Interface for a single app - only web is mandatory, rest of the stacks are optional */
export interface AppConfig {
    web: WebConfig;
    db?: DbConfig;
    api?: ApiConfig;
    smtp?: SmtpConfig;
}

/* Interface for one environment - holds all the apps configured under it */
export interface AppsDeclaration {
    apps: Record<string, AppConfig>;
}

/*
 Final object with all apps configuration across all the environments.
 'satisfies' is used here instead of a plain ': Record<EnvName, AppsDeclaration>' annotation -
 it still validates every nested object against the interfaces above, but keeps the literal app
 keys ('orge' | 'facets') intact so the AppName type below stays type safe.
 With a plain annotation the keys would widen to 'string' and accessCreds('typo') would compile.
*/
const envCredConfig = {
    dev: {
        apps: {
            orge: {
                web: {
                    url: process.env.DEV_ORGE_WEB_URL!,
                    browser: "chromium",
                    headless: false,
                    loginRequired: true,
                    username: process.env.DEV_ORGE_WEB_USERNAME!,
                    password: process.env.DEV_ORGE_WEB_PASSWORD!
                },
                db: {
                    server: process.env.DEV_ORGE_DB_SERVER!,
                    username: process.env.DEV_ORGE_DB_USER!,
                    password: process.env.DEV_ORGE_DB_PASSWORD!
                },
                api: {
                    baseUrl: process.env.DEV_ORGE_API_BASEURL!,
                },
                smtp: {
                    server: process.env.DEV_ORGE_SMTP_SERVER!,
                }
            },
            facets: {
                web: {
                    url: process.env.DEV_FACETS_WEB_URL!,
                    browser: "chromium",
                    headless: false,
                    loginRequired: true,
                    username: process.env.DEV_FACETS_WEB_USERNAME!,
                    password: process.env.DEV_FACETS_WEB_PASSWORD!
                },
                db: {
                    server: process.env.DEV_FACETS_DB_SERVER!,
                    username: process.env.DEV_FACETS_DB_USER!,
                    password: process.env.DEV_FACETS_DB_PASSWORD!
                },
                api: {
                    baseUrl: process.env.DEV_FACETS_API_BASEURL!,
                },
                smtp: {
                    server: process.env.DEV_FACETS_SMTP_SERVER!,
                }
            }
        }
    },
    qa: {
        apps: {
            orge: {
                web: {
                    url: process.env.QA_ORGE_WEB_URL!,
                    browser: "chromium",
                    headless: false,
                    loginRequired: true,
                    username: process.env.QA_ORGE_WEB_USERNAME!,
                    password: process.env.QA_ORGE_WEB_PASSWORD!
                },
                db: {
                    server: process.env.QA_ORGE_DB_SERVER!,
                    username: process.env.QA_ORGE_DB_USER!,
                    password: process.env.QA_ORGE_DB_PASSWORD!
                },
                api: {
                    baseUrl: process.env.QA_ORGE_API_BASEURL!,
                },
                smtp: {
                    server: process.env.QA_ORGE_SMTP_SERVER!,
                }
            },
            facets: {
                web: {
                    url: process.env.QA_FACETS_WEB_URL!,
                    browser: "chromium",
                    headless: false,
                    loginRequired: true,
                    username: process.env.QA_FACETS_WEB_USERNAME!,
                    password: process.env.QA_FACETS_WEB_PASSWORD!
                },
                db: {
                    server: process.env.QA_FACETS_DB_SERVER!,
                    username: process.env.QA_FACETS_DB_USER!,
                    password: process.env.QA_FACETS_DB_PASSWORD!
                },
                api: {
                    baseUrl: process.env.QA_FACETS_API_BASEURL!,
                },
                smtp: {
                    server: process.env.QA_FACETS_SMTP_SERVER!,
                }
            }
        }
    },
    prod: {
        apps: {
            orge: {
                web: {
                    url: process.env.PROD_ORGE_WEB_URL!,
                    browser: "chromium",
                    headless: false,
                    loginRequired: true,
                    username: process.env.PROD_ORGE_WEB_USERNAME!,
                    password: process.env.PROD_ORGE_WEB_PASSWORD!
                },
                db: {
                    server: process.env.PROD_ORGE_DB_SERVER!,
                    username: process.env.PROD_ORGE_DB_USER!,
                    password: process.env.PROD_ORGE_DB_PASSWORD!
                },
                api: {
                    baseUrl: process.env.PROD_ORGE_API_BASEURL!,
                },
                smtp: {
                    server: process.env.PROD_ORGE_SMTP_SERVER!,
                }
            },
            facets: {
                web: {
                    url: process.env.PROD_FACETS_WEB_URL!,
                    browser: "chromium",
                    headless: false,
                    loginRequired: true,
                    username: process.env.PROD_FACETS_WEB_USERNAME!,
                    password: process.env.PROD_FACETS_WEB_PASSWORD!
                },
                db: {
                    server: process.env.PROD_FACETS_DB_SERVER!,
                    username: process.env.PROD_FACETS_DB_USER!,
                    password: process.env.PROD_FACETS_DB_PASSWORD!
                },
                api: {
                    baseUrl: process.env.PROD_FACETS_API_BASEURL!,
                },
                smtp: {
                    server: process.env.PROD_FACETS_SMTP_SERVER!,
                }
            }
        }
    }
} satisfies Record<EnvName, AppsDeclaration>;

//Assigning the active env from .env file to a variable - defaults to qa (if not found)
const ACTIVE_ENV: EnvName = (process.env.ACTIVE_ENV as EnvName) || 'qa';

// Creating Type for type checking for the valid app names configured in the object
type AppName = keyof typeof envCredConfig.dev.apps | // in ts for object, the typeof will returns the full object structure
               keyof typeof envCredConfig.qa.apps  | // and keyof will return the keys of the object
               keyof typeof envCredConfig.prod.apps;

// Retrieve credentials for a given app - validates it exists in active environment
function accessCreds(appName: AppName): AppConfig {
    const apps = envCredConfig[ACTIVE_ENV].apps;
    //const yolo:AppName = appName;
    if (appName in apps) {                            // for verifying whether the app is avail for the acive environemnt or not, in this condition the appName will be checked against only the keys of the apps object, since keys are containing the actual data (in operator javascript)
        return apps[appName  as keyof typeof apps];
        //return apps[yolo];
    }
    const availableApps = Object.keys(apps).map(k => `"${k}"`).join(", ");
    throw new Error(`App '${appName}' is not found in '${ACTIVE_ENV}' environment\nAvailable apps in '${ACTIVE_ENV}' environment - ${availableApps}`);
}

/* Apps access final values of creds */
export const orgeCreds = accessCreds('orge');
export const facetsCreds = accessCreds('facets');
