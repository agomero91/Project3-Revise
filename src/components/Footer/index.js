import React from "react";
import "./style.css";
import src from "../Beg.png";



function Footer() {
  return (
    

<footer>
<img src={src} alt = "Hand beg form" style={{width:"50%" , display:"block",marginRight:"auto", marginLeft:"auto", opacity:"0.5"}}/>


  <div class = 'socialLink'>
  {/*move social links at top of div*/}
  <div class= 'contact'>
      <span>Contact Us</span>
  </div>
<div class = 'Icon'>
  <a href="https://www.facebook.com" class="fa fa-facebook">

</a>

<a href="https://www.instagram.com" class="fa fa-instagram"></a>

<a href="https://www.twitter.com" class="fa fa-twitter"></a>

<a href="https://www.google.com" class="fa fa-google"></a>
</div>
</div>
  <div class= 'copyright'>
      <span>Copyright (c) 2019 Alan Gomero Project-3. All rights reserved.</span>
  </div>
    </footer>
  );
}



export default Footer;
