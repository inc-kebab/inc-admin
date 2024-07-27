/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
  },
  images: {
    domains: ["storage.yandexcloud.net"],
  },
  reactStrictMode: true,
};

export default nextConfig;
 