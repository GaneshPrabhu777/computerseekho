import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function PaymentForm() {
  const navigate = useNavigate();
  const { enquiry_id, selectedBatchId } = useParams();
  const [student, setStudent] = useState({});
  const [batch, setBatch] = useState({});
  const currentDate = new Date().toISOString().split('T')[0];
  const [payment, setPayment] = useState({
    student_id: -1,
    batch_fees: 0,
    fees_paid: '',
    payment_mode: '',
    payment_date: currentDate, // Default to today's date
  });

  useEffect(() => {
    // Fetch student data based on the enquiry_id parameter
    fetch(`http://localhost:8080/api/getbyenquiry_id/${enquiry_id}`)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
        setPayment((prevPayment) => ({
          ...prevPayment,
          student_id: data[0].student_id,
        }));
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, [enquiry_id, selectedBatchId]);

  useEffect(() => {
    // Fetch batch data based on the selectedBatchId parameter
    if (selectedBatchId) {
      fetch(`http://localhost:8080/api/batch/${selectedBatchId}`)
        .then((batchResponse) => batchResponse.json())
        .then((batchData) => {
          setBatch(batchData);
          setPayment((prevPayment) => ({
            ...prevPayment,
            batch_fees: batchData.batch_fees,
          }));
        })
        .catch((batchError) => {
          console.error('Error fetching batch data:', batchError);
        });
    }
  }, [selectedBatchId]);

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
        const updateEnquiryResponse = await fetch(`http://localhost:8080/api/updateprocessflag/${enquiry_id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (updateEnquiryResponse.ok) {
          console.log('Enquiry closed successfully');
          navigate("/allenq/");
        } else {
          console.error('Error updating enquiry status');
        }
      } else {
        console.error('Error processing payment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancelPay =  (e) => {
     fetch(`http://localhost:8080/api/deletestudbyid/${payment.student_id}`, {
      method: 'DELETE',
    });
    console.log("cancel payment");
    navigate("/studlist")
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student ID:</label>
          <input type="text" value={payment?.student_id} readOnly />
        </div>
        <div>
          <label>Total Fees:</label>
          <input type="number" value={payment?.batch_fees} readOnly />
        </div>
        <div>
          <label>Payment Amount:</label>
          <input
            type="number"
            value={payment.fees_paid}
            onChange={(e) => setPayment({ ...payment, fees_paid: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Payment Mode:</label>
          <select
            value={payment.payment_mode}
            onChange={(e) => setPayment({ ...payment, payment_mode: e.target.value })}
            required
          >
            <option value="">Select payment mode</option>
            <option value="UPI">UPI</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Cheque">Cheque</option>
            <option value="DD">DD</option>
          </select>
        </div>
        {payment.payment_mode !== 'Cash' && (
          <div>
            <label>Transaction ID:</label>
            <input
              type="text"
              value={payment.payment_transaction_id || ""}
              onChange={(e) => setPayment({ ...payment, payment_transaction_id: e.target.value })}
              required
            />
          </div>
        )}
        <div>
          <label>Payment Date:</label>
          <input
            type="date"
            name="payment_date"
            defaultValue={currentDate} // Set the default value here
            onChange={(e) => setPayment({ ...payment, payment_date: e.target.value })}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
      <br/>
      <br/>
      <button onClick={handleCancelPay}>Cancel Payment</button>
    </div>
  );
}

export default PaymentForm;
