import React, { Component } from 'react';
import {RaisedButton, TextField} from 'material-ui';
import './main.css';
import homeBackground from './images/home_background_01.jpg';
import Slider from 'react-slick';
import SearchBar from 'material-ui-search-bar';

class App extends Component {
  constructor(props){
	super(props);
	this.state = {
		name: '',
		email: '',
		message: '',
		newsletterEmail: '',
		change: 0,
	}
  }
  handleChange = () => {
	this.slider.slickGoTo(2);
	this.setState({
		change: 1
	});
  }
  render() {
	var slider ={
		// dots: true
		 speed: 500,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	}
	return (
	<div>        
	<div className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s2">
		<div className="mobile_nav_close_button"><a href="http://www.shegy.nazwa.pl/themeforest/JamesLP/app/html/index1.html" id="hideRight" className="active"><div data-icon="" className="button_icon close_icon"></div></a></div>
		<nav id="mobile_menu_content" className="">
			<a href="#more_info">Overview</a>
			<a href="#features">Features</a>
			<a href="#features_video">Video</a>
			<a href="#reviews">Reviews</a>
			<a href="#screenshots">Screenshots</a>
			<a href="#contact">Contact</a>
		</nav>
	</div>
	
  
	<div className="loaded">
			
		{/* Fullscreen homepage */}
		<section className="hero_fullscreen background_single menu_bar-waypoint" data-animate-down="menu_bar-hide" data-animate-up="menu_bar-hide" style={{height: 588}}>
		{/* This section className is where you can edit background choice (background_single, background_slider, background_video) you can also enable gradient overlay (gradient_overlay) and mockups (mockups)*/}
		

			{/* Logo and navigation */}
			<div className="container top_bar">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<img src="./JAMES App Landing Page_files/logo_light.png" alt="logo" className="logo"/>
					<nav className="navigation_desktop">
						<ul>
							<li className=""><a href="javascript:void(0)" className="visible-lg visible-md go_to_overview">FAQ</a></li>
							<li className=""><a href="#features" className="visible-lg visible-md">About</a></li>
							<li className=""><a href="#features_video" className="visible-lg visible-md">Blog</a></li>
							<li className=""><a href="#reviews" className="visible-lg visible-md">Tour</a></li>
							<li className=""><a href="#screenshots" className="visible-lg visible-md">Customers</a></li>
							<li className=""><a href="#contact" className="visible-lg visible-md">Login</a></li>
							<li><div className="mobile_nav_open_button hidden-lg hidden-md"><a href="http://www.shegy.nazwa.pl/themeforest/JamesLP/app/html/index1.html" id="showRight_1" className="active"><div data-icon="" className="button_icon close_icon"></div></a></div></li>
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
						<h2 className="slogan">Attract Infuencers Build Relationships</h2>
						
						{/* CTA Buttons*/}
						<div className="cta_button_area">
							{/* <div><RaisedButton primary={true} label={'Sign up'} /></div>
							<a><small>Not sure? Learn more.</small></a> */}
							<SearchBar 
								onChange={() => console.log('onChange')}
								style={{backgroundColor: 'white', margin: '0 auto', maxWidth: 800}} 
								onRequestSearch={() => console.log('onRequestSearch')}
							/>
						</div>
						{/* //CTA Buttons*/}
									
					</div>
				</div>          
			</div>  
			{/* //Main content */}
			
			
			{/* Video Background */}
			<div id="maximage_video">
				<video width="896" height="504" style={{height: 759, width: 1349, marginTop: '-85.5px', marginLeft: 0}}>
					<source src="video/video.mp4" type="video/mp4"/>
					<source src="video/video.webm" type="video/webm"/>
					<source src="video/video.ogv" type="video/ogg"/>
				</video>
			</div>
			{/* //Video Background */}
			
			
			{/* Slider Background */}
			{/* <div id="maximage_slider" className="mc-cycle" style="width: 1366px; height: 588px;">
				
			<div className="mc-image " title="" style="background-image: url(&quot;images/background_slider_01.jpg&quot;); background-color: rgb(0, 0, 0); position: absolute; top: 0px; left: 0px; display: block; z-index: 5; opacity: 1; width: 1366px; height: 588px;" data-href=""></div><div className="mc-image " title="" style="background-image: url(&quot;images/background_slider_02.jpg&quot;); background-color: rgb(0, 0, 0); position: absolute; top: 0px; left: 0px; display: none; z-index: 4; width: 1366px; height: 588px; opacity: 0;" data-href=""></div><div className="mc-image " title="" style="background-image: url(&quot;images/background_slider_03.jpg&quot;); background-color: rgb(0, 0, 0); position: absolute; top: 0px; left: 0px; display: none; z-index: 4; width: 1366px; height: 588px; opacity: 0;" data-href=""></div><div className="mc-image " title="" style="background-image: url(&quot;images/background_slider_04.jpg&quot;); background-color: rgb(0, 0, 0); position: absolute; top: 0px; left: 0px; display: block; z-index: 4; width: 1366px; height: 588px; opacity: 0;" data-href=""></div></div> */}
			{/* //Slider Background */}
			
			
			{/* Single Image Background */}
			<div id="maximage_single" className="mc-cycle" style={{opacity: 1, height: 588, width: 1366}}>
				
			<div className="mc-image " title="" style={{backgroundImage: `url(${homeBackground})`, height: 588, width: 1366}} data-href=""></div></div>
			{/* //Single Image Background */}
			
			
		</section>{/* //Homepage */}
		
		
		{/* Menu bar */}
		<header id="menu_bar" className="menu_bar menu_bar-hide">
			<div className="container">
				<a href="" className="go_to_home logo_dark"><img src="./JAMES App Landing Page_files/logo_dark.png" alt="logo" className="logo"/></a>
				<a href="" className="go_to_home logo_light"><img src="./JAMES App Landing Page_files/logo_light.png" alt="logo" className="logo"/></a>
				<nav className="menu_bar_navigation">
					<ul>
						<li className="visible-lg visible-md"><a href="#more_info" className="go_to_overview">Overview</a></li>
						<li className="visible-lg visible-md"><a href="#features">Features</a></li>
						<li className="visible-lg visible-md"><a href="#features_video">Video</a></li>
						<li className="visible-lg visible-md"><a href="#reviews">Reviews</a></li>
						<li className="visible-lg visible-md"><a href="#screenshots">Screenshots</a></li>
						<li className="visible-lg visible-md"><a href="#contact">Contact</a></li>
						<li className="visible-lg visible-md last-item"><button className="btn waves-effect waves-light subscribe-submit">Purchase</button></li>
						<li className="hidden-lg hidden-md"><div className="mobile_nav_open_button"><a href="http://www.shegy.nazwa.pl/themeforest/JamesLP/app/html/index1.html" id="showRight_2"><div data-icon="" className="button_icon close_icon"></div></a></div></li>
					</ul>
				</nav>
			</div>
		</header>{/* // Menu bar */}
	
		
		{/* More Info #################### */}
		
		<section id="more_info" data-animate-down="menu_bar-show" data-animate-up="menu_bar-hide" className="menu_bar-waypoint subsection">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-10 col-md-10 col-lg-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 align-center content_anim1 intro animated fadeInUp">
						<h3>The best way to show your app to the world</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>  
					</div>
				</div>              
			</div>
			
			<div className="more_info_mockup content_anim2  animated fadeInUp">
				<img src={require('./images/mockups/subsection_mockups/1.png')} alt="" className="img_responsive"/>
			</div>
			
			<div className="container">
				<div className="row">
				
					<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
						<div className="iconbox content_anim3 animated fadeInUp">
							<div data-icon="" className="iconbox_icon"></div>
							<div className="iconbox_content">
								<h5>Responsive Design</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore.</p>
							</div>
						</div>  
					</div>
					
					<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
						<div className="iconbox content_anim4 animated fadeInUp">
							<div data-icon="" className="iconbox_icon"></div>
							<div className="iconbox_content">
								<h5>Clean Code</h5>
								<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							</div>
						</div>  
					</div>
					
					<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
						<div className="iconbox content_anim5 animated fadeInUp">
							<div data-icon="" className="iconbox_icon"></div>
							<div className="iconbox_content">
								<h5>1500+ Icons</h5>
								<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</div>  
					</div>
					
				</div>              
			</div>
			
		</section>{/* //More info */}
		
		
		
		{/* Features #################### */}
		
		<section id="features" className="subsection">
			<div className="container">
				<div className="row">
				
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<div className="mockup_container">
						<img src={require('./images/mockups/subsection_mockups/2a.png')} alt="" className="img_responsive mockup_back content_anim10 animated fadeInUp"/>
						<img src={require('./images/mockups/subsection_mockups/2b.png')} alt="" className="img_responsive mockup_front content_anim9 animated fadeInUp"/>    
						</div>
					</div>
					
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					
						<div className="intro content_anim6 animated fadeInUp">
							<h3>Present your app in a beautiful and elegant way.</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
						</div>
						
						<div className="iconbox content_anim7 animated fadeInUp">
							<div data-icon="" className="iconbox_icon"></div>
							<div className="iconbox_content">
								<h5>Creative Design</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
							</div>
						</div>
						
						<div className="iconbox content_anim8 animated fadeInUp">
							<div data-icon="" className="iconbox_icon"></div>
							<div className="iconbox_content">
								<h5>Cross-Browser Support</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
							</div>
						</div>
							
					</div>
				</div>              
			</div>  
		</section>{/* //Features */}
		
		
		{/* Features - Video #################### */}
		
		<section id="features_video" className="subsection">
			<div className="container">
			
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 play content_anim11 animated fadeInUp">
						<a data-lightbox-type="inline" className="btn waves-effect waves-light" id="Play_Video">Play Video</a>    
					</div>
				</div>

				{/* Video - lightbox */}
				<div id="video_modal_box" style={{display:'none', background:'white'}}>
					<div className="fluid-width-video-wrapper" style={{paddingTop: '56.2%'}}>
						{/*<iframe src="./JAMES App Landing Page_files/120433187.html" id="fitvid548020"></iframe>*/}
					</div>
				</div>
				{/* //Video - lightbox */}

				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<div className="intro content_anim12 animated fadeInUp">
							<h3>Use video to show how awesome your app is!</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
						</div>
					</div>
					<div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
						<ul className="icon_list">
							<li className="content_anim13 animated fadeInUp"><div data-icon="" className="icon_small float-left"></div><h6>Contact &amp; Newsletter Form Included</h6></li>
							<li className="content_anim14 animated fadeInUp"><div data-icon="" className="icon_small float-left"></div><h6>Image, Slider, Video Backgrounds</h6></li>
							<li className="content_anim15 animated fadeInUp"><div data-icon="" className="icon_small float-left"></div><h6>Mobile App Mockups Included</h6></li>
							<li className="content_anim16 animated fadeInUp"><div data-icon="" className="icon_small float-left"></div><h6>Easy To Customise Animations</h6></li>
						</ul>
					</div>
				</div>
			</div>
		</section>{/* //Features - Video */}
		
		
		{/* Reviews #################### */}
		
		<section id="reviews" className="subsection_parallax" data-stellar-background-ratio="0.6" style={{backgroundPosition: '0px 0px'}}>
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2 content_anim17 animated fadeInUp">
						<div className="owl-carousel owl-theme" style={{opacity: 1, display: 'block'}}>
						
							<div className="owl-wrapper-outer">
							<div className="owl-wrapper" style={{width: 6000, left: 0, display: 'block', transition: 'all 800ms ease', transform: 'translate3d(-750px, 0px, 0px)'}}>
							<Slider ref={slider => this.slider = slider} {...slider} >
								<div className="owl-item" style={{width: 750}}>
									<div className="single_review">
										<img src="./JAMES App Landing Page_files/review_01.jpg" alt="" className="img-circle"/>
										<div className="review_content">
											<h6>An elephant and a camel are talking. The elephant asks, "Why do you have boobs on your back?" The camel replies, "Ha! That's a funny question coming from an animal with a penis hanging from his face.”</h6>
											<p>- John McLane, Microsoft</p>
										</div>
									</div>
								</div>

								<div className="owl-item" style={{width: 750}}>
									<div className="single_review">
										<img src="./JAMES App Landing Page_files/review_02.jpg" alt="" className="img-circle"/>
										<div className="review_content">
											<h6>I was feeling pretty creaky after hearing the TV reporter say, "To contact me, go to my Facebook page, follow me on Twitter, or try me the old-fashioned way-e-mail.</h6>
											<p>- Jane Kovalsky, Apple</p>
										</div>
									</div>
								</div>

							<div className="owl-item" style={{width: 750}}><div className="single_review">
								<img src="./JAMES App Landing Page_files/review_03.jpg" alt="" className="img-circle"/>
								<div className="review_content">
									<h6>A Sergeant was addressing a squad of 25 and said: "I have a nice easy job for the laziest man here.  Put up your hand if you are the laziest."  24 men raised their hands, and the sergeant asked the other man "why didn't you raise your hand?"  The man replied: "Too much trouble raising the hand, Sarge."</h6>
									<p>- Mat Patterson, Google</p>
								</div>
							</div></div><div className="owl-item" style={{width: 750}}><div className="single_review">
								<img src="./JAMES App Landing Page_files/review_04.jpg" alt="" className="img-circle"/>
								<div className="review_content">
									<h6>The 21st century: Deleting history is more important than making it.</h6>
									<p>- Billy </p>
								</div>
							</div></div>
							</Slider>
							</div></div>
							
							
							
							
							
							
							
						<div className="owl-controls clickable"><div className="owl-pagination">
						<div className="owl-page" onClick={this.handleChange} >
						<span className=""></span>
						</div>
						<div className="owl-page active"><span className=""></span></div><div className="owl-page"><span className=""></span></div><div className="owl-page"><span className=""></span></div></div></div></div>
					</div>  
				</div>      
			</div>
		</section>{/* //Reviews */}
		
		
		{/* Reviews - Logos #################### */}
		
		<section id="reviews_logos" className="subsection">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
						<div className="intro content_anim18 animated fadeInUp">
							<h3>Our app in newspapers!</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
				</div>
				
				<div className="row">
					<div className="col-xs-6 col-sm-4 col-md-2 col-lg-2 reviews_logo content_anim19 animated fadeInUp">
						<img src={require('./images/reviews_logos/logo1.png')} alt=""/>
					</div>
					<div className="col-xs-6 col-sm-4 col-md-2 col-lg-2 reviews_logo content_anim20 animated fadeInUp">
						<img src={require('./images/reviews_logos/logo2.png')} alt=""/>
					</div>
					<div className="col-xs-6 col-sm-4 col-md-2 col-lg-2 reviews_logo content_anim21 animated fadeInUp">
						<img src={require('./images/reviews_logos/logo3.png')} alt=""/>
					</div>
					<div className="col-xs-6 col-sm-4 col-md-2 col-lg-2 reviews_logo content_anim22 animated fadeInUp">
						<img src={require('./images/reviews_logos/logo4.png')} alt=""/>
					</div>
					<div className="col-xs-6 col-sm-4 col-md-2 col-lg-2 reviews_logo content_anim23 animated fadeInUp">
						<img src={require('./images/reviews_logos/logo5.png')} alt=""/>
					</div>
					<div className="col-xs-6 col-sm-4 col-md-2 col-lg-2 reviews_logo content_anim24 animated fadeInUp">
						<img src={require('./images/reviews_logos/logo6.png')} alt=""/>
					</div>
				</div>
					
			</div>
		</section>{/* //Reviews - Logos*/}
		
		
		{/* Screenshots #################### */}
		
		<section id="screenshots" className="subsection">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
						<div className="intro content_anim25 animated fadeInUp">
							<h3>Screenshots time!</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
					</div>
				</div>
			</div>
			
			<div className="content_anim26 animated fadeInUp" id="screenshots_gallery">
				<div className="owl-carousel-screenshots owl-carousel owl-theme" style={{opacity: 1, display: 'block'}}>
					<div className="owl-wrapper-outer">
						<div className="owl-wrapper" style={{width: 4632, left: 0, display: 'block', transition: 'all 800ms ease'}}>
							<div className="owl-item" style={{width: 193}}>
								<div>
									<a>
										<img src={require('./images/screenshots/1.jpg')} className="shadow" alt=""/>
									</a>
								</div>
							</div>
							<div className="owl-item" style={{width: 193}}>
								<div>
									<a>
										<img src={require('./images/screenshots/2.jpg')} className="shadow" alt=""/>
									</a>
								</div>
							</div>
							<div className="owl-item" style={{width: 193}}>
								<div>
									<a>
										<img src={require('./images/screenshots/3.jpg')} className="shadow" alt=""/>
									</a>
								</div>
							</div>
							<div className="owl-item" style={{width: 193}}>
								<div>
									<a>
										<img src={require('./images/screenshots/4.jpg')} className="shadow" alt=""/>
									</a>
								</div>
							</div>
							<div className="owl-item" style={{width: 193}}>
								<div>
									<a>
										<img src={require('./images/screenshots/5.jpg')} className="shadow" alt=""/>
									</a>
								</div>
							</div>
							<div className="owl-item" style={{width: 193}}>
								<div>
									<a>
										<img src={require('./images/screenshots/6.jpg')} className="shadow" alt=""/>
									</a>
								</div>
							</div>
							<div className="owl-item" style={{width: 193}}>
								<div>
									<a>
										<img src={require('./images/screenshots/7.jpg')} className="shadow" alt=""/>
									</a>
								</div>
							</div>
							
						</div>
					</div>
					
				<div className="owl-controls clickable"><div className="owl-pagination"><div className="owl-page"><span className=""></span></div><div className="owl-page active"><span className=""></span></div></div></div></div>
			</div>
			
		</section>{/* //Screenshots*/}
		
		
		{/* Newsletter #################### */}
		
		<section id="newsletter" className="subsection_parallax" data-stellar-background-ratio="0.6" style={{backgroundPosition: '0px 0px'}}>
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center content_anim27 animated fadeInUp">
						<div className="intro">
							<h3>Sign up to Our newsletter</h3>
							<p>Lorem ipsumpapers dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
						</div>
					</div>
				</div>
				
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center content_anim28 animated fadeInUp">

					{/* Newsletter Form */}
					<div className="newsletter_form">
						<form>
						<div className="input-field">
							<div data-icon="" className="prefix"></div>
							<TextField style = {{width: '80%', fontSize: 20}} inputStyle={{color:"white"}} floatingLabelStyle={{color: 'white', fontSize: '20px'}} floatingLabelText={'Email Address'} />
						</div>
						<button className="btn waves-effect waves-light subscribe-submit" type="submit" name="action" id="subscribe-form-submit">Subscribe Now</button>
						</form>
						<div id="preview"></div>
					</div>
					{/* //Newsletter form */}

					</div>
				</div>
					
			</div>
		</section>{/* //Newsletter*/}
		
		
		<section id="contact" className="subsection">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 content_anim29 animated fadeInUp">
					<h3>Contact Info</h3>
					<p>James is a responsive "under construction" page. It will fit perfectly as a placeholder for your website or landing page.</p>
					<p>It comes with several content and background variants. James is also equiped with some cool devices mockups for app version.</p>
					
					<ul className="icon_list">
						<li><div data-icon="" className="icon_small float-left"></div><h6>1234 Street Name, City Name,<br/>United States</h6></li>
						<li><div data-icon="" className="icon_small float-left"></div><h6>(123) 456-7890</h6></li>
						<li><div data-icon="" className="icon_small float-left"></div><h6><a href="mailto:webdesign@shegy.pl">webdesign@shegy.pl</a></h6></li>
					</ul>
					
					<p>James has of corse well formated and commented code and comes with in depth documentation.</p>   
					</div>
					
					
					<div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-sm-offset-2 col-md-offset-2 col-lg-offset-2 content_anim30 animated fadeInUp">
						<h3>Contact Us</h3>
						<p>Contact Us using contact form below. Form is fully working and very easy to customise. </p>
					
					
						{/* Contact Form */}
						<form>
							<div className="contact_form">
								<div className="input-field">
									<input id="first_name" onChange={(e)=> this.setState({name: e.target.value})} type="email" name="contact-name"/>
									<label className="">{this.state.name ? '' : 'Your Name'}</label>
								</div>
								<div className="input-field">
									<input id="contact_email" type="email" name="contact-email" onChange={(e)=> this.setState({email: e.target.value})} />
									<label className="">{this.state.email ? '' : 'Email Address'}</label>
								</div>
								<div className="input-field">
									<textarea className="materialize-textarea" onChange={(e)=> this.setState({message: e.target.value})} name="contact-message"></textarea>
									<label className="">{this.state.message ? '' : 'Message'}</label>
								</div>
							</div>  
							<button className="btn waves-effect waves-light" type="submit" name="action">Send</button>
						</form>
						{/* //Contact Form */}
					
					
						<div id="message"><div id="alert"></div></div>{/* Message container */} 
					</div>
					
					

				</div>              
			</div>
		</section>{/* //More info */}
		
		
		<section id="footer" className="subsection">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
					
						{/* Social Icons */}
						<div className="social_icons_container align-center">
							<div className="social_icons">
								<ul>
									<li><div data-icon="" className="social_icon twitter_icon" ></div></li>
									<li><div data-icon="" className="social_icon facebook_icon" ></div></li>
									<li><div data-icon="" className="social_icon linkdin_icon" ></div></li>
									<li><div data-icon="" className="social_icon dribbble_icon"></div></li>
								</ul>
							</div>
						</div>  
						{/* //Social Icons */}

					<p><small>Copyright © 2018 OutReachly</small></p> 
					</div>
				</div>              
			</div>
		</section>{/* //More info */}
	</div>{/* //preloader */}
	</div>
	);
  }
}

export default App;
