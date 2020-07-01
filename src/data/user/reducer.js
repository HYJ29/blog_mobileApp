import produce from "immer";
import * as AT from "data/rootActionTypes";

const INITIAL_STATE = {
  userSession: null,
};

const user = produce((draft, action) => {
  switch (action.type) {
    case AT.SET_USER_SESSION:
      draft.userSession = action.userSession;
      break;
    default:
      return;
  }
}, INITIAL_STATE);

export default user;
