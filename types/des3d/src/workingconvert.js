/* AUTO-GENERATED */
const simputConvert = require('/home/justin/simput_for_des/src/cli/runtime-utils');
const output = {};
output['data.json'] = (m) => JSON.stringify(m, null, 2);
module.exports = function(dataModel) {
const mapping = {};
return simputConvert(dataModel, mapping, output);
};