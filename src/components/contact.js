import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Andy Ly</h2>
                        <img
                            src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"
                            alt="avatar"
                            style={{ height: "250px" }}
                        />
                        {/* NOTE TO SELF, make separate CSS files later*/}
                        <p
                            style={{
                                width: "75%",
                                margin: "auto",
                                paddingTop: "1em"
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque facilisis euismod tellus non
                            rhoncus. Donec scelerisque tortor in leo suscipit
                            condimentum. Morbi dignissim nec ante a porta. Sed
                            iaculis quis sem a molestie. Aenean fringilla nibh
                            efficitur risus convallis malesuada.{" "}
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}} >
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (123) 456-7899
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}} >
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        someone@example.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}} >
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        skypeid
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
