import EmployeeUpdate from "./pages/EmployeeUpdate";
import Registration from "./pages/Registration";
import EmployeeList from "./pages/EmployeeList"
import Employee from "./pages/Employee"
import {createBrowserRouter,RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:  <EmployeeList></EmployeeList>
  },
  {
    path: "/registration",
    element: <Registration></Registration> 
  },
  {
    path: "/EmployeeUpdate/:id",
    element:  <EmployeeUpdate></EmployeeUpdate>
  },
  {
    path: "/Employee",
    element:  <Employee></Employee>
  },
   
])
function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
