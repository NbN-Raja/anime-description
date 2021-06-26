

require('../models/RegisterModel')



function registercontroller(){
    return{
        register(req,res){
            res.render('register')
        }
    }
}


// const registerController={
//     register(req,res){
//         new register ({
//             name:req.body.name,
//             gender:req.body.gender,
//             address:req.body.address,
//             password:req.body.password,
//             cpassword:req.body.cpassword,
//         }).save((err,Register)=>{
//             if(err) res.json(err);
//             else res.send('insertes')

//         })
//     }
// }

module.exports=registercontroller



// Router Post Here 




// app.post('/register',async (req,res)=>{
//     const { name,address,passion,phone,password,cpassword} = req.body;
//     if( !name || !address || !passion || !phone || !password || !cpassword){
//         return res.status(422).json({error:"pz filled "});
//     }
//     try {
//         const userExist = await User.findOne({name:name});
//         console.log(req.body.name);
//         if(userExist){
//             return res.status(422).json({error: "username already exist"});
//         }
//         const user = new User({name,address,passion,phone,password,cpassword});
//         await user.save();
//         res.status(201).json({message:"user registered"});
        
//     } catch (err) {
//         console.log('err')
//     }

// });