# DES3D

This Simput type is meant to produce an input file for DynSol.

## Downloading simput and running des3d

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

To compile DES3D and open a development server which watches for another compile:

```sh
$ npm run type:des3d
$ npm run dev
```

# Notes on DES3D

Simput helps us provide a simple user interface to define a set of inputs, and output a configuration file for use by DynSol.

## How to use DES3D 

Each tab of the side-bar (a view) contains parameters with default values (from default.cfg), however views with names containing "conditional" have fields that need to be filled in.

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

After inputting the appropriate parameters, click "Save," located to the top and right of the webpage. Simput downloads a .zip file containing a model definition in JSON, as well as
des.txt, des1.txt, ... des8.txt. Drag this .zip file into simput/types/des3d/src/final_file_folder. Then, run the Python code "final_file.py"
This python script makes a final text file and deletes the .zip file, as well as unzipped files. The file has the same name as the parameter "modelname". 
The Python script can only delete folders named "generated-output-des3d.zip", however, meaning the .zip file's name should not be changed, and there should be no duplicates.


## Development resources 
Simput has a helpful README for getting started: https://github.com/Kitware/simput
as well as documentation: http://kitware.github.io/simput/docs/
One can also look through types, such as vera & pyfr, oscillators, or vcard. Oscillators
and vcard are intended to serve as tutorials, whereas vera & pyfr are types used for realistically complex simulations.

### Looking further
Re-arrange model.js' views, so that conditionals can exist inside the ordinary view. Instances of conditionals in the middle of views are available in vera and pyfr; it is unclear whether these condtionals could function with parameters inbetween the conditional parameters.

Making the mat view & mattype_layer_depths (in ic) automatically dynamic. This should involves hooks, as they make the code more dynamic. However, this project did not use hooks. Types such as oscillators and more complicated models have a hooks.js file.

Conditionals might be wrong, in that the options are the only values the user can input (for example: 1,2,90,95, instead of 1 to 95). From testing, it does not seem possible to type in any number to an enum bar. The conditional bars might allow a user to type in a number, as long as the number is in the domain of the enum type. In that case, this method could be challenging because each number would be listed in model.js. One could also create an enum parameter with "2, 90 , or 95" and "a different number" for its domain and allow the user to go from there. It was difficult to make a conditional for parameters work off an integer value. One could also find how to implement conditionals without using enum. 

Parameters unrevealed for conditional statements pass default values regardless of user input. These parameters could be left empty by default, or the convert.js/.hbs template files could deal with inputs. One example is the oscillator convert.js, which uses conditionals depending on whether analysis or histogram was chosen, returning values for certain parameters.

The output should be saved to one file, without needing to use the final_file_folder directory. The "push" command in oscillator's convert.js looks like a helpful place to start. DES3D's default.hbs and convert.js files assemble the inputs in seperate files, because assigning the results to the same file led to the last call of the function. The template in DES3D was borrowed from vcard, which used one function and only worked with one view. The structure of the overall function, because it returned results at the end, necessiated that results become a collection of smaller results, rather than a result which kept updating. As vcard is basic and oscillator writes data to multiple files, it could be worth skimming vera and pyfr for a complicated example, with conditionals, that uses only 1 output file. 

