 import Button from "../Button/Button"
 import "./Header.css"


 const Header =()=>{
     return(
         <div className="header">
             <Button style={{backgroundColor :"violet"}}> Login </Button>
             <Button style={{backgroundColor :"yellow" , marginLeft :6}}> Log out </Button>
         </div>
     );
 };
 export default Header;