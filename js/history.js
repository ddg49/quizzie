document.getElementById("corrector").style.display = "none";

let percent = Math.floor(Math.random() * 101); 
// randomize each question:
if (percent <= 25) {
    $("#q-1").html("<input type='radio' class='btn-check' name='money' id='leif' autocomplete='off'><label class='btn btn-secondary' for='leif'>Leif Erikson</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='money' id='chris' autocomplete='off'><label class='btn btn-secondary' for='chris'>Christopher Columbus</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='money' id='george' autocomplete='off'><label class='btn btn-secondary' for='george'>George Washington</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='money' id='marco' autocomplete='off'><label class='btn btn-secondary' for='marco'>Marco Polo</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1").html("<input type='radio' class='btn-check' name='money' id='marco' autocomplete='off'><label class='btn btn-secondary' for='marco'>Marco Polo</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='money' id='leif' autocomplete='off'><label class='btn btn-secondary' for='leif'>Leif Erikson</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='money' id='chris' autocomplete='off'><label class='btn btn-secondary' for='chris'>Christopher Columbus</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='money' id='george' autocomplete='off'><label class='btn btn-secondary' for='george'>George Washington</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1").html("<input type='radio' class='btn-check' name='money' id='george' autocomplete='off'><label class='btn btn-secondary' for='george'>George Washington</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='money' id='marco' autocomplete='off'><label class='btn btn-secondary' for='marco'>Marco Polo</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='money' id='leif' autocomplete='off'><label class='btn btn-secondary' for='leif'>Leif Erikson</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='money' id='chris' autocomplete='off'><label class='btn btn-secondary' for='chris'>Christopher Columbus</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1").html("<input type='radio' class='btn-check' name='money' id='chris' autocomplete='off'><label class='btn btn-secondary' for='chris'>Christopher Columbus</label>")
    $("#q-2").html("<input type='radio' class='btn-check' name='money' id='george' autocomplete='off'><label class='btn btn-secondary' for='george'>George Washington</label>")
    $("#q-3").html("<input type='radio' class='btn-check' name='money' id='marco' autocomplete='off'><label class='btn btn-secondary' for='marco'>Marco Polo</label>")
    $("#q-4").html("<input type='radio' class='btn-check' name='money' id='leif' autocomplete='off'><label class='btn btn-secondary' for='leif'>Leif Erikson</label>")
}

if (percent <= 25) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='year' id='paul' autocomplete='off'><label class='btn btn-secondary' for='paul'>Paul Revere</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='year' id='ben' autocomplete='off'><label class='btn btn-secondary' for='ben'>Benjamin Franklin</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='year' id='tom' autocomplete='off'><label class='btn btn-secondary' for='tom'>Thomas Jefferson</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='year' id='wash' autocomplete='off'><label class='btn btn-secondary' for='wash'>George Washington</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='year' id='wash' autocomplete='off'><label class='btn btn-secondary' for='wash'>George Washington</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='year' id='paul' autocomplete='off'><label class='btn btn-secondary' for='paul'>Paul Revere</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='year' id='ben' autocomplete='off'><label class='btn btn-secondary' for='ben'>Benjamin Franklin</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='year' id='tom' autocomplete='off'><label class='btn btn-secondary' for='tom'>Thomas Jefferson</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='year' id='tom' autocomplete='off'><label class='btn btn-secondary' for='tom'>Thomas Jefferson</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='year' id='wash' autocomplete='off'><label class='btn btn-secondary' for='wash'>George Washington</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='year' id='paul' autocomplete='off'><label class='btn btn-secondary' for='paul'>Paul Revere</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='year' id='ben' autocomplete='off'><label class='btn btn-secondary' for='ben'>Benjamin Franklin</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1a").html("<input type='radio' class='btn-check' name='year' id='ben' autocomplete='off'><label class='btn btn-secondary' for='ben'>Benjamin Franklin</label>")
    $("#q-2a").html("<input type='radio' class='btn-check' name='year' id='tom' autocomplete='off'><label class='btn btn-secondary' for='tom'>Thomas Jefferson</label>")
    $("#q-3a").html("<input type='radio' class='btn-check' name='year' id='wash' autocomplete='off'><label class='btn btn-secondary' for='wash'>George Washington</label>")
    $("#q-4a").html("<input type='radio' class='btn-check' name='year' id='paul' autocomplete='off'><label class='btn btn-secondary' for='paul'>Paul Revere</label>")
}

