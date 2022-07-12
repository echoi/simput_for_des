module.exports = {
  order: ['markers_v'],
  views: {
    markers_v: {
      size: -1,
      attributes: ['marker_attr'],
    },
  },
  definitions: {
    
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
  },

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
}; 