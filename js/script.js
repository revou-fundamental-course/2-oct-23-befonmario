

const convertCel = () => {
    var celcius = parseFloat(document.querySelector("#celcius").value);

    var fahrenheitResult = (1.8 * celcius) + 32;
    var hasilCel = fahrenheitResult.toFixed(2);

    document.querySelector("#celcius").value = celcius;
    document.querySelector("#fahrenheit").value = hasilCel;

    if (!isNaN(celcius)) {
        fahrenheit = (1.8 * celcius) + 32;
        document.querySelector("#calc").value = "(" + celcius + "°C" + "* 1.8 ) + 32 = " + fahrenheit +"°F";
    } else {
        document.querySelector("#calc").value = "Kalkulasi tidak dapat dilakukan.";
    }

}
const convertFahr = () => {
    var fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);

    var celciusResult = (fahrenheit - 32) / 1.8
    var hasilFahr = celciusResult.toFixed(2);

    document.querySelector("#celcius").value = hasilFahr;
    document.querySelector("#fahrenheit").value = fahrenheit;

    if (!isNaN(fahrenheit)) {
        celsius = (fahrenheit - 32) / 1.8;
        document.querySelector("#calc").value = "(" +fahrenheit + "°F - 32) / 1.8 = " + celsius + "°C";
    } else {
        document.querySelector("#calc").value = "Kalkulasi tidak dapat dilakukan.";
    }

}

const reset = () =>{
    document.querySelector("#celcius").value = " ";
    document.querySelector("#fahrenheit").value = " ";
    document.querySelector("#calc").value = " ";

}

