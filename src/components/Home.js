import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
// import chalk1 from '../images/chalk1.jpg'
// import chalk2 from '../images/chalk2.jpg'
// import chalk3 from '../images/chalk3.jpg'
// import chalk4 from '../images/chalk4.jpg'
// import chalk5 from '../images/chalk5.jpg'
import chalk6 from '../images/chalk6.jpg'
import chalk7 from '../images/chalk7.jpg'
import chalk8 from '../images/chalk8.jpg'
import { 
      faDatabase, 
      faLaptopCode,
      faChartLine,
      faLanguage, 
      faHandHoldingUsd, 
      faChalkboardTeacher, 
      faBezierCurve, 
      faPeopleCarry, 
      faChess
    } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return(
    <div>
     <img src={chalk6} className=" img home-image"/>
      <h1 className="services">What can I do for you?</h1>
        <div className="services-parent">
            <div className="services-a">
                <div>
                    <FontAwesomeIcon icon={faReact} size="5x" className="icon" />
                    <h5>Software Development</h5>
                    <p>
                        I engoy creating applications speciffically for education. I use node.js, react, and like to get my hands dirty on the front and back end of things.
                    </p>
                </div>
                
            </div>
            <div className="services-b">
            <FontAwesomeIcon icon={faLaptopCode} size="5x" className="icon" />
                <h5>Data Science</h5>
                <p>
                Data science is an umbrella term...                 
                </p>            
            </div>
            <div className="services-c">
                <FontAwesomeIcon icon={faChartLine} size="5x" className="icon" />
                <h5>Data Analytics</h5>
                <p>
                    I engoy creating applications speciffically for education. I use node.js, react, and like to get my hands dirty on the front and back end of things.
                </p>
            </div>
            <div className="services-d">
                <FontAwesomeIcon icon={faDatabase} size="5x" className="icon" />
                <h5>Data Engineering</h5>
                <p>
                    I engoy creating applications speciffically for education. I use node.js, react, and like to get my hands dirty on the front and back end of things.
                </p>
            </div>
            <div className="services-e">
                <FontAwesomeIcon icon={faLanguage} size="5x" className="icon" />
                <h5>Natural Language Processing</h5>
                <p>
                    I engoy creating applications speciffically for education. I use node.js, react, and like to get my hands dirty on the front and back end of things.
                </p>
            </div>
        </div>
        <div className="choice">
                <h1> Why should you hire me? </h1>
            </div>
        <div className="choice-parent">
            <div className="choice-a">
             <FontAwesomeIcon icon={faHandHoldingUsd} size="5x" className="icon" />
              <h5>Reason 1</h5>
                <p>
                    I engoy creating applications speciffically for education. I use node.js, react, and like to get my hands dirty on the front and back end of things.
                </p>
            </div>
            <div className="choice-b">
             <FontAwesomeIcon icon={faChalkboardTeacher} size="5x" className="icon" />
              <h5>Reason 1</h5>
                <p>
                    I engoy creating applications speciffically for education. I use node.js, react, and like to get my hands dirty on the front and back end of things.
                </p>
            </div>
            <div className="choice-c">
            <FontAwesomeIcon icon={faBezierCurve} size="5x" className="icon" />
              <h5>Reason 1</h5>
                <p>
                    I engoy creating applications speciffically for education. I use node.js, react, and like to get my hands dirty on the front and back end of things.
                </p>
            </div>
            <div className="choice-d">
             <FontAwesomeIcon icon={faPeopleCarry} size="5x" className="icon" />
              <h5>Reason 1</h5>
                <p>
                    I engoy creating applications speciffically for education. I use node.js, react, and like to get my hands dirty on the front and back end of things.
                </p>
            </div>
            <div className="choice-e">
             <FontAwesomeIcon icon={faChess} size="5x" className="icon" />
              <h5>Reason 1</h5>
                <p>
                    I engoy creating applications speciffically for education. I use node.js, react, and like to get my hands dirty on the front and back end of things.
                </p>
            </div>
        </div>
        <div className="footer">
            {/* <img src={chalk8} alt="Legos"/> */}
        </div>
    </div>
            // {/* <div className="img-wrapper"> */}
            // {/* </div> */}
            // {/* <div style={{backgroundColor:"#d2d2d2", height:"250px"}}> */}
            //     {/* <div className="wrapper home">  */}
            //     {/* <h3 style={{textAlign:"center", fontWeight:"700"}}> What do I have to offer?</h3> */}
            //         {/* <div style={{}}>
            //             <div>
            //                 <i class="fi-xnsuxl-computer-desktop-solid"></i>                        </div>
            //             <div>
            //                 <i class="fi-xwluxl-network-wide"></i> 
            //             </div>
            //             <div>
            //                 <i class="fi-swsuxl-analytics-wide"></i>
            //             </div>
            //             <div>
            //                 <i class="fi-snluxl-database-alt-solid"></i>
            //             </div>
            //             <div>
            //                 <i class="fi-xwluxl-left-align-wide"></i>
            //             </div>
            //             <div>
            //                 <i class="fi-tnsuxl-eye-solid"></i>
            //             </div>
            //         </div>
            //          */}
                    
            //         {/* <p> */}
            //             {/* <b>John Ketterer</b>, is a self-taught full-stack software developer and data scientist. 
            //             After a DS bootcamp and two years of intensive study, he has completed many amateur and
            //             professional projects for small and medium businesses. These projects utilized machine learning, 
            //             data analytics, data engineering and a lot of front and back end design to solve many different challenges.
            //             He specializes in Natural Language Processing and has a niche in the education market. <br/>
            //             If you would like to learn more about him, check out some of the independent projects or if you would like to employ him
            //             for your next project please "Dive in!" and contact him. */}
            //             {/* 
            //             John is creative, ambitious an excitable freelance full-stack web developer. I live with an intense passion for 
            //             software engineering, particularly in the world of architecture, functional development, and enhancing developer 
            //             productivity.
            //             For as long as I can remember, I've been obsessed with learning about the latest and greatest; no language is too different, pattern too difficult, or process too challenging.

            //             Lately? I've been building GraphQL API's using TypeScript, developing infrastructure tooling, and architecting elegant Client-side solutions at Credit Karma.

            //             Some of my must haves: test driven development, scalability, thoughtful and meaningful code review, and setting up build pipelines for success. */}
            //         {/* </p> */}
            //     {/* </div> */}
            // {/* <div style={{backgroundColor:"blue", height:"300px"}}>
            //     circles here
            //     <img src={chalk8} style={{backgroundColor:'red', height:"360px", width:'100%'}} />

            // </div> */}
            // {/* </div> */}
        
    )
}

export default Home;