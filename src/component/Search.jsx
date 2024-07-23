import React from "react";
import { COURENTLINE, PURPLE } from "./helper/color";
import { useContext } from "react";
import { ContactContext } from "../context/Contactcontext";
const Search = () => {
  const { contactQuery , contactSearch } = useContext(ContactContext);
  return (
    <React.Fragment>
      <div className="col">
        <div className="input-group mx-2 w-75" dir="ltr">
          <span
            className="input-group-text"
            style={{ backgroundColor: PURPLE }}
          >
            <i className="fa fa-search"></i>
          </span>
          <input
            dir="rtl"
            type="text"
           value={contactQuery.text}
           onChange={contactSearch}
            style={{
              backgroundColor: COURENTLINE,
              borderColor: COURENTLINE,
              color: "Yellow",
            }}
            className="form-control"
            placeholder="جستجو مخاطب مورد نظر"
          />
          
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
