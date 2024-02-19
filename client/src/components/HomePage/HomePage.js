import React, { useState, useEffect } from 'react';
import CampaignCard from '/Users/felipebarotayahua/School/CIT436/DonationPal/client/src/components/CampaignCard/CampaignCard.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const HomePage = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    //fetched api/v1/campaigns to get all info on all campaigns
    fetch('http://localhost:8080/api/v1/campaigns')
      .then(response => response.json())
      .then(data => setCampaigns(data))
      .catch(error => console.error('Error fetching campaigns:', error));
  }, []);

  return (
    <div className="home-page">
      <h1></h1>
      <div className="campaign-list">
        {campaigns.map(campaign => (
          <CampaignCard key={campaign._id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
