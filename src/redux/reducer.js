import {
  ADD_ITEM,
  REMOVE_ITEMS,
  CHOOSE_ITEM,
  SORT_BY,
  INDEX_EDIT_ITEM,
  CHANGE_EDIT_VALUE,
  UPDATE_QUANTITY,
  SET_INPUT_TITLE,
  SET_INPUT_QUANTITY,
  SET_INPUT_PRICE,
  SET_BUTTON_SUBMIT,
  SET_INPUTS_CLASSES,
  SHOW_FIELD_NEW_ITEM,
} from "./actions";

const initialState = {
  items: [
    { id: 1, title: "Молоко", quantity: 1, price: 20, marked: false },
    { id: 2, title: "Вода мінеральна", quantity: 2, price: 30, marked: false },
    { id: 3, title: "Пиво", quantity: 3, price: 45, marked: false },
    { id: 4, title: "Печиво ", quantity: 4, price: 10, marked: false },
    { id: 5, title: "Сир", quantity: 5, price: 25.5, marked: false },
    { id: 6, title: "Батон", quantity: 6, price: 15.4, marked: false },
  ],
  editItem: null,
  editValue: "",
  newItemTitle: "",
  newItemQuantity: "",
  newItemPrice: "",
  isAvailableButtonSubmit: false,
  additionalInputsClasses: {
    inputTitle: "",
    inputQuantity: "",
    inputPrice: "",
  },
  isNewItemField: false,
};

const actionHandlers = {
  [ADD_ITEM]: (state, action) => ({
    ...state,
    items: [...state.items, action.item],
  }),
  [CHOOSE_ITEM]: (state, action) => ({
    ...state,
    items: state.items.map((item) => {
      if (item.id === action.id) {
        item.marked = !item.marked;
      }
      return item;
    }),
  }),
  [REMOVE_ITEMS]: (state) => ({
    ...state,
    items: state.items.filter((item) => !item.marked),
  }),
  [SORT_BY]: (state, action) => ({
    ...state,
    items: [
      ...[
        ...state.items.sort((a, b) =>
          ("" + a[action.column]).localeCompare(b[action.column])
        ),
      ],
    ],
  }),
  [INDEX_EDIT_ITEM]: (state, action) => ({
    ...state,
    editItem: action.id,
    editValue: state.items.find((item) => item.id === action.id).quantity,
  }),
  [CHANGE_EDIT_VALUE]: (state, action) => ({
    ...state,
    editValue: action.value,
  }),
  [UPDATE_QUANTITY]: (state) => ({
    ...state,
    editItem: null,
    editValue: "",
    items: state.items.map((item) => {
      return item.id === state.editItem
        ? { ...item, quantity: +state.editValue }
        : item;
    }),
  }),
  [SET_INPUT_TITLE]: (state, action) => ({
    ...state,
    newItemTitle: action.value,
  }),
  [SET_INPUT_QUANTITY]: (state, action) => ({
    ...state,
    newItemQuantity: action.value,
  }),
  [SET_INPUT_PRICE]: (state, action) => ({
    ...state,
    newItemPrice: action.value,
  }),
  [SET_BUTTON_SUBMIT]: (state, action) => ({
    ...state,
    isAvailableButtonSubmit: action.boolean,
  }),
  [SET_INPUTS_CLASSES]: (state, action) => ({
    ...state,
    additionalInputsClasses: action.obj,
  }),
  [SHOW_FIELD_NEW_ITEM]: (state) => ({
    ...state,
    isNewItemField: !state.isNewItemField,
  }),
};

export const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};
