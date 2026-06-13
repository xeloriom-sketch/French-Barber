import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isIonos = process.env.DEPLOY_TARGET === "ionos";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd && !isIonos ? "/French-Barber" : "",
  assetPrefix: isProd && !isIonos ? "/French-Barber/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
    ],
  },
};

export default nextConfig;
