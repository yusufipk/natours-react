import nat1Large from "../../commons/images/nat-1-large.jpg";
import nat1 from "../../commons/images/nat-1.jpg";
import nat2Large from "../../commons/images/nat-2-large.jpg";
import nat2 from "../../commons/images/nat-2.jpg";
import nat3Large from "../../commons/images/nat-3-large.jpg";
import nat3 from "../../commons/images/nat-3.jpg";

function About() {
  return (
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
              srcSet={`${nat1} 300w, ${nat1Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 600px) 30vw, 300px"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
              src={nat1Large}
            />

            <img
              srcSet={`${nat2} 300w, ${nat2Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 600px) 30vw, 300px"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
              src={nat2Large}
            />

            <img
              srcSet={`${nat3} 300w, ${nat3Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 600px) 30vw, 300px"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
              src={nat3Large}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
