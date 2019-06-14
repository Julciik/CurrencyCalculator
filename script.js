var convertButton = document.getElementById('convert');
var rates = [0.266884, 3.75274, 0.232962524, 4.2921, 0.873795146, 1.14324];
var PLNUSD = rates[0];
var USDPLN = rates[1];
var PLNEUR = rates[2];
var EURPLN = rates[3];
var USDEUR = rates[4];
var EURUSD = rates[5];
convertButton.onclick = function()
{
	var amountFromInput = document.getElementById('value').value;
	var from = document.getElementById('fromValue').value;
	var to = document.getElementById('toValue').value;
	var value = 0;
	if(from == 'PLN' && to == 'USD')
	{
		value = amountFromInput * PLNUSD;
		document.querySelector('.result').innerHTML = amountFromInput + ' PLN = ' + value.toFixed(2) + ' USD';	
	} else if(from == 'USD' && to == 'PLN')
	{
		value = amountFromInput * USDPLN;
		document.querySelector('.result').innerHTML = amountFromInput + ' USD = ' + value.toFixed(2) + ' PLN';	
	} else if(from == 'PLN' && to == 'EUR')
	{
		value = amountFromInput * PLNEUR;
		document.querySelector('.result').innerHTML = amountFromInput + ' PLN = ' + value.toFixed(2) + ' EUR';	
	} else if(from == 'EUR' && to == 'PLN')
	{
		value = amountFromInput * EURPLN;
		document.querySelector('.result').innerHTML = amountFromInput + ' EUR = ' + value.toFixed(2) + ' PLN';	
	} else if(from == 'USD' && to == 'EUR')
	{
		value = amountFromInput * USDEUR;
		document.querySelector('.result').innerHTML = amountFromInput + ' USD = ' + value.toFixed(2) + ' EUR';	
	} else if(from == 'EUR' && to == 'USD')
	{
		value = amountFromInput * EURUSD;
		document.querySelector('.result').innerHTML = amountFromInput + ' EUR = ' + value.toFixed(2) + ' USD';	
	} else if(from == 'PLN' && to == 'PLN')
	{
		document.querySelector('.result').innerHTML = amountFromInput + ' PLN = ' + amountFromInput + ' PLN';	
	} else if(from == 'USD' && to == 'USD')
	{
		document.querySelector('.result').innerHTML = amountFromInput + ' USD = ' + amountFromInput + ' USD';	
	} else if(from == 'EUR' && to == 'EUR')
	{
		document.querySelector('.result').innerHTML = amountFromInput + ' EUR = ' + amountFromInput + ' EUR';	
	}
}