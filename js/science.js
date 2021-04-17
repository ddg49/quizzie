let percent = Math.floor(Math.random() * 101); 
// randomize each question:
if (percent <= 25) {
    $("#q-1").html("<input type='radio' class='btn-check' name='element' id='hydrogen'><label class='btn btn-secondary' for='hydrogen'>Hydrogen</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='element' id='hydrochloride'><label class='btn btn-secondary' for='hydrochloride'>Hydrochloride</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='element' id='helium'><label class='btn btn-secondary' for='helium'>Helium</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='element' id='hydroxide'><label class='btn btn-secondary' for='hydroxide'>Hydroxide</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1").html("<input type='radio' class='btn-check' name='element' id='hydroxide'><label class='btn btn-secondary' for='hydroxide'>Hydroxide</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='element' id='hydrogen'><label class='btn btn-secondary' for='hydrogen'>Hydrogen</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='element' id='hydrochloride'><label class='btn btn-secondary' for='hydrochloride'>Hydrochloride</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='element' id='helium'><label class='btn btn-secondary' for='helium'>Helium</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1").html("<input type='radio' class='btn-check' name='element' id='helium'><label class='btn btn-secondary' for='helium'>Helium</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='element' id='hydroxide'><label class='btn btn-secondary' for='hydroxide'>Hydroxide</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='element' id='hydrogen'><label class='btn btn-secondary' for='hydrogen'>Hydrogen</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='element' id='hydrochloride'><label class='btn btn-secondary' for='hydrochloride'>Hydrochloride</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1").html("<input type='radio' class='btn-check' name='element' id='hydrochloride'><label class='btn btn-secondary' for='hydrochloride'>Hydrochloride</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='element' id='helium'><label class='btn btn-secondary' for='helium'>Helium</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='element' id='hydroxide'><label class='btn btn-secondary' for='hydroxide'>Hydroxide</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='element' id='hydrogen'><label class='btn btn-secondary' for='hydrogen'>Hydrogen</label>")
}