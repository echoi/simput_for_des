const runTemplate = require('./run.hbs');

module.exports = function convert(dataModel) {
    const results = {};
    
    const marker_attr = {};
    if (dataModel.data.markers_v) {
      const params = dataModel.data.markers_v[0].marker_attr;
      Object.keys(params).forEach((fieldName) => {
        const value = params[fieldName].value;
        if (value.length === 1) {
          marker_attr[fieldName] = value[0];
        } else {
          marker_attr[fieldName] = value;
        }
      });
    }
  

    results['run.sh'] = runTemplate(marker_attr);
  
    return { results, model: dataModel };
};
 