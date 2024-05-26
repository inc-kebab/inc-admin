/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
  images: {
    domains: ["storage.yandexcloud.net"],
  },
};

export default nextConfig;
