import zipfile
import os
import shutil



with zipfile.ZipFile('generated-output-des3d.zip', 'r') as zip_ref:
    zip_ref.extractall()

#check the format of filename (.zip, hyphens & .zip as format)
#how does mkdtemp work. do i ahve to delete it and how do i access it ie filename/
#location
input_file = open('des3d.txt', 'r')
lines1 = input_file.readlines()

input_file = open('des3d1.txt', 'r')
lines2 = input_file.readlines()

input_file = open('des3d2.txt', 'r')
lines3 = input_file.readlines()

input_file = open('des3d3.txt', 'r')
lines4 = input_file.readlines()

input_file = open('des3d4.txt', 'r')
lines5 = input_file.readlines()

input_file = open('des3d5.txt', 'r')
lines6 = input_file.readlines()

input_file = open('des3d6.txt', 'r')
lines7 = input_file.readlines()

input_file = open('des3d7.txt', 'r')
lines8 = input_file.readlines()

input_file = open('des3d8.txt', 'r')
lines9 = input_file.readlines()
#i want to delete the zip itself, to avoid getting des3d(1) cannot be zipped

# but that sounds dangerous and not necessary as they can fix it without me 
#messing up or causing damage 

#['sim_v', 'mesh_v', 'mesh_conditional_v', 
#'markers_v', 'control_v', 'bc_v', 'ic_v', 'ic_conditional_v', 'mat_v']


last_list = []
line_num = 1

def Convert(string):
    list1=[]
    list1[:0]=string
    return list1

def append_1():
    global line_num
    global last_list
    last_list.append(lines1[line_num-1])
    line_num += 1
def append_2():
    global line_num
    global last_list
    last_list.append(lines2[line_num-1])
    line_num += 1
def append_3():
    global line_num
    global last_list
    last_list.append(lines3[line_num-1])
    line_num += 1
def append_4():
    global line_num
    global last_list
    last_list.append(lines4[line_num-1])
    line_num += 1
def append_5():
    global line_num
    global last_list
    last_list.append(lines5[line_num-1])
    line_num += 1
def append_6():
    global line_num
    global last_list
    last_list.append(lines6[line_num-1])
    line_num += 1
def append_7():
    global line_num
    global last_list
    last_list.append(lines7[line_num-1])
    line_num += 1
def append_8():
    global line_num
    global last_list
    last_list.append(lines8[line_num-1])
    line_num += 1
def append_9():
    global line_num
    global last_list
    last_list.append(lines9[line_num-1])
    line_num += 1

for i in range(0,33):
    append_1()
    #33 iterations, prints lines 1 up to 34
for i in range(33,37):
    append_3()
    #meshing_option is part of append_3(), prints up to line 38
for i in range(37,53):
    append_2()
for i in range(53,63):
    append_3()
for i in range(63,76):
    append_2()
for i in range(76,84):
    append_4()
for i in range(84,103):
    append_5()
for i in range(103,136):
    append_6()
for i in range(136,156):
    append_7()
for i in range(156,168):
    append_8()
for i in range(168,201):
    append_9()

#14th element of lines is the 15th line, where "modelname = [modelname]"
filename = lines1[14].split("= ")
filename = filename[1].replace("\n", "")
#have to remove the "\n" at the end of each line, and in this case the filename
filename =  filename + ".cfg"
#filename from one of the hbs answers?
text_file = open(filename, "w")
n = text_file. write(str("".join(last_list)))
text_file. close()



for i in range(1,9):
    os.remove("des3d"+str(i)+".txt")
os.remove("des3d.txt")

os.remove('generated-output-des3d.zip')

#in addition to dragging the .zip into this folder, one has to make a copy
#in order to save the .zip, but that is less practical than keeping the .cfg
