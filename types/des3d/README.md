# DES3D

This Simput type is meant to produce an input file for DynSol.

## Downloading Simput And Running DES3D

 Taken from the README of Simput, also found on this fork's GitHub page:
 
```sh
$ git clone --recursive https://github.com/481772/simput_for_des.git
$ cd simput_for_des
$ npm install
$ npm run build
$ npm link
$ Simput

  Usage: Simput [options]

  Options:

    -h, --help                    output usage information
    -V, --version                 output the version number

    -i, --input [file|directory]  Input file or directory
    -o, --output [directory]      Output directory to output to
    -t, --type [type]             Type of input

    -s, --silent                  Do not open the browser

    -c, --compile [directory]     Directory to compile files
    -m, --minify                  Minify compiled file
```

To compile DES3D and open a development server that watches for another compile:

```sh
$ npm run type:des3d
$ npm run dev
```

# Notes on DES3D

Simput helps us provide a simple user interface to define a set of inputs, and output a configuration file for use by DynSol.

## How to use DES3D 

Each tab of the sidebar (a view) contains parameters with default values (from default.cfg), however, views with names containing "conditional" have fields that need to be filled in.

Parameters with is_ or has_ at the beginning take 1 for 'yes' and 0 for 'no'.

In the "mat" tab/view, parameters with brackets take as many values as the input of num_materials, or 1. The order of values in these parameters matters, because each index of a value
corresponds to a different material, up to the num_materials. Alternatively, one value can apply to each material; the brackets are still needed. For example:

```sh
[ic]
mattype_layer_depths = [0.4, 0.7]
[mat]
num_materials = 2
weakzone_zcenter = [5]
```

2 materials have the same weakzone_zcenter of 5 and different mattype_layer_depths properties. 


## Notes on output 
After the user has clicked each side tab and chosen an option from the side tabs with "conditional" in the label, click "Save". Simput downloads a .zip file containing a model definition in JSON, as well as des.txt, des1.txt, ... des8.txt. Drag this .zip file into simput/types/des3d/src/final_file_folder. Then, run the Python code "final_file.py". This python script makes a final text file and deletes the .zip file, as well as unzipped files. The file has the same name as the parameter "modelname". The Python script can only delete folders named "generated-output-des3d.zip", however, meaning the .zip file's name should not be changed, and there should be no duplicates.


## Development resources 
Simput has a helpful README for getting started: https://github.com/Kitware/simput
as well as documentation: http://kitware.github.io/simput/docs/
One can also look through types, such as vera & pyfr, oscillators, or vcard. Oscillators
and vcard are intended to serve as tutorials, whereas vera & pyfr are types used for realistically complex simulations.

### Looking further
Find a way to incorperate conditionals into views. Alternatively, move conditional statements into a subview, for organization. Oscillator and the documentation provide examples of conditionals and subtabs, respectively. Pyfr and Vera might have robust examples.

It could be possible to automate the bracket parameters in mats, as well as mattype_layer_depths in ic. This would involve hooks, which the documentation touches upon. Starting from the documentation and looking into Simput's examples, one could determine whether or not this is practical. After using hooks to make a dynamic number of inputs available, one would have to consider in what way the data would be stored. This is especially important, because the user has an option to input one or multiple values, which can become complicated with too many input boxes. The existence of several input boxes under one view implies that the hooks changed a property of parameters called "layout", which could create multiple input boxes. One might instead choose to create a dynamic number of subviews, where each subview represents all the properties of one material.
- Oscillator has a convert.js which assembles multiple parameters' values into lines and plugs the lines into a .hbs file. One could arrange user inputs into an assortment surrounded by brackets and with commas inbetween 


The output should be saved to one file, without needing to use the final_file_folder directory. The "push" command in oscillator's convert.js might help with this, or other problems above. DES3D's default.hbs and convert.js files assembles the inputs in separate files because assigning the results to the same file led to the last call of the function. The convert.js file combs through the parameters, using the idea that there is one attribute to each view. The convert.js works this way, beacause it was taken from vcard, which only used one view. The overall function only spits out the results once, so saving each views' values to the same file resulted in each views' values rewriting one another. As vcard is basic and oscillator writes data to multiple files, it could be worth skimming vera and pyfr because these types are more complicated.

Another problem with the output file is that the values of parameters derived from conditionals do not show up. This is because conditional parameters work differently from the parameters which are nestled in views and attributes, as shown below. 

Overall, more knowledge of .js and .hbs could have been used.

(Additional notes)
Scientific notation was expressed in strings: "30e3" 

Floats were fine, can be positive or negative

Integers were also fine and can be positive or negative

Invalid input types weren't not accepted; clicking save showed that Simput took the last valid input

Implementing conditionals without using 'ui = enum' was challenging

Format of model.js found in docs and simpler examples (There are likely more challenging combinations):

```sh
order: [list of views in order they should appear in]
views: {
  {
    view id:
    other properties:
    attributes: []
    (attributes have more properties. For oscillator, they have 'src' which is related to output and hooks)
  }
}
defintion{
  attribute{
    {
      paramters. The Simput documentation explains these
    }
    {
      parameter
    }
  }
  attribute{
    parameter
  }
}
```

Simput documentation also provides a good definition of type/src/lang/xx/label.json and /help/(attr name)/(param.txt). Label.JSON makes a label above views, attributes, and parameters, in addition to describing what the side tabs say. The folder describes parameter names, with the .txt files appearing as popups beneath input bars, at least in oscillator.

From reading the handlebars webpage and looking at the JSON datamodel, which Simput produces when no convert.js is provided, it is clear that most convert.js use some form of: datamodel.view.attr.param[0] to narrow in on and pass data around. Currently, conditionals' values aren't being passed to handlebars, despite their reliance on a value from an attribute. This is because the conditionals rely on a structure which diverges from that of views, attributes, and parameters:

```sh
"mesh_conditional_v":
[{"name":"conditional parameters from mesh",
"id":3,
"mesh_conditional_attr":


{"meshing_option":
{"id":"mesh_conditional_attr.meshing_option","value":[95]}},

"p_filename":
{"poly_filename":
{"id":"p_filename.poly_filename","value":["mesh.poly"]}},

"ref_zonex":{"refined_zonex":{"id":"ref_zonex.refined_zonex","value":["[0.4, 0.6]"]}},
...
```
vs that of markers:

```sh
"markers_v":
[{"name":"markers",
"id":4,
"markers_attr":


{"init_marker_option":
{"id":"markers_attr.init_marker_option","value":["1"]},

"markers_per_element":
{"id":"markers_attr.markers_per_element","value":["4"]},
```

The brackets suggest that the template file can scan through views and find every element of markers, whereas the conditional values need to be defined in a way that doesn't involve views or attributes.

Simput didn't like it when 