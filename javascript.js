const SUVBtn = document.getElementById('SUVBtn');
const SedanBtn = document.getElementById('SedanBtn');
const HatchbackBtn = document.getElementById('HatchbackBtn');
const SportBtn = document.getElementById('SportBtn');

const suv = document.getElementById('suv');
const sedan = document.getElementById('sedan');
const Hatchback = document.getElementById('Hatchback');

document.getElementById("sedan").style.display = "none"
document.getElementById("Hatchback").style.display = "none"
document.getElementById("sport").style.display = "none"


$(document).ready(function () {
    $("#SUVBtn").click(function () {
        $('#suv').show();
        $('#sedan').hide();
        $('#Hatchback').hide();
        $('#sport').hide();
    });
});

$(document).ready(function () {
    $('#SedanBtn').click(function () {
        $('#suv').hide();
        $('#sedan').show();
        $('#Hatchback').hide();
        $('#aport').hide();
    });
});

$(document).ready(function () {
    $('#HatchbackBtn').click(function () {
        $('#suv').hide();
        $('#sedan').hide();
        $('#Hatchback').show();
        $('#sport').hide();
    });
});

$(document).ready(function () {
    $('#SportBtn').click(function () {
        $('#suv').hide();
        $('#sedan').hide();
        $('#Hatchback').hide();
        $('#sport').show();
    });
});