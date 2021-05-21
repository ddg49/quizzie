document.getElementById("corrector").style.display = "none";

let percent = Math.floor(Math.random() * 101); 
// randomize each question:
if (percent <= 25) {
    $("#q-1").html("<input type='radio' class='btn-check' name='money' id='avatar' autocomplete='off'><label class='btn btn-secondary' for='avatar'>Avatar</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='money' id='gonewind' autocomplete='off'><label class='btn btn-secondary' for='gonewind'>Gone with the Wind</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='money' id='titanic' autocomplete='off'><label class='btn btn-secondary' for='titanic'>Titanic</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='money' id='pirates' autocomplete='off'><label class='btn btn-secondary' for='pirates'>Pirates of the Caribbean</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1").html("<input type='radio' class='btn-check' name='money' id='pirates' autocomplete='off'><label class='btn btn-secondary' for='pirates'>Pirates of the Caribbean</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='money' id='avatar' autocomplete='off'><label class='btn btn-secondary' for='avatar'>Avatar</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='money' id='gonewind' autocomplete='off'><label class='btn btn-secondary' for='gonewind'>Gone with the Wind</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='money' id='titanic' autocomplete='off'><label class='btn btn-secondary' for='titanic'>Titanic</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1").html("<input type='radio' class='btn-check' name='money' id='titanic' autocomplete='off'><label class='btn btn-secondary' for='titanic'>Titanic</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='money' id='pirates' autocomplete='off'><label class='btn btn-secondary' for='pirates'>Pirates of the Caribbean</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='money' id='avatar' autocomplete='off'><label class='btn btn-secondary' for='avatar'>Avatar</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='money' id='gonewind' autocomplete='off'><label class='btn btn-secondary' for='gonewind'>Gone with the Wind</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1").html("<input type='radio' class='btn-check' name='money' id='gonewind' autocomplete='off'><label class='btn btn-secondary' for='gonewind'>Gone with the Wind</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='money' id='titanic' autocomplete='off'><label class='btn btn-secondary' for='titanic'>Titanic</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='money' id='pirates' autocomplete='off'><label class='btn btn-secondary' for='pirates'>Pirates of the Caribbean</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='money' id='avatar' autocomplete='off'><label class='btn btn-secondary' for='avatar'>Avatar</label>")
}

if (percent <= 25) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='year' id='six' autocomplete='off'><label class='btn btn-secondary' for='six'>1965</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='year' id='three' autocomplete='off'><label class='btn btn-secondary' for='three'>1939</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='year' id='two' autocomplete='off'><label class='btn btn-secondary' for='two'>2005</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='year' id='ten' autocomplete='off'><label class='btn btn-secondary' for='ten'>1918</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='year' id='ten' autocomplete='off'><label class='btn btn-secondary' for='ten'>1918</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='year' id='six' autocomplete='off'><label class='btn btn-secondary' for='six'>1965</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='year' id='three' autocomplete='off'><label class='btn btn-secondary' for='three'>1939</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='year' id='two' autocomplete='off'><label class='btn btn-secondary' for='two'>2005</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='year' id='two' autocomplete='off'><label class='btn btn-secondary' for='two'>2005</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='year' id='ten' autocomplete='off'><label class='btn btn-secondary' for='ten'>1918</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='year' id='six' autocomplete='off'><label class='btn btn-secondary' for='six'>1965</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='year' id='three' autocomplete='off'><label class='btn btn-secondary' for='three'>1939</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='year' id='three' autocomplete='off'><label class='btn btn-secondary' for='three'>1939</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='year' id='two' autocomplete='off'><label class='btn btn-secondary' for='two'>2005</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='year' id='ten' autocomplete='off'><label class='btn btn-secondary' for='ten'>1918</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='year' id='six' autocomplete='off'><label class='btn btn-secondary' for='six'>1965</label>")
}

