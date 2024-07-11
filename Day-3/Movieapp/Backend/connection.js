const mongoose=require('mongoose');     //mongoose-user defined
mongoose.connect('mongodb+srv://achsagracin:55EPsFt4HIQS6if0@cluster0.g8pcacv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
   console.log('DB is connected')
}).catch((res)=>{
    console.log('DB not connected')
})