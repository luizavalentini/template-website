import './estilo.css';
import image2 from "../assets/join-us.svg";
export default function Header() {
    return(
        <>
        <div className='header'>
            <div class="navigator">
                <p className='brand-name'><b>Brandname</b></p> 
                <div class="nav">
                <a><li><b>Home</b></li></a>
                <a><li> <b>Product</b></li></a>
                <a><li><b>Pricing</b></li></a> 
                <a><li><b>Contact</b></li></a> 
                </div>
                 <div class="login">
                     <p><b>Login</b></p>
                <button class="button-header"><b>JOIN US</b>
                <img class="img-header" src={image2} alt="detail" />
                </button>
                 </div>      
            </div>
           
        </div>
        
        </>
    )
}