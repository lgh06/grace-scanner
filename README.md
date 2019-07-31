# Requirements
Install NodeJS first.  
for MacOS,  https://npm.taobao.org/mirrors/node/v10.16.0/node-v10.16.0.pkg  
for Windows, https://npm.taobao.org/mirrors/node/v10.16.0/node-v10.16.0-x64.msi  

# Install the tool
To install the tool, type below line in your Terminal.app (or cmd in windows) then press Enter on keyboard :  
`
npm i -g grace-monthly-sheet-scanner@0.0.8 --registry=https://registry.npm.taobao.org  
`  
then you have the `gs` command in your terminal now.   

# Use  
rename the monthly statistics excel file to `test.xlsx`,  
`cd` to the current directory which contains `test.xlsx`,
then execute `gs`.  

<pre>
➜  testgs ls
test.xlsx
➜  testgs gs
Usage: gs [options]

Options:
  -V, --version        output the version number
  -f, --file [file]    excel name,default is current path's test.xlsx (default: "test.xlsx")
  -s, --score [score]  1 or 2 (default: "1")
  -h, --help           output usage information
86
➜  testgs 
</pre>


