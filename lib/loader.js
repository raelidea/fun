const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function loadJS(FILE_URL, async = false) {
    let scriptEle = document.createElement("script");

    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", "text/javascript");
    scriptEle.setAttribute("async", async);

    document.body.appendChild(scriptEle);

    // success event
    scriptEle.addEventListener("load", () => {
      console.log("File loaded")
    });
     // error event
    scriptEle.addEventListener("error", (ev) => {
      console.log("Error on loading file", ev);
    });
  }

if (urlParams.has('v')) {
    const v = urlParams.get('v')
    const fname = "lib/main.bc"+v+".js"
    loadJS(fname)
} else {
    loadJS("lib/main.bc.js")
}

function metashow() {
    return 999
}
