import React from 'react'
import pdf from '../Assets/Mirza Resume.pdf'
import "./styles.css";

function Content(){
    return(
      <div>
          <div class="contentimage">
            <div class="content">
                <div>
                    <h1>Freelance web developer</h1>
                    <h2>Hi, I'm <span>Farooq Mirza</span></h2>
                    <p>I'm curently an undergraduate software engineering student from Bahria university whose working and interested in latest technologies and keen on learning more.</p>
                    <br/>
                    <p>📧:farooqbaig12@gmail.com</p>
                    <br/>
                    <div className = "Resume">
                     <a href = {pdf}  button type="button"class="btn btn-dark" target="_blank">Download CV</a>
                    </div>
                </div>
            </div>
            <div class="image">
                <img src="img/IMG.jpg" class="pic"/>
            </div>
        
            </div>
      </div>
      
    )
}

export default Content

