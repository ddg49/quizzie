document.getElementById("corrector").style.display = "none";

let percent = Math.floor(Math.random() * 101); 
// randomize each question:
if (percent <= 25) {
    $("#q-1").html("<input type='radio' class='btn-check' name='money' id='rih' autocomplete='off'><label class='btn btn-secondary' for='rih'>1988</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='money' id='wrong1' autocomplete='off'><label class='btn btn-secondary' for='wrong1'>1985</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='money' id='wrong2' autocomplete='off'><label class='btn btn-secondary' for='wrong2'>1992</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='money' id='wrong3' autocomplete='off'><label class='btn btn-secondary' for='wrong3'>1995</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1").html("<input type='radio' class='btn-check' name='money' id='wrong3' autocomplete='off'><label class='btn btn-secondary' for='wrong3'>1995</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='money' id='rih' autocomplete='off'><label class='btn btn-secondary' for='rih'>1988</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='money' id='wrong1' autocomplete='off'><label class='btn btn-secondary' for='wrong1'>1985</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='money' id='wrong2' autocomplete='off'><label class='btn btn-secondary' for='wrong2'>1992</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1").html("<input type='radio' class='btn-check' name='money' id='wrong2' autocomplete='off'><label class='btn btn-secondary' for='wrong2'>1992</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='money' id='wrong3' autocomplete='off'><label class='btn btn-secondary' for='wrong3'>1995</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='money' id='rih' autocomplete='off'><label class='btn btn-secondary' for='rih'>1988</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='money' id='wrong1' autocomplete='off'><label class='btn btn-secondary' for='wrong1'>1985</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1").html("<input type='radio' class='btn-check' name='money' id='wrong1' autocomplete='off'><label class='btn btn-secondary' for='wrong1'>1985</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='money' id='wrong2' autocomplete='off'><label class='btn btn-secondary' for='wrong2'>1992</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='money' id='wrong3' autocomplete='off'><label class='btn btn-secondary' for='wrong3'>1995</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='money' id='rih' autocomplete='off'><label class='btn btn-secondary' for='rih'>1988</label>")
}

if (percent <= 25) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='year' id='cor1' autocomplete='off'><label class='btn btn-secondary' for='cor1'>Vaquita</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='year' id='wrong1a' autocomplete='off'><label class='btn btn-secondary' for='wrong1a'>Florida Panther</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='year' id='wrong2a' autocomplete='off'><label class='btn btn-secondary' for='wrong2a'>Black Rhino</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='year' id='wrong3a' autocomplete='off'><label class='btn btn-secondary' for='wrong3a'>Liger</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='year' id='wrong3a' autocomplete='off'><label class='btn btn-secondary' for='wrong3a'>Liger</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='year' id='cor1' autocomplete='off'><label class='btn btn-secondary' for='cor1'>Vaquita</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='year' id='wrong1a' autocomplete='off'><label class='btn btn-secondary' for='wrong1a'>Florida Panther</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='year' id='wrong2a' autocomplete='off'><label class='btn btn-secondary' for='wrong2a'>Black Rhino</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='year' id='wrong2a' autocomplete='off'><label class='btn btn-secondary' for='wrong2a'>Black Rhino</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='year' id='wrong3a' autocomplete='off'><label class='btn btn-secondary' for='wrong3a'>Liger</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='year' id='cor1' autocomplete='off'><label class='btn btn-secondary' for='cor1'>Vaquita</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='year' id='wrong1a' autocomplete='off'><label class='btn btn-secondary' for='wrong1a'>Florida Panther</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='year' id='wrong1a' autocomplete='off'><label class='btn btn-secondary' for='wrong1a'>Florida Panther</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='year' id='wrong2a' autocomplete='off'><label class='btn btn-secondary' for='wrong2a'>Black Rhino</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='year' id='wrong3a' autocomplete='off'><label class='btn btn-secondary' for='wrong3a'>Liger</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='year' id='cor1' autocomplete='off'><label class='btn btn-secondary' for='cor1'>Vaquita</label>")
}

if (percent <= 25) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='vietnam' id='cor2' autocomplete='off'><label class='btn btn-secondary' for='cor2'>Katra</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='vietnam' id='wrong1b' autocomplete='off'><label class='btn btn-secondary' for='wrong1b'>Benin</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='vietnam' id='wrong2b' autocomplete='off'><label class='btn btn-secondary' for='wrong2b'>Nauru</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='vietnam' id='wrong3b' autocomplete='off'><label class='btn btn-secondary' for='wrong3b'>Palau</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='vietnam' id='wrong3b' autocomplete='off'><label class='btn btn-secondary' for='wrong3b'>Palau</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='vietnam' id='cor2' autocomplete='off'><label class='btn btn-secondary' for='cor2'>Katra</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='vietnam' id='wrong1b' autocomplete='off'><label class='btn btn-secondary' for='wrong1b'>Benin</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='vietnam' id='wrong2b' autocomplete='off'><label class='btn btn-secondary' for='wrong2b'>Nauru</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='vietnam' id='wrong2b' autocomplete='off'><label class='btn btn-secondary' for='wrong2b'>Nauru</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='vietnam' id='wrong3b' autocomplete='off'><label class='btn btn-secondary' for='wrong3b'>Palau</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='vietnam' id='cor2' autocomplete='off'><label class='btn btn-secondary' for='cor2'>Katra</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='vietnam' id='wrong1b' autocomplete='off'><label class='btn btn-secondary' for='wrong1b'>Benin</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='vietnam' id='wrong1b' autocomplete='off'><label class='btn btn-secondary' for='wrong1b'>Benin</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='vietnam' id='wrong2b' autocomplete='off'><label class='btn btn-secondary' for='wrong2b'>Nauru</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='vietnam' id='wrong3b' autocomplete='off'><label class='btn btn-secondary' for='wrong3b'>Palau</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='vietnam' id='cor2' autocomplete='off'><label class='btn btn-secondary' for='cor2'>Katra</label>")
}