if (percent <= 25) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='vietnam' id='benz' autocomplete='off'><label class='btn btn-secondary' for='benz'>Karl Benz</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='vietnam' id='ford' autocomplete='off'><label class='btn btn-secondary' for='ford'>Henry Ford</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='vietnam' id='rapp' autocomplete='off'><label class='btn btn-secondary' for='rapp'>Karl Rapp</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='vietnam' id='tesla' autocomplete='off'><label class='btn btn-secondary' for='tesla'>Nikola Tesla</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='vietnam' id='tesla' autocomplete='off'><label class='btn btn-secondary' for='tesla'>Nikola Tesla</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='vietnam' id='benz' autocomplete='off'><label class='btn btn-secondary' for='benz'>Karl Benz</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='vietnam' id='ford' autocomplete='off'><label class='btn btn-secondary' for='ford'>Henry Ford</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='vietnam' id='rapp' autocomplete='off'><label class='btn btn-secondary' for='rapp'>Karl Rapp</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='vietnam' id='rapp' autocomplete='off'><label class='btn btn-secondary' for='rapp'>Karl Rapp</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='vietnam' id='tesla' autocomplete='off'><label class='btn btn-secondary' for='tesla'>Nikola Tesla</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='vietnam' id='benz' autocomplete='off'><label class='btn btn-secondary' for='benz'>Karl Benz</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='vietnam' id='ford' autocomplete='off'><label class='btn btn-secondary' for='ford'>Henry Ford</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1b").html("<input type='radio' class='btn-check' name='vietnam' id='ford' autocomplete='off'><label class='btn btn-secondary' for='ford'>Henry Ford</label>")
    $("#q-2b").html("<input type='radio' class='btn-check' name='vietnam' id='rapp' autocomplete='off'><label class='btn btn-secondary' for='rapp'>Karl Rapp</label>")
    $("#q-3b").html("<input type='radio' class='btn-check' name='vietnam' id='tesla' autocomplete='off'><label class='btn btn-secondary' for='tesla'>Nikola Tesla</label>")
    $("#q-4b").html("<input type='radio' class='btn-check' name='vietnam' id='benz' autocomplete='off'><label class='btn btn-secondary' for='benz'>Karl Benz</label>")
}

