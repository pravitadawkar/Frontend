function tablechange(){

var myTable=document.getElementById("mytable");
myTable.rows[parseInt(document.getElementById("row").value)]
.cells[document.getElementById("col").value]
.innerHTML=document.getElementById("value").value;

};