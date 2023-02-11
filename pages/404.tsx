import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import Link from "next/link";
import Header from "@/components/visual/Header";

export default function Custom404() {
  return (
    <>
      <PageSEO
        title={`Uses - ${siteMetadata.author}`}
        description={siteMetadata.description.uses}
      />
      <Header />
      <h2 className="color-red">Oops!</h2>
      <p>
        Hi! It looks like there's nothing here, but you can{" "}
        <Link href="https://coryd.dev">head home</Link> if you'd like.
      </p>
      <h3 className="color-yellow">Or here's some other stuff</h3>
      <ul>
        <li>
          <Link href="https://blog.coryd.dev">Blog</Link>
        </li>
        <li>
          <Link href="https://coryd.dev/now">/now</Link>
        </li>
        <li>
          <Link href="https://utils.coryd.dev/uses">Uses</Link>
        </li>
      </ul>
    </>
  );
}
