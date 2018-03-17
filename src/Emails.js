import React, { Component } from 'react';
import homeBackground from './images/home_background_01.jpg';
import {Card, CardHeader, TextField, RaisedButton} from 'material-ui';
import DatePicker from 'material-ui/DatePicker';
import Check from 'material-ui/svg-icons/action/check-circle';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Emails extends Component {
    constructor(props) {
        super(props);
        const maxDate = new Date();
        maxDate.setFullYear(maxDate.getFullYear() + 1);
    	maxDate.setHours(0, 0, 0, 0);
    	this.state = {
    		maxDate: maxDate
    	}
    }

    render() {
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
                                    Your Email Pitch History
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
                <section className="subsection" style={{paddingTop: 1, background: '#EEEEE'}} >
					<div className="container">
						<div className="row">
							
							<div className="col-md-3">
								<Card>
									<div className="text-center">
										<h3>1</h3>
										<p>Total Emails Sent</p>
									</div>
								</Card>
							</div>
							<div className="col-md-3">
								<Card>
									<div className="text-center">
										<h3>1</h3>
										<p>Open Emails</p>
									</div>
								</Card>
							</div>
							<div className="col-md-3">
								<Card>
									<div className="text-center">
										<h3>0</h3>
										<p>Emails With Clicks</p>
									</div>
								</Card>
							</div>
							<div className="col-md-3">
								<Card>
									<div className="text-center">
										<h3>1</h3>
										<p>Emails Recieved A Response</p>
									</div>
								</Card>
							</div>
						</div>
						<Card>
							<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}}>
								<TextField
									hintText="Search"
									style={{width: '60%'}}
								/>
								<DatePicker style={{width: '35%'}} defaultDate={this.state.maxDate} />
							</div>
						</Card>
						<Card>
							<Table>
							    <TableHeader displaySelectAll={false} adjustForCheckbox ={false} >
							      <TableRow>
							        <TableHeaderColumn>Name</TableHeaderColumn>
							        <TableHeaderColumn>Email Address</TableHeaderColumn>
							        <TableHeaderColumn>Subject</TableHeaderColumn>
							        <TableHeaderColumn>Last Update</TableHeaderColumn>
							        <TableHeaderColumn>Email Status</TableHeaderColumn>
							      </TableRow>
							    </TableHeader>
							    <TableBody displayRowCheckbox={false} >
							      <TableRow>
							        <TableRowColumn>Sonny T.</TableRowColumn>
							        <TableRowColumn>sonny@copybreak.io</TableRowColumn>
							        <TableRowColumn>Re: Typo in your article</TableRowColumn>
							        <TableRowColumn>about 1 month</TableRowColumn>
							        <TableRowColumn>
							        	<RaisedButton primary={true} label="new reply" icon={<Check />} />
							        </TableRowColumn>
							      </TableRow>
							    </TableBody>
							</Table>
						</Card>
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

export default Emails;
