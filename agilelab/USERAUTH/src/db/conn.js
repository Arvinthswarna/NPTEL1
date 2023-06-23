const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/nptelRegistration",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`success`);
}
).catch((e)=>{
    console.log(`no connection`);
})