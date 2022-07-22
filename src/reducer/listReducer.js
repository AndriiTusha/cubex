const defaultState = {
  elements: [
    {
      id: 0,
      text: "",
      topPos: false,
      downPos: false,
      isInputField: true,
      isDelButton: false,
      isAddButton: true,
      isSublist: false,
      subList: []
    }
  ]
};

export const ADD_VALUE = "ADD_VALUE";
export const REMOVE_VALUE = "REMOVE_VALUE";
export const SET_UP = "SET_UP";
export const SET_DOWN = "SET_DOWN";
export const ADD_SUBLIST = "ADD_SUBLIST";

export const listReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_VALUE:
      return {
        ...state,
        elements: [
          ...state.elements,
          {
            ...state.elements.map((elem) => ({
              ...elem,
              id: Date.now(),
              text: action.payload,
              isDelButton: true,
              isAddButton: false,
              isInputField: false
            }))[0]
          }
        ]
      };
    case REMOVE_VALUE:
      return {
        ...state,
        elements: state.elements.filter(
          (element) => element.id !== action.payload
        )
      };
    case ADD_SUBLIST:
    //return {
    //...state,
    // elements: [...state.elements, {
    //     ...state.elements.map(
    //         (elem) => ({
    //             ...elem,
    //             isSubList: true,
    //             subList: [...state.elements.subList, {text: 'HOHOHOH'}]
    //         }))[0]
    // }]
    //   }
    default:
      return state;
  }
};

export const addValueCreator = (payload) => ({ type: ADD_VALUE, payload });
export const removeValueCreator = (payload) => ({
  type: REMOVE_VALUE,
  payload
});
export const addSubListCreator = () => ({ type: ADD_SUBLIST });
