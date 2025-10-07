const Trip = require("../models/Trip");

/**
 * Create a new trip
 */
exports.createTrip = async (req, res) => {
  try {
    const data = req.body;

    // simple validation
    if (!data.vehicleNo) {
      return res.status(400).json({ message: "vehicleNo is required" });
    }

    const trip = new Trip(data);
    await trip.save();
    return res.status(201).json(trip);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

exports.tripregister = async (req, res) => {
  console.log(req.body);
  const {
    bhada,
    vehicleNo,
    date,
    driverName,
    mobileNo,
    startingDate,
  
    closingPlac,
   
    startingPlace,
    closingDate,
    closingPlace,
    materialName,
    poNumber,
    doNumber,
    grnNumber,
    freight,
    weight,
    amount,
    receivingDate,
  } = req.body;
  const newV = new Trip({
     bhada,
    vehicleNo,
    date,
    driverName,
    mobileNo,
    startingDate,
  
    closingPlac,
   
    startingPlace,
    closingDate,
    closingPlace,
    materialName,
    poNumber,
    doNumber,
    grnNumber,
    freight,
    weight,
    amount,
    receivingDate,
  });
  await newV.save();

  return res.status(200).json({
    message
    : "successfully created"
  })
};

/**
 * Get list of trips (with pagination + optional search by vehicleNo)
 */
exports.getTrips = async (req, res) => {
  try {
    const page = parseInt(req.query.page || "1", 10);
    const limit = parseInt(req.query.limit || "20", 10);
    const skip = (page - 1) * limit;

    const q = {};
    if (req.query.vehicleNo)
      q.vehicleNo = { $regex: req.query.vehicleNo, $options: "i" };
    if (req.query.driverName)
      q.driverName = { $regex: req.query.driverName, $options: "i" };

    const [items, total] = await Promise.all([
      Trip.find(q).sort({ createdAt: -1 }).skip(skip).limit(limit),
      Trip.countDocuments(q),
    ]);

    return res.json({
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      items,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Get single trip by id
 */
exports.getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).json({ message: "Trip not found" });
    return res.json(trip);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Update trip
 */
exports.updateTrip = async (req, res) => {
  try {
    const updated = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: "Trip not found" });
    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Delete trip
 */
exports.deleteTrip = async (req, res) => {
  try {
    const deleted = await Trip.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Trip not found" });
    return res.json({ message: "Trip deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};
