import { UPDATE_CONNECTION_STATUS } from "../Types";

export const updateConnectionStatus = (payload) => dispatch => {
    dispatch({ type: UPDATE_CONNECTION_STATUS, payload: payload })
};
