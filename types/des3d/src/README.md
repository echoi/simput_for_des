what does it do
(simput definition)

specific application 
dyn sol earth 3d. the final product is a cfg file in the same
format as an example input file

how to use simput/launch dyn sol earth 3d
pfrom documentation]
install simput
npm run type:des3d
npm run dev
fill in everything (some are left blank, namely the conditoinals- pick one)



documentation of making it(/resources)
started with default.cfg and made a bunch of attributes/parameters. Overall
the parameters were basic and the most complicated part were the conditionals,
which were formatted based on Simput's examples: pyfr & vera (practical use- very
complex), oscillators (complex enough), and vcard (simple). The conditionals
have different formatting in both model.js, as well as label.json. On the topic of labels, one can use "label" in model.js, or label.json(?). going into /lang/xx/ directory and inserting text files with parameters' names allows the viewer to read the txt files' advice while typing in an input bar. This ____?
does not use hooks, which the Simput documentation describes as making the model/
web interface more dynamic. The most promising use of hooks would have been to (assuming its possibiliy) implement a dynamic number of inputs, for the "mat" view. 
Template used a format borrowed from vcard, which ends up making several
different output files. there is a python script which unzips the folder from 
the Simput page and compiles the text files into one.
- oscillator when
- they may have to update python