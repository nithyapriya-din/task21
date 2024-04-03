export default function Cart({
  cartList,
  removeCart,
  incQuantity,
  decQuantity,
}) {
  return (
    <>
      <ol class="list-group list-group-numbered">
        {cartList.map((item) => {
          return (
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">{item.title}</div>${item.cost}.00{" "}
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => incQuantity(item)}
                >
                  +
                </button>{" "}
                {item.quantity}{" "}
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => decQuantity(item)}
                >
                  -
                </button>
              </div>
              <button
                onClick={() => removeCart(item)}
                class="badge bg-primary rounded-pill"
              >
                X
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
}
