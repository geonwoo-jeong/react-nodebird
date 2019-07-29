const dummyUser = {
  Followers: [],
  Followings: [],
  Post: [],
  nickName: "Geonwoo",
  signUpdata: {}
};

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

export const SIGN_UP = "SIGN_UP";

export const loginAction = {
  type: LOG_IN
};

export const logoutAction = {
  type: LOG_OUT
};

export const signUpAction = (data: any) => {
  return {
    data,
    type: SIGN_UP
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpdata: action.data
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default reducer;
