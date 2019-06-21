const FilmsListSchema = require("../models/filmsList");

module.exports.getAllList = async (req, res) => {
  try {
    // const List = new FilmsListSchema(req.body);
    const data = await FilmsListSchema.find({});
    res.json({
      success: true,
      data,
      message: "ok"
    });
  } catch (err) {
    res.json({
      success: false,
      message: "no"
    });
  }
};
