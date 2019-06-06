import React from "react";
import { Provider } from "react-redux";
// import Sidebar from "./components/Sidebar";
// import Video from "./components/Video";
// import Sandbox from "./components/Sandbox";
import "./App.css";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Sandbox /> */}
        {/* <Sidebar />
        <Video /> */}
      </Provider>
    </div>
  );
}

export default App;
