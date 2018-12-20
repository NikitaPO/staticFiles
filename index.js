<<<<<<< HEAD
const PORT = 4321;
=======
const PORT = 3336;
>>>>>>> 2a47f6a7f853d54b8f41ea65761330136b934d2f
const serve = require('serve-static')('public', {
'index': ['index.html', 'index.htm']
});
require('http').Server((req, res) => {
if (req.url === '/hello') res.writeHead(200) || res.end('Hello!');
serve(req, res, () => res.writeHead(404) || res.end('not found'));
})
.listen(PORT, () => console.log(`running ${process.pid} at port ${PORT}`));
