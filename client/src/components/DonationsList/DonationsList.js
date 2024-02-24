// DonationsList.js

import React, { useEffect, useState } from 'react';

const DonationsList = ({ campaignId }) => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Fetch donations based on the campaignId
    fetch(`http://localhost:8080/api/v1/campaigns/${campaignId}`)
      .then(response => response.json())
      .then(data => setDonations(data.donations))
      .catch(error => console.error('Error fetching donations:', error));
  }, [campaignId]);

  return (
    <div className="donations-list">
      <h2>Donations</h2>
      <ul>
        {donations.map(donation => (
          <li key={donation._id}>
            <p>User: {donation.user_id}</p>
            <p>Message: {donation.message}</p>
            <p>Amount: ${donation.amount}</p>
            <p>Date: {new Date(donation.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationsList;
