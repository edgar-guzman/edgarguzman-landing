const express = require('express'), app = express();
const routes = require('./routes');
const path = require('path');
// const fs = require('fs');
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/stylesheets', express.static(__dirname + '/static/stylesheets'));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});