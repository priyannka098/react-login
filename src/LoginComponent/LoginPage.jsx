import React from "react";
import  "./LoginPage.css";

function LoginPage() {
  return (
    <>

    <div>
    <div className="outer-container">
    
        <div className="image">
            <img src={require("../LoginComponent/ReactLogo.png")}></img>
        </div>
        <div className="passage">
        <p>SOME RANDOM TEXT,SOME RANDOM</p>
        <p className="para2">TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</p>
        </div>

        <div className="login-container">
       <div className="login">Login</div>
        <div className="Signup">Signup</div>
        </div>

         <div className="login-form" >
        <input name="email" type="email" className="box-styling abc p-2 h-10 "  placeholder="Email Address"/>
        <input type="password" className=" box-styling p-2  h-10" id="pwd"  placeholder=" Password"name="pwd"/>
        <button className="box-styling submit">LOGIN</button>
        </div>

        <div className="psw-box"> 
         <p className="psw">Forgot Password?</p>
        </div>

         <div className="text-box mb-4 mt-6">
         <p className="text">or login with</p>
         </div>

         <div className="icons-image-box">
         <div className="circle">
         <img src={require("../images/google.png")} className="img-icon"></img>
         </div>
         <div className="circle">
         <img src={require("../images/facebook.png")} className="img-icon"></img>
         </div>
         <div className="circle">
         <img src={require("../images/twitter.png")} className="img-icon"></img>
         </div>
         </div>
         <div className="create-acnt-box my-5">
          <p  className="create-act">Don't have an account? <span className="text-[#E70B89]">Create new now!</span></p>
         </div>
         <div className="terms-box">
         <p className=" terms">By signing up, you agree with our <span className="text-[#E70B89]">Terms & Conditions</span></p>
         </div>
         

  
     
    
       
        




    </div>
    </div>

    </>

  )
}

export default LoginPage;