import { Link, NavLink } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful");
      })
      .catch(() => {});
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="ml-2">
        <NavLink to="/allTouristsSpot">All Tourists Spot</NavLink>
      </li>
      <li className="ml-2">
        <NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink>
      </li>
      <li className="ml-2">
        <NavLink to={`/myLists/${user?.email}`}>My List</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">TravelVista</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="avatar mr-2 hover:cursor-pointer">
          <div className="w-12 rounded-full">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user?.displayName}
            >
              <img src={user?.photoURL} />
            </a>
            <Tooltip id="my-tooltip" />
          </div>
        </div>
        <div>
          {user ? (
            <>
              <button
                className="btn px-12 rounded-full bg-emerald-900 text-white hover:text-black font-semibold text-lg"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn px-12 rounded-full bg-emerald-900 text-white hover:text-black font-semibold text-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
