import React from 'react'
import { Card, Button }from 'react-bootstrap'


const ProjectCard=(props)=>{
    return(
    <Card style={{ width: '18rem', backgroundColor:"#A2ACF7" }}>
        <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title><strong>{props.title}</strong></Card.Title>
                    <Card.Text style={{fontSize:"1em"}}>
                        {props.text} 
                    </Card.Text>
                    <div>
                        <Button href={props.git} 
                            style={{
                                    background:"url('https://api.iconify.design/topcoat:github.svg') no-repeat center center / contain",
                                    border:"none",
                                    height:"50px",
                                    width:"50px", 
                                    marginRight:"100px",
                                    paddingTop:"100px",
                                }}
                        />
                        
                        <Button href="mailto:?Subject=John Ketterer&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20Time%20Series%20Analysis. www.kettereronline.tech/projects" 
                                style={{
                                    background:"url('https://api.iconify.design/octicon:share-android-16.svg') no-repeat center center / contain",
                                    border:"none", 
                                    height:"50px",
                                    width:"50px", 
                                    color:"#FFFCF3"
                                    }}
                        />
                    </div>
                
            </Card.Body>
    </Card>
    )
}

export default ProjectCard;