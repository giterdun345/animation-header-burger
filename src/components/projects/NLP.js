import React from 'react'
import ProjectCard from './ProjectCard'
import CardDeck from 'react-bootstrap/CardDeck'


const NLP = () => {
    const textWithLink= <> First part of the cover letter text generation project. For a full description you can go <a href= 'https://medium.com/@johnmketterer/automating-the-job-hunt-with-transfer-learning-part-1-289b4548943'>here</a> for a full explanation and walkthrough of the project. </>

    return(
        <CardDeck>            
           <ProjectCard 
            image="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/10/07200456/shutterstock_1348992518-696x323.jpg"
            title="Cover Letter Generator"
            text="This is a multi-part project. The first part of the project extracts and identifies skills from a 
            given job description. It then uses those skills to in the text generation of a cover letter in a very clear, 
            contextual and accurate tone. Each part utilizes transfer learning with BERT for word embeddings and GPT-2 
            for text generation. The model performs with an accuracy of 94% on data science related job descriptions and
            79% on non-related job descriptions."
            git="https://github.com/giterdun345/Cover-Letter-Generator"
           />
           <ProjectCard
                image= "https://mcdn.wallpapersafari.com/medium/11/26/yUJXMg.jpg"
                title="Image to Song Lyrics"
                text="Another transfer learning project with a mixture of NLP and computer vision, an image is provided to the 
                model as input, the image is captioned and based on the caption, song lyrics are generated. The song lyrics are
                surprisingly good and stay on a contextual similarity with the caption however, the model will often repeats 
                itself and when it does the last phrase is sort of off context but will make you laugh everytime."
                git="https://github.com/giterdun345/Song-Lyrics-from-an-image"
           />
           <ProjectCard 
                image="https://miro.medium.com/max/1280/1*yDbI_Th0QcwxjCl89Y7Fbw.jpeg"
                title="Job Skills Extractor"
                text={textWithLink}
                git="https://github.com/giterdun345/Job-Description-Skills-Extractor"
           />
        </CardDeck>

    )
}

export default NLP