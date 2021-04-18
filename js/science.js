let percent = Math.floor(Math.random() * 101); 
// randomize each question:
if (percent <= 25) {
    $("#q-1").html("<input type='radio' class='btn-check' name='element' id='hydrogen' autocomplete='off'><label class='btn btn-secondary' for='hydrogen'>Hydrogen</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='element' id='hydrochloride' autocomplete='off'><label class='btn btn-secondary' for='hydrochloride'>Hydrochloride</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='element' id='helium' autocomplete='off'><label class='btn btn-secondary' for='helium'>Helium</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='element' id='hydroxide' autocomplete='off'><label class='btn btn-secondary' for='hydroxide'>Hydroxide</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1").html("<input type='radio' class='btn-check' name='element' id='hydroxide' autocomplete='off'><label class='btn btn-secondary' for='hydroxide'>Hydroxide</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='element' id='hydrogen' autocomplete='off'><label class='btn btn-secondary' for='hydrogen'>Hydrogen</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='element' id='hydrochloride' autocomplete='off'><label class='btn btn-secondary' for='hydrochloride'>Hydrochloride</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='element' id='helium' autocomplete='off'><label class='btn btn-secondary' for='helium'>Helium</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1").html("<input type='radio' class='btn-check' name='element' id='helium' autocomplete='off'><label class='btn btn-secondary' for='helium'>Helium</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='element' id='hydroxide' autocomplete='off'><label class='btn btn-secondary' for='hydroxide'>Hydroxide</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='element' id='hydrogen' autocomplete='off'><label class='btn btn-secondary' for='hydrogen'>Hydrogen</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='element' id='hydrochloride' autocomplete='off'><label class='btn btn-secondary' for='hydrochloride'>Hydrochloride</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1").html("<input type='radio' class='btn-check' name='element' id='hydrochloride' autocomplete='off'><label class='btn btn-secondary' for='hydrochloride'>Hydrochloride</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='element' id='helium' autocomplete='off'><label class='btn btn-secondary' for='helium'>Helium</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='element' id='hydroxide' autocomplete='off'><label class='btn btn-secondary' for='hydroxide'>Hydroxide</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='element' id='hydrogen' autocomplete='off'><label class='btn btn-secondary' for='hydrogen'>Hydrogen</label>")
}

if (percent <= 25) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='planet' id='mercury' autocomplete='off'><label class='btn btn-secondary' for='mercury'>Mercury</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='planet' id='venus' autocomplete='off'><label class='btn btn-secondary' for='venus'>Venus</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='planet' id='saturn' autocomplete='off'><label class='btn btn-secondary' for='saturn'>Saturn</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='planet' id='mars' autocomplete='off'><label class='btn btn-secondary' for='mars'>Mars</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='planet' id='mars' autocomplete='off'><label class='btn btn-secondary' for='mars'>Mars</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='planet' id='mercury' autocomplete='off'><label class='btn btn-secondary' for='mercury'>Mercury</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='planet' id='venus' autocomplete='off'><label class='btn btn-secondary' for='venus'>Venus</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='planet' id='saturn' autocomplete='off'><label class='btn btn-secondary' for='saturn'>Saturn</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='planet' id='saturn' autocomplete='off'><label class='btn btn-secondary' for='saturn'>Saturn</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='planet' id='mars' autocomplete='off'><label class='btn btn-secondary' for='mars'>Mars</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='planet' id='mercury' autocomplete='off'><label class='btn btn-secondary' for='mercury'>Mercury</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='planet' id='venus' autocomplete='off'><label class='btn btn-secondary' for='venus'>Venus</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='planet' id='venus' autocomplete='off'><label class='btn btn-secondary' for='venus'>Venus</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='planet' id='saturn' autocomplete='off'><label class='btn btn-secondary' for='saturn'>Saturn</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='planet' id='mars' autocomplete='off'><label class='btn btn-secondary' for='mars'>Mars</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='planet' id='mercury' autocomplete='off'><label class='btn btn-secondary' for='mercury'>Mercury</label>")
}

let points = 0;

function scienceSubmit() {
    
    if (document.getElementById("hydrogen").checked === false && document.getElementById("helium").checked === false && document.getElementById("hydrochloride").checked === false && document.getElementById("hydroxide").checked === false || document.getElementById("venus").checked === false && document.getElementById("saturn").checked === false && document.getElementById("mars").checked === false && document.getElementById("mercury").checked === false) {
        alert("You must answer every question in order to submit!");
    } else {
        if (document.getElementById("hydrogen").checked === true) {
            points++
        }
        if (document.getElementById("venus").checked === true) {
            points++
        }
        console.log(points)
    }

}

