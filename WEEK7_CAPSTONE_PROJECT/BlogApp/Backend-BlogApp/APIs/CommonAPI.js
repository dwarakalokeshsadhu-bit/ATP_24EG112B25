// create mini applications
import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {ArticleModel} from '../models/ArticleModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'

export const commonApp = exp.Router()
import {upload} from '../config/multer.js'
import {uploadToCloudinary} from '../config/cloudinaryUpload.js'
import cloudinary from '../config/cloudinary.js'

const {sign, verify}=jwt

// public route to read active articles
commonApp.get('/articles', async (req, res, next) => {
    try {
        const articlesList = await ArticleModel.find({ isArticleActive: true })
            .populate("author", "firstName lastName email profileImageUrl role")
            .populate("comment.user", "firstName lastName email profileImageUrl");

        res.status(200).json({ message: "All available Articles", payload: articlesList });
    } catch (err) {
        next(err);
    }
});

// public route to read one active article
commonApp.get('/articles/:id', async (req, res, next) => {
    try {
        const articleDoc = await ArticleModel.findOne({ _id: req.params.id, isArticleActive: true })
            .populate("author", "firstName lastName email profileImageUrl role")
            .populate("comment.user", "firstName lastName email profileImageUrl");

        if (!articleDoc) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.status(200).json({ message: "Article found", payload: articleDoc });
    } catch (err) {
        next(err);
    }
});

// Route to register
commonApp.post('/users', upload.single("profileImageUrl"), async (req, res, next) => {
    let cloudinaryResult;

    try {
        // get the details of the user
        const newUser = req.body;

        // check for the roles : only author and user not admin
        let allowedRoles = ['USER', 'AUTHOR']
        if (!allowedRoles.includes(newUser.role))
            return res.status(400).json({ message: "invalid role" })

        // upload image to cloudinary from memoryStorage
        if (req.file) {
            try {
                cloudinaryResult = await uploadToCloudinary(req.file.buffer);
            } catch (err) {
                cloudinaryResult = null;
            }
        }

        newUser.profileImageUrl = cloudinaryResult?.secure_url;

        // replace the password with hashed password
        newUser.password = await hash(newUser.password, 12)

        // create document
        const userDocument = new UserModel(newUser);

        // save document
        await userDocument.save()

        // send respone
        res.status(201).json({ message: "User registered " });

    } catch (err) {
        //delete image from cloudinary
        if (cloudinaryResult?.public_id)
            await cloudinary.uploader.destroy(cloudinaryResult.public_id)

        next(err);
    }
})

// route for login
commonApp.post('/login', async (req, res) => {
    // get email and password from the req
    const { email, password } = req.body;

    // get user details
    const user = await UserModel.findOne({ email: email })
    if (!user) {
        return res.status(400).json({ message: "Invalid email" });
    }

    // compare the password with og password
    let isMatched = await compare(password, user.password)
    if (!isMatched) {
        return res.status(400).json({ message: "Incorrect password" });
    }

    // TOKEN CREATION
    const signedToken = sign(
        {
            id: user._id,
            email: user.email,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName,
            profileImageUrl: user.profileImageUrl
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    )

    // set token to the cookie header 
    res.cookie("token", signedToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true
    })

    // remove the password field from the user obj
    const userObj = user.toObject();
    delete userObj.password;

    res.status(200).json({ message: "Login Successful", payload: userObj })
})

// route for logout
commonApp.get('/logout', (req, res) => {
    // delete the teoken from the cookie storage
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "none",
        secure: true
    })
    res.status(200).json({ message: "Logged out successfully" });
})

// Page for refresh
commonApp.get("/check-auth", (req, res) => {
    const token = req.cookies?.token;

    if (!token) {
        return res.status(200).json({
            message: "guest",
            payload: null,
        });
    }

    try {
        const decodedToken = verify(token, process.env.JWT_SECRET);
        res.status(200).json({
            message: "authenticated",
            payload: decodedToken,
        });
    } catch (err) {
        res.status(401).json({ message: "Session expired : Re-Login" });
    }
});

// change the password
commonApp.put('/password', verifyToken("ADMIN", "AUTHOR", "USER"), async (req, res) => {
    // check if current and new Passwords are same
    const { currentPassword, newPassword } = req.body;

    if (currentPassword === newPassword) {
        return res.json({ message: "Current and new passwords should not be the same" })
    }

    // get current password from the role loggedin
    const userId = req.user?.id;

    // find the user
    const user = await UserModel.findById(userId);

    const isMatched = await compare(currentPassword, user.password);

    //chck the current paswword of logged in role and req are same/not
    if (!isMatched) {
        return res.status(400).json({ message: "Current password is not matching" })
    }

    //hash the password
    const hashedPassword = await hash(newPassword, 12);

    //replace the password and save
    user.password = hashedPassword
    user.save();

    //send res
    res.status(200).json({ message: "Password updated" })
})
