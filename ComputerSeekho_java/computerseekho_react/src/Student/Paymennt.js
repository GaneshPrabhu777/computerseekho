import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function PaymentForm() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({});
  const [batch, setBatch] = useState({});
  const { enquiry_id, selectedBatchId } = useParams();
  const [payment, setPayment] = useState({
    student_id: -1,
    batch_fees: 0,
    fees_paid: '',
    payment_mode: '',
    payment_date: '',
  });

  useEffect(() => {
    // Fetch student data based on the enquiry_id parameter
    console.log('i', enquiry_id, selectedBatchId)
    fetch(`http://localhost:8080/api/getbyenquiry_id/${enquiry_id}`)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
        console.log('j', data);
        setPayment((prevPayment) => ({
          ...prevPayment,
          student_id: data[0].student_id,
          // You can set other payment properties here if needed
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
          console.log(batch);
          setPayment((prevPayment) => ({
            ...prevPayment,
            batch_fees: batchData.batch_fees,
            // You can set other payment properties here if needed
          }));
        })
        .catch((batchError) => {
          console.error('Error fetching batch data:', batchError);
        });
    }
  }, [selectedBatchId]);

  const handleSubmit = async (e) => {
    console.log(payment)
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
          navigate("/studlist")
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

  const handleCancelPay = async (e) => {
    // e.preventDefault();
    await fetch(`http://localhost:8080/api/deletestudbyid/${payment.student_id}`, {
      method: 'DELETE',
    });
    console.log("cancel payment")
    navigate("/allenq")
  };

  return (
    <div>
      {console.log(payment)}
      <h2 style={{textAlign:"center"}}>Payment Form</h2>
      <form onSubmit={handleSubmit} style={{margin:"100px"}}>
        {/* Display student and payment related fields */}
        <div>
          <label>Student ID:</label>
          <input type="text" value={payment?.student_id} readOnly />
        </div>
        {/* Display total fees */}
        <div>
          <label>Total Fees:</label>
          <input type="number" value={payment?.batch_fees} readOnly />
        </div>
        {/* Payment Amount */}
        <div>
          <label>Payment Amount:</label>
          <input
            type="number"
            value={payment.fees_paid}
            onChange={(e) => setPayment({ ...payment, fees_paid: e.target.value })}
            required
          />
        </div>
        {/* Payment Method */}
        <div>
          <label>Payment Mode:</label>
          <select
            value={payment.payment_mode}
            onChange={(e) => setPayment({ ...payment, payment_mode: e.target.value })}
            required
          >
            <option >select payment mode</option>
            <option value="UPI">UPI</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Cheque">Cheque</option>
            <option value="DD">DD</option>
          </select>
        </div>

        {/* Transaction ID for non-cash payments */}
        {payment.payment_mode !== 'Cash' && (
          <div>
            <label>Transaction ID:</label>
            <input
              type="text"
              value={payment.payment_transaction_id}
              onChange={(e) => setPayment({ ...payment, payment_transaction_id: e.target.value })}
              required
            />
          </div>
        )}

        {/* Payment Date */}
        <div>
          <label>Payment Date:</label>
          <input
            type="date"
            value={payment.payment_date}
            onChange={(e) => setPayment({ ...payment, payment_date: e.target.value })}
            required
          />
        </div>
        <br />
        <button type="submit">Pay Now</button>
        <br />
        <br />
        <button onClick={handleCancelPay}>Cancel Payment</button>
      </form>
      <br />
      <br />
    </div>
  );
}

export default PaymentForm;
