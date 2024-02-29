import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export default function Help() {
  return (
    <div className=" container text-center">
      <h1>Welcome to help page of Router</h1>
      <section className=" m-3">
        <NavLink to="faq" className="btn btn-primary m-2">
          FAQ
        </NavLink>
        <NavLink to="contact" className="btn btn-primary m-2">
          Contact Us
        </NavLink>
      </section>
      <Outlet />
    </div>
  );
}
