import { useState } from "react";
import "../App.css";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

function Home() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <Header changePage={setPage} title={"Luke Skywalker"}/>
      <Main page={page} />
      <footer></footer>
    </div>
  );
}

export default Home;
