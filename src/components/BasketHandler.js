import { connect } from "react-redux";
import { Basket } from "./Basket";
import {
  chooseItem,
  removeItems,
  sortBy,
  addEditItem,
  changeEditValue,
  updateQuantity,
  showNewItemField,
} from "../redux/actions";

function mapStateToProps(state) {
  return {
    items: state.items,
    editItem: state.editItem,
    editValue: state.editValue,
    classQuantityInput: state.classQuantityInput,
    isNewItemField: state.isNewItemField,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chooseItem: (id) => dispatch(chooseItem(id)),
    removeItems: () => dispatch(removeItems()),
    sortBy: (column) => dispatch(sortBy(column)),
    addEditItem: (id) => dispatch(addEditItem(id)),
    changeEditValue: (value) => dispatch(changeEditValue(value)),
    updateQuantity: () => dispatch(updateQuantity()),
    showNewItemField: () => dispatch(showNewItemField()),
  };
}

export const BasketHandler = connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
