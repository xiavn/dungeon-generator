import React from "react";
import { render } from "react-dom";
import App from "app";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"),
);
registerServiceWorker();
