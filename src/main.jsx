import React from "react";
import * as ReactDOMClient from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import App from "./App";

const MyApp = reactToWebComponent(App, React, ReactDOMClient);

customElements.define("my-app", MyApp);
