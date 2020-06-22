import React from "react";
import { ItemBasket } from "./ItemBasket";
import { NewItemHandler } from "./NewItemHandler";

export function Basket({
  items,
  chooseItem,
  removeItems,
  sortBy,
  addEditItem,
  editItem,
  changeEditValue,
  editValue,
  updateQuantity,
  isNewItemField,
  showNewItemField,
}) {
  const itemsBasket = items.map((item) => (
    <ItemBasket
      key={item.id}
      item={item}
      chooseItem={chooseItem}
      addEditItem={addEditItem}
      editItem={editItem}
      changeEditValue={changeEditValue}
      editValue={editValue}
      updateQuantity={updateQuantity}
    />
  ));
  const sortHandle = (e) => {
    sortBy(e.target.dataset.sort);
  };
  const sum = items.reduce(
    (acc, currentValue) => acc + currentValue.quantity * currentValue.price,
    0
  );

  return (
    <div className="container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>
              <button
                type="button"
                className="btn btn-danger"
                disabled={!items.find((item) => item.marked === true)}
                onClick={removeItems}
              >
                Видалити
              </button>
            </th>
            <th data-sort="title" onClick={(e) => sortHandle(e)}>
              Назва товару
            </th>
            <th data-sort="quantity" onClick={(e) => sortHandle(e)}>
              Кількість
            </th>
            <th data-sort="price" onClick={(e) => sortHandle(e)}>
              Ціна за одиницю товару
            </th>
          </tr>
        </thead>
        <tbody>
          {itemsBasket}
          {isNewItemField && <NewItemHandler />}
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td>Сума - {sum}</td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => showNewItemField()}
      >
        {isNewItemField ? "Відмінити новий пункт" : "Створити пункт"}
      </button>
    </div>
  );
}
