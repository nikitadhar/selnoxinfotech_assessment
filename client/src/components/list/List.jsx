import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./list.css";
import {
  BiDotsVerticalRounded,
  BiPencil,
  BiSolidTrashAlt,
  BiShow,
} from "react-icons/bi";

export default function List() {
  const [data, setData] = useState([]);
   

  useEffect(() => {
    axios
      .get("https://sweede.app/DeliveryBoy/Get-Employee/")
      .then((response) => {
        // Update the data state with the API response
        setData(response.data);
        
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error:", error);
         
      });
  }, []);
  function handleSubmit(id) {
    const conf = window.confirm("Do you want to delete data");
    if (conf) {
      axios
        .delete("https://sweede.app/DeliveryBoy/delete-Employee/" + id)
        .then((res) => {
          alert("record has deleted");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <>
      <div className="List_parent_container">
        <h1>Employee List</h1>
        <Link to="/registration">
          <p className="register">Register here</p>{" "}
        </Link>
        <div className="list_table_container">
          <table className="list_table">
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Description </th>
            </tr>

            {data.map((item) => {
              return (
                <>
                  <tr>
                    <td>
                      {item.FirstName} {item.LastName}
                    </td>

                    <td>{item.DOB}</td>
                    {/* <td>{item.Study}</td> */}
                    <td>{item.StartDate}</td>
                    <td>{item.EndDate}</td>
                    {/* <td>{item.CurrentSalary}</td> */}
                    <td>{item.Description}</td>
                    <td className="drop-down">
                      <BiDotsVerticalRounded className="bi_dot" />

                      <div className="edit_uppar">
                        <div className="edit">
                          <p>
                            <BiShow />
                          </p>
                          <p>View</p>
                        </div>
                        <div className="edit">
                          <p>
                            <BiPencil />
                          </p>
                          <Link to={`/EmployeeUpdate/${item.id}`}>
                            {" "}
                            <p>Edit</p>
                          </Link>
                        </div>
                        <div className="edit">
                          <p>
                            <BiSolidTrashAlt />
                          </p>
                          <button onClick={(e) => handleSubmit(item.id)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}
