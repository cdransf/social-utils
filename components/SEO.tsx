import Head from "next/head";
import { useRouter } from "next/router";
import siteMetadata from "@/data/siteMetadata";

interface CommonSEOProps {
  title: string;
  description: string;
  ogType: string;
  ogImage:
    | string
    | {
        "@type": string;
        url: string;
      }[];
  canonicalUrl?: string;
}

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  canonicalUrl,
}: CommonSEOProps) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {Array.isArray(ogImage) ? (
        ogImage.map(({ url }) => (
          <meta property="og:image" content={url} key={url} />
        ))
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={siteMetadata.siteUrl + siteMetadata.icons.apple}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={siteMetadata.siteUrl + siteMetadata.icons.favLg}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={siteMetadata.siteUrl + siteMetadata.icons.favSm}
      />
      <link
        rel="canonical"
        href={
          canonicalUrl
            ? canonicalUrl
            : `${siteMetadata.siteUrl}${router.asPath}`
        }
      />
      <link href={siteMetadata.social.mastodon} rel="me" />
      <meta name="theme-color" content={siteMetadata.themeColor} />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS feed"
        href={siteMetadata.blogFeeds.rss}
      />
      <link
        rel="alternate"
        type="application/atom+xml"
        title="Atom feed"
        href={siteMetadata.blogFeeds.atom}
      />
      <link
        rel="alternate"
        type="application/json"
        title="JSON feed"
        href={siteMetadata.blogFeeds.json}
      />
    </Head>
  );
};

interface PageSEOProps {
  title: string;
  description: string;
}

export const PageSEO = ({ title, description }: PageSEOProps) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
    />
  );
};
