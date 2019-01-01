import React, { Component } from 'react';
import {
    Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton }
    from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        // NOTE! this is very bad copy and paste and definitely needs to be refactored later after
        // everything works perfectly!
        switch(this.state.activeTab) {
            case 0:
                return(
                    <div className="projects-grid">
                        {/*Project 1*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}} >React Project #1</CardTitle>
                            <CardText>
                                lorem ipsum spam lorem ipsum spam lorem ipsum spam lorem ipsum spam lorem ipsum spam
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/*Project 2*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}} >React Project #2</CardTitle>
                            <CardText>
                                lorem ipsum spam lorem ipsum spam lorem ipsum spam lorem ipsum spam lorem ipsum spam
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/*Project 3*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}} >React Project #3</CardTitle>
                            <CardText>
                                lorem ipsum spam lorem ipsum spam lorem ipsum spam lorem ipsum spam lorem ipsum spam
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
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
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;
