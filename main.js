let select = document.querySelectorAll('select');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let select1 = document.querySelector('#select1');
let select2 = document.querySelector('#select2');
let API = 'http://api.exchangeratesapi.io/v1/latest?access_key=af6ef5865c70a678c323370fceccd785';

let info = document.querySelector('#info');
let convert = document.querySelector('#convert')
let html = ' ';
function currency(){
fetch(API)
.then(res=>{
   return(res.json()) })
.then(data =>{
    console.log(data)
 
   
        const arrKeys = Object.keys(data.rates)
        console.log(arrKeys);
      let rates = data.rates;
        arrKeys.map(item=>{
           
            return html += `<option value=${item}>  ${item}</option>`;
           
        });
      
           select1.innerHTML = html;
           select2.innerHTML = html;
       inp1.addEventListener('keyup' , ()=>{
              inp2.value = (inp1.value * rates[select2.value] / rates[select1.value]).toFixed(3);
       })
       inp2.addEventListener('keyup' , ()=>{
        inp1.value = (inp2.value * rates[select1.value] / rates[select2.value]).toFixed(3);
    })
    
    
      convert.onclick = ()=>{
        inp2.value = (inp1.value * rates[select2.value] / rates[select1.value]).toFixed(3);
        inp1.value = (inp2.value * rates[select1.value] / rates[select2.value]).toFixed(3);
      }
       info.innerHTML ='Last updated: ' + data.date
    })
}


currency()
