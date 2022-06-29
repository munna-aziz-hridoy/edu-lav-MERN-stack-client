import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="py-4 px-6">
      <nav className="flex justify-between">
        <div>
            <Link to='/'>
                Edu Lab
            </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Courses</Link>
          </li>
          <li>
            <Link to="/">Courses</Link>
          </li>
          <li>
            <Link to="/">Courses</Link>
          </li>
          <li>
            <Link to="/">Courses</Link>
          </li>
          <li>
            <Link to="/">Courses</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
