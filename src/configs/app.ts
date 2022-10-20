import { type CleanedEnvAccessors, bool, cleanEnv, str } from 'envalid';

const { DEBUG, ENV } = process.env;

interface ConfigApp {
  ENV: 'development' | 'production' | 'test';
  NAME: string;
  VERSION: string;
  DEBUG: boolean;
  BUILD_ID: string;
}

type ValidateConfigApp = () => Readonly<ConfigApp & CleanedEnvAccessors>;

const environment = Object.assign(process.env, {
  NAME: process.env.NAME,
  VERSION: process.env.VERSION,
  BUILD_ID: process.env.BUILD_ID,
  DEBUG,
  ENV,
});

export const configApp = cleanEnv<ConfigApp>(environment, {
  NAME: str(),
  VERSION: str(),
  DEBUG: bool(),
  ENV: str({ choices: ['development', 'test', 'production'] }),
  BUILD_ID: str(),
});

export const validateConfigApp: ValidateConfigApp = () => configApp;
