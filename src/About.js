import React, { Component } from 'react';
import Nav from './Nav';
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
							<Nav {...this.props} />
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
