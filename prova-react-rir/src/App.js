import "./App.css";
import LayoutModel from "./components/layout/LayoutModel";
import { Header } from "antd/lib/layout/layout";

function App() {
  return (
    <Header className="header">
      <div className="App">
        <LayoutModel></LayoutModel>
      </div>
    </Header>
  );
}

export default App;
