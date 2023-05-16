$(function () {
    let dom = document.createElement("span");
    config.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;
        if (config.imgs && config.imgs[item]) {
            let img = document.createElement("img");
            img.src = config.imgs[item];
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }
        dom.appendChild(p);
    });
    $("#texts-container").append(dom.innerHTML);
});

$(function () {
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.style = "height:100%; width:100%; text-align:center";

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}