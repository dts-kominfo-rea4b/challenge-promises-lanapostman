const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;
const promiseOutput = async (params) => {
  try {
   const array1 = await promiseTheaterIXX();
   const array2 = await promiseTheaterVGC();
 
   const newArray = array1.concat(array2);
 
   const count = newArray.filter((obj) => obj.hasil === params).length;
   console.log(count);
  }
  catch (err) {
   console.log(err);
  }
 }

module.exports = {  
  promiseOutput,
};




