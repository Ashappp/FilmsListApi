const FilmsListSchema = require("../models/filmsList");

module.exports.getAllList = async (req, res) => {
  try {
    const List = new FilmsListSchema(req.body);
    await List.find({});
    res.json({
      success: true,
      message: "ok"
    });
  } catch (err) {
    res.json({
      success: false,
      message: "no"
    });
  }
};
