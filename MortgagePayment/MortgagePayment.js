

    var mor = document.getElementById("mortgage")
        var per5 = document.getElementById("5%")
        var per10 = document.getElementById("10%")
        var per15 = document.getElementById("15%")
        var per20 = document.getElementById("20%")
        var dPayement = document.getElementById("downPayement")
        var amor1 = document.getElementById("25y")
        var amor2 = document.getElementById("30y")
        var iRate = document.getElementById("iRate")
        var mPayement = document.getElementById("monthlyPayement")

        per5 = 0.05;
        per10 = 0.10;
        per15 = 0.15;
        per20 = 0.20;
        amor1 = 25;
        amor2 = 30;
        iRate = 0.03;

        function m5p() {
            dPayement.value = mor.value * per5
            
        }
        function m10p() {
            dPayement.value = mor.value * per10
        }
        function m15p() {
            dPayement.value = mor.value * per15
        }
        function m20p() {
            dPayement.value = mor.value * per20
        }

        function k2m() {
            mPayement.value = (((mor.value - dPayement.value) * 0.03) + ((mor.value - dPayement.value) / amor1)) / 12
        }
        function k2m() {
            mPayement.value = (((mor.value - dPayement.value) * 0.03) + ((mor.value - dPayement.value) / amor2)) / 12
        }
