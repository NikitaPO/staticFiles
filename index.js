const PORT = process.env.PORT || 4321;
console.log(process.env.PORT);
const serve = require('serve-static')('public', {
'index': ['index.html', 'index.htm']
});
require('http').Server((req, res) => {
if (req.url === '/hello') res.writeHead(200) || res.end('Hello!');
serve(req, res, () => res.writeHead(404) || res.end('not found'));
})
.listen(PORT, () => console.log(`running ${process.pid} at port ${PORT}`));
