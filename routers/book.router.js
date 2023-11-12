const bookController=require('../controllers/book.controller')
const router=require('express').Router()



router.get('/',bookController.getAllBooksController)
router.get('/:id',bookController.getOneBookDetailsController)


module.exports=router 