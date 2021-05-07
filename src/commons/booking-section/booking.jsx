import Form from "../form/form";

function Booking() {
  return (
    <section className="section-book" id="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Start booking now</h2>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
