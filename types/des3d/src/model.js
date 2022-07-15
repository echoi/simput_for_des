//fix mattype layer depths

module.exports = {
  order: ['sim_v', 'mesh_v', 'mesh_conditional_v', 'markers_v', 'control_v', 'bc_v', 'ic_v', 'ic_conditional_v', 'mat_v'],
  views: {
    sim_v: {
      attributes: ['sim_attr'],
    },
    mesh_v: {
      attributes: ['mesh_attr'], 
    },
    mesh_conditional_v: {
      attributes: ['mesh_conditional_attr'], 
    },
    markers_v: {
      attributes: ['markers_attr'],
    },
    control_v: {
      attributes: ['control_attr'],
    },
    bc_v: {
      attributes: ['bc_attr'],
    },
    ic_v: {
      attributes: ['ic_attr'],
    },
    ic_conditional_v: {
      attributes: ['ic_conditional_attr'],
    },
    mat_v: {
      attributes: ['mat_attr'],
    },
  },
  definitions: {
    sim_attr: {
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
          default: '0',
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
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'is_outputting_averaged_fields',
          type: 'int',
          size: 1,
          default: '1',
        }
      ]
    },
    mesh_attr: {
      parameters: [
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
          type: 'int',
          size: 1,
          default: '30',
        },
        {
          id: 'min_angle',
          type: 'string',
          size: 1,
          default: '32.',
        },
        {
          id: 'min_tet_angle',
          type: 'string',
          size: 1,
          default: '22.',
        },
        {
          id: 'max_ratio',
          type: 'float',
          size: 1,
          default: '2.0',
        },
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
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'is_discarding_internal_segments',
          type: 'int',
          size: 1,
          default: '1',
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
    mesh_conditional_attr: {
      parameters: [
        {
          id: 'meshing_option',
          ui: 'enum',
          type: 'string',
          size: 1,
          default: [0],
          domain: {
            "1": 1,
            "2": 2,
            "90": 90,
            "95": 95,
          },
        },
        ["p_filename", "ref_zonex", "ref_zoney", "ref_zonez"]
      ],
      children: {
        p_filename: "mesh_conditional_attr.meshing_option[0] === 90 || mesh_conditional_attr.meshing_option [0] === 95",
        ref_zonex: "mesh_conditional_attr.meshing_option [0] === 2",
        ref_zoney: "mesh_conditional_attr.meshing_option [0] === 2",
        ref_zonez: "mesh_conditional_attr.meshing_option [0] === 2",
      },
    },
    p_filename: {
      parameters: [
        {
            id: 'poly_filename',
            type: 'string',
            size: 1,
            default: 'mesh.poly',
        },
      ],
    },
    ref_zonex: {
      parameters: [
        {
            id: 'refined_zonex',
            type: 'string',
            size: 1,
            default: '[0.4, 0.6]',
        },
      ],
    },
    ref_zoney: {
      parameters: [
        {
            id: 'refined_zoney',
            type: 'string',
            size: 1,
            default: '[0.4, 0.6]',
        },
      ],
    },
    ref_zonez: {
      parameters: [
        {
            id: 'refined_zonez',
            type: 'string',
            size: 1,
            default: '[0.8, 1.0]',
        },
      ],
    },
    markers_attr: {
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
    control_attr: {
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
          type: 'int',
          size: 1,
          default: '1',
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
          default: '0',
        },
        {
          id: 'hydration_migration_speed',
          type: 'string',
          size: 1,
          default: '3e-9',
        }
      ]
    },
    bc_attr: {
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
          default: '0',
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
    ic_attr: {
      parameters: [
        {
          id: 'mattype_option',
          type: 'int',
          size: 1,
          default: '0',
        },
        {
          id: 'mattype_layer_depths',
          type: 'string',
          size: 1,
          default: '[0.5]',
        },
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
          id: 'oceanic_plate_age_in_yr',
          type: 'string',
          size: 1,
          default: '60e6',
        },
        {
          id: 'isostasy_adjustment_time_in_yr',
          type: 'int',
          size: 1,
          default: '0',
        },
      ]
    },
    ic_conditional_attr: {
      parameters: [
        {
          id: 'temperature_option',
          type: 'int',
          ui: 'enum',
          default: [0],
          domain: {
            "0": 0,
            "1": 1,
            "90": 90,
          },
        },
        ["Temp_fname", "Nodes_fname", "Connectivity_fname"]
      ],
      children: {
        Temp_fname: "ic_conditional_attr.temperature_option[0] ===  90",
        Nodes_fname: "ic_conditional_attr.temperature_option[0] === 90",
        Connectivity_fname: "ic_conditional_attr.temperature_option[0] === 90"
      },
    },
    Temp_fname: {
      parameters: [
        {
            id: 'Temp_filename',
            type: 'string',
            size: 1,
            default: 'Thermal.dat',
        },
      ],
    },
    Nodes_fname: {
      parameters: [
        {
            id: 'Nodes_filename',
            type: 'string',
            size: 1,
            default: 'Coord.dat',
        },
      ],
    },
    Connectivity_fname: {
      parameters: [
        {
            id: 'Connectivity_filename',
            type: 'string',
            size: 1,
            default: 'Connectivity.dat',
        },
      ],
    },
    mat_attr: {
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
        },
        {
          id: 'rho0',
          type: 'string',
          size: 1,
          default: '3210',
        },
        {
          id: 'alpha',
          type: 'string',
          size: 1,
          default: '3e-5',
        },
        {
          id: 'bulk_modulus',
          type: 'string',
          size: 1,
          default: '128.2e9',
        },
        {
          id: 'shear_modulus',
          type: 'string',
          size: 1,
          default: '80.5e9',
        },
        {
          id: 'visc_exponent',
          type: 'string',
          size: 1,
          default: '3.05',
        },
        {
          id: 'visc_coefficient',
          type: 'string',
          size: 1,
          default: '1.25e-1',
        },
        {
          id: 'visc_activation_energy',
          type: 'string',
          size: 1,
          default: '3.76e5',
        },
        {
          id: 'heat_capacity',
          type: 'string',
          size: 1,
          default: '1000',
        },
        {
          id: 'therm_cond',
          type: 'string',
          size: 1,
          default: '3',
        },
        {
          id: 'pls0',
          type: 'string',
          size: 1,
          default: '0',
        },
        {
          id: 'pls1',
          type: 'string',
          size: 1,
          default: '0.1',
        },
        {
          id: 'cohesion0',
          type: 'string',
          size: 1,
          default: '4e7',
        },
        {
          id: 'cohesion1',
          type: 'string',
          size: 1,
          default: '4e6',
        },
        {
          id: 'friction_angle0',
          type: 'string',
          size: 1,
          default: '30',
        },
        {
          id: 'friction_angle1',
          type: 'string',
          size: 1,
          default: '5',
        },
        {
          id: 'dilation_angle0',
          type: 'string',
          size: 1,
          default: '0',
        },
        {
          id: 'dilation_angle1',
          type: 'string',
          size: 1,
          default: '0',
        },
        {
          id: 'max_viscosity',
          type: 'string',
          size: 1,
          default: '1e24',
        },
        {
          id: 'min_viscosity',
          type: 'string',
          size: 1,
          default: '1e18',
        },
        {
          id: 'max_tension',
          type: 'string',
          size: 1,
          default: '1e9',
        },
        {
          id: 'max_thermal_diffusivity',
          type: 'string',
          size: 1,
          default: '5e-6',
        },
      ]
    },
  },
}; 