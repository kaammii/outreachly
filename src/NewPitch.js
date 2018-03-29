import React, { Component } from 'react';
import homeBackground from './images/home_background_01.jpg';
import {RaisedButton, AppBar, Card, CardHeader, CardText, FlatButton, TextField} from 'material-ui';
import Subheader from 'material-ui/Subheader';
import Forward from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Backward from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import CKEditor from "react-ckeditor-component";
import Nav from './Nav';
class NewPitch extends Component {
    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.afterPaste = this.afterPaste.bind(this);
        this.state = {
            content: [
				"<p>Hey Will,<br /><br />I was just reading your article The Biggest Mistake Digital Marketers Ever Made: Claiming to Measure Everything and thought insert a controversial point about an article and share your opinion, pique their curiosity a bit, ask them a question.<br /><br />BTW, I work at a company where we insert your one sentence pitch. We were recently featured/talked about in insert a recent accomplishment. We have some news coming out feel free to insert a few words about the news, would love to share more info with you. Let me know if you&#39;d be interested to hear more.<br />Thanks,<br />",
				`Hey Will, <br /> <br />

Respect your reporting a great deal, love the stories you put out. Crazy to think that there are more people using mobile vs. desktop now. Saw that you have a few spelling mistakes in your recent article, wanted to follow up:
<br /> <br />
"The project, which was was announced"
<br /> <br />
"The content will be uses for The New York Times”
<br /> <br />

Looking forward to your next stories. Which article are you working on next?
<br /> <br />
Thanks,
<br /> <br />
Sonny Tee
sonny@copybreak.io`,
`Hey Will,
<br /> <br />
Respect your writing a bunch, I'm an old acquaintance of insert name of publication for which this person writes for, love your blog and tend to check it every other day. Saw something you'd dig, wanted to pass it on... in relation to your post on webcams from Feb:
http://gizmodo.com/5888244/a-gumby+like-webcam-that-can-be-any-shape-you-need
<br /> <br />
I saw this little hacking guide/video on how to "actually look good on webcam" which was just published, figured you'd dig, wanted to shoot this over:
http://wistia.com/blog/snazzy-on-webcam/
<br /> <br />
Curious to hear your thoughts about it, I thought they bring up pretty good points, no?
<br /> <br />
Thanks,
<br /> <br />
Sonny Tee
sonny@copybreak.io`
            ],
        template: 0,
        subject: 'Re: The Biggest Mistake Digital Marketers Ever Made: Claiming to Measure Everything'
        }
    }

    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }
    
    onChange(evt){
      console.log("onChange fired with event info: ", evt);
      var newContent = evt.editor.getData();
      this.setState({
        content: newContent
      })
    }
    
    onBlur(evt){
      console.log("onBlur event called with event info: ", evt);
    }
    
    afterPaste(evt){
      console.log("afterPaste event called with event info: ", evt);
    }
	
	handleForward = () => {
		// alert('asd')
		let { template, content } = this.state;
		let len = template-1;
		if (template+1!=content.length) {
			template +=1;
			this.setState({ template });	
		}
	}
	
	handleBackward = () => {
		let { template, content } = this.state;
		let len = template-1;
		if (!template<=0) {
			template -=1;
			this.setState({template});
		}
	}
    render() {
        let {content, template} = this.state;
        let contentShow = content[template];
        return (
            <div>
            	<section className="hero_fullscreen background_slider gradient_overlay menu_bar-waypoint" data-animate-down="menu_bar-hide" data-animate-up="menu_bar-hide" style={{height: 350}}>
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
                                <h3 className="slogan">
                                    Pick an email template. Write the pitch. <br /> Click send below to send the email pitch.
                                </h3>
                                <p>(250 email lookups left for current month. Upgrade Now )</p>       
                            </div>
                        </div>          
                    </div>  
                    {/* //Main content */}

                    {/* Single Image Background */}
                    <div id="maximage_single" className="mc-cycle" style={{opacity: 1, height: 588, width: 1366}}>
                        
                    <div className="mc-image " title="" style={{backgroundImage: `url(${homeBackground})`, height: 420, width: 1366}} data-href=""></div></div>
                    {/* //Single Image Background */}
                </section>{/* //Homepage */}
                <section className="subsection" style={{paddingTop: 1, background: '#EEEEEE'}}>
					<div className="row">
						<div className="col-md-2"></div>
						<div className="col-md-8">
							<Card style={{marginTop: 20}}>
						        <CardHeader
						          title="Will Critchlow"
						          subtitle="Influencer"
						          avatar="https://pbs.twimg.com/profile_images/529501403/will-green-sml.jpg"
						          // actAsExpander={true}
						          // showExpandableButton={true}
						        />
						    </Card>
						    <Card style={{marginTop: 20}}>
								<div className="row">
									<div className="col-md-9">
										<CardHeader title="The Biggest Mistake Digital Marketers Ever Made: Claiming to Measure Everything"/>
									</div>
									<div className="col-md-3" style={{marginTop: 10, display: 'flex', justifyContent: 'center'}} >
										<FlatButton primary={true} label="Original article" />
									</div>
								</div>
						    </Card>
						    <Card style={{marginTop: 20}}>
								<div className="row">
									<div className="col-md-2">
										<Subheader>Subject: </Subheader>
									</div>
									<div className="col-md-10">
										<TextField style={{width: '90%'}} onChange={(e)=> this.setState({subject: e.target.value})} value={this.state.subject} />
									</div>
								</div>
						    </Card>
						    <Card style={{marginTop: 20}}>
						    	<AppBar title="Mail Body" style={{backgroundColor: '#EEEEEE'}} titleStyle={{color: 'black', fontSize: 18}} showMenuIconButton={false} 
						    	iconElementRight={
						    		<div className="row">
						    			<div className="col-md-8">
											<p>Change template ({this.state.template+1})</p>
						    			</div>
						    			<div className="col-md-2">
											<Backward style={ this.state.template===0 ? {color: '#ddd'} : {cursor: 'pointer'} } onClick={this.handleBackward} />
						    			</div>
						    			<div className="col-md-2">
											<Forward style={ this.state.template===2 ? {color: '#ddd'} : {cursor: 'pointer'} } onClick={this.handleForward} />
						    			</div>
						    		</div>
						    	} />
						    </Card>
						    <Card style={{height: 300}} >
								{template===0 &&
									<CKEditor 
							           activeClass="p10" 
							           content={content[template]} 
							           events={{
						                "blur": this.onBlur,
						                "afterPaste": this.afterPaste,
						                "change": this.onChange
						            }}
						        	/>
								}
								{template===1 &&
									<CKEditor 
							           activeClass="p10" 
							           content={content[template]}
							           events={{
						                "blur": this.onBlur,
						                "afterPaste": this.afterPaste,
						                "change": this.onChange
						            }}
						        	/>
								}
								{template===2 &&
									<CKEditor 
							           activeClass="p10" 
							           content={content[template]}
							           events={{
						                "blur": this.onBlur,
						                "afterPaste": this.afterPaste,
						                "change": this.onChange
						            }}
						        	/>
								}
						    </Card>
						    <div className="row" style={{marginTop: 20}}>
						    	<div className="col-md-7 col-md-12" style={{ display: 'flex', justifyContent: 'space-between'}} >
						    		<RaisedButton primary={true} label="Send Email Pitch" />
							    	<RaisedButton primary={true} label="Send Test Email" />
							    	<RaisedButton label="Email Pitch Tips" />
							    </div>
						    </div>
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

export default NewPitch;
