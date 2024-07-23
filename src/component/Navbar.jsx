import React from "react";
import { useLocation } from "react-router-dom";
import { PURPLE, BACKGROUND, FORGROUND } from "./helper/color";
import Search from "./Search";


const Navbar = () => {
  const location = useLocation();
  

  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ background: BACKGROUND }}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col navbar-brand">
            <i className="fa fa-user p-1" style={{ color: FORGROUND }}></i> وب
            اپلیکیشن <span style={{ color: PURPLE }}> شماره تماس </span>
          </div>

          {
            location.pathname=== "/contacts" ? (
              <div className="col">
            <Search />
          </div>
            ) : null
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
