export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hallo ich bin Benedikt</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Leidenschaftlicher
            </span>{" "}
            <br />
            Programmierer
          </h1>
          <p className="hero--section-description">
            Auf dieser Seite finden Sie Infos über mich und
            <br /> Details zu meinen Projekten
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
