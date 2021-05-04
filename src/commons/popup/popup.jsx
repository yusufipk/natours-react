import nat8 from "../images/nat-8.jpg";
import nat9 from "../images/nat-9.jpg";

function Popup() {
  return (
    <div>
      <div className="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img src={nat8} alt="Tour photo" className="popup__img" />
            <img src={nat9} alt="Tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <h2 className="heading-secondary u-margin-bottom-small">
              Start booking now
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Important &ndash; Please read these terms before booking
            </h3>
            <p className="popup__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus repellat quibusdam vero modi neque ipsum nihil rem
              placeat maxime voluptatem. Maxime accusantium numquam non minima,
              natus corrupti ex debitis dicta. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quo deserunt, unde sunt sit quis
              expedita accusamus, tempora, aliquid consectetur numquam beatae
              nesciunt omnis velit eligendi cupiditate odit quae? Molestias,
              officiis? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Modi, consequatur recusandae! Odio, dicta. Aspernatur ut aut
              maxime officiis, quas dolorem beatae nam? Neque nisi in tempore.
              Suscipit ex hic corrupti! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Hic recusandae accusamus omnis ad culpa rem, eum
              obcaecati, cupiditate repellendus nemo, non expedita corrupti
              totam nesciunt distinctio quibusdam consectetur necessitatibus
              iure.
            </p>
            <a href="#" className="btn btn--green">
              Book Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
