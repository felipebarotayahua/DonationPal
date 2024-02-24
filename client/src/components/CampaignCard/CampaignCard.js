import React from 'react';
import './CampaignCard.css';
import { Link } from 'react-router-dom';



const CampaignCard = ({ campaign }) => {
  return (
    <div className="campaign-card">
      <div className="campaign-card-content">
        <h2 className="campaign-card-title">{campaign.name}</h2>
        <p className="campaign-card-description">{campaign.description}</p>
      </div>
    </div>
  );
};

export default CampaignCard;

