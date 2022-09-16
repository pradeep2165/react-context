import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="pradeep">
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
