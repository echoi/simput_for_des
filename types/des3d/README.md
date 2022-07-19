# DES3D

This Simput type is meant to produce an input file for DynSol.

## Development (how to download simput and run the type locally) --> simput instructions for downloading oscillator but change thigns + try with iron samovar

 Taken from the README of Simput, also found on this fork's GitHub page:
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

To compile DES3D and open a development server which watches for another compile:
$ npm run type:des3d
$ npm run dev


#Notes on DES3D

Simput helps us provide a simple user interface to define a set of inputs, and output a configuration file for use by DynSol.

##How to use DES3D 

Each tab of the side-bar (a view) contains parameters with default values (from default.cfg), however views with names containing "conditional" have fields that need to be filled in.

Parameters with is_ or has_ at the beginning take 1 for 'yes' and 0 for 'no'.

In the "mat" tab/view, parameters with brackets take as many values as the input of num_materials, or 1. The order of values in these parameters matters, because each index of a value
corresponds to a different material, up to the num_materials. Alternatively, one value can apply to each material; the brackets are still needed. For example:

[ic]
mattype_layer_depths = [0.4, 0.7]
[mat]
num_materials = 2
weakzone_zcenter = [5]

2 materials have the same weakzone_zcenter of 5 and different mattype_layer_depths properties. 


##Notes on output 

After inputting the appropriate parameters, click "Save," located to the top and right of the webpage. Simput downloads a .zip file containing a model definition in JSON, as well as
des.txt, des1.txt, ... des8.txt. Drag this .zip file into simput/types/des3d/src/final_file_folder. Then, run the Python code "final_file.py"
This python script makes a final text file and deletes the .zip file, as well as unzipped files. The file has the same name as the parameter "modelname". 
The Python script can only delete folders named "generated-output-des3d.zip", however, meaning the .zip file's name should not be changed, and there should be no duplicates.


##Development notes/resources
Simput has a helpful README for getting started: https://github.com/Kitware/simput
as well as documentation: http://kitware.github.io/simput/docs/
One can also look through types, such as vera & pyfr, oscillators, or vcard. Oscillators
and vcard are intended to serve as tutorials, whereas vera & pyfr are types used for
realistically complex simulations.




