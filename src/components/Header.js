import { Navigation } from "./Navigation";

export const Header = ({ changePage }) => {
  return (
    <header>
      <Navigation changePage={changePage} />
      <h1 className="text-center py-3">Luke Skywalker</h1>
    </header>
  );
};
