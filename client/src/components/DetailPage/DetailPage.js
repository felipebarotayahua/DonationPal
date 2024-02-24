// DetailPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DonationsList from '/Users/felipebarotayahua/School/CIT436/DonationPal/client/src/components/DonationsList/DonationsList.js'; // Import the DonationsList component

const DetailPage = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    // Fetch campaign details based on the id
    fetch(`http://localhost:8080/api/v1/campaigns/${id}`)
      .then(response => response.json())
      .then(data => setCampaign(data))
      .catch(error => console.error('Error fetching campaign details:', error));
  }, [id]);

  if (!campaign) {
    return <p>Loading...</p>;
  }

  return (
    <div className="detail-page">
      <h1>{campaign.name}</h1>
      <p>{campaign.description}</p>
      {/* Display other campaign details as needed */}
      
      {/* Use the DonationsList component to display donations */}
      <DonationsList campaignId={campaign._id} />
    </div>
  );
};

export default DetailPage;