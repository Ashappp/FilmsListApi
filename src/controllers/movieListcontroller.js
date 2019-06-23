const MovieListSchema = require("../models/movieList");

module.exports.getAllList = async (req, res) => {
  try {
    const data = await MovieListSchema.find({});
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

module.exports.deleteMovie = async(req,res)=>{
  try{
  const movieToDelete = await schemaList.findByIdAndDelete(req.body.id);
  res.send(movieToDelete)
  } catch(err){
      res.send(err)
  }
  };

  module.exports.createNewMovie = async (req,res)=>{
    try{
       const newMovie = new schemaList(req.body);
       await newMovie.save();
        res.json({
            success:true,
            message:"ok"
        })
    } catch(err){
        res.json({
            success:false,
            message:"no"
        })
    }
};
