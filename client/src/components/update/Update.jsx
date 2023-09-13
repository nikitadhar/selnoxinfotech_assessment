import React from "react";
// import {   useParams } from "react-router-dom";
import "./update.css";
import JoditEditor from "jodit-react";
// import axios from "axios";

export default function Update() {
  // const [content, setContent] = useState("");
  // const editor = useRef(null);
  // const {id} = useParams();
  // const [values, setValues]=useState({
  //     id:id,
  //     FirstName: '',
  //     LastName: '',
  //     DOB:'',
  //     Study:'',
  //     StartDate:'',
  //     EndDate:'',
  //     CurrentSalary:''

  // })
  // useEffect(()=>{
  //     axios.put("https://sweede.app/DeliveryBoy/update-Employee/"+id)
  //     .then(res =>{

  //         setValues({...values, FirstName:res.data.FirstName, DOB:res.data.DOB,StartDate:res.data.StartDate,EndDate:res.data.EndDate,CurrentSalary:res.data.CurrentSalary })
  //     })
  //     .catch(err => console.Console.log(err))
  // },[])

  return (
    <>
      <div className="register_parent_container">
        <h1>Employee Registration Form</h1>
        <form action="" className="registrationform">
          <label htmlFor="">Name</label>
          <div className="">
            <input
              type="text"
              name="FirstName"
              id=""
              // value={values.FirstName}
              placeholder="Enter your name"
            />
          </div>
          <label htmlFor="">DOB</label>
          <div>
            <input
              type="date"
              name="DOB"
              placeholder="Enter your dob"
              // value={values.DOB}
            />
          </div>

          <div>
            <div>
              <label htmlFor="">Start Date</label>
              <div>
              <input type="date" name="StartDate"
                //  value={values.StartDate}
                  />
              </div>
            </div>
            <div>
              <label htmlFor="">End Date</label>
              <input type="date" name="EndDate"
              //  value={values.LastName} 
               />
            </div>
          </div>

          <label htmlFor="">Description</label>
          <div className="editor">
            <JoditEditor
              // onChange={handleInputChange}
              // ref={editor}
              // name={description}
              // tabIndex={1} // tabIndex of textarea
              //   onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            />
          </div>
          <button>Cancel</button>
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}
