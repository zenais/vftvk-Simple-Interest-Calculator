function compute() {
  // read nodes by id of amount interest rate and no. of years
  let amount_val = document.getElementById("amount");
  let interest_rate = document.getElementById("interest");
  let num_years = document.getElementById("years");

  // assign local date to date_today and extrapolate year in 4 digits
  let date_today = new Date();
  let this_year = date_today.getFullYear();

  // chack if fields are empty, if not send alert message
  if (amount_val.value == "") {
    alert("Plase enter the amount to invest");
    amount_val.focus();
    return false;
  }
  else if(interest_rate.value==NaN){
    alert("Please enter the interest rate");
    interest_rate.focus();
    return false;
  }
  else {
    a_invested = document.getElementById("amount_invested");
    let final_amount= parseInt(amount_val.value);
    let intreset_amount = parseFloat(interest_rate.value);
    final_amount=(intreset_amount*parseInt(num_years.value)/100)*final_amount;

    a_invested.innerHTML=`
      If you deposit
      <span>${amount_val.value}</span>,<br>
      at an interest rate of <span>${intreset_amount}</span>.<br>
      You will receive an amount of <span>${final_amount}</span>,<br>
      in the year <span>${this_year+parseInt(num_years.value)}</span><br>
      `

    return true;
  }

}