if (percent <= 25) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='rob' id='leo' autocomplete='off'><label class='btn btn-secondary' for='leo'>Leonardo da Vinci</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='rob' id='van' autocomplete='off'><label class='btn btn-secondary' for='van'>Vincent van Gogh</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='rob' id='rap' autocomplete='off'><label class='btn btn-secondary' for='rap'>Raphael</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='rob' id='mic' autocomplete='off'><label class='btn btn-secondary' for='mic'>Michelangelo</label>")
} else if (percent > 25 && percent <= 50) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='rob' id='mic' autocomplete='off'><label class='btn btn-secondary' for='mic'>Michelangelo</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='rob' id='leo' autocomplete='off'><label class='btn btn-secondary' for='leo'>Leonardo da Vinci</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='rob' id='van' autocomplete='off'><label class='btn btn-secondary' for='van'>Vincent van Gogh</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='rob' id='rap' autocomplete='off'><label class='btn btn-secondary' for='rap'>Raphael</label>")
} else if (percent > 50 && percent <= 75) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='rob' id='rap' autocomplete='off'><label class='btn btn-secondary' for='rap'>Raphael</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='rob' id='mic' autocomplete='off'><label class='btn btn-secondary' for='mic'>Michelangelo</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='rob' id='leo' autocomplete='off'><label class='btn btn-secondary' for='leo'>Leonardo da Vinci</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='rob' id='van' autocomplete='off'><label class='btn btn-secondary' for='van'>Vincent van Gogh</label>")
} else if (percent > 75 && percent <= 100) {
    $("#q-1c").html("<input type='radio' class='btn-check' name='rob' id='van' autocomplete='off'><label class='btn btn-secondary' for='van'>Vincent van Gogh</label>")
    $("#q-2c").html("<input type='radio' class='btn-check' name='rob' id='rap' autocomplete='off'><label class='btn btn-secondary' for='rap'>Raphael</label>")
    $("#q-3c").html("<input type='radio' class='btn-check' name='rob' id='mic' autocomplete='off'><label class='btn btn-secondary' for='mic'>Michelangelo</label>")
    $("#q-4c").html("<input type='radio' class='btn-check' name='rob' id='leo' autocomplete='off'><label class='btn btn-secondary' for='leo'>Leonardo da Vinci</label>")
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
    
    if (document.getElementById("leif").checked === false && document.getElementById("marco").checked === false && document.getElementById("george").checked === false && document.getElementById("chris").checked === false || document.getElementById("paul").checked === false && document.getElementById("ben").checked === false && document.getElementById("tom").checked === false && document.getElementById("wash").checked === false || document.getElementById("ford").checked === false && document.getElementById("rapp").checked === false && document.getElementById("benz").checked === false && document.getElementById("tesla").checked === false || document.getElementById("van").checked === false && document.getElementById("rap").checked === false && document.getElementById("mic").checked === false && document.getElementById("leo").checked === false || document.getElementById("red").checked === false && document.getElementById("blue").checked === false) {
        alert("Try and answer every question before you submit!");
    } else {
        //CORRECT ANSWERS
        //Question 1
        if (document.getElementById("leif").checked === true) {
            points++;
            $("#ans1").html("Leif Erikson")
            $("#ans1").css("color", "lightgreen")
        }
        //Question 2
        if (document.getElementById("paul").checked === true) {
            points++;
            $("#ans2").html("Paul Revere")
            $("#ans2").css("color", "lightgreen")
        }
        //Question 3
        if(document.getElementById("benz").checked === true) {
            points++;
            $("#ans3").html("Karl Benz")
            $("#ans3").css("color", "lightgreen")
        }
        //Question 4
        if(document.getElementById("leo").checked === true) {
            points++;
            $("#ans4").html("Leonardo da Vinci")
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
        if (document.getElementById("george").checked === true) {
            $("#ans1").html("George Washington")
            $("#ans1").css("color", "red")
        } else if (document.getElementById("marco").checked === true) {
            $("#ans1").html("Marco Polo")
            $("#ans1").css("color", "red")
        } else if (document.getElementById("chris").checked === true) {
            $("#ans1").html("Christopher Columbus")
            $("#ans1").css("color", "red")
        }
        //Question 2
        if (document.getElementById("tom").checked === true) {
            $("#ans2").html("Thomas Jefferson")
            $("#ans2").css("color", "red")
        } else if (document.getElementById("ben").checked === true) {
            $("#ans2").html("Benjamin Franklin")
            $("#ans2").css("color", "red")
        } else if (document.getElementById("wash").checked === true) {
            $("#ans2").html("George Washington")
            $("#ans2").css("color", "red")
        }
        //Question 3
        if (document.getElementById("ford").checked === true) {
            $("#ans3").html("Henry Ford")
            $("#ans3").css("color", "red")
        } else if (document.getElementById("rapp").checked === true) {
            $("#ans3").html("Karl Rapp")
            $("#ans3").css("color", "red")
        } else if (document.getElementById("tesla").checked === true) {
            $("#ans3").html("Nikola Tesla")
            $("#ans3").css("color", "red")
        }
        //Question 4
        if (document.getElementById("van").checked === true) {
            $("#ans4").html("Vincent van Gogh")
            $("#ans4").css("color", "red")
        } else if (document.getElementById("rap").checked === true) {
            $("#ans4").html("Raphael")
            $("#ans4").css("color", "red")
        } else if (document.getElementById("mic").checked === true) {
            $("#ans4").html("Michelangelo")
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