function sanitizarHtml() {
    let input = document.getElementById("inputHtml").value;

    // Expresión regular para eliminar las etiquetas pero dejar su contenido
    let sanitizedHtml = input.replace(/<\/?(script|marquee|iframe|object|embed|style)[^>]*>/gi, "");

    // Mostrar el resultado
    document.getElementById("outputHtml").innerHTML = sanitizedHtml;
}
