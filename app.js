const express = require('express');
const app = express();
const mediaRouter = require('./routers/media');
const spaceRouter = require('./routers/space');
const participantRouter = require('./routers/participant');

app.use(mediaRouter);
app.use(spaceRouter);
app.use(participantRouter);

app.listen(3000,()=>{
    console.log('server run in port 3000');
})