const { rejects } = require('assert');
const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const {resolve}= require('path')




var schemaBook=mongoose.Schema({
   _id:String,
    title:String,
    description:String,
    price:Number,
    author:String,
    image:String
         });

var url = 'mongodb://0.0.0.0:27017/library'
var Book=mongoose.model('book',schemaBook);//books


exports.getThreeBooks=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
             return Book.find({}).limit(3)
        }).then(books=>{
            mongoose.disconnect()
            resolve(books)
        }).catch(err=>reject(err))


    })
}
      
exports.getAllBooks=()=>{
    return new Promise((resolve,reject)=>{
    
     mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
         return Book.find({})
   
       }).then(books=>{
           mongoose.disconnect()
           resolve(books)
   
       }).catch(err=>reject(err))
 
 
 
 
    })
}
exports.getOneBookDetails=(id)=>{
    return new Promise((resolve,reject)=>{
    
     mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
         return Book.findById(id)
   
       }).then(books=>{
           mongoose.disconnect()
           resolve(books)
   
       }).catch(err=>reject(err))
 
 
 
 
    })
}