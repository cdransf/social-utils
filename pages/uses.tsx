import * as Fathom from "fathom-client";

import siteMetadata from "@/data/siteMetadata";
import { PageSEO } from "@/components/SEO";

import Link from "next/link";
import Header from "@/components/visual/Header";

export default function Uses() {
  return (
    <>
      <PageSEO
        title={`Uses - ${siteMetadata.author}`}
        description={siteMetadata.description.uses}
      />
      <Header />
      <div id="uses">
        <div>
          <h2 className="color-green">Uses</h2>
        </div>
        <div>
          <p>{siteMetadata.description.uses}</p>
          <h3 className="color-orange">Hardware</h3>
          <ul>
            <li>Midnight MacBook Air (2022 - M2)</li>
            <li>
              27" Dell Monitor (courtesy of a previous employer that didn't want
              it back)
            </li>
            <li>Apple Magic Keyboard</li>
            <li>Apple Magic Trackpad</li>
            <li>Homepod Mini for audio</li>
            <li>Raspberry Pi for Homebridge</li>
          </ul>
          <h3 className="color-cyan">macOS + iOS</h3>
          <ul>
            <li>
              <Link
                href="https://culturedcode.com/things"
                target="_blank"
                rel="noopener noreferrer"
              >
                Things
              </Link>
            </li>
            <li>
              <Link
                href="https://obsidian.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Obsidian
              </Link>
            </li>
            <li>
              <Link
                href="https://www.flightyapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flighty
              </Link>
            </li>
            <li>
              <Link
                href="https://parcelapp.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                Parcel
              </Link>
            </li>
          </ul>
          <h3 className="color-yellow">iOS</h3>
          <ul>
            <li>
              <Link
                href="https://apps.apple.com/app/marvis-pro/id1447768809"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marvis Pro
              </Link>
            </li>
            <li>
              <Link
                href="https://tapbots.com/ivory"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ivory
              </Link>
            </li>
            <li>
              <Link
                href="https://apps.apple.com/ca/app/status-log/id6444921793"
                target="_blank"
                rel="noopener noreferrer"
              >
                status.log
              </Link>
            </li>
            <li>
              <Link
                href="https://www.stratospherix.com/products/filebrowserprofessional"
                target="_blank"
                rel="noopener noreferrer"
              >
                FileBrowser Pro
              </Link>
            </li>
          </ul>
          <h3 className="color-purple">macOS</h3>
          <ul>
            <li>
              <Link
                href="https://www.sublimetext.com"
                target="_blank"
                rel="noopener noreferrer me"
              >
                Sublime Text
              </Link>{" "}
              +{" "}
              <Link
                href="https://draculatheme.com/pro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dracula Pro
              </Link>
            </li>
            <li>
              <Link
                href="https://iterm2.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                iTerm2
              </Link>
            </li>
            <li>
              <Link
                href="https://alfredapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alfred
              </Link>
            </li>
            <li>
              <Link
                href="https://www.keyboardmaestro.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Keyboard Maestro
              </Link>
            </li>
            <li>
              <Link
                href="https://sindresorhus.com/dato"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dato
              </Link>
            </li>
            <li>
              <Link
                href="https://www.arqbackup.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arq
              </Link>
            </li>
            <li>
              <Link
                href="https://www.gitify.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gitify
              </Link>
            </li>
            <li>
              <Link
                href="https://replay.software/sleeve"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sleeve
              </Link>
            </li>
            <li>
              <Link
                href="https://flotato.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flotato
              </Link>
            </li>
            <li>
              <Link
                href="https://magnet.crowdcafe.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Magnet
              </Link>
            </li>
            <li>
              <Link
                href="https://www.noodlesoft.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hazel
              </Link>
            </li>
            <li>
              <Link
                href="https://www.macbartender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bartender
              </Link>
            </li>
            <li>
              <Link
                href="https://v2.airbuddy.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                AirBuddy
              </Link>
            </li>
            <li>
              <Link
                href="https://www.peterborgapps.com/lingon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lingon
              </Link>
            </li>
            <li>
              <Link
                href="https://www.nightbirdsevolve.com/meta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meta
              </Link>
            </li>
            <li>
              <Link
                href="https://software.charliemonroe.net/permute/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Permute
              </Link>
            </li>
          </ul>
          <h3 className="color-pink">Services</h3>
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
                href="https://whereby.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whereby
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
                href="https://1password.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                1Password
              </Link>
            </li>
            <li>
              <Link
                href="https://www.ivpn.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                IVPN
              </Link>
            </li>
            <li>
              <Link
                href="https://jumpshare.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jumpshare
              </Link>
            </li>
            <li>
              <Link
                href="https://music.apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Music
              </Link>
            </li>
            <li>
              <Link
                href="http://slack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Slack
              </Link>
            </li>
            <li>
              <Link
                href="http://discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </Link>
            </li>
            <li>
              <Link
                href="https://trakt.tv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trakt
              </Link>
            </li>
            <li>
              <Link
                href="https://letterboxd.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Letterboxd
              </Link>
            </li>
            <li>
              <Link
                href="https://oku.club"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oku
              </Link>
            </li>
            <li>
              <Link
                href="https://glass.photo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Glass
              </Link>
            </li>
            <li>
              <Link
                href="https://readwise.io/read"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reader
              </Link>
            </li>
          </ul>
          <p>
            Check out{" "}
            <Link
              href="https://uses.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              uses.tech
            </Link>{" "}
            for more lists like this one.
          </p>
          <p className="text-center">
            <small>
              <a href="https://coryd.dev">Back to my omg.lol page!</a>
            </small>
          </p>
        </div>
      </div>
    </>
  );
}
