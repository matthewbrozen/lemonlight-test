import React, { Component } from 'react';

class SideNav extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isToggleFirstOn: true,
            isToggleSecondOn: true,
            route: ''
        };
        this.handlePreproduction = this.handlePreproduction.bind(this);
        this.handleBQ = this.handleBQ.bind(this);
        this.handlePQ = this.handlePQ.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
      }
    
      handlePreproduction() {
        this.setState(prevState => ({
            isToggleFirstOn: !prevState.isToggleFirstOn
        }));

        this.props.handleRouteUpdate('dashboard');
      }

      handleBQ() {
        this.setState(prevState => ({
            isToggleSecondOn: !prevState.isToggleSecondOn
        }));
        this.props.handleRouteUpdate('brand');
      }


      handlePQ() {
        this.props.handleRouteUpdate('project');
      }

      handleUpload() {
        this.props.handleRouteUpdate('upload');
      }




    render(){
        return(
            <div>
                 <div className="nav" id="firstNav"
                onClick={this.handlePreproduction} tabIndex="1">Pre-Production</div>
                    <div className={this.state.isToggleFirstOn ? 'subnav' : 'showFirst'} onClick={this.handleBQ} tabIndex="2">Brand Questionnaire</div>
                    <div className={this.state.isToggleFirstOn ? 'subnav' : 'showFirst'} onClick={this.handlePQ} tabIndex="3">Project Questionnaire</div>
                    <div className={this.state.isToggleFirstOn ? 'subnav' : 'showFirst'} onClick={this.handleUpload} tabIndex="4">Upload Assets</div>
                 <div onClick={this.handleSecondClick} className="nav"  id="secondNav">Production</div>
                 <div onClick={this.handleThirdClick} className="nav"  id="thirdNav">Post Production</div>
            </div>
        )
    }

    
}

export default SideNav;
