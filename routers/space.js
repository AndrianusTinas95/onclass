const express = require('express')
const router = express.Router()

router.get('/space',(req,res)=>{
    res.send('space get all')

})
router.post('/space',(req,res)=>{
    res.send('space create')
    
})
router.put('/space',(req,res)=>{
    res.send('space update')

})

router.delete('/space',(req,res)=>{
    res.send('space delete')

})

module.exports = router