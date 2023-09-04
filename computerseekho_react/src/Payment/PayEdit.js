import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import './Payment.css';

function PaymentEdit() {
  const { student_id } = useParams();
  const [paymentData, setPaymentData] = useState([]);
  const [totalFees, setTotalFees] = useState(0);
  const navigate =useNavigate()

  useEffect(() => {
    // Fetch payment records for the specified student_id
    fetch(`http://localhost:8080/api/getpaybystudentid/${student_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPaymentData(data);

        // Calculate the total fees
        const calculatedTotalFees = data.reduce(
          (total, paymentRecord) => total + paymentRecord.fees_paid,
          0
        );
        setTotalFees(calculatedTotalFees);
      })
      .catch((error) => {
        console.error('Error fetching payment data:', error);
      });
  }, [student_id]);

  const handleCancel=()=>{
    navigate(-1)
  }

  return (
    <div className='col-md-8'>
      <h2>Payment Details</h2>
      <br /><br />
      <div>
        <label>Total Batch Fees:</label>
        <input type="text" value={paymentData[0]?.batch_fees} readOnly />
      </div>
      <label>Fees Paid:</label>
      <input
        type="text"
        value={totalFees}
        readOnly
        className={totalFees === paymentData[0]?.batch_fees ? 'green-text' : 'red-text'}
      />
      <div>
        <label>Remaining Fees:</label>
        <input type="text"
          value={paymentData[0]?.batch_fees - totalFees}
          readOnly
          className={paymentData[0]?.batch_fees - totalFees > 0 ? 'red-text' : 'green-text'} />
      </div>
      <br />
      <table className="payment-table">
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Transaction ID</th>
            <th>Payment Mode</th>
            <th>Payment Date</th>
            <th>Paid Fees</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((paymentRecord) => (
            <tr key={paymentRecord.payment_id}>
              <td>{paymentRecord.payment_id}</td>
              <td>{paymentRecord.payment_transaction_id}</td>
              <td>{paymentRecord.payment_mode}</td>
              <td>{new Date(paymentRecord.payment_date).toLocaleDateString()}</td>
              <td>{paymentRecord.fees_paid}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      {paymentData[0]?.batch_fees - totalFees > 0 && ( // Conditionally render the button
        <Link to={`/newpay/${student_id}/${paymentData[0]?.batch_fees}`}>
          <button>Add Payment</button>
        </Link>
      )}
      <br /> <br/> 
      <Link to={`/rec/${student_id}`}>
          <button>Receipt</button>
        </Link>
      <br />
      <button onClick={handleCancel} style={{marginTop:"20px"}}>Cancel</button>
      <br />
      <br />
    </div>
  );
}

export default PaymentEdit;
