/*
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
*/
var calculate = document.querySelector("#calculate");
  
        calculate.addEventListener("click",() => {
          var bill = document.querySelector("#billamt").value;
          var tipPercentage = document.querySelector("#serviceQual").value;
          var persons = document.querySelector("#peopleamt").value;

        var result = (bill * tipPercentage)/persons;
        result = result.toFixed(2)
    
          if(bill === "" || tipPercentage === 0 || persons == 0){
            alert("Please Enter some values to get results.")
            return;
          }
          if(bill <= 0 || persons <=0){
            alert("Please provide Val > 0 ")
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

          colorchange();
           
      document.getElementById("tip").innerHTML = result;

    }); 

    function refresh(){
        location.reload();
    };

    function colorchange(){ 
      document.getElementById("tip").style.color = "#ff0000";   
      };