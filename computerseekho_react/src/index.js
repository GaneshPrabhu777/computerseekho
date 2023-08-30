import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './About/AboutUs';
import Contactus from './Contactus';
import 'bootstrap/dist/css/bootstrap.css';
import StaffLogin from './Login/StaffLogin';
import NoPage from './NoPage';
import AddEnquiry from './StaffDashboard/AddEnquiry';
import AllEnq from './StaffDashboard/AllEnq';
import Followups from './StaffDashboard/Followups';
import StudentRegistrationForm from './Student/Registor'
import CourseList from './Courses/CourseList'
import Course from './Courses/Course'
import CourseEdit from './Courses/CourseEdit'
import CourseCreate from './Courses/CourseCreate'
import CourseDelete from './Courses/CourseDelete'
import AllStaff from './Staff/AllStaff';
import AdminLogin from './Login/AdminLogin';
import Admindash from './Admin_panel/Admindash';
import AllStaffAdmin from './Staff/AllStaffAdmin';
import CreateStaff from './Staff/CreateStaff';
import StaffEdit from './Staff/StaffEdit';
import GetPlacement from './Placement/GetPlacement';
import AddPlacement from './Placement/AddPlacement';
import StaffSidePlacement from './Placement/StaffSideplacement';
import PlacementEdit from './Placement/PlacementEdit';
import AdminAllEnq  from './Admin_panel/AdminAllenq';
import AddBatchForm from './Batch/AddBatch';
import StudentTable from './Student/StudentTable';
import EditStudentForm from './Student/EditStudent';
import Call from './StaffDashboard/Call';
import UpcomingBatchTable from './Batch/BatchList';
import Gallery from './Gallery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} >
          <Route path="/" element={<Home />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path="About" element={<AboutUs />} />
          <Route path="Placement" element={<GetPlacement />} />
          <Route path="gallery" element={<Gallery />} />


          <Route path="Stafflogin" element={<StaffLogin />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="admindash" element={<Admindash />} />
          <Route path="batchcreate" element={<AddBatchForm />} />

          <Route path="followups" element={<Followups />} />
          <Route path="addenq" element={<AddEnquiry />} />
          <Route path="allenq" element={<AllEnq />} />
          <Route path="newreg" element={<StudentRegistrationForm />} />
          <Route path="placerecord" element={<StaffSidePlacement />} />
          <Route path="addplace" element={<AddPlacement />} />
          <Route path="editplace/:id" element={<PlacementEdit />} />
          
          <Route path="enqlist" element={<AdminAllEnq />} />
          <Route path="batch" element={<UpcomingBatchTable />} />
          <Route path="studlist" element={<StudentTable />} />
          <Route path="studentedit/:id" element={<EditStudentForm />} />
          <Route path="addstudent" element={<StudentRegistrationForm />} />
          <Route path="call/:id" element={<Call />} />
          
          <Route path="courselist" element={<CourseList />} />
          <Route path="courses/:id" element={<Course />} />
          <Route path="coursesedit/:id" element={<CourseEdit />} />
          <Route path="coursesdel/:id" element={<CourseDelete />} />
          <Route path="coursecreate" element={<CourseCreate />} />
          
          <Route path="showstaff" element={<AllStaffAdmin />} />
          <Route path="addstaff" element={<CreateStaff />} />
          <Route path="staff/:id" element={<StaffEdit />} />
          {/* <Route path="staff/:id" element={<Course />} /> */}


          <Route path="allstaff" element={<AllStaff />} />


        </Route>

        <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
