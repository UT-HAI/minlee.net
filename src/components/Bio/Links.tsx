export default function BioLinks({ alt = false }: { alt?: boolean }) {
  return (
    <div id="bio-links" className={alt ? "alt" : ""}>
      {alt && <hr />}
      <p className="bio-link">
        <img
          src="icons/bio.png"
          style={{ width: "25px", verticalAlign: "middle" }}
        />{" "}
        <a href="bio">Biography</a>
      </p>

      <p className="bio-link">
        <img
          src="icons/cv.png"
          style={{ width: "25px", verticalAlign: "middle" }}
        />{" "}
        <a href="materials/CV_MinKyungLee.pdf" target="_blank">
          CV
        </a>
      </p>

      <p className="bio-link">
        <img
          src="icons/scholar.png"
          style={{ width: "25px", verticalAlign: "middle" }}
        />{" "}
        <a
          href="http://scholar.google.com/citations?user=_qr34PIAAAAJ&hl=en"
          target="_blank"
        >
          Google Scholar
        </a>{" "}
        <span id="citation">(11,168 citations)</span>
      </p>

      <p className="bio-link">
        {"👋 "}
        <a href="https://hai.ischool.utexas.edu" target="_blank">
          Join our lab!
        </a>
      </p>

      {/* <p className="bio-link">
        <img
          src="icons/twitter.png"
          style={{ width: "25px", verticalAlign: "middle" }}
        />{" "}
        <a
          href="https://twitter.com/minlee_hci?ref_src=twsrc%5Etfw"
          target="_blank"
        >
          Follow us
        </a>
      </p> */}
    </div>
  );
}
