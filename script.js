


function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function compute() {

  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = parseInt(document.getElementById("years").value);
  var interest = principal * years * rate /100;
  var year = new Date().getFullYear()+years;
  var result = document.getElementById("result");


  // chack if fields are empty, if not send alert message
  if (principal == "") {
    alert("Plase enter the amount to invest");
    document.getElementById("principal").focus();
    return false;
  }
  else if(principal<=0){
    alert("Plase enter positive number");
    document.getElementById("principal").focus();
    return false;
  }

  result.innerHTML=`
    If you deposit <span class="highlighted">${principal}</span>,<br>
    at an interest rate of <span class="highlighted">${rate}%</span>.<br>
    You will receive an amount of <span class="highlighted">${interest.toFixed(2)}</span>,<br>
    in the year <span class="highlighted">${year}</span><br>
    `

  return true;


}
