import React from 'react';
import './style.css';

export default function App() {
  const handleSubmit = async () => {
    const res = await fetch(
      'https://test-users-api.areaexpress.co/admin/app-data',
      {
        method: 'PATCH',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUzNDUwMmE4YjNiZDAxNDc5NzgxZWUiLCJpZCI6IjYwNTM0NTAyYThiM2JkMDE0Nzk3ODFlZSIsImVtYWlsIjoic3VwZXJAZW1haWwuY29tIiwiaWF0IjoxNjI3NzEyMDMwLCJleHAiOjE2MzAzOTA0MzB9.clV6pg-nCA8IGRdY4O9LklOiUIIyBWV1Mv4uMIlh0EM'
        },
        body: JSON.stringify({
          payPubKey: 'pk_live_f40f8494b3fad68d3c979f045ace9b8c8d127128',
          chopsDeliveryFees: 1200,
          vat: 7.5,
          martDeliveryFees: {
            lagos1: 1000,
            lagos2: 1500,
            southWest: 3500,
            abuja: 4500,
            southEast: 4500,
            southSouth: 4500,
            north: 6500
          },
          logistictsDeliveryFees: {
            sameDay: 1500,
            express: 2500
          }
        })
      }
    );
    const response = await res.json()
    console.log(response)
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
