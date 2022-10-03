
import React from 'react';
import { showInfo } from "../Acciones/actions.js";
import { connect } from "react-redux";

class Paul_McCartney extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.showInfo()
    }
    render(){
        return(
            <div>
                <h1>SOY Paul_McCartney</h1>
                
                {this.props.beatles[1].name} <br />
                {this.props.beatles[1].birthdate} <br />
                <img src={this.props.beatles[1].profilePic} alt="" />
                

            </div>
            
        
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        beatles: state.beatles
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        showInfo: ()=> dispatch(showInfo())
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Paul_McCartney);