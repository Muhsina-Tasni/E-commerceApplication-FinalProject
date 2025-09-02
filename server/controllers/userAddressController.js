const Address = require("../models/UserAddress");

// CREATE address for a user
createAddress = async (req, res) => {
  try {
    const { user_id, street, city, state, country, pincode } = req.body;

    const address = new Address({
      user_id,
      street,
      city,
      state,
      country,
      pincode,
    });

    await address.save();
    res.status(201).json(address);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET all addresses
getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find().populate("user_id");
    res.status(200).json(addresses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET addresses by user_id
getAddressesById = async (req, res) => {
  try {
    const addresses = await Address.find({ user_id: req.params.userId });
    res.status(200).json(addresses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE address
updateAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!address) return res.status(404).json({ message: "Address not found" });
    res.status(200).json(address);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE address
deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) return res.status(404).json({ message: "Address not found" });
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {createAddress,getAddresses,getAddressesById,updateAddress,deleteAddress}