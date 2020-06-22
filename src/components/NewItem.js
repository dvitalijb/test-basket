import React from "react";

export const NewItem = ({
  addItem,
  setInputTitle,
  setInputQuantity,
  setInputPrice,
  setButtonSubmit,
  setInputsClasses,
  newItemTitle,
  newItemQuantity,
  newItemPrice,
  isAvailableButtonSubmit,
  additionalInputsClasses,
  showNewItemField,
}) => {
  const isValidFieldQuantity = (value) => Number.isInteger(+value) && value > 0;
  const isValidPrice = (value) => value > 0;

  const handlerQuantity = (value) => {
    setInputQuantity(value);
    let inputClassName;
    isValidFieldQuantity(value)
      ? (inputClassName = "")
      : (inputClassName = "border-danger");
    setInputsClasses({
      ...additionalInputsClasses,
      "inputQuantity": inputClassName,
    });
  };

  const handlerPrice = (value) => {
    setInputPrice(value);
    let inputClassName;
    isValidPrice(value)
      ? (inputClassName = "")
      : (inputClassName = "border-danger");
    setInputsClasses({
      ...additionalInputsClasses,
      "inputPrice": inputClassName,
    });
  };

  const validationForm = () => {
    if (isValidFieldQuantity(newItemQuantity) && isValidPrice(newItemPrice)) {
      addItem({
        id: Date.now(),
        title: newItemTitle,
        quantity: newItemQuantity,
        price: newItemPrice,
        marked: false,
      });
      setInputTitle("");
      setInputQuantity("");
      setInputPrice("");
      setButtonSubmit(true);
      setInputsClasses({
        inputTitle: "",
        inputQuantity: "",
        inputPrice: "",
      });
      showNewItemField();
    }
  };

  const isField = () => {
    if (newItemTitle && newItemQuantity && newItemPrice) {
      setButtonSubmit(true);
    } else {
      setButtonSubmit(false);
    }
  };

  isField();

  return (
    <tr>
      <td>
        <button
          type="button"
          className="btn btn-dark"
          disabled={!isAvailableButtonSubmit}
          onClick={() => validationForm()}
        >
          Додати
        </button>
      </td>
      <td>
        <input
          type="text"
          className={`shadow-none ${additionalInputsClasses.inputTitle}`}
          value={newItemTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          className={` shadow-none ${additionalInputsClasses.inputQuantity}`}
          value={newItemQuantity}
          onChange={(e) => handlerQuantity(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          className={` shadow-none ${additionalInputsClasses.inputPrice}`}
          value={newItemPrice}
          onChange={(e) => handlerPrice(e.target.value)}
        />
      </td>
    </tr>
  );
};
