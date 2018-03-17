import React, { Component } from 'react';
import homeBackground from './images/home_background_01.jpg';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {RaisedButton, IconMenu, MenuItem, IconButton, Card, CardHeader, CardActions, FlatButton , CardText } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Delete from 'material-ui/svg-icons/action/delete-forever';
import Results from './influencers.json';
import Badge from 'material-ui/Badge';
const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
  };
class Favorites extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: Results.results
        }
    }
    render() {
        let { data } = this.state;
        return (
            <div>
            	<section className="hero_fullscreen background_slider gradient_overlay menu_bar-waypoint" data-animate-down="menu_bar-hide" data-animate-up="menu_bar-hide" style={{height: 350}}>
                    {/* This section className is where you can edit background choice (background_single, background_slider, background_video) you can also enable gradient overlay (gradient_overlay) and mockups (mockups)*/}
                

                    {/* Logo and navigation */}
                    <div className="container top_bar">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<img src="./JAMES App Landing Page_files/logo_light.png" alt="logo" className="logo"/>
							<nav className="navigation_desktop">
								<ul>
									<li className=""><a href="javascript:void(0)" className="visible-lg visible-md go_to_overview" onClick={()=> this.props.history.push('/faq')} >FAQ</a></li>
									<li className=""><a href="javascript:void(0)" onClick={()=> this.props.history.push('/about')} className="visible-lg visible-md">About</a></li>
									<li className=""><a href="javascript:void(0)" onClick={()=> this.props.history.push('/customers')} className="visible-lg visible-md">Customers</a></li>
									<li className=""><a href="javascript:void(0)" onClick={()=> this.props.history.push('/favorites')} className="visible-lg visible-md">Favorites</a></li>-
                                    <li className=""><a href="javascript:void(0)" onClick={()=> this.props.history.push('/login')} className="visible-lg visible-md">Login</a></li>
									
                                    <li><div className="mobile_nav_open_button hidden-lg hidden-md"><a href="" id="showRight_1" className="active"><div className="button_icon close_icon"></div></a></div></li>
								</ul>
							</nav>
							</div>
						</div>
					</div>
                    {/* //Logo and navigation */}


                    {/* Main content */}
                    <div className="container align-center" id="main_content">
                        <div className="content_container row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md-offset-0 col-lg-offset-0 home_content">
                                <h2 className="slogan">
                                    Write a pitch and reach out to these Influencers
                                </h2>       
                            </div>
                        </div>          
                    </div>  
                    {/* //Main content */}

                    {/* Single Image Background */}
                    <div id="maximage_single" className="mc-cycle" style={{opacity: 1, height: 588, width: 1366}}>
                        
                    <div className="mc-image " title="" style={{backgroundImage: `url(${homeBackground})`, height: 420, width: 1366}} data-href=""></div></div>
                    {/* //Single Image Background */}
                </section>{/* //Homepage */}
                <section className="subsection" style={{paddingTop: 0, background: '#EEEEEE'}}>
                    <div>
                        <Tabs style={{color: 'white'}} initialSelectedIndex={2} >
                            <Tab label="Pitched" >
                                <div className="cards">
                                    <List>
                                        {data.map((item, k)=>
                                        <Card style={{marginBottom: 20}} key={k} >
                                            <CardHeader
                                            title={item.name}
                                            subtitle={item.location}
                                            avatar={item.image}
                                            />
                                            <CardText>
                                                <p>
                                                    {item.bio} --
                                                    <span style={{color: 'black'}}>{item.url}</span>
                                                </p>                                  
                                            </CardText>
                                            <CardActions>
                                                
                                                <IconButton tooltip="Delete" touch={true} tooltipPosition="bottom-right">
                                                    <Delete />
                                                </IconButton>
                                                <FlatButton primary={true} label="Send Email Pitch" onClick={()=>this.props.history.push('/newpitch')} />
                                            </CardActions>
                                        </Card>
                                        )}
                                    </List>
                                </div>
                            </Tab>
                            <Tab label="Not Pitched" >
                                <div className="cards">
                                    <List>
                                        {data.map((item, k)=>
                                        <Card style={{marginBottom: 20}} key={k} >
                                            <CardHeader
                                            title={item.name}
                                            subtitle={item.location}
                                            avatar={item.image}
                                            />
                                            <CardText>
                                                <p>
                                                    {item.bio} --
                                                    <span style={{color: 'black'}}>{item.url}</span>
                                                </p>                                  
                                            </CardText>
                                            <CardActions>
                                                
                                                <IconButton tooltip="Delete" touch={true} tooltipPosition="bottom-right">
                                                    <Delete />
                                                </IconButton>
                                                <FlatButton primary={true} label="Send Email Pitch" onClick={()=>this.props.history.push('/newpitch')} />
                                            </CardActions>
                                        </Card>
                                        )}
                                    </List>
                                </div>
                            </Tab>
                            <Tab label="All" >
                                <div className="cards">
                                    <List>
                                        {data.map((item, k)=>
                                        <Card style={{marginBottom: 20}} key={k} >
                                            <CardHeader
                                            title={item.name}
                                            subtitle={item.location}
                                            avatar={item.image}
                                            />
                                            <CardText>
                                                <p>
                                                    {item.bio} --
                                                    <span style={{color: 'black'}}>{item.url}</span>
                                                </p>                                  
                                            </CardText>
                                            <CardActions>
                                                
                                                <IconButton tooltip="Delete" touch={true} tooltipPosition="bottom-right">
                                                    <Delete />
                                                </IconButton>
                                                <FlatButton primary={true} label="Send Email Pitch" onClick={()=>this.props.history.push('/newpitch')} />
                                            </CardActions>
                                        </Card>
                                        )}
                                    </List>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </section>
                <section id="footer" className="subsection">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
                            
                                {/* Social Icons */}
                                <div className="social_icons_container align-center">
                                    <div className="social_icons">
                                        <ul>
                                            <li><div className="social_icon twitter_icon" ></div></li>
                                            <li><div className="social_icon facebook_icon" ></div></li>
                                            <li><div className="social_icon linkdin_icon" ></div></li>
                                            <li><div className="social_icon dribbble_icon"></div></li>
                                        </ul>
                                    </div>
                                </div>  
                                {/* //Social Icons */}

                            <p><small>Copyright © 2018 OutReachly</small></p> 
                            </div>
                        </div>              
                    </div>
                </section>
            </div>
        );
    }
}

export default Favorites;
