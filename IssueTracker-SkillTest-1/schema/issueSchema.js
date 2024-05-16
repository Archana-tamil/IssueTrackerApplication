import mongoose from 'mongoose';

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    labels: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],
  },

  {
    timestamps: true,
  }
);

const IssueModel = mongoose.model('Issue', issueSchema);
export default IssueModel;

