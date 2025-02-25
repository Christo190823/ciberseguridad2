function sanitizarHtml() {
    let input = document.getElementById("inputHtml").value;

    let sanitizedHtml = input.replace(/<\/?(script|marquee|iframe|object|embed|style|link|applet|blink|form|input|textarea|button|select|option|)[^>]*>/gi, "");
    
    document.getElementById("outputHtml").innerHTML = sanitizedHtml;
}
