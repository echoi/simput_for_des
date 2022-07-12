const runTemplate = require('./run_script.hbs');

/*
# type      center          r       omega0      zeta
*/


//const results = {}; .... 24 and 26 (last 2)
module.exports = function convert(dataModel) {
  const markers = {};
  if (dataModel.data.markers) {
    const params = dataModel.data.markers[0].markers;
    Object.keys(params).forEach((fieldName) => {
      const value = params[fieldName].value;
      if (value.length === 1) {
        markers[fieldName] = value[0];
      } else {
        markers[fieldName] = value;
      }
    });
  }

  // test should make markers sh file 
  markers['markers.sh'] = runTemplate(markers);

  return { markers, model: dataModel };
};
