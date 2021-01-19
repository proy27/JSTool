// ==UserScript==
// @name         CGP-ERP222
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://hr.iwerp.net/servlet/jform?file=hrm7w.pkg,hrm7w_tg.pkg&locale=TW&init_func=B9.%E8%80%83%E5%8B%A4%E5%BD%99%E7%B8%BD%E8%A1%A8
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    sleep(200).then(() => {
        sleep(200).then(() => {
            console.log("0");
            //for(var i=0;i<50;i++){
                //var asd = document.getElementById("table1-table-cell-text-"+i+"-3").innerHTML ;
                //console.log(asd);
            //}
            var timeoutID = window.setInterval(qqq, 500);
        });
        
    });


    function qqq()
    {
        console.log('qqq');
        for(var i=0;i<100;i++){
            var asd = document.getElementById("table1-table-cell-text-"+i+"-3");
            //var asd = $('#table1-table-cell-text-7-3')
            if(asd !=null){
                //console.log(date);
                //asd.attr('onclick',"window.open('https://cgp.iwerp.net/FormAcsAbnormal/acsforms/acsform01.xhtml#'"+date+", '_blank');");
                //asd.onclick(open(date));
                $( asd ).click(function(e) {
                    console.log(e.target);
                    var date = e.target.innerHTML.substring(0,10)
                    window.open('https://cgp.iwerp.net/FormAcsAbnormal/acsforms/acsform01.xhtml#'+date, '_blank');
                    //open(date)
                });
            }
        }
    }
    function open(date)
    {
        window.open('https://cgp.iwerp.net/FormAcsAbnormal/acsforms/acsform01.xhtml#'+date, '_blank');
    }
    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
})();
