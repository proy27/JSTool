// ==UserScript==
// @name         shopee
// @namespace    Proy27
// @version      0.1
// @description  try to take over the world!
// @author       Proy27
// @match        https://shopee.tw/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
setTimeout(asd, 3000);
    // Your code here...

})();

function asd()
{
    var aa = JSON.parse($($("[type='application/ld+json']")[1]).html());
    var url = aa.offers.seller.url+'/'+ aa.productID;
    $("div:contains('已售出')").last().parent().append(`<a href="${url}" >${aa.productID}</a>`);
}
