const express=require('express')
const router =new express.Router()
const logincontroller=require('../controller/LoginController')
const registercontroller=require('../controller/registerController')
require('../models/RegisterModel')



router.get('/', (req,res)=>{
    res.render('index')
})

router.get('/register',registercontroller().register)
router.post('/register',registercontroller().register)

// router.post('/register',async (req,res)=>{
//     const{name, gender,address,password,cpassword}= req.body;
//     if(!name||!gender||address||!password||!cpassword){
//         return res.status(422).json({error:"plz fill the infield"});
//     }
//     try {
//                 const userExist = await User.findOne({name:name});
                
//                 if(userExist){
//                     return res.status(422).json({error: "username already exist"});
//                 }
//                 const register = new Register({name,gender,address,password,cpassword});
//                 await user.save();
//                 res.status(201).json({message:"user registered"});
                
//             } catch (err) {
//                 console.log('err')
//             }
        
//         });


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




router.get('/about',logincontroller().about)




module.exports= router;
