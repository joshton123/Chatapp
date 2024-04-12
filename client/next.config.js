/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1812169858,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "895e9d1940365018d489c8abfb094939"
  },
  images:{
    domains:["localhost"],
  }
};

module.exports = nextConfig;
