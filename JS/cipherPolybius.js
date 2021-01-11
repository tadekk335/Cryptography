
    window.addEventListener("load", function readFromTextBox()
    {
      if(document.getElementById("buttonPolybius"))document.getElementById("buttonPolybius").addEventListener("click", function () 
      {
         var str = document.getElementById("textPolybius").value;
         var result = encrypt(str);

         document.getElementById("textPolybius2").value = result;    
     });

   if(document.getElementById("buttonPolybius2"))document.getElementById("buttonPolybius2").addEventListener("click", function ()
   {
      var str = document.getElementById("textPolybius").value;
      var result1 = decrypt(str);

      document.getElementById("textPolybius2").value = result1;    
  });
   
   });

  function encrypt(string)
  {
    var text = (string.replace(/j/gi,"I")).toUpperCase();
    var newtext="";
    var polybiusSquare = [['A','B','C','D','E'],['F','G','H','I','K'],
    ['L','M','N','O','P'], ['Q','R','S','T','U'],['V','W','X','Y','Z']]; 
     
    for(var i=0; i<text.length; i++)
    {
        b=text.charAt(i);
            for(var j=0; j<5; j++)
                    {
                        for(var k=0; k<5; k++)
                        {
                            if(b==polybiusSquare[j][k])
                            {
                                var f=j+1;
                                var s=k+1;
                                 newtext+=f+""+s;
                            }
                        
                        }
                    }
    } 
   return newtext;
  }
  function decrypt(string)
  {
      var text = string.toString();
      var letter="";
      var decrypted="";
      var polybiusSquare = [['A','B','C','D','E'],['F','G','H','I','K'],
      ['L','M','N','O','P'], ['Q','R','S','T','U'],['V','W','X','Y','Z']]; 

      for(var i=0;i<text.length-1;i++)
      {
        var a =(intAt(string,i))-1;
        var b = (intAt(string,i+1))-1;
      
        letter = polybiusSquare[a][b];
        decrypted+=letter+"";
        i++;
      }
   
    return decrypted;
  }
  function intAt(text,index)
  {
    var oldstring = text;
	var letter = parseInt(text.substring(index, index+1));
   
    return letter;
  }