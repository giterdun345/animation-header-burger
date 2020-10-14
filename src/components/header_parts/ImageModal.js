import React from 'react'
import wordcloud from "../images/portfolio_wordcloud.png"
import marker from "../images/bgmarker.png"

export default class ImageModal extends React.Component {
    state = { isOpen: false };
      
    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
        // console.log("clicked");
    };

    render() {
        return (
            <div>
              <div className="combo">
                <img className="marker" src={marker} alt="scribbles behind smaller image"/>
                <img className="small" src={wordcloud} onClick={this.handleShowDialog} alt="smaller wordcloud of JMK"/>
              </div>
              {this.state.isOpen && (
                <dialog
                  open
                  onClick={this.handleShowDialog}
                >
                  <img
                    src={wordcloud}
                    onClick={this.handleShowDialog}
                    alt="expanded wordcloud with face"
                  />
                </dialog>
              )}
            </div>
          );
        }
      }
      