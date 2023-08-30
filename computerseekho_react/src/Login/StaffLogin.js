import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function StaffLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [staffId, setStaffId] = useState(null); // State to store staff_id

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            // Fetch staff data from the API based on username
            const response = await fetch('http://localhost:8080/api/stafflog/'+username);
            const staffData = await response.json();
    
            if (Array.isArray(staffData)) {
                const validUser = staffData.find(
                    staffEntry => staffEntry.staff_password === password 
                );
    
                if (validUser) {
                    setLoggedIn(true);
                    setStaffId(validUser.staff_id); // Save staff_id
                } else {
                    console.log('Invalid credentials');
                }
            } else if (typeof staffData === 'object') {
                if (staffData.staff_password === password && staffData.staff_isactive ) {
                    setLoggedIn(true);
                    setStaffId(staffData.staff_id); // Save staff_id
                } else {
                    console.log('Invalid credentials');
                }
            } else {
                console.log('Invalid response format');
            }
        } catch (error) {
            console.error('Error fetching staff data:', error);
        }
    };

    if (loggedIn) {
        // Pass staff_id as a query parameter to the navigated page
        return <Navigate to={`/followups?staff_id=${staffId}`} />;
    }

    return (
        <div className="container mt-5">
        <br/><br/><br/><br/>
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Staff Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/>

    </div>
    );    
}

export default StaffLogin;
