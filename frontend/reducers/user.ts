export interface IUserState {
  isLoggedIn: boolean;
  user: any;
}

export const initialState: IUserState = {
  isLoggedIn: false,
  user: null
};

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const loginAction = {
  data: {
    nickName: "Geonwoo"
  },
  type: LOG_IN
};

export const logoutAction = {
  type: LOG_OUT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.data
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default reducer;
