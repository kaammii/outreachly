import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Customers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            	<section className="hero_fullscreen background_slider gradient_overlay menu_bar-waypoint" style={{position: 'relative'}} data-animate-down="menu_bar-hide" data-animate-up="menu_bar-hide" style={{height: 420}}>
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
									<li className=""><a href="javascript:void(0)" onClick={()=> this.props.history.push('/favorites')} className="visible-lg visible-md">Favorites</a></li>
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
                                    Meet OutReachly Customers
                                </h2>       
                            </div>
                        </div>          
                    </div>  
                    {/* //Main content */}
                </section>
                <section className="subsection" style={{padding: 0}}>
                	<div className="row" style={{padding: 20, marginTop: -50, position: 'absolute'}} >
 						<div className="col-md-3" style={{marginBottom: 20}} >
							<Card>
							    <CardMedia
							    >
							      <img src="https://i.ytimg.com/vi/XuJjCBjGheE/hqdefault.jpg" alt="" />
							    </CardMedia>
							    <CardTitle title="Abdul Hafez" subtitle="Growth Hacker @ 10to8" />
							    <CardText>
							    	In just the first week of using OutReachly we got two press mentions in well respected publications! I highly recommend the service for anyone looking to gain exposure.
							    </CardText>
							    <CardActions>
							      <FlatButton label="Watch Video" />
							    </CardActions>
							</Card>
                		</div>
                		<div className="col-md-1"></div>
						<div className="col-md-3" style={{marginBottom: 20}} >
							<Card>
							    <CardMedia
							    >
							      <img src="https://i.ytimg.com/vi/XuJjCBjGheE/hqdefault.jpg" alt="" />
							    </CardMedia>
							    <CardTitle title="Abdul Hafez" subtitle="Growth Hacker @ 10to8" />
							    <CardText>
							    	In just the first week of using OutReachly we got two press mentions in well respected publications! I highly recommend the service for anyone looking to gain exposure.
							    </CardText>
							    <CardActions>
							      <FlatButton label="Watch Video" />
							    </CardActions>
							</Card>
                		</div>
                		<div className="col-md-1"></div>
						<div className="col-md-3" style={{marginBottom: 20}} >
							<Card>
							    <CardMedia
							    >
							      <img src="https://i.ytimg.com/vi/XuJjCBjGheE/hqdefault.jpg" alt="" />
							    </CardMedia>
							    <CardTitle title="Abdul Hafez" subtitle="Growth Hacker @ 10to8" />
							    <CardText>
							    	In just the first week of using OutReachly we got two press mentions in well respected publications! I highly recommend the service for anyone looking to gain exposure.
							    </CardText>
							    <CardActions>
							      <FlatButton label="Watch Video" />
							    </CardActions>
							</Card>
                		</div>
                		<div className="col-md-1"></div>
						<div className="col-md-3" style={{marginBottom: 20}} >
							<Card>
							    <CardMedia
							    >
							      <img src="https://i.ytimg.com/vi/XuJjCBjGheE/hqdefault.jpg" alt="" />
							    </CardMedia>
							    <CardTitle title="Abdul Hafez" subtitle="Growth Hacker @ 10to8" />
							    <CardText>
							    	In just the first week of using OutReachly we got two press mentions in well respected publications! I highly recommend the service for anyone looking to gain exposure.
							    </CardText>
							    <CardActions>
							      <FlatButton label="Watch Video" />
							    </CardActions>
							</Card>
                		</div>
                		<div className="col-md-1"></div>
						<div className="col-md-3" style={{marginBottom: 20}} >
							<Card>
							    <CardMedia
							    >
							      <img src="https://i.ytimg.com/vi/XuJjCBjGheE/hqdefault.jpg" alt="" />
							    </CardMedia>
							    <CardTitle title="Abdul Hafez" subtitle="Growth Hacker @ 10to8" />
							    <CardText>
							    	In just the first week of using OutReachly we got two press mentions in well respected publications! I highly recommend the service for anyone looking to gain exposure.
							    </CardText>
							    <CardActions>
							      <FlatButton label="Watch Video" />
							    </CardActions>
							</Card>
                		</div>
                		<div className="col-md-1"></div>
						<div className="col-md-3" style={{marginBottom: 20}} >
							<Card>
							    <CardMedia
							    >
							      <img src="https://i.ytimg.com/vi/XuJjCBjGheE/hqdefault.jpg" alt="" />
							    </CardMedia>
							    <CardTitle title="Abdul Hafez" subtitle="Growth Hacker @ 10to8" />
							    <CardText>
							    	In just the first week of using OutReachly we got two press mentions in well respected publications! I highly recommend the service for anyone looking to gain exposure.
							    </CardText>
							    <CardActions>
							      <FlatButton label="Watch Video" />
							    </CardActions>
							</Card>
                		</div>
                		<div className="col-md-1"></div>
                		<div className="col-md-3" style={{marginBottom: 20}} >
							<Card>
							    <CardMedia
							    >
							      <img src="https://i.ytimg.com/vi/XuJjCBjGheE/hqdefault.jpg" alt="" />
							    </CardMedia>
							    <CardTitle title="Abdul Hafez" subtitle="Growth Hacker @ 10to8" />
							    <CardText>
							    	In just the first week of using OutReachly we got two press mentions in well respected publications! I highly recommend the service for anyone looking to gain exposure.
							    </CardText>
							    <CardActions>
							      <FlatButton label="Watch Video" />
							    </CardActions>
							</Card>
                		</div>
                		<div className="col-md-1"></div>
						<div className="col-md-3" style={{marginBottom: 20}} >
							<Card>
							    <CardMedia
							    >
							      <img src="https://i.ytimg.com/vi/XuJjCBjGheE/hqdefault.jpg" alt="" />
							    </CardMedia>
							    <CardTitle title="Abdul Hafez" subtitle="Growth Hacker @ 10to8" />
							    <CardText>
							    	In just the first week of using OutReachly we got two press mentions in well respected publications! I highly recommend the service for anyone looking to gain exposure.
							    </CardText>
							    <CardActions>
							      <FlatButton label="Watch Video" />
							    </CardActions>
							</Card>
                		</div>
                		<div className="col-md-1"></div>
						<div className="col-md-3" style={{marginBottom: 20}} >
							<Card>
							    <CardMedia
							    >
							      <img src="https://i.ytimg.com/vi/XuJjCBjGheE/hqdefault.jpg" alt="" />
							    </CardMedia>
							    <CardTitle title="Abdul Hafez" subtitle="Growth Hacker @ 10to8" />
							    <CardText>
							    	In just the first week of using OutReachly we got two press mentions in well respected publications! I highly recommend the service for anyone looking to gain exposure.
							    </CardText>
							    <CardActions>
							      <FlatButton label="Watch Video" />
							    </CardActions>
							</Card>
                		</div>
                		<div className="col-md-1"></div>
                	</div>
                </section>

            </div>
        );
    }
}

export default Customers;
