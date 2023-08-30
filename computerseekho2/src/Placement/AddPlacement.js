import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPlacement.css'; // Import the CSS file for styling

function AddPlacement() {
   const [placement, setAddPlacement] = useState({});
   let navigate = useNavigate();

   const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setAddPlacement((values) => ({ ...values, [name]: value }));
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      let demo = JSON.stringify(placement);
      fetch('http://localhost:8080/api/addplacement', {
         method: 'POST',
         headers: { 'Content-type': 'application/json' },
         body: demo,
      })
         .then(() => {
            alert('Pacement added successfully!');
            navigate("/placerecord");
         })
         .catch((error) => {
            console.error('Error adding placement:', error);
         });
   };

   return (
      <div className="centered-form">
         <form className="placement-form" onSubmit={handleSubmit}>
            {/* <label>Placement ID</label>
            <input
               disabled
               type="text"
               name="placementid"
               value={placement.placementid || ''}
               onChange={handleChange}
            /> */}
            <label>Batch ID</label>
            <input
               type="text"
               name="batchid"
               value={placement.batchid || ''}
               onChange={handleChange}
            />
            <label>Course Name</label>
            <input
               type="text"
               name="coursename"
               value={placement.coursename || ''}
               onChange={handleChange}
            />
            <label>Total Students</label>
            <input
               type="text"
               name="total_student"
               value={placement.total_student || ''}
               onChange={handleChange}
            />
            <label>Placed Students</label>
            <input
               type="text"
               name="placedstudents"
               value={placement.placedstudents || ''}
               onChange={handleChange}
            />
            <button type="submit">Submit</button>
         </form>
      </div>
   );
}

export default AddPlacement;
