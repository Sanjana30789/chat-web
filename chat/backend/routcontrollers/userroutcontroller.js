import User from "../Models/usermodels.js";
import bcryptjs from 'bcryptjs';
import jwtToken from '../utils/jwtwebToken.js'

export const userRegister = async(req,res)=>{
    try {
        const {fullname , username , email ,gender , password,profilepic} = req.body;
        const user = await User.findOne({username,email,});
        if(user) return res.status(500).send({success:false,message:"Username or Email Already Exists"});

        const hashpassword = bcryptjs.hashSync(password,10);

        const profileboy = profilepic || `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const profilegirl = profilepic || `https://avatar.iran.liara.run/public/girl?username=${username}`;
        console.log("working");

        const newUser = new User ({
            fullname,
            username,
            email,
            gender,
            password :hashpassword,
            profilepic : gender == "male" ? profileboy : profilegirl
        })

        if(newUser){
            await newUser.save();
            
        }
        else{
            res.status(500).send({success : false,message : "Invalid User Data"})
        }
        res.status(201).send(
            {
                _id : newUser._id,
                fullname : newUser.fullname,
                profilepic : newUser.profilepic,
                email : newUser.email,

            }
        )
        
    } catch (error) {
        res.status(500).send({
            success : false,
            message : error
        })
        console.log(error);
    }
}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(500).send({ success: false, message: "Email doesn't exist, please register" });

        const comparepass = bcryptjs.compareSync(password, user.password || "");
        if (!comparepass) return res.status(500).send({ success: false, message: "Email or password not matching" });

        
        jwtToken(user._id, res);
        return res.status(200).send({
            _id: user._id,
            fullname: user.fullname,
            profilepic: user.profilepic,
            email: user.email,
            message: "Successfully Login"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: error.message
        });
    }
};


export const userLogout = async (req, res) => {
    try {
        res.cookie("jwt",'',
            {
                maxage : 0
            }
        )
        res.status(200).send({
            message:"User Logout"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: error.message
        });
    }
}
    