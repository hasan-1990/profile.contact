import React from "react";
import Contact from "./Contact";
import { COMMENT,BACKGROUND } from "./helper/color";
import Spiner from "./Spiner";
import { Link } from "react-router-dom";
import { ContactContext } from "../context/Contactcontext";
import { useContext } from "react";

const Contacts = () => {
  const { loading , deleteContact , filteredContacts} = useContext(ContactContext);
  return (
    <div>
      <React.Fragment>
        <section className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 ">
                  <Link to={"add"}
                    className="btn mx-2 m-2"
                    style={{ backgroundColor: COMMENT }}
                  >
                    <i className="fa fa-plus"></i>افزودن مخاطب جدید
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
       {
        loading ? <Spiner /> : 


        filteredContacts && filteredContacts.length > 0 ? filteredContacts.map((contact) => {
                  return <Contact key={contact.id} contact={contact} deleteContact={()=> deleteContact (contact.id , contact.contactFullname)} />;
                }) : (<h3 className=" text-danger text-center p-3" style={{backgroundColor : BACKGROUND}}>مخاطبی یافت نشد</h3>)
              }

            </div>
          </div>
        </section>
        
      </React.Fragment>
    </div>
  );
};

export default Contacts;
