function calcularPropina() {
    let total = document.getElementById("total"); // Agafar l'element HTML
    console.log(total);
    let totalValue = total.value; // Agafar el valor de l'element input
    let totalFloat = parseFloat(totalValue); // Pasar el valor a float (perquè ve com str)
  // Agafem element Total de la factura i passar-ho a num

  // Afagem element Porcentaje de Propina i passar-ho a num
  let tipPercentage = parseFloat(
    document.getElementById("propinaPorcentaje").value
  ); // Forma curta

  // Passem propina de percentatge a decimal
  let tipDecimal = tipPercentage / 100;

  // Calculem propina
  let tip = totalFloat * tipDecimal;

  // Calculem preu total que paguem
  let result = totalFloat + tip;

  //El mateix càlcul però en una sola linia
  let resultOneLine = totalFloat + (totalFloat * tipPercentage) / 100;

  //Agafo element de l'html i el modifico amb innerhtml
  document.getElementById("propina").innerHTML = tip + " €";

  //Agafo element de l'html i el modifico amb innerhtml
  document.getElementById("totalResult").innerHTML = result + " €";
}

let btncalcular = document.getElementById("btnCalcular");
btncalcular.addEventListener("click", calcularPropina);
