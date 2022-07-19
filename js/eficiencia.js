let limp = document.querySelector('#limp')
limp.addEventListener('click', Limpar)
let ef = document.querySelector('#ef')
ef.addEventListener('click', eficienciaCalc)

function Limpar(){
  t1 = (" ")
  q1 = (" ")
  res1 = (" ")
  document.getElementById('t').value = t1
  document.getElementById('q').value = q1
  document.getElementById('res').value = res1
}
      
function eficienciaCalc(){
  let t = Number.parseFloat(document.getElementById('t').value) 
  let q = Number.parseFloat(document.getElementById('q').value)
  let res2 = t / q
  document.getElementById('res').value = res2
}