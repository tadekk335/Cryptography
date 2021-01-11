 
    window.addEventListener("load", function readFromTextBox()
    {
      if(document.getElementById("buttonCaesar"))document.getElementById("buttonCaesar").addEventListener("click", function () 
      {
         var str = document.getElementById("textCaesar").value;
         var result = encrypt(str);

         document.getElementById("textCaesar2").value = result;    
     });

   if(document.getElementById("buttonCaesar2"))document.getElementById("buttonCaesar2").addEventListener("click", function ()
   {
      var str = document.getElementById("textCaesar2").value;
      var result1 = decrypt(str);

      document.getElementById("textCaesar").value = result1;    
  });
   
   });

  function encrypt(str)
  {
  
   var newtext="";

  
  for (var i = 0; i < str.length; i++) {
    
    var c = str[i];

    
    if (c.match(/[a-z]/i)) {
      
      var code = str.charCodeAt(i);

      
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + 3) % 26) + 65);
      }

     
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + 3) % 26) + 97);
      }
    }

    
    newtext += c;
  }

 
   
   return newtext;
  }
  function decrypt(str)
  {
    var decrypted ="";
    for (var i = 0; i < str.length; i++) {
      var c = str[i];


        
        var code = str.charCodeAt(i);
  
        
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 - 3+26) % 26) + 65);
        }
  
       
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 - 3+26) % 26) + 97);
        }
  
      
      decrypted += c;
    }
   
    return decrypted;
  }

