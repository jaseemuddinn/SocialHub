const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    disabilityType: {
      type: String,
      required: true,
      lowercase: true,
    },
    workPreference: {
      type: String,
      required: true,
      lowercase: true,
    },
    workKind: {
      type: String,
      required: true,
      lowercase: true,
    },
    accomodation: {
      type: String,
      required: true,
      lowercase: true,
    },
    education: {
      type: String,
      required: true,
      lowercase: true,
    },
    language: {
      type: String,
      required: true,
      lowercase: true,
    },
    workExperience: {
      type: String,
      required: true,
      lowercase: true,
    },
    previousJob: {
      type: String,
      required: false,
      lowercase: true,

    },
    currentStatus: {
      type: String,
      required: true,
      lowercase: true,
    },
    workTiming: {
      type: String,
      required: true,
      lowercase: true,
    },
    communicationMode: {
      type: String,
      required: true,
      lowercase: true,
    },
    salaryExpectation: {
      type: String,
      required: true,
      lowercase: true,
    },
    else: {
      type: String,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
