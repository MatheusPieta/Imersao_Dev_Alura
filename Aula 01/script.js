var valorEmDolar = 23000;
var cotacaoDoDolar = 5.32;
var nome = "Matheus"

var valorEmReal = valorEmDolar*cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
alert("Ola " + nome +" Sua conversão deu " + "R$ "+ valorEmReal);

var temperaturaCelcius = 10;
var temperaturaEmFahrenheit = temperaturaCelcius * 2 + 30;
alert(temperaturaCelcius + " Em celcius é igual a " + temperaturaEmFahrenheit + " Em Hahrenheit");

var distanciaEmKm = 10000;
var distanciaEmAnosLuz = distanciaEmKm / (299792458 * 1000 * 31557600 / (10**6));
alert("Distancia em Anos Luz " + distanciaEmAnosLuz);

var valorEmBitcoin = valorEmDolar * 0.000044;
alert("Valor em Bitcoin " + valorEmBitcoin);
