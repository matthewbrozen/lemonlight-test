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

        this.props.handleToUpdate('dashboard');
      }

      handleBQ() {
        this.setState(prevState => ({
            isToggleSecondOn: !prevState.isToggleSecondOn
        }));
        this.props.handleToUpdate('brand');
      }


      handlePQ() {
        this.props.handleToUpdate('project');
      }

      handleUpload() {
        this.props.handleToUpdate('upload');
      }




    render(){
        return(
            <div>
                 <div className="nav" id="firstNav"
                onClick={this.handlePreproduction}>Pre-Production</div>
                    <div className={this.state.isToggleFirstOn ? 'subnav' : 'showFirst'} onClick={this.handleBQ}>Brand Questionnaire</div>
                    <div className={this.state.isToggleFirstOn ? 'subnav' : 'showFirst'} onClick={this.handlePQ}>Project Questionnaire</div>
                    <div className={this.state.isToggleFirstOn ? 'subnav' : 'showFirst'} onClick={this.handleUpload}>Upload Assets</div>
                 <div onClick={this.handleSecondClick} className="nav"  id="secondNav">Production</div>
                 <div onClick={this.handleThirdClick} className="nav"  id="thirdNav">Post Production</div>
            </div>
        )
    }

    
}

export default SideNav;
