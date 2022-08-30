/*window.onload = () => {
  document.querySelector('#calculate').onclick = calculateTip;
}
function calculateTip()
{
  var bill = document.querySelector("#billamt").value;
  var tipPercentage = document.querySelector("#serviceQual").value;
  var persons = document.querySelector("#peopleamt").value;
  if(bill==="" || tipPercentage==0){
    window.alert("Please Enter some values to get results.");
    return;
}
if(persons=="" || persons <=1){
  persons=1;
  document.getElementById('each').style.display="none;"
}else {
  document.getElementById('each').style.display="block;"
}
var result = bill * tipPercentage/persons;
result = Math.round(result*100)/100;
result = result.toFixed(2);

document.getElementById('total').style.display='block;'
document.getElementById('tip').innerHTML=total;
}
document.getElementById('total').style.display='none;'
document.getElementById('each').style.display="none;"

document.getElementById('calculate').onclick=function(){
calculateTip();

}*/
window.onload = () => {
  document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip()
{
  var bill = document.querySelector("#billamt").value;
  var tipPercentage = document.querySelector("#serviceQual").value;
  var persons = document.querySelector("#peopleamt").value;
  
  if(bill === '' || tipPercentage ==='Select' || persons === '')
  {
    window.alert("Please Enter some values to get results.");
    
      return;
  }
  if(persons === '1')
  {
      document.querySelector('#each').style.display = 'none';
  }
  else
  {
      document.querySelector('#each').style.display = 'block';
  }
  var tip=(bill*tipPercentage)/persons;
  tip=tip.toFixed(2);
  document.getElementById("total").innerHTML=tip;
}
function fun(){  
  document.getElementById("myForm").reset();  
} 


