module.exports = {
  order: ['des3dmodels', 'analyses'],
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
          type: 'string',
          size: 1,
          default: 'yes',
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
          type: 'string',
          size: 1,
          default: 'yes',
        },
        {
          id: 'has_marker_output',
          type: 'string',
          size: 1,
          default: 'yes',
        },
        {
          id: 'has_output_during_remeshing',
          type: 'string',
          size: 1,
          default: 'no',
        },
        {
          id: 'is_outputting_averaged_fields',
          type: 'string',
          size: 1,
          default: 'yes',
        },
        {
          id: 'is_outputting_averaged_fields',
          type: 'string',
          size: 1,
          default: 'yes',
        },
        //mesh
        //JSON code (label.json)
        // "meshing_option": "Meshing option",
        // "meshing_verbosity": "Meshing verbosity",
        // "tetgen_optlevel": "Tetgen optlevel",
      
        //Start of mesh section in model.js
        //[placeholder for a few {} contents]
        //dimensions of box
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
          id: 'largestsize',
          type: 'string',
          size: 1,
          default: '30',
        },
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
          id: 'remeshing option',
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
        },
        //markers
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
        },
        //control
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
          type: 'string',
          size: 1,
          default: 'yes',
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
        },
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
          default: '0',
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
          type: 'string',
          size: 1,
          default: 'yes',
        },
        {
          id: 'has_elastic_foundation',
          type: 'string',
          size: 1,
          default: 'no',
        },
        {
          id: 'elastic_foundation_constant',
          type: 'string',
          size: 1,
          default: '1e11',
        },
        {
          id: 'has_water_loading',
          type: 'string',
          size: 1,
          default: 'yes',
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
        },
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

        //mat
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
          type: 'string',
          size: 1,
          default: 'no',
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
          id: 'oceanic_plate_age_in_yr',
          type: 'string',
          size: 1,
          default: '60e6',
        },
        //more conditioals which are mroe streange






























      ],
    },
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
//                                                          [sim]
// modelname = result
// ### Condition for end of simulation
// max_steps = 1000
// max_time_in_yr = 3000
// ### Condition for output
// output_step_interval = 200
// output_time_interval_in_yr = 100
// #checkpoint_frame_interval = 10
// #is_restarting = no
// #restarting_from_modelname = result
// #restarting_from_frame = 0
// #has_initial_checkpoint = yes
// #has_marker_output = yes
// #has_output_during_remeshing = no
// #is_outputting_averaged_fields = yes
//                                                                   [mesh]
// ### How to create the new mesh?
// #meshing_option = 1
// #meshing_verbosity = -1
// #tetgen_optlevel = 3
// ### Dimension of the box (in meters)
// xlength = 130e3
// ylength = 100e3
// zlength = 100e3
// resolution = 30e3
// #smallest_size = 0.01
// #largest_size = 30
// ### For 2d mesh quality
// #min_angle = 32.
// ### For 3d mesh quality
// #min_tet_angle = 22.
// #max_ratio = 2.0
// ### For meshing_option = 2
// #refined_zonex = [0.4, 0.6]
// #refined_zoney = [0.4, 0.6]
// #refined_zonez = [0.8, 1.0]
// ### For meshing_option = 90
// #poly_filename = mesh.poly
// ### For meshing_option = 95
// #poly_filename = mesh.poly
// #quality_check_step_interval = 100
// #min_quality = 0.4
// #max_boundary_distortion = 0.25
// #remeshing_option = 0
// #is_discarding_internal_segments = yes
// #mmg_debug = 0
// #mmg_verbose = 0
// #mmg_hmax_factor = 2.0
// #mmg_hmin_factor = 0.2
// #mmg_hausd_factor = 0.01
//                                                [markers]
// #init_marker_option = 1
// #markers_per_element = 4
// #init_marker_spacing = 0.3
// #min_num_markers_in_element = 3
// #replenishment_option = 1
// #random_seed = 1
//                                            [control]
// #gravity = 10
// #characteristic_speed = 0
// #is_quasi_static = yes
// #dt_fraction = 1.0
// #fixed_dt = 0.0
// #inertial_scaling = 1e5
// #damping_option = 1
// #damping_factor = 0.8
// #ref_pressure_option = 0
// #surface_process_option = 0
// #surface_diffusivity = 1e-6
// #has_thermal_diffusion = yes
// #has_hydration_processes = no
// #hydration_migration_speed = 3e-9
//                                          [bc]
// #vbc_x0 = 1
// #vbc_x1 = 1
// #vbc_val_x0 = -1e-9
// #vbc_val_x1 = 1e-9
// #vbc_y0 = 1
// #vbc_y1 = 1
// #vbc_val_y0 = 0
// #vbc_val_y1 = 0
// #vbc_z0 = 0
// #vbc_z1 = 0
// #vbc_val_z0 = 0
// #vbc_val_z1 = 0
// #vbc_n0 = 1
// #vbc_val_n0 = 0
// #vbc_n1 = 1
// #vbc_val_n1 = 0
// #vbc_n2 = 1
// #vbc_val_n2 = 0
// #vbc_n3 = 1
// #vbc_val_n3 = 0
// #has_winkler_foundation = yes
// #winkler_delta_rho = 0
// #has_elastic_foundation = no
// #elastic_foundation_constant = 1e11
// #has_water_loading = yes
// #surface_temperature = 273
// #mantle_temperature = 1600
//                                                          [ic]
// #mattype_option = 0
// #mattype_layer_depths = [0.5]
// #weakzone_option = 1
// #weakzone_plstrain = 0.1
// #weakzone_azimuth = 0
// #weakzone_inclination = 90
// #weakzone_halfwidth = 1.5
// #weakzone_y_min = 0
// #weakzone_y_max = 1
// #weakzone_depth_min = 0
// #weakzone_depth_max = 1
// #weakzone_xcenter = 0.5
// #weakzone_ycenter = 0.5
// #weakzone_zcenter = 0.5
// #weakzone_xsemi_axis = 1e3
// #weakzone_ysemi_axis = 1e3
// #weakzone_zsemi_axis = 1e3
// ### How to build the thermal profile
// #temperature_option = 0
// #oceanic_plate_age_in_yr = 60e6
// ### For temperature_option = 90
// #Temp_filename = Thermal.dat
// #Nodes_filename = Coord.dat
// #Connectivity_filename = Connectivity.dat
// #isostasy_adjustment_time_in_yr = 0
//                                                                [mat]
// rheology_type = elastic # Possible values: elastic, viscous, maxwell,
//                         # elasto-plastic, or elasto-visco-plastic
// #is_plane_strain = no
// #phase_change_option = 0
// #num_materials = 1
// ### The following parameters can take either 'num_materials' values or 1
// ### value, which is treated as 'num_materials' identical values.
// #rho0 = [ 3210 ]
// #alpha = [ 3e-5 ]
// #bulk_modulus = [ 128.2e9 ]
// #shear_modulus = [ 80.5e9 ]
// #visc_exponent = [ 3.05 ]
// #visc_coefficient = [ 1.25e-1 ]
// #visc_activation_energy = [ 3.76e5 ]
// #heat_capacity = [ 1000 ]
// #therm_cond = [ 3 ]
// #pls0 = [ 0 ]
// #pls1 = [ 0.1 ]
// #cohesion0 = [ 4e7 ]
// #cohesion1 = [ 4e6 ]
// #friction_angle0 = [ 30 ]
// #friction_angle1 = [ 5 ]
// #dilation_angle0 = [ 0 ]
// #dilation_angle1 = [ 0 ]
// #max_viscosity = 1e24
// #min_viscosity = 1e18
// #max_tension = 1e9
// #max_thermal_diffusivity = 5e-6
