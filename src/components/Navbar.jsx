import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navlinks = <>
        <div className="flex gap-5 text-base font-medium">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/listed-books">Listed Books</NavLink>
            <NavLink to="/pages-to-read">Pages to read</NavLink>
        </div>
    </>
    return (
        <div className="navbar my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a className="text-xl font-bold">Book Lover Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <Link to="/signin"><button className="btn bg-green-500 text-white">Sign In</button></Link>
                <Link to="/signup"><button className="btn btn-accent text-white">Sign Up</button></Link>
            </div>
        </div>
    );
};

export default Navbar;