import siteMetadata from "@/data/siteMetadata";
import { PageSEO } from "@/components/SEO";
import Link from "next/link";
import Header from "@/components/visual/Header";
import * as Fathom from "fathom-client";

export default function Referrals() {
  return (
    <>
      <PageSEO
        title={`Referrals - ${siteMetadata.author}`}
        description={siteMetadata.description.referrals}
      />
      <Header />
      <div id="referrals">
        <div>
          <h2 className="color-orange">Referrals</h2>
          <p>{siteMetadata.description.referrals}</p>
          <ul>
            <li>
              <Link
                href="https://ref.fm/u28939392"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  Fathom.trackGoal("RNUWLQ8O", 0);
                }}
              >
                Fastmail
              </Link>
            </li>
            <li>
              <Link
                href="https://savvycal.com/?r=coryd"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  Fathom.trackGoal("UXTCQANC", 0);
                }}
              >
                SavvyCal
              </Link>
            </li>
            <li>
              <Link
                href="https://usefathom.com/ref/EGXCON"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  Fathom.trackGoal("RQEGF0WP", 0);
                }}
              >
                Fathom Analytics
              </Link>
            </li>
            <li>
              <Link
                href="https://nextdns.io/?from=m56mt3z6"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  Fathom.trackGoal("CG4FNTCN", 0);
                }}
              >
                NextDNS
              </Link>
            </li>
            <li>
              <Link
                href="https://m.do.co/c/3635bf99aee2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  Fathom.trackGoal("YQQCW9LE", 0);
                }}
              >
                DigitalOcean
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
