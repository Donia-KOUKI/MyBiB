const express=require('express');
const path=require('path')
const Routerhome=require('./routers/home.route')
const Routerbook=require('./routers/book.router')

const app=express()



app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views','views')

app.use('/',Routerhome)
app.use('/books',Routerbook)



       
 
       app.get('/books/details',(req,res,next)=>{
        res.render('details')
          })


      // app.get('/contact',(req,res,next)=>{
       // res.render('contact')
         // })
    

         // app.get('/about',(req,res,next)=>{
           // res.render('about')
             // })
        
    

              
                  //app.get('/login',(req,res,next)=>{
                    //res.render('login')
                      //})
                      //app.get('/register',(req,res,next)=>{
                        //res.render('register')
                          //})
        
                          //app.get('/details',(req,res,next)=>{
                            //res.render('details')
                              //})
            
    


app.listen(3000,()=>console.log('server is running on port 3000'))