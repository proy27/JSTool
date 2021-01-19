// ==UserScript==
// @name         CGP-ERP
// @namespace    https://cgp.iwerp.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cgp.iwerp.net/FormAcsAbnormal/acsforms/acsform01.xhtml*
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
var base = 92;
    var idt106 = "cpAcs:j_idt"+(base+13)+"_input";
    var idt116 = "cpAcs:j_idt"+(base+23)+"_input";
    var idt123 = "cpAcs:j_idt"+(base+30);
//cpAcs:j_idt169
    var idt169 = "cpAcs:j_idt"+(base+77);
    $(document.getElementById("cpAcs:j_idt"+base+":0")).click();

    sleep(200).then(() => {
        $(document.getElementById("cpAcs:j_idt"+base+":1")).click();
        sleep(200).then(() => {
            Key1(idt106);Key0(idt106);Key0(idt106);Key0(idt106);
            Key1(idt116);Key9(idt116);Key0(idt116);Key0(idt116);
            ddd();
            sleep(200).then(() => {
                $(document.getElementById(idt169)).click();
            });
        });
        //alert(window.location.href.match('[0-9]{4}\/[0-9]{2}\/[0-9]{2}'));
    });
    $(document.getElementById(idt123)).change(ddd);

    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    function Key0(tar)
    {
        $(document.getElementById(tar)).trigger({type: 'keypress', which: 48, keyCode: 48});
    }
    function Key1(tar)
    {
        $(document.getElementById(tar)).trigger({type: 'keypress', which: 49, keyCode: 49});
    }
    function Key9(tar)
    {
        $(document.getElementById(tar)).trigger({type: 'keypress', which: 57, keyCode: 57});
    }
    function ddd()
    {
        console.log('ddd')
        //var asd = document.getElementById(idt123).value;
        var asd = window.location.href.match('[0-9]{4}\/[0-9]{2}\/[0-9]{2}');

        document.getElementById("cpAcs:acsWorkDate_input").value = asd;
        $(document.getElementById("cpAcs:acsWorkDate_input")).focus();

        document.getElementById("cpAcs:acsWorkOffDate_input").value = asd;
        $(document.getElementById("cpAcs:acsWorkOffDate_input")).focus();
        $(document.getElementById("cpAcs:acsWorkOffDate_input")).focusout();

        document.getElementById(idt123).value = asd;
    }

})();
