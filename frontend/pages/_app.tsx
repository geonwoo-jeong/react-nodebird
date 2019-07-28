import withRedux from "next-redux-wrapper";
import Head from "next/head";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import AppLayout from "../components/AppLayout";
import reducer from "../reducers";

const NodeBird = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object
};

export default withRedux((initialState, options) => {
  const middlewares = [];
  const composeEnhancers = composeWithDevTools({});
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(NodeBird);
