// const express = require("express");
// const router = express.Router();
// const profileController = require("../controllers/profileController");

// // CREATE user profile
// router.post("/", profileController.createUserProfile);

// // READ all profiles
// router.get("/", profileController.getAllProfiles);

// // READ single profile
// router.get("/:id", profileController.getUserProfile);

// // UPDATE profile
// router.put("/:id", profileController.updateUserProfile);

// // DELETE profile
// router.delete("/:id", profileController.deleteUserProfile);

// module.exports = router;
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddlware");
const { createProfile, getProfiles, getProfileById, updateProfile, deleteProfile } = require("../controllers/userProfileController");

router.post("/", auth, createProfile);
router.get("/", auth, getProfiles);
router.get("/:id", auth, getProfileById);
router.put("/:id", auth, updateProfile);
router.delete("/:id", auth, deleteProfile);

module.exports = router;
