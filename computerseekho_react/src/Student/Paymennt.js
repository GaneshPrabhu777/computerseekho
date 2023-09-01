import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

function PaymentForm() {
  const { enquiry_id } = useParams();
  const [student, setStudent] = useState({
    student_id: "",
    batch_id: "",
  });
  const [batchFees, setBatchFees] = useState(0);
  const [payment, setPayment] = useState({
    student_id: "",
    total_fees: 0,
    // Other payment properties
  });

  useEffect(() => {
    // Fetch student data
    fetch(`http://localhost:8080/api/getbyenquiry_id/${enquiry_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStudent(data);
        setPayment((prevPayment) => ({
          ...prevPayment,
          student_id: data.student_id,
        }));

        // Fetch batch data using student's batch ID
        if (data.batch_id) {
          fetch(`http://localhost:8080/api/batch/${data.batch_id}`)
            .then((batchResponse) => batchResponse.json())
            .then((batchData) => {
              console.log(batchData);
              setBatchFees(batchData.total_fees);
              setPayment((prevPayment) => ({
                ...prevPayment,
                total_fees: batchData.total_fees,
              }));
            })
            .catch((batchError) => {
              console.error("Error fetching batch data:", batchError);
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, [enquiry_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/addpayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payment),
      });

      if (response.ok) {
        console.log("Payment successful");
      } else {
        console.error("Error processing payment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <Form onSubmit={handleSubmit}>
        {/* Display student and payment related fields */}
        <Form.Group>
          <Form.Label>Student ID:</Form.Label>
          <Form.Control type="text" value={student.student_id} readOnly />
        </Form.Group>
        {/* Display total fees */}
        <Form.Group>
          <Form.Label>Total Fees:</Form.Label>
          <Form.Control type="number" value={payment.total_fees} readOnly />
        </Form.Group>
        {/* Other payment fields */}
        <Button variant="primary" type="submit">
          Pay Now
        </Button>
      </Form>
    </div>
  );
}

export default PaymentForm;
