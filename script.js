$(document).ready(function () {
    function conversions(){
        let inputValue = parseFloat($(".valueInput").val());
        //length conversions
        if ($("#m").is(":checked")) {
            $("#mtr").text(inputValue);
            $("#mmtr").text(inputValue * 1000);
            $("#kmtr").text(inputValue / 1000);
            $("#cmtr").text(inputValue * 100);
        }
        if ($("#km").is(":checked")) {
            $("#mtr").text(inputValue * 1000);
            $("#mmtr").text(inputValue * 1000000);
            $("#kmtr").text(inputValue);
            $("#cmtr").text(inputValue * 100000);
        }
        if ($("#mm").is(":checked")) {
            $("#mtr").text(inputValue / 1000);
            $("#mmtr").text(inputValue);
            $("#kmtr").text(inputValue / 1000000);
            $("#cmtr").text(inputValue / 10);
        }
        if ($("#cm").is(":checked")) {
            $("#mtr").text(inputValue / 100);
            $("#mmtr").text(inputValue * 10);
            $("#kmtr").text(inputValue / 100000);
            $("#cmtr").text(inputValue);
        }
        //weight conversions
        if($("#g").is(":checked")){
            $("#grm").text(inputValue);
            $("#kgrm").text(inputValue / 1000);
            $("#mgrm").text(inputValue * 1000);
            $("#tn").text(inputValue / 1000000);
        }
        if($("#kg").is(":checked")){
            $("#grm").text(inputValue * 1000);
            $("#kgrm").text(inputValue);
            $("#mgrm").text(inputValue * 1000000);
            $("#tn").text(inputValue / 1000);
        }
        if($("#mg").is(":checked")){
            $("#grm").text(inputValue / 1000);
            $("#kgrm").text(inputValue / 1000000);
            $("#mgrm").text(inputValue);
            $("#tn").text(inputValue / 1000000000);
        }
        if($("#t").is(":checked")){
            $("#grm").text(inputValue * 1000000);
            $("#kgrm").text(inputValue * 1000);
            $("#mgrm").text(inputValue * 1000000000);
            $("#tn").text(inputValue);
        }
        //temperature conversions
        if($("#c").is(":checked")){
            $("#cel").text(inputValue);
            $("#fah").text(inputValue * 1.8 + 32);
            $("#kel").text(inputValue + 273.15);
        }
        if($("#f").is(":checked")){
            $("#cel").text((inputValue - 32) / 1.8);
            $("#fah").text(inputValue);
            $("#kel").text((inputValue + 459.67) / 1.8);
        }
        if($("#k").is(":checked")){
            $("#cel").text(inputValue - 273.15);
            $("#fah").text(inputValue * 1.8 - 459.67);
            $("#kel").text(inputValue);
        }
    }

    $("#length").click(function () {
        $(".lengthGroup").show();
        $(".weightGroup").hide();
        $(".tempGroup").hide();
    });

    $("#weight").click(function () {
        $(".weightGroup").show();
        $(".lengthGroup").hide();
        $(".tempGroup").hide();
    });

    $("#temp").click(function () {
        $(".tempGroup").show();
        $(".lengthGroup").hide();
        $(".weightGroup").hide();
    });

    $(".valueInput").keyup(function () {
        conversions();
    });
    $(".btn-check").click(function(){
        conversions();
    });
    


});