import { connect } from "react-redux";
import { NewItem } from "./NewItem";
import {
  addItem,
  setInputTitle,
  setInputQuantity,
  setInputPrice,
  setButtonSubmit,
  setInputsClasses,
  showNewItemField,
} from "../redux/actions";

function mapStateToProps(state) {
  return {
    newItemTitle: state.newItemTitle,
    newItemQuantity: state.newItemQuantity,
    newItemPrice: state.newItemPrice,
    isAvailableButtonSubmit: state.isAvailableButtonSubmit,
    additionalInputsClasses: state.additionalInputsClasses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (item) => dispatch(addItem(item)),
    setInputTitle: (value) => dispatch(setInputTitle(value)),
    setInputQuantity: (value) => dispatch(setInputQuantity(value)),
    setInputPrice: (value) => dispatch(setInputPrice(value)),
    setButtonSubmit: (boolean) => dispatch(setButtonSubmit(boolean)),
    setInputsClasses: (obj) => dispatch(setInputsClasses(obj)),
    showNewItemField: () => dispatch(showNewItemField()),
  };
}

export const NewItemHandler = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewItem);
