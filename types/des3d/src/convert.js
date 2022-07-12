
const simTemplate = require('./sim.hbs');
const meshTemplate = require('./mesh.hbs');
const markersTemplate = require('./markers.hbs');
const controlTemplate = require('./control.hbs');
const bcTemplate = require('./bc.hbs');
const icTemplate = require('./ic.hbs');
const matTemplate = require('./mat.hbs');

module.exports = function convert(dataModel) {
    const results = {};


    const sim_attr = {};
    if (dataModel.data.sim_v) {
      const sim_params = dataModel.data.sim_v[0].sim_attr;
      Object.keys(sim_params).forEach((fieldName) => {
        const value = sim_params[fieldName].value;
        if (value.length === 1) {
         sim_attr[fieldName] = value[0];
        } else {
          sim_attr[fieldName] = value;
        }
      });
    }


    results['sim.cfg'] = simTemplate(sim_attr);


    //do it later or don't merge at all
    const mesh_attr = {};
    if (dataModel.data.mesh_v) {
      const mesh_params = dataModel.data.mesh_v[0].mesh_attr;
      Object.keys(mesh_params).forEach((fieldName) => {
        const value = mesh_params[fieldName].value;
        if (value.length === 1) {
          mesh_attr[fieldName] = value[0];
        } else {
          mesh_attr[fieldName] = value;
        }
      });
    }

    results['mesh.cfg'] = meshTemplate(mesh_attr);

    const mesh_conditional_attr = {};
    if (dataModel.data.mesh_conditional_v) {
      const mesh_params = dataModel.data.mesh_conditional_v[0].mesh_conditional_attr;
      Object.keys(mesh_params).forEach((fieldName) => {
        const value = mesh_params[fieldName].value;
        if (value.length === 1) {
          mesh_conditional_attr[fieldName] = value[0];
        } else {
          mesh_conditional_attr[fieldName] = value;
        }
      });
    }


    results['conditional_mesh.cfg'] = meshTemplate(mesh_conditional_attr);
  

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

    results['markers.cfg'] = markersTemplate(marker_attr);


    const control_attr = {};
    if (dataModel.data.control_v) {
      const control_params = dataModel.data.control_v[0].control_attr;
      Object.keys(control_params).forEach((fieldName) => {
        const value = control_params[fieldName].value;
        if (value.length === 1) {
          control_attr[fieldName] = value[0];
        } else {
          control_attr[fieldName] = value;
        }
      });
    }


    results['control.cfg'] = controlTemplate(control_attr);



    const bc_attr = {};
    if (dataModel.data.bc_v) {
      const bc_params = dataModel.data.bc_v[0].bc_attr;
      Object.keys(bc_params).forEach((fieldName) => {
        const value = bc_params[fieldName].value;
        if (value.length === 1) {
          bc_attr[fieldName] = value[0];
        } else {
          bc_attr[fieldName] = value;
        }
      });
    }


    results['bc.cfg'] = bcTemplate(bc_attr);




    const ic_attr = {};
    if (dataModel.data.ic_v) {
      const ic_params = dataModel.data.ic_v[0].ic_attr;
      Object.keys(ic_params).forEach((fieldName) => {
        const value = ic_params[fieldName].value;
        if (value.length === 1) {
          ic_attr[fieldName] = value[0];
        } else {
          ic_attr[fieldName] = value;
        }
      });
    }

    results['ic.cfg'] = icTemplate(ic_attr);




    const mat_attr = {};
    if (dataModel.data.mat_v) {
      const mat_params = dataModel.data.mat_v[0].mat_attr;
      Object.keys(mat_params).forEach((fieldName) => {
        const value = mat_params[fieldName].value;
        if (value.length === 1) {
          mat_attr[fieldName] = value[0];
        } else {
          mat_attr[fieldName] = value;
        }
      });
    }




    results['mat.cfg'] = matTemplate(mat_attr);




  
    return { results, model: dataModel };
};
 
//dataModel I think is defined elsewhere
//markers_v
//markers_attr
//fieldName
//params
//results (only once)


//module.exports{
//const attribute = {}
//if (dataModel.data.view) {
//  const dummyvar = dataModel.data.view[0].attr
//  object.keys(dummyvar).forEach(fieldName) -> {
//      const value = dummyvar[fieldName].value
//      if asdasd etc. 
//      }   
//  }
//};