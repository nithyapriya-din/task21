import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Section({ card, addTocart, cartList }) {
  const fields = [];
  for (let i = 1; i <= 5; i++) {
    fields.push(<FontAwesomeIcon icon={faStar} />);
  }
  return (
    <>
      <div className="col-lg-4 mb-5">
        <div className="card h-100">
          {card.badge == true ? (
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
          ) : null}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{card.title}</h5>
              <div className="d-flex justify-content-center small text-warning mb-2">
                {card.star ? fields : null}
              </div>
              {card.title === "Fancy Product" ? (
                card.price
              ) : card.title === "Popular Item" ? (
                card.price
              ) : card.title === "Special Item" ? (
                <>
                  <span className="text-muted text-decoration-line-through">
                    $20.00
                  </span>
                  $18.00
                </>
              ) : (
                <>
                  <span className="text-muted text-decoration-line-through">
                    $50.00
                  </span>
                  $25.00
                </>
              )}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {card.title === "Fancy Product" ? (
                <button className="btn btn-outline-dark mt-auto">
                  View Option
                </button>
              ) : (
                <button
                  disabled={cartList.some((ele) => ele.id === card.id)}
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {
                    addTocart(card);
                  }}
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section;
