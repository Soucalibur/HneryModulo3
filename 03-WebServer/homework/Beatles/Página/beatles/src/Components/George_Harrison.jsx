
import React from 'react';
import { showInfo } from "../Acciones/actions.js";
import { connect } from "react-redux";

class George_Harrison extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.showInfo()
    }
    render(){
        return(
            <div>
                <h1>SOY George_Harrison</h1>
                
                {this.props.beatles[2].name} <br />
                {this.props.beatles[2].birthdate} <br />
                <img src={this.props.beatles[2].profilePic} alt="" />
                

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
  
export default connect(mapStateToProps, mapDispatchToProps)(George_Harrison);
