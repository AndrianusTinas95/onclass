const express = require('express');
const router = express.Router();

router.get('/media',(req,res)=>{
    res.send('media get all')
})
router.post('/media',(req,res)=>{
    res.send('media create')
    
})
router.put('/media',(req,res)=>{
    res.send('media update')
    
})

router.delete('/media',(req,res)=>{
    res.send('media delete')

})

module.exports = router;