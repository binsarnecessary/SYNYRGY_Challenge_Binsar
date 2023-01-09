import axios from "axios";

export const GET_LIST_CARS = "GET_LIST_CARS";

export const getListCars = () => {
  return (dispatch) => {
    // dipanggil saat get data
    axios({
      method: "GET",
      url: "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json",
      timeout: 120000,
    })
      .then((response) => {
        // berhasil get data
        dispatch({
          type: GET_LIST_CARS,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get data
        dispatch({
          type: GET_LIST_CARS,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
