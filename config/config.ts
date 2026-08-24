/*
Purpose of this file:-
   1. Acts as a configuration layer for credentials for all different environments (dev, qa, prod)
Problem statement - If we are directly using the .env env variables
                  - Each and every time we need to change it if we want to run tests in a certain environment (dev, qa, prod)
Solution -
  1. Create 1-Complete object that contains nested object with each environment credentials (dev, qa, prod) as its properties
  2. Actual credentials will be injected from .env file as a env variables into this object as keys for the properties
  2. Tests will be executed in any environment without changing the code, just by changing the ACTIVE_ENV variable in .env file

   As part of this solution,
   1-Interfaces
    1.we need to create 4 interfaces for ensuring type safety for each credential (web, api, db, smtp)
    2.And 1 more interface for creating an enforcement that all the apps hould hold all the 4 credentials together as its properties
    3.One more Interface for defining a clean application provisioning structure

   2-Type and EnvVariable and Object
    1.Creating a type for all the environments (dev, qa, prod) for ensuring type safety for the ACTIVE_ENV variable
    2.Here comes the actual object typed with the EnvName and AppProvision Interface
      The benefit here is this object is too sensitive since we have nested interfaces if we wrongly provide any key or value iits going to throw a compile error
      By this way we can reduce the human errors caused unkowingly

   3-Type and Function and export variables
    1.Creating a type for all the apps (orge, facets) for ensuring type safety for the function
    2.Creating a function that will take the app name as parameter and check whether the environment has that app or not and return the respective credential/ available app names under that environment
    3.Finally exporting the function return values as variables for each app and importing them in the page methods
*/


import 'dotenv/config';

//web creds
export interface WebConfig {
    url: string;
    browser?: "chromium" | "firefox" | "webkit";
    headless?: boolean;
    loginRequired?: boolean;      // set false for apps that have no login, #url authentication
    username?: string;            // optional - only needed when loginRequired is true
    password?: string;
}
//db creds
export interface DbConfig {
    server: string;
    username: string;
    password: string;
}
//api creds
export interface ApiConfig {
    baseUrl: string;
    timeout?: number;
    authType?: "bearer" | "basic" | "none";
}
//smtp creds
export interface SmtpConfig {
    server: string;
}

// App config - interface for an app, To create a enforcement that an app should have all 4 creds configured
export interface AppConfig {
    web: WebConfig;
    db?: DbConfig;
    api?: ApiConfig;
    smtp?: SmtpConfig;
}

export interface AppProvision {
    apps: Record<string, AppConfig>;
}

export type EnvName = "dev" | "qa" | "prod";
//Assigning the active env from .env file to a variable - defaults to qa (if not found)
const ACTIVE_ENV: EnvName = (process.env.ACTIVE_ENV as EnvName) || 'qa';


const envCredConfig: Record<EnvName, AppProvision> = {
    dev: {
        apps: {
            orge: {
                web: {
                    url: process.env.DEV_ORGE_WEB_URL!, // Compile time error since its not a string as promised so non null
                    browser: "chromium",
                    headless: false,
                    loginRequired: true,
                    username: process.env.DEV_ORGE_WEB_USERNAME!,
                    password: process.env.DEV_ORGE_WEB_PASSWORD!
                },
                db: {
                    server: process.env.DEV_ORGE_DB_SERVER!, // as - keyword creates a compile time promise
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
};

// Type for valid app names - update this when adding/removing apps
type AppName = "orge" | "facets";

// Retrieve credentials for a given app - validates it exists in active environment
function accessCreds(appName: AppName): AppConfig {
    const apps = envCredConfig[ACTIVE_ENV].apps;
    if (appName in apps) {                            // for verifying whether the app is avail for the acive environemnt or not, in this condition the appName will be checked against only the keys of the apps object, since keys are containing the actual data (in operator javascript)
        return apps[appName];
    }
    const availableApps = Object.keys(apps).map(k => `"${k}"`).join(", ");
    throw new Error(`App '${appName}' is not found in '${ACTIVE_ENV}' environment\nAvailable apps in '${ACTIVE_ENV}' environment - ${availableApps}`);
}

/* Apps access final values of creds */
export const orgeCreds = accessCreds('orge');
export const facetsCreds = accessCreds('facets');
