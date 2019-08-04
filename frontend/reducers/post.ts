export const initialState = {
  Comments: [],
  addCommentErrorReason: "",
  addPostErrorReason: "",
  id: 1,
  imagePaths: [],
  isAddingComment: false,
  isAddingPost: false,
  mainPosts: [
    {
      User: {
        id: 1,
        nickName: "Geonwoo"
      },
      content: "First Post!!",
      img: ""
    }
  ],
  postAdded: false
};

const dummyPost = {
  Comments: [],
  User: {
    id: 1,
    nickName: "Geonwoo"
  },
  content: "I'm dummy",
  id: 2
};

const dummyComment = {
  User: {
    id: 1,
    nickName: "Geonwoo"
  },
  content: "I'm dummy comment",
  createdAt: new Date(),
  id: 2
};

export const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
export const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
export const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";

export const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
export const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
export const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";

export const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
export const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
export const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const LOAD_COMMENT_REQUEST = "LOAD_COMMENT_REQUEST";
export const LOAD_COMMENT_SUCCESS = "LOAD_COMMENT_SUCCESS";
export const LOAD_COMMENT_FAILURE = "LOAD_COMMENT_FAILURE";

export const RETWEET_REQUEST = "RETWEET_REQUEST";
export const RETWEET_SUCCESS = "RETWEET_SUCCESS";
export const RETWEET_FAILURE = "RETWEET_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const ADD_DUMMY = "ADD_DUMMY";

export const addPost = {
  type: ADD_POST_REQUEST
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
    case ADD_POST_REQUEST:
      return {
        ...state,
        isAddingPost: true,
        postAdded: false
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        isAddingPost: false,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostErrorReason: action.error,
        isAddingPost: false
      };
    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        addCommentErrorReason: "",
        commentAdded: false,
        isAddingComment: true
      };
    }
    case ADD_COMMENT_SUCCESS:
      const postIndex = state.mainPosts.findIndex(
        (value: any) => value.id === action.data.postId
      );
      const post: any = state.mainPosts[postIndex];
      // const Comments = [...post.Comments, action.data.comment];
      const Comments = [...post.Comments, dummyComment];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };

      return {
        ...state,
        commentAdded: true,
        isAddingComment: false,
        mainPosts
      };

    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addPostErrorReason: action.error,
        isAddingComment: false
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
