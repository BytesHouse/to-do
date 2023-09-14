import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <Header changePage={setPage} />
      <Main page={page} />
      <footer></footer>
    </div>
  );
}

export default App;
