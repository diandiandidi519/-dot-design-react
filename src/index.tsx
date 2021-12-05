import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.scss";
import Button, { ButtonType, ButtonSize } from "./components/Button";
ReactDOM.render(
  <React.StrictMode>
    <Button
      btnType={ButtonType.Primary}
      size={ButtonSize.Large}
      disabled={true}
    >
      primary, large
    </Button>
    <Button
      btnType={ButtonType.Danger}
      size={ButtonSize.Small}
      onClick={(e) => {
        alert(e);
      }}
    >
      danger, small
    </Button>
    <Button btnType={ButtonType.Default}>default</Button>
    <Button btnType={ButtonType.Link} href="https://github.com/">
      link
    </Button>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
