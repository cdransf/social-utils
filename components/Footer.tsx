import * as Fathom from "fathom-client";

import Link from "next/link";
import Prami from "@/components/visual/Prami";

const Footer = () => {
  return (
    <div id="footer" className="text-center">
      <Link
        href="https://home.omg.lol/referred-by/cory"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          Fathom.trackGoal("OQA0XFOR", 0);
        }}
      >
        <span className="logotype">
          omg
          <span className="logotype dot" style={{ color: "#f06595" }}>
            .
          </span>
          lol
        </span>
        <br />
        <Prami />
      </Link>
    </div>
  );
};

export default Footer;
