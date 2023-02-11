import siteMetadata from "@/data/siteMetadata";

const Header = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div id="profile-picture-container">
        <img
          alt={siteMetadata.author}
          id="profile-picture"
          src="https://profiles.cache.lol/cory/picture?v=1675567248.0172"
        />
      </div>
      <h1 id="name">
        {siteMetadata.author}
        {` `}
        <a
          id="verification"
          style={{ textDecoration: "none", border: 0 }}
          href="https://home.omg.lol/lookup/cory"
        >
          <i className="omg-icon omg-verified"></i>
        </a>
      </h1>
    </div>
  );
};

export default Header;
