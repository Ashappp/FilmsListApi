const schemaList = require("../models/filmsList");

module.exports.getAllList = async (req, res) => {
  try {
    const List = new schemaList(req.body);
    await List.save();
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
