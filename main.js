let select = document.querySelectorAll('select');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let select1 = document.querySelector('#select1');
let select2 = document.querySelector('#select2');
let API = 'https://v6.exchangerate-api.com/v6/9b2a3238541b4c92c8662b44/latest/USD';
let flag = `https://countryflagsapi.com/png/`;
let info = document.querySelector('#info');
let convert = document.querySelector('#convert')
let html = ' ';


async function currency(){
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
    const arrKeys = Object.keys(data.conversion_rates)
    console.log(arrKeys);
  let rates = data.conversion_rates;
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
   info.innerHTML ='Last updated: ' + data.time_last_update_utc;
}
currency();
