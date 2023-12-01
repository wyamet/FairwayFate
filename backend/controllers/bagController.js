// bagController.js

const Bag = require("../models/bagModel"); // Assuming you have a bag model

exports.saveBag = async (req, res) => {
  try {
    const bag = await Bag.create({
      userId: req.user.id, // Assuming you have user identification logic
      clubs: req.body.clubs,
    });
    res.status(201).json({
      status: "success",
      data: {
        bag: bag,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getBag = async (req, res) => {
  try {
    const bag = await Bag.findOne({ userId: req.user.id });
    if (!bag) {
      return res.status(404).json({
        status: "fail",
        message: "No bag found for this user",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        bag: bag,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
