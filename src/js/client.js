import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import configureStore from './store/configureStore';
import Home from "./containers/Home"

const store = configureStore();

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
  <Home />
</Provider>, app);
