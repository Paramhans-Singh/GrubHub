import Axios from "../Axios";

export const getAllItems = () => async (dispatch) => {
  dispatch({ type: "GET_ITEMS_REQUEST" });
  try {
    console.log("Here");
    const response = await Axios.get("api/items/getallitems");
    console.log(response);
    dispatch({ type: "GET_ITEMS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_ITEMS_FAILED", payload: err });
  }
};
