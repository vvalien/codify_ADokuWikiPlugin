color_icobase = "../../plugins/codify/";

if(window.toolbar != undefined) {
  toolbar[toolbar.length] = {
    "type":"picker",
    "title":"code",
    "icon":color_icobase+"code.png",
    "list":[{
      "type":"format",
      "title":"bash",
      "icon":color_icobase+"bash.png",
      "open":"<code bash>",
      "close":"</code>"
    }, {
      "type":"format",
      "title":"python",
      "icon":color_icobase+"python.png",
      "open":"<code python>",
      "close":"</code>"
    }, {
      "type":"format",
      "title":"csharp",
      "icon":color_icobase+"csharp.png",
      "open":"<code csharp>",
      "close":"</code>"
    }, {
      "type":"format",
      "title":"C",
      "icon":color_icobase+"cplus.png",
      "open":"<code c>",
      "close":"</code>"
    }, {
      "type":"format",
      "title":"ruby",
      "icon":color_icobase+"ruby.png",
      "open":"<code ruby>",
      "close":"</code>"
    }, {
      "type":"format",
      "title":"powershell",
      "icon":color_icobase+"powershell.png",
      "open":"<code powershell>",
      "close":"</code>"
    }, {
      "type":"format",
      "title":"javascript",
      "icon":color_icobase+"javascript.png",
      "open":"<code javascript>",
      "close":"</code>"
    }, {
      "type":"format",
      "title":"code",
      "icon":color_icobase+"code.png",
      "open":"<code>",
      "close":"</code>"
    }]
  };
}
