
const Template = require('./default.hbs')

module.exports = function convert(dataModel) {
    const results = {};

    dataModel.data.sim_v.forEach((attributes) => {
      const sim_attr = {};
      Object.keys(attributes.sim_attr).forEach((fieldName) => {
        sim_attr[fieldName] = attributes.sim_attr[fieldName].value[0];
      });
      results [`des3d.cfg`] = Template(
        sim_attr
      );
  });

    dataModel.data.mesh_v.forEach((attributes) => {
      const mesh_attr = {};
      Object.keys(attributes.mesh_attr).forEach((fieldName) => {
        mesh_attr[fieldName] = attributes.mesh_attr[fieldName].value[0];
      });
      results [`des3d1.cfg`] = Template(
        mesh_attr
      );
  });



    dataModel.data.mesh_conditional_v.forEach((attributes) => {
      const mesh_conditional_attr = {};
      Object.keys(attributes.mesh_conditional_attr).forEach((fieldName) => {
        mesh_conditional_attr[fieldName] = attributes.mesh_conditional_attr[fieldName].value[0];
      });
      results [`des3d2.cfg`] = Template(
        mesh_conditional_attr
      );
  });




    dataModel.data.markers_v.forEach((attributes) => {
      const markers_attr = {};
      Object.keys(attributes.markers_attr).forEach((fieldName) => {
        markers_attr[fieldName] = attributes.markers_attr[fieldName].value[0];
      });
      results [`des3d3.cfg`] = Template(
        markers_attr
      );
  });



    dataModel.data.control_v.forEach((attributes) => {
      const control_attr = {};
      Object.keys(attributes.control_attr).forEach((fieldName) => {
        control_attr[fieldName] = attributes.control_attr[fieldName].value[0];
      });
      results [`des3d4.cfg`] = Template(
        control_attr
      );
  });



    dataModel.data.bc_v.forEach((attributes) => {
      const bc_attr = {};
      Object.keys(attributes.bc_attr).forEach((fieldName) => {
        bc_attr[fieldName] = attributes.bc_attr[fieldName].value[0];
      });
      results [`des3d5.cfg`] = Template(
        bc_attr
      );
  });




    dataModel.data.ic_v.forEach((attributes) => {
      const ic_attr = {};
      Object.keys(attributes.ic_attr).forEach((fieldName) => {
        ic_attr[fieldName] = attributes.ic_attr[fieldName].value[0];
      });
      results [`des3d6.cfg`] = Template(
        ic_attr
      );
  });



    dataModel.data.ic_conditional_v.forEach((attributes) => {
      const ic_conditional_attr = {};
      Object.keys(attributes.ic_conditional_attr).forEach((fieldName) => {
        ic_conditional_attr[fieldName] = attributes.ic_conditional_attr[fieldName].value[0];
      });
      results [`des3d7.cfg`] = Template(
        ic_conditional_attr
      );
  });



    dataModel.data.mat_v.forEach((attributes) => {
      const mat_attr = {};
      Object.keys(attributes.mat_attr).forEach((fieldName) => {
        mat_attr[fieldName] = attributes.mat_attr[fieldName].value[0];
      });
      results [`des3d8.cfg`] = Template(
        mat_attr
      );
  });
  return { results, model: dataModel }; 
};