// Ezoic / Gatekeeper scripts
(function() {
    // Stage 1: Gatekeeper Consent Scripts
    var script1 = document.createElement('script');
    script1.setAttribute('data-cfasync', 'false');
    script1.src = 'https://cmp.gatekeeperconsent.com/min.js';
    document.head.prepend(script1);

    var script2 = document.createElement('script');
    script2.setAttribute('data-cfasync', 'false');
    script2.src = 'https://the.gatekeeperconsent.com/cmp.min.js';
    script1.parentNode.insertBefore(script2, script1.nextSibling);

    // Stage 2: Ezoic Standalone Scripts
    var ezoicScript = document.createElement('script');
    ezoicScript.async = true;
    ezoicScript.src = '//www.ezojs.com/ezoic/sa.min.js';
    script2.parentNode.insertBefore(ezoicScript, script2.nextSibling);

    // Initialize Ezoic standalone command queue
    window.ezstandalone = window.ezstandalone || {};
    ezstandalone.cmd = ezstandalone.cmd || [];
})();

// Google Analytics (G-1MFJXNN469)
(function() {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-1MFJXNN469';
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-1MFJXNN469');
})();

/*
// Google AdSense (ca-pub-5461553569029344)
(function() {
    var adsScript = document.createElement('script');
    adsScript.async = true;
    adsScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5461553569029344';
    adsScript.crossOrigin = 'anonymous';
    document.head.appendChild(adsScript);
})();
*/
