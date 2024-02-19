import React from 'react';
import './CampaignCard.css'



const CampaignCard = ({ campaign }) => {
  return (
    <div className="campaign-card">
      <h2>{campaign.name}</h2>
      <p>{campaign.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CampaignCard;
