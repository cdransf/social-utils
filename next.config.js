const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self' data:;
    object-src 'self' data:;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Access-Control-Allow-Origin",
    value: "*",
  },
];

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  eslint: {
    dirs: ["pages", "components", "lib", "layouts", "scripts"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/feeds/books",
        destination: "https://oku.club/rss/collection/POaRa",
      },
      {
        source: "/feeds/movies",
        destination: "https://letterboxd.com/cdme/rss/",
      },
      {
        source: "/feeds/tv",
        destination: "https://trakt.tv/users/cdransf/history.atom",
      },
      {
        source: "/scripts/:path",
        destination: "/static/scripts/:path",
      },
      {
        source: "/styles/:path",
        destination: "/static/styles/:path",
      },
      {
        source: "/favicons/:path",
        destination: "/static/favicons/:path",
      },
      {
        source: "/images/:path",
        destination: "/static/images/:path",
      },
      {
        source: "/media/:path*",
        destination: "/static/images/media/:path*",
      },
      {
        source: "/fonts/:path*",
        destination: "/static/fonts/:path*",
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
});
