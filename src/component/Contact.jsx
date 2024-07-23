import { Link } from "react-router-dom";
const Contact = ({contact , deleteContact}) => {

  return (
    <>
      <div className="col-6 p-2">
        <div className="card">
          <div className="card-body">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-3">
              
                <img src={contact.photo || "https://placehold.co/150x150/orange/white"} style={{width:"150px" ,height:"150px"}}  alt="0"/>
              </div>
              <div className="col-7">
                <ul className="list-group">
                  <li className="list-group-item">
                    نام و نام خوانوادگی:
                    <span className="fw-bold"> {contact.fullname}</span>
                  </li>
                  <li className="list-group-item">
                    شماره تماس:<span className="fw-bold">{contact.mobilenumber}</span>
                  </li>
                  <li className="list-group-item">
                    شهر:<span className="fw-bold">{contact.city}</span>
                  </li>
                  <li className="list-group-item">
                    ادرس ایمیل:
                    <span className="fw-bold">{contact.email}</span>
                  </li>
                  <li className="list-group-item">
                    ایدی تلگرام:
                    <span className="fw-bold">{contact.telegramID}</span>
                  </li>
                  <li className="list-group-item">
                    شغل:
                    <span className="fw-bold"> {contact.job}</span>
                  </li>
                  <li className="list-group-item">
                    گروه:
                    <span className="fw-bold"> {contact.group}</span>
                  </li>
                </ul>
              </div>
              <div className="col-1">
                <Link to={contact.id} className="btn btn-warning my-1">
                  <i className="fa fa-eye"></i>{" "}
                </Link>
                <Link to={`edit/${contact.id}`} className="btn btn-info my-1  ">
                  <i className="fa fa-edit"></i>{" "}
                </Link>
                <button onClick={deleteContact} className="btn btn-danger my-1  ">
                  <i className="fa fa-trash"></i>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
