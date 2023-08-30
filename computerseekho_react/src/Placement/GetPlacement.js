import React, { useState, useEffect } from 'react';
import './GetPlacement.css'; // Import the CSS file

function GetPlacement(props) {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/getplacement")
      .then(res => res.json())
      .then(result => {
        setPlacements(result);
      });
  }, []);

  const calculatePlacementPercent = (placed, total) => {
    if (total === 0) {
        return 0;
    }
    return ((placed / total) * 100).toFixed(2);
};

  return (
    <div className="placement-table-container">
            <h2 align="center">Placement Data</h2>
            <br/><br/>
            <table className="placement-table">
                <thead>
                    <tr>
                        {/* <th>Placement ID</th> */}
                        <th>Batch ID</th>
                        <th>Course Name</th>
                        <th>Total Students</th>
                        <th>Placed Students</th>
                        <th>Placement Percent</th>
                    </tr>
                </thead>
                <tbody>
                    {placements.map(placement => (
                        <tr key={placement.placemetid}>
                            {/* <td>{placement.placemetid}</td> */}
                            <td>{placement.batchid}</td>
                            <td>{placement.coursename}</td>
                            <td>{placement.total_student}</td>
                            <td>{placement.placedstudents}</td>
                            <td>{calculatePlacementPercent(placement.placedstudents, placement.total_student)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
  );
}

export default GetPlacement;
