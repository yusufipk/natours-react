import ButtonSecondary from "../../components/button/button-secondary";
import nat8 from "../images/nat-8.jpg";
import nat9 from "../images/nat-9.jpg";
import bgmp4 from "../images/video.mp4";
import bgwebm from "../images/video.webm";

function Stories() {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={bgmp4} type="video/mp4" />
          <source src={bgwebm} type="video/webm" />
          Your browser is not supporting the video format!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people geniunely happy</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat8} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              amet. Ipsa fugiat consequatur amet esse deserunt natus. Blanditiis
              ex similique harum adipisci voluptatem iste esse voluptates,
              provident odio, vel quae!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat9} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              amet. Ipsa fugiat consequatur amet esse deserunt natus. Blanditiis
              ex similique harum adipisci voluptatem iste esse voluptates,
              provident odio, vel quae!
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <ButtonSecondary text={"Read all stories ➯"} />
      </div>
    </section>
  );
}

export default Stories;
