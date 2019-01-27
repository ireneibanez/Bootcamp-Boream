const text = `<html>
<body>
<h1>Soy un titulo</h1>
<h1 class="test">Y yo otro</h1>
<p> Yo un parrafo</p>
</body>
</html>`;

var clearStartH1Regex = /<h1\s*[^>]*>/gi
var clearEndH1Regex = /<\/h1\s*>/gi

console.log(text.replace(clearStartH1Regex, '<h2>').replace(clearEndH1Regex, '</h2>'));