import React from 'react'
import ProjectCard from './ProjectCard'
import CardDeck from 'react-bootstrap/CardDeck'

const DataAnalytics = () => {
    return(
        <CardDeck>
           <ProjectCard 
                image='https://user-images.githubusercontent.com/44048793/51202991-d64c1100-18b4-11e9-9c47-93c12282967f.png'
                title="Time Series Analysis"
                text= " This project is an exploration in time series data starting with fundementals such as, 
                time series notation and data exploration. Uses QQ-Plot, ACF, PACF and Seasonal Decomposition graphs;
                Dickey-Fuller application; time series preprocessing, models such as, AR, MA, ARMA, ARIMAX, ARCH, &amp;
                GARCH to forecast S&amp;P500."
                git='https://github.com/giterdun345/Time-Series-Analysis'
            />
            <ProjectCard
                image="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1542230904/181114-deopoukos-reiki-tease_cexhiu"
                title="Is Reiki Really Real?"
                text="After having Cranial Sacral Therapy the practitioner asked if she could perform some Reiki to assist my healing. I obliged and really wanted to learn more about what was exactly 
                going on. I also wanted to know if it was worth giving a try. Analysis There was no relation between active medication use and reduction in pain score following treatment 
                (Kruskal-Wallis, p = 0.49). Similarly there was no relation between length of time that pain had been experienced and reduction in pain (Kruskal-Wallis, p = 0.87). 17 participants
                on the VAS scale and 18 participants on the Likert scale reported a reduction in their pain following treatment (p = 0.001 and 0.0002 respectively). A comparison of the before and after
                scores using a paired t-test showed a mean decrease in pain scores for the VAS scale of 2.25 and for the likert scale of 1.25 (p less than 0.0001 for each test)."
                git="https://github.com/giterdun345/Data-Analysis/tree/master/Is%20Reiki%20really%20real"
            /> 
            <ProjectCard
                image="https://offices.depaul.edu/center-teaching-learning/assessment/assessing-learning/PublishingImages/nominalDataExample2.png"
                title="Absenteeism in the Workplace"
                text="This project analyzes data from an anonymus company and creates dashboards to gain insight on the rates of absenteeism, patterns and predicts whether 
                a person will be excessively absent based on hostorical data. The dashboards are made with tableau and uses Logistic Regression to make predictions on the user
                being frequently absent or not."
                git="https://github.com/giterdun345/Data-Analysis/tree/master/Absenteeism%20in%20Company%20Y"
            />
        </CardDeck>
    )
}

export default DataAnalytics;