if (percent <= 25) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='rob' id='cor3' autocomplete='off'><label class='btn btn-secondary' for='cor3'>Great Basin Bristlecone Pine</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='rob' id='wrong1c' autocomplete='off'><label class='btn btn-secondary' for='wrong1c'>Redwood Tree</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='rob' id='wrong2c' autocomplete='off'><label class='btn btn-secondary' for='wrong2c'>Greenland Shark</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='rob' id='wrong3c' autocomplete='off'><label class='btn btn-secondary' for='wrong3c'>Giant Tortoise</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='rob' id='wrong3c' autocomplete='off'><label class='btn btn-secondary' for='wrong3c'>Giant Tortoise</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='rob' id='cor3' autocomplete='off'><label class='btn btn-secondary' for='cor3'>Great Basin Bristlecone Pine</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='rob' id='wrong1c' autocomplete='off'><label class='btn btn-secondary' for='wrong1c'>Redwood Tree</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='rob' id='wrong2c' autocomplete='off'><label class='btn btn-secondary' for='wrong2c'>Greenland Shark</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='rob' id='wrong2c' autocomplete='off'><label class='btn btn-secondary' for='wrong2c'>Greenland Shark</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='rob' id='wrong3c' autocomplete='off'><label class='btn btn-secondary' for='wrong3c'>Giant Tortoise</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='rob' id='cor3' autocomplete='off'><label class='btn btn-secondary' for='cor3'>Great Basin Bristlecone Pine</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='rob' id='wrong1c' autocomplete='off'><label class='btn btn-secondary' for='wrong1c'>Redwood Tree</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='rob' id='wrong1c' autocomplete='off'><label class='btn btn-secondary' for='wrong1c'>Redwood Tree</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='rob' id='wrong2c' autocomplete='off'><label class='btn btn-secondary' for='wrong2c'>Greenland Shark</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='rob' id='wrong3c' autocomplete='off'><label class='btn btn-secondary' for='wrong3c'>Giant Tortoise</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='rob' id='cor3' autocomplete='off'><label class='btn btn-secondary' for='cor3'>Great Basin Bristlecone Pine</label>")
}

if (percent <= 25) {
    $("#q-1d").html("<input type='radio' class='btn-check' name='moon' id='cor4' autocomplete='off'><label class='btn btn-secondary' for='cor4'>Fortran</label>")
    $("#q-2d").html("<input type='radio' class='btn-check' name='moon' id='wrong1d' autocomplete='off'><label class='btn btn-secondary' for='wrong1d'>COBOL</label>")
    $("#q-3d").html("<input type='radio' class='btn-check' name='moon' id='wrong2d' autocomplete='off'><label class='btn btn-secondary' for='wrong2d'>PHP</label>")
    $("#q-4d").html("<input type='radio' class='btn-check' name='moon' id='wrong3d' autocomplete='off'><label class='btn btn-secondary' for='wrong3d'>C</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1d").html("<input type='radio' class='btn-check' name='moon' id='wrong3d' autocomplete='off'><label class='btn btn-secondary' for='wrong3d'>C</label>")
    $("#q-2d").html("<input type='radio' class='btn-check' name='moon' id='cor4' autocomplete='off'><label class='btn btn-secondary' for='cor4'>Fortran</label>")
    $("#q-3d").html("<input type='radio' class='btn-check' name='moon' id='wrong1d' autocomplete='off'><label class='btn btn-secondary' for='wrong1d'>COBOL</label>")
    $("#q-4d").html("<input type='radio' class='btn-check' name='moon' id='wrong2d' autocomplete='off'><label class='btn btn-secondary' for='wrong2d'>PHP</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1d").html("<input type='radio' class='btn-check' name='moon' id='wrong2d' autocomplete='off'><label class='btn btn-secondary' for='wrong2d'>PHP</label>")
    $("#q-2d").html("<input type='radio' class='btn-check' name='moon' id='wrong3d' autocomplete='off'><label class='btn btn-secondary' for='wrong3d'>C</label>")
    $("#q-3d").html("<input type='radio' class='btn-check' name='moon' id='cor4' autocomplete='off'><label class='btn btn-secondary' for='cor4'>Fortran</label>")
    $("#q-4d").html("<input type='radio' class='btn-check' name='moon' id='wrong1d' autocomplete='off'><label class='btn btn-secondary' for='wrong1d'>COBOL</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1d").html("<input type='radio' class='btn-check' name='moon' id='wrong1d' autocomplete='off'><label class='btn btn-secondary' for='wrong1d'>COBOL</label>")
    $("#q-2d").html("<input type='radio' class='btn-check' name='moon' id='wrong2d' autocomplete='off'><label class='btn btn-secondary' for='wrong2d'>PHP</label>")
    $("#q-3d").html("<input type='radio' class='btn-check' name='moon' id='wrong3d' autocomplete='off'><label class='btn btn-secondary' for='wrong3d'>C</label>")
    $("#q-4d").html("<input type='radio' class='btn-check' name='moon' id='cor4' autocomplete='off'><label class='btn btn-secondary' for='cor4'>Fortran</label>")
}


