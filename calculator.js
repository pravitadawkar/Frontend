
$("document").ready(function(){
$("#clear").click(function(){
   $("#fnum").val("")
   $("#snum").val("")
   $("#ans").val("")
});

});
 

  function calculate(){
      var fnum=$("#fnum").val();
      var snum=$("#snum").val();
      var result=$("input[name='math']:checked").val();

      let ans ;
     if(result=="add")
   {
      ans=parseInt(fnum) + parseInt(snum);
   }
     else if(result=="sub"){
      ans=parseInt(fnum) - parseInt(snum);
    }
     else if(result=="multi"){
     ans=parseInt(fnum) * parseInt(snum);
    }
     else if(result=="div"){
     ans=parseInt(fnum) / parseInt(snum);
   }

     $("#ans").val(ans);
      
    
}; 