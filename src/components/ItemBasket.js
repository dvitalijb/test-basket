import React from "react";

export const ItemBasket = (props) => {
  const {
    chooseItem,
    item,
    addEditItem,
    editItem,
    changeEditValue,
    editValue,
    updateQuantity,
  } = props;
  const { id, title, quantity, price, marked } = item;
  const checkQuantity = (value) => Number.isInteger(+value) && value > 0;
  const itemHandler = () => {
    chooseItem(id);
  };
  const inputHandler = (e) => {
    changeEditValue(e.target.value);
  };
  const checkEventPress = (e) => {
    if (e.key === "Enter" && checkQuantity(editValue)) {
      updateQuantity();
    }
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={marked}
          onChange={() => itemHandler()}
        />
      </td>
      <td>{title}</td>
      <td>
        {editItem !== id ? (
          <p
            onClick={() => addEditItem(id)}
            className="quantity cursor-pointer"
          >
            {quantity}
          </p>
        ) : (
          <input
            type="text"
            className={checkQuantity(editValue) ? "" : "border-danger"}
            value={editValue}
            onKeyPress={(e) => checkEventPress(e)}
            onChange={(e) => inputHandler(e)}
          />
        )}
      </td>
      <td>{price}</td>
    </tr>
  );
};
