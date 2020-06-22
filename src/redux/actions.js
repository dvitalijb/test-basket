export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEMS = "REMOVE_ITEMS";
export const CHOOSE_ITEM = "CHOOSE_ITEM";
export const SORT_BY = "SORT_BY";
export const INDEX_EDIT_ITEM = "INDEX_EDIT_ITEM";
export const CHANGE_EDIT_VALUE = "CHANGE_EDIT_VALUE";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const SET_INPUT_TITLE = "SET_INPUT_TITLE";
export const SET_INPUT_QUANTITY = "SET_INPUT_QUANTITY";
export const SET_INPUT_PRICE = "SET_INPUT_PRICE";
export const SET_BUTTON_SUBMIT = "SET_BUTTON_SUBMIT";
export const SET_INPUTS_CLASSES = "SET_INPUTS_CLASSES";
export const SHOW_FIELD_NEW_ITEM = "SHOW_FIELD_NEW_ITEM";

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});
export const removeItems = () => ({
  type: REMOVE_ITEMS,
});
export const chooseItem = (id) => ({
  type: CHOOSE_ITEM,
  id,
});
export const sortBy = (column) => ({
  type: SORT_BY,
  column,
});
export const addEditItem = (id) => ({
  type: INDEX_EDIT_ITEM,
  id,
});
export const changeEditValue = (value) => ({
  type: CHANGE_EDIT_VALUE,
  value,
});
export const updateQuantity = (value) => ({
  type: UPDATE_QUANTITY,
  value,
});

export const setInputTitle = (value) => ({
  type: SET_INPUT_TITLE,
  value,
});

export const setInputQuantity = (value) => ({
  type: SET_INPUT_QUANTITY,
  value,
});

export const setInputPrice = (value) => ({
  type: SET_INPUT_PRICE,
  value,
});

export const setButtonSubmit = (boolean) => ({
  type: SET_BUTTON_SUBMIT,
  boolean,
});

export const setInputsClasses = (obj) => ({
  type: SET_INPUTS_CLASSES,
  obj,
});

export const showNewItemField = () => ({
  type: SHOW_FIELD_NEW_ITEM,
});
