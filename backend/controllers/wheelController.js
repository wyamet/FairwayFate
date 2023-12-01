// wheelController.js

exports.spinWheel = (req, res) => {
  try {
    const clubs = req.body.clubs; // Or retrieve from the database
    const randomIndex = Math.floor(Math.random() * clubs.length);
    const selectedClub = clubs[randomIndex];
    res.status(200).json({
      status: "success",
      data: {
        selectedClub: selectedClub,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
