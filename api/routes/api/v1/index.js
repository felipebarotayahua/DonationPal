const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('models/Campaign');
const Campaign = mongoose.model('campaigns');
// dono
require('models/Donation');
const Donation = mongoose.model('donations');

// Root route
router.get('/', (req,res) => {
  res.send('Root API route')
})

//Get all campaign ids
router.get('/campaigns', async (req,res) => {
  //Using mongoose
  const filter = {};
  const campaigns = await Campaign.find(filter);
  console.log(campaigns)
  res.json(campaigns)
});
//Get all donations - i did this for myself /notes
router.get('/donations', async (req,res) => {
  //Using mongoose
  const filter = {};
  const donations = await Donation.find(filter);
  console.log(donations)
  res.json(donations)
});

// COLLECTS DONATIONS AND the specific ID of a campaign. 
router.get('/campaigns/:id', async (req, res) => {
  try {
    const campaignId = req.params.id;

    // Using mongoose to find a campaign by _id
    const campaign = await Campaign.findOne({ _id: campaignId });

    if (!campaign) {
      return res.status(404).json({ error: `Campaign with ID ${campaignId} not found` });
    }

    // Fetch donations associated with the campaign
    const donations = await Donation.find({ campaign_id: campaignId });

    // Add the donations array to the campaign object
    campaign.donations = donations;

    res.json(campaign);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



// Get a specific campaign by _id - WORKING - does not work for combining donations

// router.get('/campaigns/:id', async (req, res) => {

//     const campaignId = req.params.id;
//     // Using mongoose to find a campaign by _id
//     const campaign = await Campaign.findOne({ _id: campaignId }).populate('donations');
//     res.json(campaign)

// });

module.exports = router;