import './estilo.css';
import image from "../assets/girl.svg";
export default function Body() {
    return(
        <>
        <div className='body'>
          <div class="container">
             <div class="section">
                 <p class="p">Best dental surgeons</p>
                 <h1>25K+ STUDENTS TRUST US</h1>
                  <h2>Our goal is to make online education work for everyone</h2>
                  <div class="button">
                  <button class="button-1"><b>Get Quote Now</b></button>
                  <button class="button-2"><b>Learn more</b></button>
                  </div>
             </div>
             <div class="section-2">
            <img src={image} alt="detail" />
             </div>

          </div>
           
        </div>
        
        </>
    )
}