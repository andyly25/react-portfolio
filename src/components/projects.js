import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        switch(this.state.activeTab) {
            case 0:
                return(
                    <div><h1>This is React</h1></div>
                 );
            case 1:
                return(
                    <div><h1>This is MongoDB</h1></div>
                 );
            case 2:
                return(
                    <div><h1>This is Python</h1></div>
                 );
            case 3:
                return(
                    <div><h1>This is Etc...</h1></div>
                 );
            default:
                return(
                    <div><h1>How did you get here?!</h1></div>
                 );
        }
        // if (this.state.activeTab === 0) {
        //     return(
        //         <div><h1>This is React</h1></div>
        //     );
        // } else if (this.state.activeTab === 1) {
        //     <div><h1></h1></div>
        // }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Python</Tab>
                    <Tab>Etc...</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects;
