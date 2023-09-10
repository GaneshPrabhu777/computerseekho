import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function NewPayment() {
  // Use the useParams hook to access URL parameters
  const { student_id, batch_fees } = useParams();
  const navigate = useNavigate();

  // Define the current date in the format "YYYY-MM-DD"
  const currentDate = new Date().toISOString().split('T')[0];

  // Define state variables for form input values
  const [payment, setPayment] = useState({
    student_id: student_id,
    batch_fees: batch_fees,
    fees_paid: '',
    payment_date: currentDate, // Use the current date as the default value
    payment_mode: '',
    payment_transaction_id: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayment({ ...payment, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit payment details to the backend
    try {
      const response = await fetch('http://localhost:8080/api/addpayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payment),
      });

      if (response.ok) {
        // Payment successful
        console.log('Payment successful');
        
        // After successful payment, you can navigate to a different route
        navigate(`/pay/${student_id}`); // Modify the route as needed
      } else {
        console.error('Error processing payment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancel= ()=>{
    navigate(-1)
  }

  return (
    <div>
      <h2>New Payment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student ID:</label>
          <input type="text" value={payment.student_id} readOnly />
        </div>
        <div>
          <label>Batch Fees:</label>
          <input type="text" value={payment.batch_fees} readOnly />
        </div>
        <div>
          <label>Payment Amount:</label>
          <input
            type="number"
            name="fees_paid"
            value={payment.fees_paid}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Payment Date:</label>
          <input
            type="date"
            name="payment_date"
            value={payment.payment_date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Payment Mode:</label>
          <select
            name="payment_mode"
            value={payment.payment_mode}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Payment Mode</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="UPI">UPI</option>
            {/* Add more payment modes as needed */}
          </select>
        </div>
        {payment.payment_mode !== 'Cash' && (
          <div>
            <label>Transaction ID:</label>
            <input
              type="text"
              name="payment_transaction_id"
              value={payment.payment_transaction_id}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        <div>
          <button type="submit" style={{marginTop:"20px"}}>Submit</button>
          <br/>
          <button onClick={handleCancel} style={{marginTop:"20px"}}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default NewPayment;
