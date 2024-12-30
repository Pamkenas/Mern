import { User } from '../models/user.model.js';

export const signup = async (req, res) => {
    const {email, password, name} = req.body;

    try {
        if(!email || !password || !name ) {
            throw new Error("All fields are required");
        }

        const userAlreadyExist = await User.findOne({email});
        if(userAlreadyExist) {
            return res.status(400).json({message: "User already exists"});
        }

    } catch (error) {

    }
};

export const login = (req, res) => {
    res.send("Login Page")
}
export const logout = (req, res) => {
    res.send("Logout Page")
}