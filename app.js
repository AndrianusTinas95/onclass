const express = require('express');
const app = express();
const mediaRouter = require('./routers/media');
const spaceRouter = require('./routers/space');

app.use(mediaRouter);
// app.use(spaceRouter);

app.listen(3000,()=>{
    console.log('server run in port 3000');
})