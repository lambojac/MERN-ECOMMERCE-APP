import JWT from "jsonwebtoken"

// protected routes token base
export const requireSignIn=async(req,res,next)=>{
   try{
     const decode=JWT.verify(req.header.authorization,process.env.JWT_SECRET)
   }catch(error){
console.log(error)
   }

}