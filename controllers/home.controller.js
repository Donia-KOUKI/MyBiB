const homeModel=require('../models/book.model')


exports.threebooksController=(req,res,next)=>{
   homeModel.getThreeBooks().then(books=>{
                  res.render('index',{books:books})
   })
    

}