let points = 0;
function scienceSubmit() {
    
    if (document.getElementById("rih").checked === false && document.getElementById("wrong1").checked === false && document.getElementById("wrong2").checked === false && document.getElementById("wrong3").checked === false || document.getElementById("cor1").checked === false && document.getElementById("wrong1a").checked === false && document.getElementById("wrong2a").checked === false && document.getElementById("wrong3a").checked === false || document.getElementById("cor2").checked === false && document.getElementById("wrong1b").checked === false && document.getElementById("wrong2b").checked === false && document.getElementById("wrong3b").checked === false || document.getElementById("cor3").checked === false && document.getElementById("wrong1c").checked === false && document.getElementById("wrong2c").checked === false && document.getElementById("wrong3c").checked === false || document.getElementById("cor4").checked === false && document.getElementById("wrong1d").checked === false && document.getElementById("wrong2d").checked === false && document.getElementById("wrong3d").checked === false) {
        alert("Try and answer every question before you submit!");
    } else {
        //CORRECT ANSWERS
        //Question 1
        if (document.getElementById("rih").checked === true) {
            points++;
            $("#ans1").html("1988")
            $("#ans1").css("color", "lightgreen")
        }
        //Question 2
        if (document.getElementById("cor1").checked === true) {
            points++;
            $("#ans2").html("Vaquita")
            $("#ans2").css("color", "lightgreen")
        }
        //Question 3
        if(document.getElementById("cor2").checked === true) {
            points++;
            $("#ans3").html("Katra")
            $("#ans3").css("color", "lightgreen")
        }
        //Question 4
        if(document.getElementById("cor3").checked === true) {
            points++;
            $("#ans4").html("Great Basin Bristlecone Pine")
            $("#ans4").css("color", "lightgreen")
        }
        //Question 5
        if(document.getElementById("cor4").checked === true) {
            points++;
            $("#ans5").html("Fortran")
            $("#ans5").css("color", "lightgreen")
        }

        //INCORRECT ANSWERS
        //Question 1
        if (document.getElementById("wrong1").checked === true) {
            $("#ans1").html("1985")
            $("#ans1").css("color", "red")
        } else if (document.getElementById("wrong2").checked === true) {
            $("#ans1").html("1992")
            $("#ans1").css("color", "red")
        } else if (document.getElementById("wrong3").checked === true) {
            $("#ans1").html("1995")
            $("#ans1").css("color", "red")
        }
        //Question 2
        if (document.getElementById("wrong1a").checked === true) {
            $("#ans2").html("Florida Panther")
            $("#ans2").css("color", "red")
        } else if (document.getElementById("wrong2a").checked === true) {
            $("#ans2").html("Black Rhino")
            $("#ans2").css("color", "red")
        } else if (document.getElementById("wrong3a").checked === true) {
            $("#ans2").html("Liger")
            $("#ans2").css("color", "red")
        }
        //Question 3
        if (document.getElementById("wrong1b").checked === true) {
            $("#ans3").html("Benin")
            $("#ans3").css("color", "red")
        } else if (document.getElementById("wrong2b").checked === true) {
            $("#ans3").html("Nauru")
            $("#ans3").css("color", "red")
        } else if (document.getElementById("wrong3b").checked === true) {
            $("#ans3").html("Palau")
            $("#ans3").css("color", "red")
        }
        //Question 4
        if (document.getElementById("wrong1c").checked === true) {
            $("#ans4").html("Redwood Tree")
            $("#ans4").css("color", "red")
        } else if (document.getElementById("wrong2c").checked === true) {
            $("#ans4").html("Greenland Shark")
            $("#ans4").css("color", "red")
        } else if (document.getElementById("wrong3c").checked === true) {
            $("#ans4").html("Giant Tortoise")
            $("#ans4").css("color", "red")
        }
        //Question 5
        if (document.getElementById("wrong1d").checked === true) {
            $("#ans5").html("COBOL")
            $("#ans5").css("color", "red")
        } else if (document.getElementById("wrong2d").checked === true) {
            $("#ans5").html("PHP")
            $("#ans5").css("color", "red")
        } else if (document.getElementById("wrong3d").checked === true) {
            $("#ans5").html("C")
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