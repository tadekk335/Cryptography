 
  window.addEventListener("load", function readFromTextBox()
   {
        if(document.getElementById("buttonXOR"))document.getElementById("buttonXOR").addEventListener("click", function ()
        {
           var str = document.getElementById("textXOR1").value;
           var str2 = document.getElementById("key").value;
           var result = convert(str,str2);
  
           document.getElementById("textXOR2").value = result;    
      });

        if(document.getElementById("buttonXOR2"))document.getElementById("buttonXOR2").addEventListener("click", function ()
        {
           var str = document.getElementById("textXOR1").value;
           var str2 = document.getElementById("key").value;
           var result1 = reconvert(str,str2);
  
           document.getElementById("textXOR2").value = result1;    
      });
  });

  function convert(text,key)
  {
          var value1 = text.replace(/ /g, "_");
          var value2 = key;
              
          while (value2.length<value1.length)
          {
             value2+=value2;
          }
          
          var binary,final=[];

          for(var i =0;i<value1.length;i++)
          {
        
            
             var val1binary=(value1.charCodeAt(i)).toString(2);
             console.log(val1binary);
             var val2binary=(value2.charCodeAt(i)).toString(2);
             console.log(val2binary);

              for(var j =0;j<val1binary.length;j++)
              {
                 
                 var binary= XOR(val1binary.charAt(j),val2binary.charAt(j)); 
                 final.push(binary);
                 
              }
              console.log(final);
          }  return final.join("");
  }

  function XOR(a,b)
  {
  	return (a!=b?1:0);
  }  

  function reconvert(text,key)
  {
    var value1=text.toString();
    var value2=key;
    var val1binary="";
    var val2binary="";
    var binary,final=[], word="", letter ='';

    while (value2.length<value1.length)
    {
       value2+=value2;
    }
   

    for(var i =0;i<value1.length/7;i++)
    {
       val1binary= binarySplit(value1,i);
       val2binary=(value2.charCodeAt(i)).toString(2);
       
       
        for(var j=0;j<val1binary.length;j++)
        {
           var binary= XOR(val1binary.charAt(j),val2binary.charAt(j)); 
           word += binary;
           
        }
        letter=String.fromCharCode(parseInt(word, 2));
        word="";
        final.push(letter);
        console.log(final);
    }  
    
    return final.join("").replace(/_/g, " ");
  }
 
  function binarySplit(text,index)
  {
    var iteration=index*7;
    var split=(text.substring(iteration, iteration+7));
    return split;
  }