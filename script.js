let input=document.getElementById('input-box')//will select input box
let buttons=document.querySelectorAll('button')//will select all buttons


let string="";//It will store our result
let arr=Array.from(buttons)//this will make an array of our buttons whose name we have given arr

arr.forEach(buttons  => {
  
    buttons.addEventListener('click',(e)  => {//whenever we will click this e will be pass
        if(e.target.innerHTML=='='){//if our target innerhtml is equal this code will run
            string=eval(string);//eval is an inbuilt function in js whatever will be in out styring will be evaluated
            input.value=string;//whenever equal button will be pressed this string value will be shown in the above
        }
      
        else if(e.target.innerHTML =='AC'){//when allclear(AC button is clicked 
            string="";//our string will become empty) 
            input.value=string;
        }
        
        else if(e.target.innerHTML=='DEL'){//when DELETE( DEL button is clicked )
            string = string.substring(0,string.length-1)//to remove the last digit string(string.substring will return substring) this will remove the last digit (0,string.length-1)

            input.value=string; //will give us digits string
        }
        else{
             
            string += e.target.innerHTML;//other buttons will be added to our string
            input.value = string;//whatever number will be clicked will be displayed like 7,3,4 etc
    
    
        }
            
       
    })
})
