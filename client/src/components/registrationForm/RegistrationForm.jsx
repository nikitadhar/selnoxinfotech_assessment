import React from "react";
import { useState, useRef } from "react";
import "./registrationForm.css";
import JoditEditor from "jodit-react";
import axios from "axios";

export default function RegistrationForm() {
  const editor = useRef(null);
  // const [content, setContent] = useState("");
  const [postData, setPostData] = useState({
    FirstName: "",
    LastName: "",
    DOB: "",
    Study: "",
    StartDate: "",
    EndDate: "",
    CurrentSalary: "",
    Description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  const HandleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await axios.post(
        "https://sweede.app/DeliveryBoy/Add-Employee/",
        postData
      );

      console.log("Response from API:", response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <>
      <h1 className="text-blue-600 text-center text-2xl -pb-30 mt-3">
        Employee Registration Form
      </h1>
      <div className="register_parent_container">
        <form action="" className="pt-6 pl-16 pr-8" onSubmit={HandleSubmit}>
          <div className="flex gap-24 mb-4">
            <div>
              <label htmlFor="">First Name*</label>
              <div className="">
                <input
                  type="text"
                  name="FirstName"
                  id=""
                  className="bg-slate-200   w-100 p-2 border-r-8 rounded-lg"
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="">Last Name*</label>
              <div>
                <input
                  type="text"
                  name="LastName"
                  onChange={handleInputChange}
                  id=""
                  className="bg-slate-200   w-100 p-2 border-r-8 rounded-lg "
                  placeholder="Enter your name"
                />
              </div>
            </div>
          </div>
          <label htmlFor="">DOB</label>
          <div>
            <input
              type="date"
              name="DOB"
              placeholder="Enter your dob"
              className="bg-slate-200  w-[32rem] p-2 border-r-8 rounded-lg mb-4"
              onChange={handleInputChange}
            />
          </div>
          <label htmlFor="">Study</label>
          <div>
            {/* <input type="text" placeholder="B.E."
           className="bg-slate-200  w-[32rem] p-2 border-r-8 rounded-lg mb-4" 
          name="Study" onChange={handleInputChange} /> */}
            <select
              name=""
              id=""
              className="bg-slate-200  w-[32rem] p-2 border-r-8 rounded-lg mb-4"
              onChange={handleInputChange}
            >
              <option value="">B.E</option>
              <option value="">MCA</option>
              <option value="">BCA</option>
              <option value="">BSC</option>
              <option value="">BCOM</option>
            </select>
          </div>

          <div className="flex gap-24 mb-4">
            <div>
              <label htmlFor="">Start Date</label>
              <div>
                <input
                  type="date"
                  name="StartDate"
                  className="bg-slate-200 w-52 p-2 border-r-8 rounded-lg "
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="">End Date</label>
              <div>
                <input
                  type="date"
                  name="EndDate"
                  className="bg-slate-200   w-52 p-2 border-r-8 rounded-lg "
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <label htmlFor="">Current Salary</label>
          <input
            type="text"
            name="CurrentSalary"
            className="bg-slate-200  w-[32rem] p-2 border-r-8 rounded-lg mb-4"
            placeholder="30000"
            onChange={handleInputChange}
          />
          <label htmlFor="">Description</label>
          
            <p onChange={handleInputChange} >
              <JoditEditor ref={editor}    tabIndex={1} />
            </p>
        
          <div className="flex gap-10 justify-center mt-10 pb-10">
            <button className="rounded-lg border p-3 w-32 bg-slate-200  ">
              Cancel
            </button>
            <button
              className="rounded-lg border p-3 w-32 border-indigo-500/100"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
