let celsius = document.getElementById('celsius'); 
let kelvin =  document.getElementById('kelvin'); 


celsius.oninput = function () { 
                  let k = (parseFloat(celsius.value) + 273.15); 
                  kelvin.value = parseFloat(k.toFixed(2)); 
        }  
 kelvin.oninput = function () { 
                  let c = (parseFloat(kelvin.value) - 273.15); 
                  celsius.value = parseFloat(c.toFixed(2)); 
        } 