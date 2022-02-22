
 function validateform(form){  
  var name=document.getElementById('name').value;  
  var address=document.getElementById('address').value;  
  var adharno=document.getElementById('adharno').value;  
  var genderf=document.getElementById('genderf').value;  
  var genderm=document.getElementById('genderm').value;
  var subBIO=document.getElementById('subBIO').value;  
  var subPHY=document.getElementById('subPHY').value;  
  var subCHE=document.getElementById('subCHE').value;  
  var subENG=document.getElementById('subENG').value;  
  
if (name==null || name=="")
{  
  alert("Name can't be blank");  
  return false;  
}
else if(address==null || address=="" )
{  
  alert("please enter address");  
  return false;  
} 
else if(adharno==null || adharno=="" )
{  
  alert("please enter adharno");  
  return false;  
}  
else if((form.gender[0].checked==false) && (form.gender[1].checked==false) )
{
     alert("You must select male or female");
     return false;
 } 
else if(!this.subBIO.checked && !this.subPHY.checked && !this.subENG.checked && !this.subCHE.checked)
{  
  alert("please check subject");  
  return false;  
}  


}  




