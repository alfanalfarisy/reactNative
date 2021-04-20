const initialState = {
  name: '',
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NAMECHANGE':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
