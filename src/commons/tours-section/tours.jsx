function Tours() {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">Front</div>
            <div className="card__side  card__side--back card__side--back-1">
              Back
            </div>
          </div>
        </div>
        <div className="col-1-of-3"></div>
        <div className="col-1-of-3"></div>
      </div>
    </section>
  );
}

export default Tours;
