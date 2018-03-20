import React, { Component } from 'react';

class About extends Component {
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
									<li className=""><a href="javascript:void(0)" onClick={()=> this.props.history.push('/emails')} className="visible-lg visible-md">Emails</a></li>
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
                                    About OutReachly
                                </h2>       
                            </div>
                        </div>          
                    </div>  
                    {/* //Main content */}
                </section>
                <section className="subsection" style={{padding: 0}} >
					<div className="row">
						<div className="jumbotron text-center">
							<h3>Zdrastvyite! Hola! Bonjour!</h3>
						</div>
						<div className="col-md-3"></div>
						<div className="col-md-6 text-center">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sapiente rem, quibusdam unde, animi obcaecati nulla. Amet accusantium nesciunt nostrum a quae, eius illum consectetur quisquam quas voluptatem doloribus magnam?</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sapiente rem, quibusdam unde, animi obcaecati nulla. Amet accusantium nesciunt nostrum a quae, eius illum consectetur quisquam quas voluptatem doloribus magnam?</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sapiente rem, quibusdam unde, animi obcaecati nulla. Amet accusantium nesciunt nostrum a quae, eius illum consectetur quisquam quas voluptatem doloribus magnam?</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sapiente rem, quibusdam unde, animi obcaecati nulla. Amet accusantium nesciunt nostrum a quae, eius illum consectetur quisquam quas voluptatem doloribus magnam?</p>
						</div>
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

export default About;
