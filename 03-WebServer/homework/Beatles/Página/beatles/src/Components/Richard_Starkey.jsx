
import React from 'react';
import { showInfo } from "../Acciones/actions.js";
import { connect } from "react-redux";

class Richard_Starkey extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.showInfo()
    }
    render(){
        return(
            <div>
                <h1>SOY Richard_Starkey</h1>
                
                {this.props.beatles[3].name} <br />
                {this.props.beatles[3].birthdate} <br />
                <img src={this.props.beatles[3].profilePic} alt="" />
                

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
  
export default connect(mapStateToProps, mapDispatchToProps)(Richard_Starkey);