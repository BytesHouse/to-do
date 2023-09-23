import { Navigation } from "./Navigation";

export const Header = ({ changePage, title }) => {
  return (
    <header>
      <Navigation changePage={changePage} />
      <h1 className="text-center py-3">{title}</h1>
    </header>
  );
};