if (percent <= 25) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='vietnam' id='deer' autocomplete='off'><label class='btn btn-secondary' for='deer'>The Deer Hunter</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='vietnam' id='fullmetal' autocomplete='off'><label class='btn btn-secondary' for='fullmetal'>Full Metal Jacket</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='vietnam' id='soldiers' autocomplete='off'><label class='btn btn-secondary' for='soldiers'>We Were Soldiers</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='vietnam' id='apoc' autocomplete='off'><label class='btn btn-secondary' for='apoc'>Apocalypse Now</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='vietnam' id='apoc' autocomplete='off'><label class='btn btn-secondary' for='apoc'>Apocalypse Now</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='vietnam' id='deer' autocomplete='off'><label class='btn btn-secondary' for='deer'>The Deer Hunter</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='vietnam' id='fullmetal' autocomplete='off'><label class='btn btn-secondary' for='fullmetal'>Full Metal Jacket</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='vietnam' id='soldiers' autocomplete='off'><label class='btn btn-secondary' for='soldiers'>We Were Soldiers</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='vietnam' id='soldiers' autocomplete='off'><label class='btn btn-secondary' for='soldiers'>We Were Soldiers</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='vietnam' id='apoc' autocomplete='off'><label class='btn btn-secondary' for='apoc'>Apocalypse Now</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='vietnam' id='deer' autocomplete='off'><label class='btn btn-secondary' for='deer'>The Deer Hunter</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='vietnam' id='fullmetal' autocomplete='off'><label class='btn btn-secondary' for='fullmetal'>Full Metal Jacket</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='vietnam' id='fullmetal' autocomplete='off'><label class='btn btn-secondary' for='fullmetal'>Full Metal Jacket</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='vietnam' id='soldiers' autocomplete='off'><label class='btn btn-secondary' for='soldiers'>We Were Soldiers</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='vietnam' id='apoc' autocomplete='off'><label class='btn btn-secondary' for='apoc'>Apocalypse Now</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='vietnam' id='deer' autocomplete='off'><label class='btn btn-secondary' for='deer'>The Deer Hunter</label>")
}

if (percent <= 25) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='rob' id='taxi' autocomplete='off'><label class='btn btn-secondary' for='taxi'>Taxi Driver</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='rob' id='good' autocomplete='off'><label class='btn btn-secondary' for='good'>Goodfellas</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='rob' id='father' autocomplete='off'><label class='btn btn-secondary' for='father'>The Godfather</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='rob' id='jackie' autocomplete='off'><label class='btn btn-secondary' for='jackie'>Jackie Brown</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='rob' id='jackie' autocomplete='off'><label class='btn btn-secondary' for='jackie'>Jackie Brown</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='rob' id='taxi' autocomplete='off'><label class='btn btn-secondary' for='taxi'>Taxi Driver</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='rob' id='good' autocomplete='off'><label class='btn btn-secondary' for='good'>Goodfellas</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='rob' id='father' autocomplete='off'><label class='btn btn-secondary' for='father'>The Godfather</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='rob' id='father' autocomplete='off'><label class='btn btn-secondary' for='father'>The Godfather</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='rob' id='jackie' autocomplete='off'><label class='btn btn-secondary' for='jackie'>Jackie Brown</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='rob' id='taxi' autocomplete='off'><label class='btn btn-secondary' for='taxi'>Taxi Driver</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='rob' id='good' autocomplete='off'><label class='btn btn-secondary' for='good'>Goodfellas</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='rob' id='good' autocomplete='off'><label class='btn btn-secondary' for='good'>Goodfellas</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='rob' id='father' autocomplete='off'><label class='btn btn-secondary' for='father'>The Godfather</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='rob' id='jackie' autocomplete='off'><label class='btn btn-secondary' for='jackie'>Jackie Brown</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='rob' id='taxi' autocomplete='off'><label class='btn btn-secondary' for='taxi'>Taxi Driver</label>")
}

if (percent <= 50) {
    $("#q-1d").html("<input type='radio' class='btn-check' name='pill' id='blue' autocomplete='off'><label class='btn btn-secondary' for='blue'>Blue</label>")
    $("#q-2d").html("<input type='radio' class='btn-check' name='pill' id='red' autocomplete='off'><label class='btn btn-secondary' for='red'>Red</label>")
} else if (percent > 50 && percent <= 100) {
    $("#q-1d").html("<input type='radio' class='btn-check' name='pill' id='red' autocomplete='off'><label class='btn btn-secondary' for='red'>Red</label>")
    $("#q-2d").html("<input type='radio' class='btn-check' name='pill' id='blue' autocomplete='off'><label class='btn btn-secondary' for='blue'>Blue</label>")
}


