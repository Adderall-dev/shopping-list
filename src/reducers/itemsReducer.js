const initialState = [];

const itemsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: payload.id,
          name: payload.name,
        },
      ];
    case "DELETE_ITEM":
      const copyState = [...state];
      const i = copyState.findIndex((x) => x.id === payload.id);
      copyState.splice(i, 1);
      return [...copyState];
    case "DELETE_ALL":
      return initialState;
    default:
      return state;
  }
};

export default itemsReducer;
