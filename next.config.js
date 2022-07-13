/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@esotericsoftware/spine-core",
  "@esotericsoftware/spine-webgl",
  "@esotericsoftware/spine-player",
]); // pass the modules you would like to see transpiled

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.arweave.net"],
  },
};

module.exports = withTM(nextConfig);
