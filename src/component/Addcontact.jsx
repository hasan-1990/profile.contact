

import { Link } from "react-router-dom";
import Spinner from "../component/Spiner";
import add from "../gif/add.jpg";
import { COMMENT, GREEN, PURPLE } from "../component//helper//color";
import { useContext } from "react";
import { ContactContext } from "../context/Contactcontext";
const AddContact = () => {
  const {loading, contact, groups, createContact , setContact , onContactChange} = useContext(ContactContext);
  // const onContactChange = (event) => {
  //   const { name, value } = event.target;
  //   setContact({ ...contact, [name]: value });
  // };
  
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-3">
            <img
              src={add}
              alt="222"
              height="400px"
              style={{
                position: "absolute",
                zIndex: "-1",
                top: "130px",
                left: "100px",
                opacity: "50%",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                    style={{ color: GREEN }}
                  >
                    ساخت مخاطب جدید
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: GREEN }} />
              <div className="row mt-5">
                <div className="col-md-4">
                  <form onSubmit={createContact}>
                    <div className="mb-2">
                      <input
                        type="search"
                        name="fullname"
                        value={contact.fullname}
                        onChange={onContactChange}
                        placeholder="نام و نام خانوادگی"
                        className="form-control"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="search"
                        name="photo"
                        value={contact.photo}
                        onChange={onContactChange}
                        placeholder="ادرس عکس"
                        className="form-control"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="search"
                        name="mobilenumber"
                        value={contact.mobilenumber}
                        onChange={onContactChange}
                        className="form-control"
                        placeholder="شماره تماس"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="search"
                        name="telegramID"
                        value={contact.telegramID}
                        onChange={onContactChange}
                        className="form-control"
                        placeholder="ایدی تلگرام"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="search"
                        name="city"
                        value={contact.city}
                        onChange={onContactChange}
                        className="form-control"
                        placeholder="شهر"
                        required={true}
                      />
                    </div>
                   
                    <div className="mb-2">
                      <input
                        type="search"
                        name="email"
                        value={contact.email}
                        onChange={onContactChange}
                        className="form-control"
                        placeholder="آدرس ایمیل"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="search"
                        name="job"
                        value={contact.job}
                        onChange={onContactChange}
                        className="form-control"
                        placeholder="شقل"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        name="group"
                        className="form-control"
                        required={true}
                      >
                        <option value="">انتخاب گروه</option>
                        {groups.length > 0 &&
                          groups.map((group) => (
                            <option key={group.id} value={group.id}>
                              {group.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="mx-2">
                      <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: PURPLE }}
                        value="ساخت مخاطب"
                      />
                      <Link
                        to={"/contacts"}
                        className="btn mx-2"
                        style={{ backgroundColor: COMMENT }}
                      >
                        انصراف
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default AddContact;
