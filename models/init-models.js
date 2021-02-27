var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _raw_material = require("./raw_material");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var raw_material = _raw_material(sequelize, DataTypes);


  return {
    SequelizeMeta,
    raw_material,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
