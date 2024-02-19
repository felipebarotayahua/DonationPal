const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
  // _id: {
  //   type: String,
  //   required: true
  // },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  goal: {
    type: Number,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  donations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'donations',
    },
  ],
});

mongoose.model('campaigns', CampaignSchema)