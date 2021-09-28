

function sensorFeedCalculation(reset = false) {

    const springDiam = document.getElementById("springDiam");
    const diamTolerance = document.getElementById("diamTolerance");
    const numberOfCoils = document.getElementById("numberOfCoils");

    if (reset) {
        document.getElementById("heroResult").style.visibility = "hidden";
        springDiam.value = "";
        diamTolerance.value = "";
        numberOfCoils.value = "";
        return;
    }
 
    if (numberInputValidation(springDiam, diamTolerance, numberOfCoils)) {
        var sensorFeed = Math.floor(diamTolerance.value*2*Math.PI*numberOfCoils.value*0.80);
        if (sensorFeed > (springDiam.value*0.75)) {
            sensorFeed = Math.floor(springDiam.value*0.75);        
        }

        document.getElementById("sensorFeedResult").innerHTML = "Plage de palpage : " + sensorFeed + "mm";
        document.getElementById("heroResult").style.visibility = "visible";
    } else {
        document.getElementById("heroResult").style.visibility = "hidden";
    }
}

function clearInputs() {
    sensorFeedCalculation(true);
}


