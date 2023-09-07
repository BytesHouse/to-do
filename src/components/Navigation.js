import { items } from "../utils/constants";

export const Navigation = () => {
  return (
    <nav className="fixed-top ml-4 mt-2">
      <ul className="nav">
        {items.map(({ text }) => (
          <li className="btn-danger nav-item btn mx-1 border border-white">
            {text}
          </li>
        ))}
      </ul>
    </nav>
  );
};
