export interface IPostState {
  mainPosts: [];
}

export const initialState: IPostState = {
  mainPosts: []
};

export const ADD_POST = "ADD_POST";
export const ADD_DUMMY = "ADD_DUMMY";

export const addPost = {
  type: ADD_POST
};

export const addDummy = {
  data: {
    User: {
      nickName: "Geonwoo"
    },
    UserId: 1,
    content: "Hello"
  },
  type: ADD_DUMMY
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state
      };
    case ADD_DUMMY:
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts]
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
