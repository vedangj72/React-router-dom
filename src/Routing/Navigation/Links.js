import { NavLink, Outlet } from "react-router-dom";
export default function Navik() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className=" col-11">
            <NavLink to="/">
              <h1 className=" text-light  ">Router</h1>
            </NavLink>
            <NavLink to="/home" className=" m-3 btn btn-primary ">
              Home
            </NavLink>
            {/* <NavLink to="/"></NavLink> */}
            <NavLink to="/about" className="btn btn-primary">
              About us
            </NavLink>
            <NavLink to="/help" className="btn btn-primary m-2 ">
              Help
            </NavLink>
          </div>
          <div className=" col-1">
            <NavLink>
              <span
                className="bi bi-box-arrow-right"
                style={{ fontSize: "50px" }}
              ></span>
            </NavLink>
          </div>
        </nav>
      </header>
      <main className=" m-2 ">
        <Outlet />
      </main>
    </div>
  );
}
