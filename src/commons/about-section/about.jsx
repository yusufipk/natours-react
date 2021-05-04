import nat1Large from "../../commons/images/nat-1-large.jpg";
import nat2Large from "../../commons/images/nat-2-large.jpg";
import nat3Large from "../../commons/images/nat-3-large.jpg";

function About() {
  return (
    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You are going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              perferendis esse minima provident neque, non necessitatibus
              architecto tempora, molestias omnis nesciunt numquam reprehenderit
              distinctio id! Fuga quibusdam harum dolores minus?
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              perferendis esse minima provident neque
            </p>
            <a href="#" className="btn-text">
              Learn More ➯
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={nat1Large}
                alt="Nature 1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={nat2Large}
                alt="Nature 2"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={nat3Large}
                alt="Nature 3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;
