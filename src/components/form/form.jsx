function Form() {
  return (
    <form action="#" className="form">
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="Full Name"
          id="name"
          required
        />
        <label htmlFor="name" className="form__label">
          Full name
        </label>
      </div>

      <div className="form__group">
        <input
          type="email"
          className="form__input"
          placeholder="Email adress"
          id="email"
          required
        />
        <label htmlFor="email" className="form__label">
          Email adress
        </label>
      </div>
    </form>
  );
}

export default Form;
