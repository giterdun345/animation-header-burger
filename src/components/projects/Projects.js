import React, {useState} from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText,  CardActions, Button, Link, CardMenu, IconButton } from 'react-mdl'
// import Nav from '../mainline/Nav'
import DataAnalytics from './dataanalytics'
import NLP from './nlp'
import ML from './ML'
import ComputerVision from './computervision'
import ReactProj from './reactproj'

const Projects= ()=>{
    const [activeTab, setActiveTab]= useState(0)
   
const toggleCategories() => {
    if (this.state.activeTab === 0){
      return(
        <DataAnalytics />
      );
    }
    else if(this.state.activeTab === 1){
      return(
        <NLP />
      );      
    }
    else if(this.state.activeTab === 2){
      return(
        <ML />
      );
    }
    else if(this.state.activeTab === 3){
      return(
          <ComputerVision />
      
      );
    }
    else if(this.state.activeTab === 4){
      return(
        <ReactProj />
      );
    }
  }

render() {
  return (
        <div>
          <Tabs className = "tabs" activeTab={this.state.activeTab} onChange={(tabID) => this.setState({activeTab: tabID})} ripple>
             <Tab style={{color:"black"}}>Data Analysis</Tab>
             <Tab style={{color:"black"}}>NLP</Tab>
             <Tab style={{color:"black"}}>Machine Learning</Tab>
             <Tab style={{color:"black"}}>Computer Vision</Tab>
             <Tab style={{color:"black"}}>React</Tab>
          </Tabs>
            <Grid>
              <Cell col={12}>
                <div>
                  {this.toggleCategories()}
                </div>
              </Cell>
            </Grid>
        </div>
    )
  }
}

