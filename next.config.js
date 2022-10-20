/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
const packageJson = require('./package.json');
const buildId = require('./scripts/buildId');

const { DEBUG, ENV } = process.env;

/** @type {import('next').NextConfig['generateBuildId']} */
const generateBuildId = () => buildId.sync({ dir: __dirname, describe: true });

/** @type {import('next').NextConfig['env']} */
const env = {
  NAME: packageJson.displayName,
  VERSION: `v${packageJson.version}`,
  DEBUG: String(DEBUG),
  ENV: String(ENV),
  BUILD_ID: String(generateBuildId()),
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env,
  generateBuildId,
};

module.exports = nextConfig;