let points = 0;
function scienceSubmit() {
    
    if (document.getElementById("avatar").checked === false && document.getElementById("gonewind").checked === false && document.getElementById("titanic").checked === false && document.getElementById("pirates").checked === false || document.getElementById("six").checked === false && document.getElementById("three").checked === false && document.getElementById("two").checked === false && document.getElementById("ten").checked === false || document.getElementById("apoc").checked === false && document.getElementById("deer").checked === false && document.getElementById("fullmetal").checked === false && document.getElementById("soldiers").checked === false || document.getElementById("jackie").checked === false && document.getElementById("good").checked === false && document.getElementById("father").checked === false && document.getElementById("taxi").checked === false || document.getElementById("red").checked === false && document.getElementById("blue").checked === false) {
        alert("Try and answer every question before you submit!");
    } else {
        //CORRECT ANSWERS
        //Question 1
        if (document.getElementById("avatar").checked === true) {
            points++;
            $("#ans1").html("Avatar")
            $("#ans1").css("color", "lightgreen")
        }
        //Question 2
        if (document.getElementById("three").checked === true) {
            points++;
            $("#ans2").html("1939")
            $("#ans2").css("color", "lightgreen")
        }
        //Question 3
        if(document.getElementById("deer").checked === true) {
            points++;
            $("#ans3").html("The Deer Hunter")
            $("#ans3").css("color", "lightgreen")
        }
        //Question 4
        if(document.getElementById("taxi").checked === true) {
            points++;
            $("#ans4").html("Taxi Driver")
            $("#ans4").css("color", "lightgreen")
        }
        //Question 5
        if(document.getElementById("red").checked === true) {
            points++;
            $("#ans5").html("Red")
            $("#ans5").css("color", "lightgreen")
        }

        //INCORRECT ANSWERS
        //Question 1
        if (document.getElementById("gonewind").checked === true) {
            $("#ans1").html("Gone with the Wind")
            $("#ans1").css("color", "red")
        } else if (document.getElementById("pirates").checked === true) {
            $("#ans1").html("Pirates of the Caribbean")
            $("#ans1").css("color", "red")
        } else if (document.getElementById("titanic").checked === true) {
            $("#ans1").html("Titanic")
            $("#ans1").css("color", "red")
        }
        //Question 2
        if (document.getElementById("six").checked === true) {
            $("#ans2").html("1965")
            $("#ans2").css("color", "red")
        } else if (document.getElementById("two").checked === true) {
            $("#ans2").html("2005")
            $("#ans2").css("color", "red")
        } else if (document.getElementById("ten").checked === true) {
            $("#ans2").html("1918")
            $("#ans2").css("color", "red")
        }
        //Question 3
        if (document.getElementById("apoc").checked === true) {
            $("#ans3").html("Apocalypse Now")
            $("#ans3").css("color", "red")
        } else if (document.getElementById("fullmetal").checked === true) {
            $("#ans3").html("Full Metal Jacket")
            $("#ans3").css("color", "red")
        } else if (document.getElementById("soldiers").checked === true) {
            $("#ans3").html("We Were Soldiers")
            $("#ans3").css("color", "red")
        }
        //Question 4
        if (document.getElementById("good").checked === true) {
            $("#ans4").html("Goodfellas")
            $("#ans4").css("color", "red")
        } else if (document.getElementById("father").checked === true) {
            $("#ans4").html("The Godfather")
            $("#ans4").css("color", "red")
        } else if (document.getElementById("jackie").checked === true) {
            $("#ans4").html("Jackie Brown")
            $("#ans4").css("color", "red")
        }
        //Question 5
        if (document.getElementById("blue").checked === true) {
            $("#ans5").html("blue")
            $("#ans5").css("color", "red")
        } 

        document.getElementById("points").innerHTML = points;
        document.getElementById("ratio").innerHTML = ((points / 5) * 100).toFixed(1) + " %";
        document.querySelector("main").style.display = "none";
        document.getElementById("corrector").style.display = "block";

        if (points >= 4) {
            $("#ratio").css("color", "lightgreen");
        }

        points = 0;
        var reloadButton = document.createElement("div");
        reloadButton.innerHTML = "<button onclick='reloadFunc()'>Retry</button>";
        document.getElementById("corrector").appendChild(reloadButton);

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        // 
        if (mediaQuery.matches) {
            $('html,body').scrollTop(0);
        } else {
        $('html, body').animate({ scrollTop: 0 }, 1500);
        }

    }

}

function reloadFunc() {
    location.reload();
  }