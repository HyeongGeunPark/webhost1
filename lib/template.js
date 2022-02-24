module.exports = {
  html: function(title, list, body, control){
    return `
      <!DOCTYPE html>
      <html>
      <head>
          <title>WEB - ${title}</title>
          <meta charset='utf-8'>
          <script src='colors.js'></script>
      </head>
      <body>
          <h1><a href="/">WEB</a></h1>
          <input type="button" value="night" onclick="nightDayHandler(this)">
          ${list}
          ${control}
          ${body}
      </body>
      </html>`;
  },
  list: function(filelist){
    var list = "<ul>";
    for (let i = 0; i < filelist.length; i++) {
      list =
        list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    }
    list = list + "</ul>";
    return list;
  }
}