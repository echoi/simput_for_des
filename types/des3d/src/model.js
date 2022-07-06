module.exports = {
  order: ['des3dmodels', 'sim', 'mesh', 'markers', 'control', 'bc', 'ic', 'mat', 'analyses'],
  views: {
    des3dmodels: {
      size: -1,
      attributes: ['des3dmodel'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'des3dmodel.name',
        },
      ],
    },
    sim: {
      size: -1,
      attributes: ['sim'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'sim.name',
        },
      ],
    },
    mesh: {
      size: -1,
      attributes: ['mesh_p1', 'mesh_cond', 'mesh_p2'], 
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'mesh.name',
        },
      ],
    },
    markers: {
      size: -1,
      attributes: ['markers'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'markers.name',
        },
      ],
    },
    control: {
      size: -1,
      attributes: ['control'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'control.name',
        },
      ],
    },
    bc: {
      size: -1,
      attributes: ['bc'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'bc.name',
        },
      ],
    },
    ic: {
      size: -1,
      attributes: ['ic'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'ic.name',
        },
      ],
    },
    mat: {
      size: -1,
      attributes: ['mat'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'mat.name',
        },
      ],
    },
    analyses: {
      size: -1,
      attributes: ['analysis'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'analysis.name',
        },
      ],
    },
  },
  definitions: {
    des3dmodel: {
      parameters: [
        //sim
        {
          id: 'fillerupper',
          type: 'string',
          size: 1,
          default: 'barleywheat',
        }
      ]
    },
    sim: {
      parameters: [
        {
          id: 'modelname',
          type: 'string',
          size: 1,
          default: 'result',
        },
        {
          id: 'max_steps',
          type: 'int',
          size: 1,
          default: '1000',
        },
        {
          id: 'max_time_in_yr',
          type: 'int',
          size: 1,
          default: '3000',
        },
        {
          id: 'output_step_interval',
          type: 'int',
          size: 1,
          default: '200',
        },
        {
          id: 'output_time_interval_in_yr',
          type: 'int',
          size: 1,
          default: '100',
        },
        {
          id: 'checkpoint_frame_interval',
          type: 'int',
          size: 1,
          default: '10',
        },
        {
          id: 'is_restarting',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'restarting_from_modelname',
          type: 'string',
          size: 1,
          default: 'result',
        },
        {
          id: 'restarting_from_frame',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'has_initial_checkpoint',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'has_marker_output',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'has_output_during_remeshing',
          type: 'string',
          size: 1,
          default: 'no',
        },
        {
          id: 'is_outputting_averaged_fields',
          type: 'int',
          size: 1,
          default: '1',
        }
      ]
    },
    mesh_p1: {
      parameters: [
        //Start of mesh section in model.js
        {
          id: 'meshing_option',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'meshing_verbosity',
          type: 'int',
          size: 1,
          default: '-1',
        },
        {
          id: 'tetgen_optlevel',
          type: 'int',
          size: 1,
          default: '3',
        },
        {
          id: 'xlength',
          type: 'string',
          size: 1,
          default: '130e3',
        },
        {
          id: 'ylength',
          type: 'string',
          size: 1,
          default: '130e3',
        },
        {
          id: 'zlength',
          type: 'string',
          size: 1,
          default: '130e3',
        },
        {
          id: 'resolution',
          type: 'string',
          size: 1,
          default: '30e3',
        },
        {
          id: 'smallest_size',
          type: 'string',
          size: 1,
          default: '0.01',
        },
        {
          id: 'largest_size',
          type: 'string',
          size: 1,
          default: '30',
        },
      ]
    },
    mesh_cond: {
      parameters: [ 
          //JSON code (label.json) based on quality ie 2/3d
        //min_angle
        //min_tet_angle
        //max_ratio


        //                 meshing option =2 
        //refined_zonex
        //refined_zoney
        //refined_zonez
        //                            meshing option = 90 or 95 
        //poly_filename (times 2)
      ]
    },
    mesh_p2: {
      parameters: [
        {
          id: 'quality_check_step_interval',
          type: 'string',
          size: 1,
          default: '100',
        },
        {
          id: 'min_quality',
          type: 'string',
          size: 1,
          default: '0.4',
        },
        {
          id: 'max_boundary_distortion',
          type: 'string',
          size: 1,
          default: '0.25',
        },
        {
          id: 'remeshing_option',
          type: 'string',
          size: 1,
          default: '0',
        },
        {
          id: 'is_discarding_internal_segments',
          type: 'string',
          size: 1,
          default: '30',
        },
        {
          id: 'is_discarding_internal_segments',
          type: 'string',
          size: 1,
          default: 'yes',
        },
        {
          id: 'mmg_debug',
          type: 'string',
          size: 1,
          default: '0',
        },
        {
          id: 'mmg_verbose',
          type: 'string',
          size: 1,
          default: '0',
        },
        {
          id: 'mmg_hmax_factor',
          type: 'float',
          size: 1,
          default: '2.0',
        },
        {
          id: 'mmg_hmin_factor',
          type: 'float',
          size: 1,
          default: '0.2',
        },
        {
          id: 'mmg_hausd_factor',
          type: 'float',
          size: 1,
          default: '0.01',
        }
      ]
    },
        //markers
    markers: {
      parameters: [
        {
          id: 'init_marker_option',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'markers_per_element',
          type: 'int',
          size: 1,
          default: '4',
        },
        {
          id: 'init_marker_spacing',
          type: 'float',
          size: 1,
          default: '0.3',
        },
        {
          id: 'min_num_markers_in_element',
          type: 'int',
          size: 1,
          default: '3',
        },
        {
          id: 'replenishment_option',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'random_seed',
          type: 'int',
          size: 1,
          default: '1',
        }
      ]
    },
        //control
    control: {
      parameters: [
        {
          id: 'gravity',
          type: 'int',
          size: 1,
          default: '10',
        },
        {
          id: 'characteristic_speed',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'is_quasi_static',
          type: 'string',
          size: 1,
          default: 'yes',
        },
        {
          id: 'dt_fraction',
          type: 'float',
          size: 1,
          default: '1.0',
        },
        {
          id: 'fixed_dt',
          type: 'float',
          size: 1,
          default: '0.0',
        },
        {
          id: 'intertial_scaling',
          type: 'string',
          size: 1,
          default: '1e5',
        },
        {
          id: 'damping_option',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'damping_factor',
          type: 'float',
          size: 1,
          default: '0.8',
        },
        {
          id: 'ref_pressure_option',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'surface_process_option',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'surface_diffusivity',
          type: 'string',
          size: 1,
          default: '1e-6',
        },
        {
          id: 'has_thermal_diffusion',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'has_hydration_processes',
          type: 'int',
          size: 1,
          default: 'no',
        },
        {
          id: 'hydration_migration_speed',
          type: 'string',
          size: 1,
          default: '3e-9',
        }
      ]
    },
    bc: {
      parameters: [
        //bc
        {
          id: 'vbc_x0',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'vbc_x1',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'vbc_val_x0',
          type: 'string',
          size: 1,
          default: '-1e-9',
        },
        {
          id: 'vbc_val_x1',
          type: 'string',
          size: 1,
          default: '1e-9',
        },
        {
          id: 'vbc_y0',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'vbc_y1',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'vbc_val_y0',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'vbc_val_y1',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'vbc_z0',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'vbc_z1',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'vbc_val_z0',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'vbc_val_z1',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'vbc_n0',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'vbc_val_n0',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'vbc_n1',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'vbc_val_n1',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'vbc_n2',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'vbc_val_n2',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'vbc_n3',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'vbc_val_n3',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'has_wrinkler_foundation',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'wrinkler_delta_rho',
          type: 'int',
          size: 1,
          default: 'o',
        },
        {
          id: 'has_elastic_foundation',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'elastic_foundation_constant',
          type: 'string',
          size: 1,
          default: '1e11',
        },
        {
          id: 'has_water_loading',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'surface_temperature',
          type: 'int',
          size: 1,
          default: '273',
        },
        {
          id: 'mantle_temperature',
          type: 'int',
          size: 1,
          default: '1600',
        }
      ]
    },
    ic: {
      parameters: [
                //ic
        {
          id: 'mattype_option',
          type: 'int',
          size: 1,
          default: '0',
        },
        // {
        //   id: 'mattype_layer_depths',
        //   type: 'int',
        //   size: 1,
        //   default: '1600',
        // },
        // brackets around thing but only one float value
        {
          id: 'weakzone_option',
          type: 'int',
          size: 1,
          default: '1',
        },
        {
          id: 'weakzone_plstrain',
          type: 'float',
          size: 1,
          default: '0.1',
        },
        {
          id: 'weakzone_azimuth',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'weakzone_inclination',
          type: 'int',
          size: 1,
          default: '90',
        },
        {
          id: 'weakzone_halfwidth',
          type: 'float',
          size: 1,
          default: '1.5',
        },
        {
          id: 'weakzone_y_min',
          type: 'float',
          size: 1,
          default: '0.0',
        },
        {
          id: 'weakzone_y_max',
          type: 'float',
          size: 1,
          default: '1.0',
        },
        {
          id: 'weakzone_depth_min',
          type: 'float',
          size: 1,
          default: '0.0',
        },
        {
          id: 'weakzone_depth_max',
          type: 'float',
          size: 1,
          default: '1.0',
        },
        {
          id: 'weakzone_xcenter',
          type: 'float',
          size: 1,
          default: '0.5',
        },
        {
          id: 'weakzone_ycenter',
          type: 'float',
          size: 1,
          default: '0.5',
        },
        {
          id: 'weakzone_zcenter',
          type: 'float',
          size: 1,
          default: '0.5',
        },
        {
          id: 'weakzone_xsemi_axis',
          type: 'string',
          size: 1,
          default: '1e3',
        },
        {
          id: 'weakzone_ysemi_axis',
          type: 'string',
          size: 1,
          default: '1e3',
        },
        {
          id: 'weakzone_zsemi_axis',
          type: 'string',
          size: 1,
          default: '1e3',
        },
        {
          id: 'temperature_option',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'oceanic_plate_age_in_yr',
          type: 'string',
          size: 1,
          default: '60e6',
        },
        //for teperature option 90 & others
      ]
    },
    mat: {
      parameters: [
        {
          id: 'rheology_type',
          type: 'string',
          ui: "enum",
          size: 1,
          default: "elastic",
          domain: {
            "elastic": "elastic",
            "viscous": "viscous",
            "maxwell": "maxwell",
            "elasto-plastic": "elasto_plastic",
            "elasto-visco-plastic": "elasto-visco-plastic",
          }
        },
        {
          id: 'is_plane_strain',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'phase_change_option',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'num_materials',
          type: 'int',
          size: 1,
          default: '1',
        }
      ]
    },
        //more conditioals which are mroe streange

    analysis: {
      parameters: [
        {
          id: 'name',
          label: 'Name',
          type: 'string',
          size: 1,
        },
        {
          id: 'type',
          type: 'enum',
          size: 1,
          default: 'histogram',
          domain: {
            Histogram: 'histogram',
            Autocorrelation: 'autocorrelation',
          },
        },
        ["histogram", "autocorrelation"],
      ],
      children: {
        histogram: "analysis.type[0] === 'histogram'",
        autocorrelation: "analysis.type[0] === 'autocorrelation'",
      },
    },
    histogram: {
       parameters: [
          {
              id: 'mesh',
              type: 'enum',
              size: 1,
              default: 'mesh',
              domain: {
                Mesh: 'mesh',
                'Unstructured mesh': 'ucdmesh',
                'Particle velocity magnitude': 'particles',
              },
          },
          {
            id: 'bins',
            type: 'int',
            size: 1,
            default: [10],
          },
       ],
    },
    autocorrelation: {
       parameters: [
          {
              id: 'mesh',
              type: 'enum',
              size: 1,
              default: 'mesh',
              domain: {
                // currently only works on one type.
                Mesh: 'mesh',
              },
          },
          {
            id: 'window',
            type: 'double',
            size: 1,
            default: [10],
          },
          {
            id: 'kmax',
            type: 'double',
            size: 1,
            default: [3],
          },
       ],
    },
    runParams: {
      parameters: [
        {
          id: 'nodes',
          type: 'int',
          size: 1,
          default: [1],
        },
        {
          id: 'gridsize',
          type: 'int',
          size: 1,
          default: [64],
        },
        {
          id: 'dt',
          type: 'double',
          size: 1,
          default: [0.1],
        },
        {
          id: 'endT',
          type: 'double',
          size: 1,
          default: [10],
        },
      ],
    },
  },
};

// #############################################################################
// # This is an input file for 2D/3D DynEarthSol. All available input parameters
// # are listed here. Parameters with default values are commented out with
// # the default values. Parameters that are not commented out are required.
// #
// # Parameters starting with 'is_' or 'has_' are boolean. Acceptable values
// # include: yes, no, on, off, 1, 0.
// #
// # Parameters of multiple values must be quoted by [].
// #
// # Use command lne argument '--help' to see more description.
// #############################################################################