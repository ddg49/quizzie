document.getElementById("corrector").style.display = "none";

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

if (percent <= 25) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='dist' id='ninetwo' autocomplete='off'><label class='btn btn-secondary' for='ninetwo'>92,955,807 miles</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='dist' id='hundred' autocomplete='off'><label class='btn btn-secondary' for='hundred'>149,597,870 miles</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='dist' id='ninenine' autocomplete='off'><label class='btn btn-secondary' for='ninenine'>996,928,440 miles</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='dist' id='threetho' autocomplete='off'><label class='btn btn-secondary' for='threetho'>30,688,950 miles</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='dist' id='threetho' autocomplete='off'><label class='btn btn-secondary' for='threetho'>30,688,950 miles</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='dist' id='ninetwo' autocomplete='off'><label class='btn btn-secondary' for='ninetwo'>92,955,807 miles</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='dist' id='hundred' autocomplete='off'><label class='btn btn-secondary' for='hundred'>149,597,870 miles</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='dist' id='ninenine' autocomplete='off'><label class='btn btn-secondary' for='ninenine'>996,928,440 miles</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='dist' id='ninenine' autocomplete='off'><label class='btn btn-secondary' for='ninenine'>996,928,440 miles</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='dist' id='threetho' autocomplete='off'><label class='btn btn-secondary' for='threetho'>30,688,950 miles</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='dist' id='ninetwo' autocomplete='off'><label class='btn btn-secondary' for='ninetwo'>92,955,807 miles</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='dist' id='hundred' autocomplete='off'><label class='btn btn-secondary' for='hundred'>149,597,870 miles</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='dist' id='hundred' autocomplete='off'><label class='btn btn-secondary' for='hundred'>149,597,870 miles</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='dist' id='ninenine' autocomplete='off'><label class='btn btn-secondary' for='ninenine'>996,928,440 miles</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='dist' id='threetho' autocomplete='off'><label class='btn btn-secondary' for='threetho'>30,688,950 miles</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='dist' id='ninetwo' autocomplete='off'><label class='btn btn-secondary' for='ninetwo'>92,955,807 miles</label>")
}

if (percent <= 25) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='oldage' id='fourfive' autocomplete='off'><label class='btn btn-secondary' for='fourfive'>≈ 4.5 billion years old</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='oldage' id='justfour' autocomplete='off'><label class='btn btn-secondary' for='justfour'>≈ 4 billion years old</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='oldage' id='fourfivemil' autocomplete='off'><label class='btn btn-secondary' for='fourfivemil'>≈ 4.5 million years old</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='oldage' id='justfourmil' autocomplete='off'><label class='btn btn-secondary' for='justfourmil'>≈ 4 million years old</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='oldage' id='justfourmil' autocomplete='off'><label class='btn btn-secondary' for='justfourmil'>≈ 4 million years old</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='oldage' id='fourfive' autocomplete='off'><label class='btn btn-secondary' for='fourfive'>≈ 4.5 billion years old</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='oldage' id='justfour' autocomplete='off'><label class='btn btn-secondary' for='justfour'>≈ 4 billion years old</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='oldage' id='fourfivemil' autocomplete='off'><label class='btn btn-secondary' for='fourfivemil'>≈ 4.5 million years old</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='oldage' id='fourfivemil' autocomplete='off'><label class='btn btn-secondary' for='fourfivemil'>≈ 4.5 million years old</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='oldage' id='justfourmil' autocomplete='off'><label class='btn btn-secondary' for='justfourmil'>≈ 4 million years old</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='oldage' id='fourfive' autocomplete='off'><label class='btn btn-secondary' for='fourfive'>≈ 4.5 billion years old</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='oldage' id='justfour' autocomplete='off'><label class='btn btn-secondary' for='justfour'>≈ 4 billion years old</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='oldage' id='justfour' autocomplete='off'><label class='btn btn-secondary' for='justfour'>≈ 4 billion years old</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='oldage' id='fourfivemil' autocomplete='off'><label class='btn btn-secondary' for='fourfivemil'>≈ 4.5 million years old</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='oldage' id='justfourmil' autocomplete='off'><label class='btn btn-secondary' for='justfourmil'>≈ 4 million years old</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='oldage' id='fourfive' autocomplete='off'><label class='btn btn-secondary' for='fourfive'>≈ 4.5 billion years old</label>")
}

