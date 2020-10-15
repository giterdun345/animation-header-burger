import React, { useState } from 'react'
import DataAnalytics from './DataAnalytics'
import NLP from './NLP'
import ML from './ML'
import ComputerVision from './ComputerVision'
import ReactProjects from './ReactProjects'
import Curriculum from './Curriculum'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import "bootstrap/dist/css/bootstrap.min.css";


const Projects= ()=>{
  const [activeTab, setActiveTab] = useState(0)
   
  return (
    <Tabs className="projectsNav" activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
    <Tab eventKey="DataAnalytics" title="Data Analytics" className="navTabs">
        <DataAnalytics />
    </Tab>
    <Tab eventKey="NLP" title="Natural Language Processing" className="navTabs">
        <NLP />
    </Tab>
    <Tab eventKey="ML" title="Machine Learning" className="navTabs">
        <ML />
    </Tab>
    <Tab eventKey="ComputerVision" title="Computer Vision" className="navTabs">
        <ComputerVision />
    </Tab>
    <Tab eventKey="ReactProjects" title="React Projects" className="navTabs">
        <ReactProjects />
    </Tab>
    <Tab eventKey="Curriculum" title="Curriculum" className="navTabs">
        <Curriculum />
    </Tab>
  </Tabs>
  
    )
}

export default Projects;

