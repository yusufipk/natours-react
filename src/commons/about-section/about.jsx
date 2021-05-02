import ButtonSecondary from "../../components/button/button-secondary";

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

            <ButtonSecondary text={"Learn More ➯"} />
          </div>
          <div className="col-1-of-2">Image</div>
        </div>
      </section>
    </main>
  );
}
export default About;
