window.onload = function () { 
    var scene = document.getElementById('background-elements');
    var parallaxInstance = new Parallax(scene);

    const itypedComponent = document.getElementsByClassName("typing-component");
    // Init ityped
    for (let i = 0; i < itypedComponent.length; i++) {
        console.log(i);
        var itypedInstance = ityped.init(itypedComponent[i], { 
            showCursor: false,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 30000,
            strings: getStrings(i) }
        )
    }
    

    // Init dots elements
    const collection = document.getElementsByClassName("dots");
    for (let i = 0; i < collection.length; i++) {
        let current_dots = collection[i];
        let amt_width = Number(current_dots.getAttribute("amt-width"));
        let amt_height = Number(current_dots.getAttribute("amt-height"));
        let text_content = ".".repeat(amt_width);
        

        for (let j = 1; j < amt_height; j++) {
            text_content += "</br>"
            text_content += ".".repeat(amt_width);
        }

        console.log(text_content);
        current_dots.innerHTML = text_content;
    }
}   