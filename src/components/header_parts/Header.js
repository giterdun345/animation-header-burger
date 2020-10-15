import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import ImageModal from './ImageModal'

const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Dive in",
    color:'#191919'
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Dive in" });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close", 
        color:"white"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Dive in",
        color:'#191919'

      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close", 
        color:"white"

      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header className="headcontainer">
        <div classname="duo" >
        <div style={{background: "green"}}>
          <div className="mytooltip">
            <ImageModal />
              <span className="mytooltiptext">
                Click for wordcloud image
              </span>
          </div>
          </div>
        </div>
        
        <div className="title">
            <Link style={{color:state.color}} to="/">
                 John Ketterer 
              <span>
                &nbsp; *Full-Stack Developer &amp; Data Scientist 
              </span>
            </Link>
        </div>
        <div className="clicker">
          <button style={{"--content":`${state.name}`}} disabled={disabled} onClick={handleMenu}>
            {state.menuName}
          </button>
        </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
