import { Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context/GlobalContext";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
import "./App.css";
function App() {
  return (
    <div className="container">
      <ContextProvider>
        <Routes>
          <Route
            path="/"
            caseSensitive={false}
            element={<ListItem />}
          />
          <Route
            path="/edit/:id"
            caseSensitive={false}
            element={<Form />}
          />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
