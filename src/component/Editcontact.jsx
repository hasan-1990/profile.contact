import { useState , useEffect } from "react";
import { Link , useParams , useNavigate } from "react-router-dom";

import {
    getContact,
    UpdateContact,
    getAllGroups
} from "./serverurl"

import Spiner from "./Spiner";
import { PURPLE , COMMENT , RED } from "./helper/color";

const EditContact = ({forceRender , setForceRender}) => {
    const { contactId } = useParams();
    const navigate = useNavigate();

    const [state , setState] = useState({
        loading : false,
        contact : {
            name : "",
            email : "",
            mobilenumber : "",
            address : "",
            group : "",
            job : "",
            photo : ""
        },


        groups: [

        ],
    });

    useEffect(()=>{
        const fetchData = async () => {
            try{
                setState({...state , loading : true});
                const { data : contactData } = await getContact(contactId);
                const { data : groupsData } = await getAllGroups();
                setState({...state , loading : false , contact : contactData , groups : groupsData});
            }catch(err){
                console.log(err);
                setState({...state , loading : false});
            }
        };
        fetchData();
    },[]);
    const setContactinfo = (event) => {
        setState({...state , contact : {...state.contact , [event.target.name] : event.target.value,},});
    };

    const submitForm = async (event) => {
        event.preventDefault();
        try{
            setState({...state , loading : true});
            const {data} =  await UpdateContact(state.contact , contactId);
            setState({...state , loading : false});
            if(data){
                setForceRender(!forceRender)
                navigate("/contacts");
            }
        }catch(err){
            console.log(err);
            setState({...state , loading : false});
        }
    }
    const { loading , contact , groups } = state;

    return (
        <>
            {loading ? ( <Spiner /> ): (
                <>
                    <section className="view-contact-intro p-3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="h4 fw-bold text-center" style={{ color : RED}}>ویرایش مخاطب</p>
                                </div>
                            </div>
                            <hr />
                            <hr style={{backgroundColor : RED}} />
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <form onSubmit={submitForm}>
                                        <div className="mb-2">
                                            <input type="text" name="name" value={contact.fullname} onChange={setContactinfo} className="form-control" placeholder="نام و نام خوانوادگی " required={true} />

                                        </div>
                                        <div className="mb-2">
                                            <input type="text" name="photo" value={contact.photo} onChange={setContactinfo} className="form-control" placeholder="ادرس عکس" required={true} />

                                        </div>
                                        <div className="mb-2">
                                            <input type="text" name="mobilenumber" value={contact.mobilenumber} onChange={setContactinfo} className="form-control" placeholder="شماره تماس" required={true} />

                                        </div>,
                                        <div className="mb-2">
                                            <input type="text" name="email" value={contact.email} onChange={setContactinfo} className="form-control" placeholder="ادرس ایمیل" required={true} />

                                        </div>,
                                        <div className="mb-2">
                                            <input type="text" name="job" value={contact.job} onChange={setContactinfo} className="form-control" placeholder="شغل" required={true} />

                                        </div>,
                                        <div className="mb-2">
                                            <select name="group" value={contact.group} onChange={setContactinfo} className="form-control" required={true}>
                                                <option value="">انتخاب گروه</option>
                                                {
                                                    groups.length > 0 && 
                                                    groups.map((group)=>(
                                                        <option key={group.id} value={group.id}>{group.name}</option>
                                                    ))
                                                    
                                                }
                                            </select>
                                        </div>

                                        <div className="mx-2">
                                            <input type="submit"  className="btn" style={{backgroundColor :PURPLE}} value="ویرایش مخاطب"/>
                                            <Link to={"/contacts"} className="btn mx-2" style={{backgroundColor : COMMENT}}>انصراف</Link>
                                        </div>

                                    </form>
                                </div>
                                <div className="col-md-4"> <img src={contact.photo} alt="1" className="img-fluid rounded"  style={{border : `1px solid ${PURPLE}`}}/></div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

export default EditContact;
    