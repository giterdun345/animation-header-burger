import React from 'react'
import ProjectCard from './ProjectCard'
import CardDeck from 'react-bootstrap/CardDeck'

const ComputerVision = () => {
    return(
        <CardDeck>
            <ProjectCard
                image="https://socialmediaweek.org/wp-content/blogs.dir/1/files/2015/06/Tw-FB-LI.jpg"
                title="Automating Social Media"
                text="This project was created for a larger project in which two social media sites, LinkedIn and Twitter, were automized to follow, unfollow, like and comment. In this part of the model, the output is a coordinate of a bounding box that is used by pyGUI to click on that button. In this case, the buttons are the follow and unfollow button identified by Mask RCNN."
                git="https://github.com/giterdun345/Automating-Social-Media"
            />
            <ProjectCard
                image="https://cdn-images-1.medium.com/freeze/max/1000/1*kOQOZxBDNw4lI757soTEyQ.png?q=20"
                title="Neural Style Transfer"
                text="I have always been interested in art and am very interested to discover new ways of making art with deep learning. This is a model that takes two images and transfers the style of one image onto another. I have used this model to create-paint-by-numbers to recreate family images with different styles. I have had a lot of fun with this model."
                git="https://github.com/giterdun345?tab=repositories"
            />
            <ProjectCard
                image="https://www.ledgerinsights.com/wp-content/uploads/2019/03/artificial-intelligence-AI-810x476.jpg"
                title="Animate Yourself For Youtube Videos"
                text="Many people do not make videos because they are concerned with the way they look or just don't want to show their face in a video. This project was completed after a friend wanted to make videos but felt more comfortable being anonymous. This project utilizes a webcam and the First Order Model with an input picture to generate an animation in place of the driving image(webcam recording)."
                git="https://github.com/giterdun345?tab=repositories"
            />
        </CardDeck>
    )
}

export default ComputerVision