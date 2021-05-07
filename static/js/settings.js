//slider
var title = document.title;
var nav = document.getElementById("navigate");
var drop = document.getElementById("dropmenu");
var sider = document.getElementById("ulside");
var ulMainPage = document.getElementById("ulmainpage");
var visaimg = document.getElementById("visaimg");
if (!title.includes("Girişi")) {
    drop.style.display = "none";


    if (window.screen.width < 975) {
        visaimg.style.marginLeft = "-60%";
    }
    if (window.screen.width < 975) {
        ulMainPage.style.display = "block";
    } else {
        ulMainPage.style.display = "none";
    }
    //loginbutton

    document.getElementById("loginbtn").addEventListener("click", dropper);






    function dropper() {
        if (drop.style.display == "none") { drop.style.display = "block"; } else { drop.style.display = "none"; }
    }

    window.onscroll = function() { navFunc() };

    function navFunc() {
        if (window.screen.width <= 500) {
            if (window.pageYOffset >= 0.5) {




            } else {

                nav.style.display = "static";

            }

        } else if (window.pageYOffset >= 100) {



            nav.style.display = "none";
            document.querySelector(".btn-topup").style.display = "block";
        } else {

            nav.style.display = "flex";
            document.querySelector(".btn-topup").style.display = "none";
        }

    }


    document.getElementById("togglebtn").addEventListener("click", toggler);
    document.getElementById("togglebtnoff").addEventListener("click", togglerreverse);

    function toggler() {
        sider.style.right = "0";
    }

    function togglerreverse() {
        sider.style.right = "-800px";
    }
}
if (title == "Yönetişim: Apartman Site Yönetim Yazılımı") {
    var slayt = document.getElementsByClassName("slayt");
    var slaytText = document.getElementsByClassName("slider-text");
    var dots = document.getElementsByClassName("dot");
    var slaytSayi = slayt.length;
    var slaytno = 0;
    var mobileSlaytText = document.getElementsByClassName("lowerslider");



    showSlide(slaytno);



    function myFirst() {
        slaytno = 0
        showSlide(slaytno);
        dots[slaytno].style.background = "#95B561";
        if (window.screen.width <= 500) {
            dots[slaytno].style.background = "#011936";
            dots[slaytno].style.width = "26px";
            mobileSlaytText[i].style.display = "block";
        }
    }

    function mySec() {
        slaytno = 1;
        showSlide(slaytno)
        dots[slaytno].style.background = "#95B561";
        if (window.screen.width <= 500) {
            dots[slaytno].style.background = "#011936";
            dots[slaytno].style.width = "26px";
            mobileSlaytText[i].style.display = "block";
        }
    }


    function showSlide(slaytnumarasi) {
        slaytno = slaytnumarasi;
        if (slaytnumarasi >= slaytSayi) {
            slaytno = 0;
        }
        if (slaytnumarasi < 0) {
            slaytno = slaytSayi - 1;
        }

        for (i = 0; i < slaytSayi; i++) {
            slayt[i].style.display = "none";
            mobileSlaytText[i].style.display = "none";

            dots[i].style.background = "white";
            if (window.screen.width <= 500) {
                mobileSlaytText[i].style.display = "none";
                dots[i].style.width = "7px";
            }
        }
        slayt[slaytno].style.display = "block";

        dots[slaytno].style.background = "#95B561";
        if (window.screen.width <= 500) {
            dots[slaytno].style.background = "#011936";
            dots[slaytno].style.width = "26px";
            mobileSlaytText[slaytno].style.display = "block";
        }


    }
    sliderInterval();

    function sliderInterval() {
        var c = 0;
        setInterval(function() {
            c++;
            if (c > 1) { c = 0; }
            for (i = 0; i < slaytSayi; i++) {
                slayt[i].style.display = "none";

                dots[i].style.background = "white";
                if (window.screen.width <= 500) {
                    dots[i].style.width = "7px";
                    mobileSlaytText[i].style.display = "none";
                }
            }
            slayt[c].style.display = "block";

            dots[c].style.background = "#95B561";
            if (window.screen.width <= 500) {
                dots[c].style.background = "#011936";
                dots[c].style.width = "26px";
                mobileSlaytText[c].style.display = "block";
            }

        }, 8000);
    }


    //slider bitiş
    //orta slider
    var ci = document.getElementsByClassName("column-items");
    var cl = document.getElementsByClassName("column-line");
    var clg = document.getElementsByClassName("column-line-green");
    var clt = document.getElementsByClassName("column-line-top");
    var clgt = document.getElementsByClassName("column-line-green-top");
    var cll = document.getElementsByClassName("column-line-left");
    var clgl = document.getElementsByClassName("column-line-green-left");
    var sliderText = document.getElementsByClassName("sec-slider-text");
    var secSlider = document.getElementsByClassName("sec-slider");
    var lines = document.getElementsByClassName("box-column-line");
    var secSliderImg = document.getElementsByClassName("sec-slider-img");
    var ny = document.querySelectorAll(".nybox-inner");
    var col_p = document.getElementsByClassName("column-line-p");
    var slideSayi = secSlider.length;
    var slideNo = 0;
    var secSliderMobile = document.getElementsByName("sec-slider-mobile");
    var secSliderMobileH = document.getElementsByClassName("ssmobile");
    var sliderTextMobile = document.getElementsByClassName("sec-slider-text-mobile");
    var linesMobile = document.getElementsByClassName("box-column-line-mobile");



    showSecSlide(slideNo);
    listt();

    function listt() { document.querySelector(".row-inner").addEventListener("click", lsttt) }

    function lsttt(e) {
        for (i = 0; i < 3; i++) {
            try {

                if (window.screen.width < 600) { var tr = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[i].children[0].children[0]; } else { var tr = e.target.parentElement.parentElement.parentElement.parentElement.children[i].children[0].children[0]; }

                if (tr.style.color != "grey" && tr.id == "apt") {

                    if (e.target.id == "yonetim") {
                        slideNo = 0;
                    } else if (e.target.id == "finans") {
                        slideNo = 1;
                    } else { slideNo = 2; }

                    (showSecSlide(slideNo));
                } else if (tr.style.color != "grey" && tr.id == "pro") {
                    if (e.target.id == "yonetim") {
                        slideNo = 3;
                    } else if (e.target.id == "finans") {
                        slideNo = 4;
                    } else { slideNo = 5; }
                    (showSecSlide(slideNo));
                } else if (tr.style.color != "grey" && tr.id == "avm") {
                    if (e.target.id == "yonetim") {
                        slideNo = 6;
                    } else if (e.target.id == "finans") {
                        slideNo = 7;
                    } else { slideNo = 8; }
                    (showSecSlide(slideNo));
                }
            } catch (TypeError) {

            }

        }

    }



    function showSecSlide(slideNumber) {
        slideNo = slideNumber;
        if (slideNumber >= slideSayi) { slideNo = 0 }
        if (slideNumber < 0) { slideNo = slideSayi - 1 }
        for (i = 0; i < slideSayi; i++) {
            sliderText[i].style.display = "none";
            lines[i].style.display = "none";
            secSliderImg[i].style.display = "none";

            if (window.screen.width < 600) {
                secSlider[i].style.display = "none";
                sliderText[i].style.display = "none";
                lines[i].style.display = "none";
                secSliderImg[i].style.display = "none";
                sliderTextMobile[i].style.display = "none";
                linesMobile[i].style.display = "none";



            }

        }
        sliderText[slideNo].style.display = "block";
        lines[slideNo].style.display = "block";
        secSliderImg[slideNo].style.display = "block";
        if (window.screen.width < 600) {

            secSlider[slideNo].style.display = "none";
            sliderText[slideNo].style.display = "none";
            lines[slideNo].style.display = "none";
            sliderTextMobile[slideNo].style.display = "block";
            linesMobile[slideNo].style.display = "block";




        }

    }


    var sl = document.getElementsByName("sec-slider");
    var fi = document.getElementById("fi");

    var sliNo = 0;

    document.getElementById("apt").addEventListener("click", apt);
    document.getElementById("pro").addEventListener("click", pro);
    document.getElementsByClassName("fa-angle-down")[0].addEventListener("click", apt);
    document.getElementsByClassName("fa-angle-down")[1].addEventListener("click", pro);

    function apt() {
        sliNo = 0;
        sli(sliNo);
        if (window.screen.width <= 500) {
            lines[0].style.display = "none";
            secSliderMobile[0].style.display = "block";
            secSliderMobile[1].style.display = "none";
            linesMobile[0].style.display = "block";
            sliderTextMobile[0].style.display = "block";


        }
        for (l of lines) { l.style.display = "none"; }
        lines[0].style.display = "block";
        secSliderImg[0].style.display = "block";

    }

    function pro() {
        sliNo = 1;
        sli(sliNo);
        if (window.screen.width <= 500) {
            secSliderMobile[1].style.display = "block";
            secSliderMobile[0].style.display = "none";
            linesMobile[3].style.display = "block";
            sliderTextMobile[3].style.display = "block";
        }
        for (l of lines) { l.style.display = "none"; }
        lines[3].style.display = "block";
        secSliderImg[3].style.display = "block";
    }



    sli(sliNo);

    function sli(l) {
        sliNo = l;
        for (i = 0; i < sl.length; i++) {
            sl[i].style.display = "none";
            ci[i].style.color = "grey";
            cl[i].style.display = "none";
            clg[i].style.display = "none";
            clt[i].style.display = "none";
            clgt[i].style.display = "none";
            cll[i].style.display = "none";
            clgl[i].style.display = "none";
            ny[i].style.display = "none";

            if (window.screen.width <= 500) {
                cl[i].style.display = "block";
                clg[i].style.display = "none";
                clg[i].style.display = "none";
                clt[i].style.display = "none";
                clgt[i].style.display = "none";
                cll[i].style.display = "none";
                clgl[i].style.display = "none";
                sl[i].style.display = "none";
                secSliderMobile[i].style.display = "none";


            }
        }
        sl[l].style.display = "block";
        sl[l].children[1].children[0].children[0].style.display = "block";
        ci[l].style.color = "#011936";
        cl[l].style.display = "block";
        clg[l].style.display = "block";
        clt[l].style.display = "block";
        clgt[l].style.display = "block";
        cll[l].style.display = "block";
        clgl[l].style.display = "block";
        ny[l].style.display = "block";
        if (window.screen.width <= 500) {
            clg[l].style.display = "none";
            clt[l].style.display = "none";
            clgt[l].style.display = "none";
            cll[l].style.display = "none";
            clgl[l].style.display = "none";
            sl[l].style.display = "none";
            sl[l].children[1].children[0].children[0].style.display = "none";
            secSliderMobile[l].style.display = "block";

        }

    }

    //orta slider bitiş


} else if (title == "Özellikler") {
    //özellikler sayfası js
    var id = window.location.href.slice(length - 1);
    var icons = document.getElementsByName("icon");
    var boxes = document.getElementsByClassName("icons");
    var outlines = document.getElementsByClassName("outlines");
    var outlinesLength = outlines.length;
    var outlinesNumber = 0;
    var greenline = document.getElementsByClassName("green-line");





    listener();

    function listener() {
        document.querySelector(".container").addEventListener("click", clp);
    }

    function clp(e) {

        if (e.target.className == "panel" && e.target.parentElement.lastElementChild.classList.contains("non-show") == false) {
            e.target.parentElement.lastElementChild.classList.toggle("show");

        } else if (e.target.classList.contains("fa") && e.target.parentElement.parentElement.parentElement.lastElementChild.classList.contains("non-show") == false) {
            e.target.parentElement.parentElement.parentElement.lastElementChild.classList.toggle("show");
        }


    }

    showOutlines(outlinesNumber);

    document.getElementById("yonetim").addEventListener("click", outlineOne);
    document.getElementById("finans").addEventListener("click", outlineTwo);
    document.getElementById("iletisim").addEventListener("click", outlineThr);
    document.getElementById("yonetims").addEventListener("click", outlineFt);
    document.getElementById("finanss").addEventListener("click", outlineFv);
    document.getElementById("iletisims").addEventListener("click", outlineSt);
    /*document.getElementById("yonetimt").addEventListener("click", outlineSv);
    document.getElementById("finanst").addEventListener("click", outlineEg);
    document.getElementById("iletisimt").addEventListener("click", outlineNn);*/




    function outlineOne() {
        outlinesNo = 0;

        icons[outlinesNo].classList.toggle("icon-yonetim-active");



        showOutlines(outlinesNo);
    }

    function outlineTwo() {
        outlinesNo = 1;
        showOutlines(outlinesNo);
        icons[outlinesNo].classList.toggle("icon-finans");
    }

    function outlineThr() {
        outlinesNo = 2;
        icons[outlinesNo].classList.toggle("icon-iletisim-active");
        showOutlines(outlinesNo);
    }

    function outlineFt() {
        outlinesNo = 3;
        icons[outlinesNo].classList.toggle("icon-yonetim-active");
        showOutlines(outlinesNo);
    }

    function outlineFv() {
        outlinesNo = 4;
        icons[outlinesNo].classList.toggle("icon-finans");
        showOutlines(outlinesNo);
    }

    function outlineSt() {
        outlinesNo = 5;
        icons[outlinesNo].classList.toggle("icon-finans");
        showOutlines(outlinesNo);
    }

    /*function outlineSv() {
        outlinesNo = 6;
        icons[outlinesNo].classList.toggle("icon-yonetim-active");
        showOutlines(outlinesNo);
    }

    function outlineEg() {
        outlinesNo = 7;
        icons[outlinesNo].classList.toggle("icon-finans");
        showOutlines(outlinesNo);
    }

    function outlineNn() {
        outlinesNo = 8;
        icons[outlinesNo].classList.toggle("icon-iletisim-active");
        showOutlines(outlinesNo);
    }*/


    function showOutlines(outlinesNo) {
        outlinesNumber = outlinesNo;
        for (i = 0; i < outlinesLength; i++) {
            outlines[i].style.display = "none";
            greenline[i].style.display = "none";
            icons[0].className = "icon-yonetim";
            icons[1].className = "icon-finans";
            icons[2].className = "icon-iletisim";
            icons[3].className = "icon-yonetim";
            icons[4].className = "icon-finans";
            icons[5].className = "icon-iletisim";
            /*icons[6].className = "icon-yonetim";
            icons[7].className = "icon-finans";
            icons[8].className = "icon-iletisim";*/



        }
        outlines[outlinesNo].style.display = "block";
        greenline[outlinesNo].style.display = "block";
        icons[outlinesNo].className += "-active";

    }
    var sliderProp = document.getElementsByClassName("slider-prop-inner");
    var si = document.getElementsByName("h1");
    var sliderItemLine = document.getElementsByClassName("lines");
    var rowProp = document.getElementsByName("prop-row");


    var sldPropNumb = sliderProp.length;
    var sliderNo = 0;
    document.getElementById("asr").addEventListener("click", sliderOne);
    document.getElementById("pys").addEventListener("click", sliderTwo);
    /*document.getElementById("avm").addEventListener("click", sliderThr);*/


    showPropSlider(sliderNo);

    function sliderOne() {
        sliderNumber = 0;
        showPropSlider(sliderNumber);
        showOutlines(0);
    }

    function sliderTwo() {
        sliderNumber = 1;
        showPropSlider(sliderNumber);
        showOutlines(3);
    }

    /*function sliderThr() {
        sliderNumber = 2;
        showPropSlider(sliderNumber);
        showOutlines(6);
    }*/


    function showPropSlider(sliderNumber) {
        sliderNo = sliderNumber;
        for (i = 0; i < sldPropNumb; i++) {
            sliderProp[i].style.display = "none";
            sliderItemLine[i].style.display = "none";
            rowProp[i].style.display = "none";

            si[i].style.color = "grey";

        }
        sliderProp[sliderNumber].style.display = "block";
        sliderItemLine[sliderNumber].style.display = "block";
        rowProp[sliderNumber].style.display = "block";
        si[sliderNumber].style.color = "#011936";
    }
    var cI = document.getElementsByName("collapse-inner");
    var lci = cI.length;



    if (window.location.href.includes("id")) {
        _id = parseInt(id);
        if (_id <= 2) {
            sliderOne();
            if (_id === 0) { outlineOne(); } else if (_id === 1) { outlineTwo(); } else if (_id === 2) { outlineThr(); }

        } else if (_id > 2 && _id <= 5) {
            sliderTwo();
            if (_id === 3) { outlineFt(); }
            if (_id === 4) { outlineFv(); }
            if (_id === 5) { outlineSt(); }

        }
        if (_id > 5) { window.location.href = "localhost:8000"; } /* teste atarken değişecek */
    }

}