import { Link , useParams} from "react-router-dom";
import { CYAN, COURENTLINE, PURPLE } from "./helper/color";
import { useState, useEffect } from "react";
import { getContact , getGroup} from "./serverurl";
import Spiner from "./Spiner"
import { useContext } from "react";
import { ContactContext } from "../context/Contactcontext";
const Viewcontact = () => {
  const { contactId } = useParams();
  const [state , setState] = useState({
    loading : false,
    contact : {},
    group : {},
  })
  useEffect(()=>{
    const fetchData = async () => {
try{
  setState({...state , loading : true})

  const { data: contactData } = await getContact(contactId);
  const { data: groupData } = await getGroup(contactData.group);
  setState({...state ,loading : false , contact : contactData , group : groupData})

} catch (error) {
  console.log(error.massege);
  setState({...state , loading : false})
  
}
}
fetchData()
},[])
  const{ loading , contact , group}= state;
  return (
    <>
      <section className="view-contact-intro p3"></section>
      <hr style={{ backgroundColor: CYAN }} />
    {loading ? <Spiner /> : (
      <section className="view-contact mt-e">
        <div
          className="container p-2"
          style={{ borderRadius: "1em", backgroundColor: COURENTLINE }}
        ></div>
        <div className="row align-items-center justify-content-around p-5">
          <div className="col-md-3 d-flex">
            <img
              className="img-fluid rounded w-50 h-50"
              style={{ border: `1px solid ${PURPLE}` }}
              src="https://placehold.co/150x150/orange/white"
              alt=""
            />
            <div className="col-md-8 d-flex">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  نام و نام خوانوادگی:
                  <span className="fw-bold">{contact.fullname}</span>
                  
                </li>
                <li className="list-group-item list-group-item-dark">
                  شماره تماس:
                  <span className="fw-bold">{contact.mobilenumber}</span>
                  
                </li>
                <li className="list-group-item list-group-item-dark">
                  شهر:
                  <span className="fw-bold">{contact.city}</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  ادرس ایمیل:
                  <span className="fw-bold">{contact.email}</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  گروه:
                  <span className="fw-bold">{group.id}</span>
                </li>
              </ul>
              <div className="row my-2">
                <div className="col-12 flex-reverse">
                  
                  <Link
                    to={"/contacts"}
                    className="btn"
                    style={{ backgroundColor: PURPLE }}
                  >
                    بازگشت به صفحه اصلی
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )}
    </>
  );
};

export default Viewcontact;