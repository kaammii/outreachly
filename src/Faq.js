import React, { Component } from 'react';
// import logoLight from './images/logo_light.png';
import homeBackground from './images/home_background_01.jpg';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Faq extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            	<section className="hero_fullscreen background_slider gradient_overlay menu_bar-waypoint" data-animate-down="menu_bar-hide" data-animate-up="menu_bar-hide" style={{height: 420}}>
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
                                    Frequently asked questions
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
                <section className="subsection" style={{paddingTop: 0}} >
	                <div style={{width: '70%', margin: '30px auto 20px'}} >
	                	<Card style={{marginBottom: 20}} >
						    <CardHeader
						      title="How does this work?"
						      actAsExpander={true}
						      showExpandableButton={true}
						    />
						    <CardText expandable={true}>
						      Type the name of your competitor or a keyword which best describes your startup.
							  We search the news, blogs, articles and find journalists who have written about something similar to what you do.
							  We show you the journalists, their contact info, and the best templates to use to reach out to them.
							  We can do the PR outreach on your behalf or let you email journalists on your own, it's your choice!
						    </CardText>
						</Card>
						<Card style={{marginBottom: 20}} >
						    <CardHeader
						      title="How do I send emails to Influencers?"
						      actAsExpander={true}
						      showExpandableButton={true}
						    />
						    <CardText expandable={true}>
						      After you modify the email template in JustReachOut you hit "Send email pitch" and the 
						      email will be sent off to the journalist after our team human checks the journalist email 
						      address and ensures it's 100% correct. We'll notify you and show you when the journalist has 
						      received your email and when it was opened.
						    </CardText>
						</Card>
						<Card style={{marginBottom: 20}} >
						    <CardHeader
						      title="Can you help me write my email pitches?"
						      actAsExpander={true}
						      showExpandableButton={true}
						    />
						    <CardText expandable={true}>
						      Yup. Just modify one of the templates we show you and send the pitch to us at: 
						      hi@justreachout.io. We will help you refine it before you send it.
						    </CardText>
						</Card>
						<Card style={{marginBottom: 20}} >
						    <CardHeader
						      title="Is this some lame PR database of press contacts you have?"
						      actAsExpander={true}
						      showExpandableButton={true}
						    />
						    <CardText expandable={true}>
						      Nope. We HATE PR databases! That is why every single hour we analyze most up to date 
						      popular news articles and blog posts and learn which journalists like to cover specific 
						      topics. We then match those journalists with keywords you provide for the search.
						    </CardText>
						</Card>
						<Card style={{marginBottom: 20}} >
						    <CardHeader
						      title="Does this really work? Show me proof."
						      actAsExpander={true}
						      showExpandableButton={true}
						    />
						    <CardText expandable={true}>
						      Our founder has used the same process to publish these 1,300+ articles on his own. 
						      Most recently he helped get a startup acquired by Google by using the same process. 
						      Want more proof?
						    </CardText>
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

export default Faq;
