import React from 'react'
import ProjectCard from './ProjectCard'
import CardDeck from 'react-bootstrap/CardDeck'

const ML = () => {
    return(
        <CardDeck>
            <ProjectCard
                image="https://i1.wp.com/www.techjunkie.com/wp-content/uploads/2019/08/How-to-change-location-in-instacart.jpg?resize=738%2C320&ssl=1"
                title="Instacart Recomendation System"
                text="The Instacart Market Basket Analysis competition challenged Kagglers to predict which grocery products an Instacart consumer will purchase again and when. This focus on understanding temporal behavior patterns makes the problem fairly different from standard item recommendation, where user needs and preferences are often assumed to be relatively constant across short windows of time. F1 score of .38; competition winner .41;"
                git="https://github.com/giterdun345/Instacart_Recommendation_System"
            />
            <ProjectCard
                image="https://www.upgrad.com/blog/wp-content/uploads/2020/01/shutterstock_1605256060-768x488.jpg"
                title="Credit Risk Analysis"
                text="Shows the complete credit risk modeling picture, from preprocessing, through probability of default (PD), loss given default (LGD) and exposure at default (EAD) modeling, and finally finishing off with calculating expected loss (EL). A score card is developed and a classification model trained to predict whether a debtor will default on the loan and the expected loss of a defaulted loan."
                git="https://github.com/giterdun345/Credit-Risk-Analysis"
            />
            <ProjectCard
                image="https://www.surveycto.com/wp-content/uploads/2018/04/ai-and-dev.jpg"
                title="Anamoly Detection"
                text="Credit card fraud identification through anomaly detection algorithm using multivariate Gaussian distribution. There are couple of reasons why I wanted to employ the anomaly detection algorithm over logistic regression or SVM. One, for the anomaly detection algorithm is well suited for highly skewed data like fraud detection and two that it is least biased towards posterior probabilites of the events. Another advantage is that it is relatively easy to train, infact there is not much training at all in this algorithm (other than finding the optimum threshold probability)."
                git="https://github.com/giterdun345/Credit-Risk-Analysis"
            />
        </CardDeck>
    )
}

export default ML