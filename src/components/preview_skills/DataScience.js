import React from "react"
import { withRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import workflow from '../images/workflow.png'
import CarouselLib from './CarouselLib'


const DataScience= ()=>{
    return(
        <div className="parallax-container">
            <div className="parallax-DS" />
            <div className="brief offered" >
                <h1>Machine Learning</h1>
                <h3>What do I have to offer?</h3>
                <ul className="checklist">
                    <li>
                    <span className="iconify" data-icon="emojione-v1:ballot-box-bold-check" data-inline="true" />&nbsp;
                        Engineer practical data-driven algorithms to power machine intelligence for businesses to make better decisions and to educate them about the AI hype.
                    </li>
                    <br/>
                    <li>
                    <span className="iconify" data-icon="emojione-v1:ballot-box-bold-check" data-inline="true" />&nbsp;
                        Find innovative ways to transform the domain-specific part of a problem into a generic computational problem in order to deliver a practical solutions.
                    </li>
                    <br/>
                    <li>
                    <span className="iconify" data-icon="emojione-v1:ballot-box-bold-check" data-inline="true" />&nbsp;
                        Skillfully use machine learning techniques along with traditional NLP and Computer Vision algorithms to deliver solutions to complex problems.
                    </li>
                    <br/>
                    <li>
                    <span className="iconify" data-icon="emojione-v1:ballot-box-bold-check" data-inline="true" />&nbsp;
                        Engage in end-to-end delivery of a machine learning solution tailored to bring product features to life.
                    </li>
                    <br/>
                    <li>
                    <span className="iconify" data-icon="emojione-v1:ballot-box-bold-check" data-inline="true" />&nbsp;
                        Strive to obtain maximum optimization using fundamental algorithms to deliver solutions to problems involving allocation, balancing, routing.
                    </li>
                    <br/>
                </ul>
            </div>
            <div className="parallax-DS" />
            <div className="neat" style={{height:"25%", backgroundColor:"white"}}>  
                <h4>I have a great passion for all things Data Science.</h4>
                The Artificial Intelligence Revolution is gaining critical mass within enterprises worldwide. AI is transforming all functional areas by elevating decision-making precision, creating efficient businesses, saving costs and delivering new innovative solutions to critical problems.
                When I started programming and I learned about the field of data science, I knew this is what I wanted to pursue. I knew I wanted to participate in this AI revolution and wanted to be able to deliver solutions to people to make life a little eaier. I have always had a knack for making 
                things efficient and quickly learned everything in the field of Data Science targets optimization. I have completed many projects using Machine Learning, Natural Language Processing and Computer Vision and you can check out a few <a href="\projects">here</a>. I continue to stay up to date with the latest research papers and algorithms available and am always excited to engage in new collaborations. 
                If you would like a consultation or if you are looking for a hard-working ambitious team player for your company, please <a href="/contact">contact me.</a>
            </div>
            {/* <div className="parallax-DS"/> */}
                <div style={{height:"25%", backgroundColor:"white", borderTop:"1px solid #A6A6A4", margin:"30px 10% 0 10%"}}>
                    <h2 style={{textAlign:"center"}}>Command</h2>
                    <ul>
                        <li>
                            Deep Learning, Convolutional Neural Networks, SVMs and xgboost.
                        </li>
                        <li>
                            Image recognition using convolutional neural network (MASKRCNN).
                        </li>
                        <li>
                            Linear &amp; Logistic regression with multiple variables.
                        </li>
                        <li>
                            Natural language processing and recurrent models.
                        </li>
                        <li>
                            Recommendation Systems (Apriori, Random Forests)
                        </li>
                        <li>
                            Customer Segmentation (KNN, Kmeans)
                        </li>
                        <li>
                            Data Visualizations
                        </li>
                    </ul>
                    <div style={{borderTop:"1px solid #A6A6A4", margin:"30px 10% 0 10%"}}>
                        <h3 style={{textAlign:"center"}}>Workflow</h3>
                        <img style={{marginLeft:"auto", marginRight:"auto", display:"block", height:"auto", maxWidth:"100%"}} src={workflow} alt="workflow"></img>
                    </div>
                </div>
            <div className="parallax-DS"/>
            <CarouselLib item1= {"logos-tensorflow"}
                         item2={"logos:python"}
                         item3={"simple-icons:pandas"}
                         item4={"logos:postgresql"}
                         item5={"la:aws"}
                         item6={"logos:hadoop"}
                         itemIMG2={<img src="https://www.globaleducationideas.com/wp-content/uploads/2017/05/manymore-300x200.png" style={{height:"100px", width:"165px"}}/>}
                         item9={"ion:logo-tableau"}
                         item7={"logos:opencv"}
                         item8={"logos:google-cloud-platform"}
                         itemIMG= {<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/260px-Scikit_learn_logo_small.svg.png" style={{height:"100px", width:"125px"}}/>}
            />
             <div className="parallax-DS"/>
        </div>
    )
}

export default (DataScience);