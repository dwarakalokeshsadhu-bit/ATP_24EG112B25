import jwt from 'jsonwebtoken'

const {verify} = jwt

export function verifyToken(req,res,next){
//token verification logic
const token = req.cookies?.token //To access cookies property of req object we need cookie parser middleware.other re.cookie is undefine
//if req from unauthorized user

try {

    if(!token) {
    return res.status(401).json({message:"Please Login"})
}

//if token is existed(Whether it is tampered or have time)
const decodedToken = verify(token,'abcdef')
req.user = decodedToken
next()
} catch(err) {
//call next
res.status(401).json({message:"Session expired Plz relogin"})
  }
}