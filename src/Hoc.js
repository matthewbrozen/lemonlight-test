import React, { Component} from 'react';
import SideNav from './SideNav';
import Home from './Home';
import DashBoard from './DashBoard';
import Brand from './Brand';
import Project from './Project';
import Upload from './Upload';

class HOC extends Component{

    constructor(props) {
        super(props);
        this.state = {route: 'home'}
    }

    handleToUpdate = (someArg) => {
            this.setState({route:someArg})
    }


  render() {



	return (

    <div>
      <div className="container">
      <div className="imgRow"> 
        <img src="./lemonlight.png"></img>
      </div>


        <div className="row">
          <div className="colLeft">
            <SideNav handleToUpdate = {this.handleToUpdate}  />
          </div>  
          <div className="colRight">
            {this.state.route==='home'&& 
                <Home/>
            }

            {this.state.route==='dashboard'&& 
                <DashBoard/>
            }

            {this.state.route==='brand'&& 
                <Brand/>
            }

            {this.state.route==='project'&& 
                <Project/>
            }

            {this.state.route==='upload'&& 
                <Upload/>
            }
            </div>
          </div>
        </div>
      </div>
    )

}
}


export default HOC;