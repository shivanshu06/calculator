const values=document.getElementById('input')
const calculate=document.getElementById('calculate')
const show=document.getElementById('show')

const output=()=>{
   const m=eval(values.value)
   show.innerHTML = m;
}

calculate.addEventListener('click', output)