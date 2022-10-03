import React from 'react';


import { Link } from "react-router-dom";
import { showInfo } from "../Acciones/actions.js";




class Home extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.showInfo()
    }
    render(){
        return(
            <div>
                <h1>SOY HOME</h1>
                
                {this.props.beatles.map((personas)=>
                    <Link to={`/${personas.name}`}>
                    <p> {personas.name} </p>
                    </Link>
                )}

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
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);