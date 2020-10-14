import React from "react"
import { withRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import chalk6 from '../images/chalk6.jpg'
import chalk7 from '../images/chalk7.jpg'
import chalk8 from '../images/chalk8.jpg'
import { 
      faDatabase, 
      faLaptopCode,
      faChartLine,
      faLanguage, 
      faHandHoldingUsd, 
      faLightbulb, 
      faBezierCurve, 
      faPeopleCarry, 
      faChess, 
      faRobot,
      faHandsHelping
    } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return(
    <div >
     <img src={chalk6} className="home-img"/>
      <div className="brief">
        <h4 className="slogan">"Sharing ideas, building solutions and earning success"</h4>
        <p style={{fontSize:"1.3vw", marginLeft:"20px", marginRight:"20px"}}>
            I enjoy providing <b>solutions</b> to employers; whether the solution is a web app with an analytics dashboard
            or an NLP lyrics generator based on image context, it feels great making people's lives <b>easier</b>. 
            <br/><br/>
            <span style={{fontSize:".9vw"}}>
                If you would like to learn more <em>about me</em> or if you are interested in checking out some <em>projects</em>,
                please <u>dive in</u> using the button up there 👆 or just click <a href="/contactme">here</a> to contact me. 
            </span>
        </p>
      </div>
      <div className="services">
      <h1>What can I do for you?</h1>

      </div>
        <div className="flex-container" >
            <div className="services-a">
                    <Link to="/software_engineering" className="linked" style={{height:"10vw"}} >
                        {/* <i class="fab fa-react"></i> */}
                        <FontAwesomeIcon icon={faReact} size="4x" className="icon" />
                        <h5>Software Engineering</h5>
                    </Link>
                    <p>
                        Applications that are modern, fast and easy-to-use through research, planning and strategy.
                    </p>
            </div>
            <div className="services-b">
                    <Link to="/dataScience" className="linked">
                        <FontAwesomeIcon icon={faChartLine} size="4x" className="icon" />
                         <h5>Machine Learning</h5>
                    </Link>
                    <p>
                        Data analysis and application of sophisticated statistical models. All things data science &amp; big data              
                    </p>
            </div>
            <div className="services-c">
                <div>
                    <Link to="/automation" className="linked">
                        <FontAwesomeIcon icon={faRobot} size="4x" className="icon" />
                        <h5>Process Automation</h5>
                        <p>
                            Automate mundane and non value adding tasks to increase operational efficiency                
                        </p>
                    </Link>
                </div>
            </div>
        </div>
         <div>
            <h1> Why should you hire me? </h1>
         </div>
        <div>
            <div className="choice-a">
                <div>
                    <FontAwesomeIcon icon={faHandsHelping} size="4x" className="icon" />
                     <h5>Build trusting relationships</h5>
                    <p>
                        From the first call we have to the launching of your project you know what to expect ahead of time. I ask a lot of questions to ensure I can work out every little detail for an optimal solution. I strive to build trusting relationships with my clients and provide the best creative solutions based on an understanding of their needs.                    
                    </p>
                </div>
            </div>
            <div className="choice-b">
                <div>
                    <FontAwesomeIcon icon={faLightbulb} size="4x" className="icon" />
                     <h5>Work from passion</h5>
                    <p>
                        Successfully completing a project is, of course, satisfying but it is the process to completion that I enjoy the most. It entails accomplishing smaller challenges, learning about new things and sharing ideas with others. Sometimes it feels like playing with legos again as a kid. Each block added is a component of the main objective and should be placed strategically leading to some creative solutions.
                    </p>
                </div>
            </div>
            <div className="choice-c">
                <div>
                    <FontAwesomeIcon icon={faBezierCurve} size="4x" className="icon" />
                      <h5>Unique Flexibility</h5>
                        <p>
                            I began my journey with programming as a front-end developer. As I learned more, I started with back-end design and ultimately discovered data science. 
                            With strong math skills, and experience with design, data mining, algorithm implementation and abstraction work, I felt I was well suited for a career transition.
                            I found it exciting to create visualizations, build statistical models, computer vision utilize NLP techniques and knew this was what I wanted to do. 
                            I have learned discipline and hard-work from the Marine Corps, listening and communication skills from teaching, and while working myself through college as a business owner, I learned perserverence, marketing, sales and finance.
                        </p>
                </div>
            </div>
            <div className="choice-d">
             <FontAwesomeIcon icon={faPeopleCarry} size="4x" className="icon" />
              <h5>Personalization</h5>
                <p>
                    I engoy creating applications speciffically for education. I use node.js, react, and like to get my hands dirty on the front and back end of things.
                </p>
            </div>
            <div className="choice-e"> 
             <FontAwesomeIcon icon={faChess} size="4x" className="icon" />
              <h5></h5>
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
        // </div>
    )
}

export default withRouter(Home);