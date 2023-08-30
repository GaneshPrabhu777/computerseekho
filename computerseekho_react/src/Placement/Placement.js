import React from 'react';

function Placement() {
    // Placeholder data for college placement related information
    const placementData = [
        {
            company: 'ABC Corporation',
            role: 'Software Engineer',
            package: '10 LPA',
            year: 2023,
        },
        {
            company: 'XYZ Tech',
            role: 'Data Analyst',
            package: '8 LPA',
            year: 2023,
        },
        // Add more placement data as needed
    ];

    return (
        <div>
            <h2>College Placement Data</h2>
            <table className="placement-table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Role</th>
                        <th>Package</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {placementData.map((placement, index) => (
                        <tr key={index}>
                            <td>{placement.company}</td>
                            <td>{placement.role}</td>
                            <td>{placement.package}</td>
                            <td>{placement.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Placement;
