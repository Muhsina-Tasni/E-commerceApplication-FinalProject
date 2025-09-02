const UserProfile = require("../models/UserProfile");
const httpStatus = require("../constants/httpStatus");
const messages = require("../constants/messages");

// Create profile
const createProfile = async (req, res) => {
  try {
    const { user_id, phone, dob, gender } = req.body;
    const profile = new UserProfile({ user_id, phone, dob, gender });
    await profile.save();
    res.status(httpStatus.CREATED).json({ message: messages.USER_PROFILE_CREATED, profile });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Get all profiles
const getProfiles = async (req, res) => {
  try {
    const profiles = await UserProfile.find();
    res.status(httpStatus.OK).json(profiles);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Get profile by ID
const getProfileById = async (req, res) => {
  try {
    const profile = await UserProfile.findById(req.params.id);
    if (!profile) return res.status(httpStatus.NOT_FOUND).json({ message: messages.USER_PROFILE_NOT_FOUND });
    res.status(httpStatus.OK).json(profile);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Update profile
const updateProfile = async (req, res) => {
  try {
    const profile = await UserProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!profile) return res.status(httpStatus.NOT_FOUND).json({ message: messages.USER_PROFILE_NOT_FOUND });
    res.status(httpStatus.OK).json(profile);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// Delete profile
const deleteProfile = async (req, res) => {
  try {
    const profile = await UserProfile.findByIdAndDelete(req.params.id);
    if (!profile) return res.status(httpStatus.NOT_FOUND).json({ message: messages.USER_PROFILE_NOT_FOUND });
    res.status(httpStatus.OK).json({ message: messages.USER_PROFILE_DELETED });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

module.exports = { createProfile, getProfiles, getProfileById, updateProfile, deleteProfile };
