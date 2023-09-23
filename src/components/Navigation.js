import { items } from "../utils/constants";
import {Link} from "react-router-dom"

export const Navigation = ({ changePage }) => {
  return (
    <nav className="fixed-top ml-4 mt-2">
      <ul className="nav">
        {items.map(({ text, id }) => (
          <li
            className="btn-danger nav-item btn mx-1 border border-white"
          >
            <Link to={id}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
