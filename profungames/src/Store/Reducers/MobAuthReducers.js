import { handleActions } from "redux-actions";

const INITIAL_STATE = {
  zxc: "asds",
  mailSent: false
};
const MobAuthReducer = handleActions(
  {
    SEARCH_MOBILE: (state, action) => {
      return { ...state, mailSent: true, ...action.payload };
    }
  },
  INITIAL_STATE
);

export default MobAuthReducer;
