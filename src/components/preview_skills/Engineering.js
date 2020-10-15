import React from "react"
import { withRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import workflow from '../images/workflow.png'
import CarouselLib from './CarouselLib'


const Engineering= ()=>{
    return(
        <div className="parallax-container">
        <div className="parallax-DS" />
        <div className="brief offered" >
            <h1>Software Engineering</h1>
            <h3>What do I have to offer?</h3>
            <ul className="checklist">
                <li>
                <span className="iconify" data-icon="emojione-v1:ballot-box-bold-check" data-inline="true" />&nbsp;
                    If you can dream it, I can build it. We can collaborate on developing your software to increase business efficiency and gain an influx of potential customers.
                 </li>
                <br/>
                <li>
                <span className="iconify" data-icon="emojione-v1:ballot-box-bold-check" data-inline="true" />&nbsp;
                    Create fast, powerful and responsive web apps with informative dashboards and analytics that will serve your business for years.
                 </li>
                <br/>
                <li>
                <span className="iconify" data-icon="emojione-v1:ballot-box-bold-check" data-inline="true" />&nbsp;
                    Custom UI and UX design that will allow your brand to stand out from the competition.
                </li>
                <br/>
                <li>
                <span className="iconify" data-icon="emojione-v1:ballot-box-bold-check" data-inline="true" />&nbsp;
                    Deep research in your business' scope to target audience and compare key competitors.
                </li>
                <br/>
                <li>
                <span className="iconify" data-icon="emojione-v1:ballot-box-bold-check" data-inline="true" />&nbsp;
                    A/B Testing of each scenario and use case within your app to ensure optimized results.
                 </li>
                <br/>
            </ul>
        </div>
        <div className="parallax-DS"/>
        <div className="neat" style={{height:"25%", backgroundColor:"white"}}>  
            <h4>It is a special feeling to see people enjoy and benefit your applications</h4>
            Designing and developing software makes me feel like I am a kid again playing with legos, in a more abstract kind of way though.
            Imagine having an enormous bin of legos to choose from and you can make alterations here and there to build anything your mind can imagine.
            This is why I fell in love with programming. I started programming as a hobby and to hasten the recovery from a Traumatic Brain Injury. I was a 
            high school maths teacher at the time and had some time off to recover from my accident; I am not the type to sit around and figured it was beneficial
            so I began some online MOOC's and haven't stopped since. Over the past two years, I have focused my learning towards data science and completed a data 
            science bootcamp. After graduating,  I wanted to get my ideas to others so I started combining front-end and back-end skills with NLP, data analytics and ML
            to deliver some innovative technologies. You can check out some of my projects <a href="/projects">here.</a> I continue to stay up to date with the latest
            research papers and algorithms available and am always excited to engage in new collaborations. If you would like a consultation or if you are looking 
            for a hard-working ambitious team player for your company, please <a href="/contact">contact me.</a>
        </div>
        {/* <div className="parallax-DS"/> */}
            <div style={{height:"25%", backgroundColor:"white", borderTop:"1px solid #A6A6A4", margin:"30px 10% 0 10%"}}>
                <h2 style={{textAlign:"center"}}>Command</h2>
                <ul>
                    <li>
                        MERN stacks and PERN stacks built with optimization in mind and an analytics page to give you data driven results.
                    </li>
                    <li>
                        Exemplary communication and listening developed as a teacher
                    </li>
                    <li>
                        Business logic definition, database and server management for relational and non-relational databases
                    </li>
                    <li>
                        Registration and Booking Systems
                    </li>
                    <li>
                        Testing and Debugging to ensure your software is fast and reliable
                    </li>
                    <li>
                        Version control/ GIT
                    </li>
                    <li>
                        SEO optimization
                    </li>
                </ul>
                <div style={{borderTop:"1px solid #A6A6A4", margin:"30px 10% 0 10%"}}>
                    <h3 style={{textAlign:"center"}}>Workflow</h3>
                    <img style={{marginLeft:"auto", marginRight:"auto", display:"block", height:"auto", maxWidth:"100%"}} src={workflow} alt="workflow"></img>
                </div>
            </div>
        <div className="parallax-DS"/>
                <CarouselLib 
                             item1={"logos:nodejs-icon"}
                             item2={"logos:react"}
                             item3={"ant-design:console-sql-outlined"}
                             item4={"logos:jquery"}
                             item5={"logos:gitlab"}
                             itemIMG={<img src="https://www.globaleducationideas.com/wp-content/uploads/2017/05/manymore-300x200.png" style={{height:"100px", width:"165px"}}/>}
                             item6={"logos:mongodb"}
                             item7={"vscode-icons:file-type-html"}
                             item8={"logos:sass"}           
                             item9= {"logos:es6"}    
                             item10={"logos:flask"}
                             item11={"logos:django"}
                             item12={"logos:python"}
                />
        </div>

    )
}

export default (Engineering);