if (percent <= 50) {
    $("#q-1d").html("<input type='radio' class='btn-check' name='position' id='above' autocomplete='off'><label class='btn btn-secondary' for='above'>Above</label>")
    $("#q-2d").html("<input type='radio' class='btn-check' name='position' id='below' autocomplete='off'><label class='btn btn-secondary' for='below'>Below</label>")
} else if (percent > 50 && percent <= 100) {
    $("#q-1d").html("<input type='radio' class='btn-check' name='position' id='below' autocomplete='off'><label class='btn btn-secondary' for='below'>Below</label>")
    $("#q-2d").html("<input type='radio' class='btn-check' name='position' id='above' autocomplete='off'><label class='btn btn-secondary' for='above'>Above</label>")
}


let points = 0;
function scienceSubmit() {
    
    if (document.getElementById("hydrogen").checked === false && document.getElementById("helium").checked === false && document.getElementById("hydrochloride").checked === false && document.getElementById("hydroxide").checked === false || document.getElementById("venus").checked === false && document.getElementById("saturn").checked === false && document.getElementById("mars").checked === false && document.getElementById("mercury").checked === false || document.getElementById("ninenine").checked === false && document.getElementById("threetho").checked === false && document.getElementById("ninetwo").checked === false && document.getElementById("hundred").checked === false || document.getElementById("justfourmil").checked === false && document.getElementById("fourfive").checked === false && document.getElementById("justfour").checked === false && document.getElementById("fourfivemil").checked === false || document.getElementById("above").checked === false && document.getElementById("below").checked === false) {
        alert("Try and answer every question before you submit!");
    } else {
        //CORRECT ANSWERS
        //Question 1
        if (document.getElementById("hydrogen").checked === true) {
            points++;
            $("#ans1").html("Hydrogen")
            $("#ans1").css("color", "lightgreen")
        }
        //Question 2
        if (document.getElementById("venus").checked === true) {
            points++;
            $("#ans2").html("Venus")
            $("#ans2").css("color", "lightgreen")
        }
        //Question 3
        if(document.getElementById("ninetwo").checked === true) {
            points++;
            $("#ans3").html("92,955,807 miles")
            $("#ans3").css("color", "lightgreen")
        }
        //Question 4
        if(document.getElementById("fourfive").checked === true) {
            points++;
            $("#ans4").html("≈ 4.5 billion years old")
            $("#ans4").css("color", "lightgreen")
        }
        //Question 5
        if(document.getElementById("below").checked === true) {
            points++;
            $("#ans5").html("Below")
            $("#ans5").css("color", "lightgreen")
        }

        //INCORRECT ANSWERS
        //Question 1
        if (document.getElementById("hydrochloride").checked === true) {
            $("#ans1").html("Hydrochloride")
            $("#ans1").css("color", "red")
        } else if (document.getElementById("hydroxide").checked === true) {
            $("#ans1").html("Hydroxide")
            $("#ans1").css("color", "red")
        } else if (document.getElementById("helium").checked === true) {
            $("#ans1").html("Helium")
            $("#ans1").css("color", "red")
        }
        //Question 2
        if (document.getElementById("mercury").checked === true) {
            $("#ans2").html("Mercury")
            $("#ans2").css("color", "red")
        } else if (document.getElementById("saturn").checked === true) {
            $("#ans2").html("Saturn")
            $("#ans2").css("color", "red")
        } else if (document.getElementById("mars").checked === true) {
            $("#ans2").html("Mars")
            $("#ans2").css("color", "red")
        }
        //Question 3
        if (document.getElementById("hundred").checked === true) {
            $("#ans3").html("149,597,870 miles")
            $("#ans3").css("color", "red")
        } else if (document.getElementById("ninenine").checked === true) {
            $("#ans3").html("996,928,440 miles")
            $("#ans3").css("color", "red")
        } else if (document.getElementById("threetho").checked === true) {
            $("#ans3").html("30,688,950 miles")
            $("#ans3").css("color", "red")
        }
        //Question 4
        if (document.getElementById("justfour").checked === true) {
            $("#ans4").html("≈ 4 billion years old")
            $("#ans4").css("color", "red")
        } else if (document.getElementById("fourfivemil").checked === true) {
            $("#ans4").html("≈ 4.5 million years old")
            $("#ans4").css("color", "red")
        } else if (document.getElementById("justfourmil").checked === true) {
            $("#ans4").html("≈ 4 million years old")
            $("#ans4").css("color", "red")
        }
        //Question 5
        if (document.getElementById("above").checked === true) {
            $("#ans5").html("Above")
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