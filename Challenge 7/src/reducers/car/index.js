import { GET_LIST_CARS } from "../../actions/carsAction";

const initialState = {
  listCarsResult: [],
  listCarsError: false,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CARS:
      return {
        ...state,
        listCarsResult: action.payload.data,
        listCarsError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default carReducer;
