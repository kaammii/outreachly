import React, {Component} from 'react';
import homeBackground from './images/home_background_01.jpg';
import logoLight from './images/logo_light.png';
import SearchBar from 'material-ui-search-bar';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {RaisedButton, IconMenu, MenuItem, IconButton, Card, CardHeader, CardActions, FlatButton , CardText } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Results from './influencers.json';
import Badge from 'material-ui/Badge';
import Person from 'material-ui/svg-icons/social/person';
import Typist from 'react-typist';

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
  };
  
export default class Searched extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchedTerm: '',
            data: [{
                title: 'Perry Marshall',
                img: 'http://www.material-ui.com/images/ok-128.jpg',
                website: 'entrepreneur.com',
                links: [
                    {
                        description: 'Help with setting up a test for hiring a junior marketing content writer : marketing',
                        link: 'www.reddit.com'
                    },
                    {
                        description: 'Help with setting up a test for hiring a junior marketing content writer : marketing',
                        link: 'www.reddit.com'
                    },    
                ]
            },
            {
                title: 'Perry Marshall',
                img: 'http://www.material-ui.com/images/ok-128.jpg',
                website: 'entrepreneur.com',
                links: [
                    {
                        description: 'Help with setting up a test for hiring a junior marketing content writer : marketing',
                        link: 'www.reddit.com'
                    },
                    {
                        description: 'Help with setting up a test for hiring a junior marketing content writer : marketing',
                        link: 'www.reddit.com'
                    },    
                ]
            },
            {
                title: 'Perry Marshall',
                img: 'http://www.material-ui.com/images/ok-128.jpg',
                website: 'entrepreneur.com',
                links: [
                    {
                        description: 'Help with setting up a test for hiring a junior marketing content writer : marketing',
                        link: 'www.reddit.com'
                    },
                    {
                        description: 'Help with setting up a test for hiring a junior marketing content writer : marketing',
                        link: 'www.reddit.com'
                    },   
                ]
            },
            {
                title: 'Perry Marshall',
                img: 'http://www.material-ui.com/images/ok-128.jpg',
                website: 'entrepreneur.com',
                links: [
                    {
                        description: 'Help with setting up a test for hiring a junior marketing content writer : marketing',
                        link: 'www.reddit.com'
                    },
                    {
                        description: 'Help with setting up a test for hiring a junior marketing content writer : marketing',
                        link: 'www.reddit.com'
                    },  
                ]
            },
            {
                title: 'Perry Marshall',
                img: 'http://www.material-ui.com/images/ok-128.jpg',
                website: 'entrepreneur.com',
                links: [
                    {
                        description: 'Help with setting up a test for hiring a junior marketing content writer : marketing',
                        link: 'www.reddit.com'
                    },
                    {
                        description: 'Help with setting up a test for hiring a junior marketing content writer : marketing',
                        link: 'www.reddit.com'
                    },    
                ]
            },
            
        ]
        }
    }
    componentWillMount(){
        let results = Results.results;
        // console.log(Results.results);
        let searchedTerm = this.props.location.search.split('=')[1].split('%20')+"";
        this.setState({
            searchedTerm: searchedTerm,
            results: results
        })
    }
    render() {
        let { results } = this.state;
        console.log(results);
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
                                    <Typist>
                                        Attract Infuencers
                                        <Typist.Backspace count={18} delay={1500} />
                                        Build Relationships
                                        <Typist.Backspace count={19} delay={1500} />
                                        Attract Infuencers Build Relationships 
                                    </Typist>
                                </h2>
                                
                                {/* CTA Buttons*/}
                                <div className="cta_button_area">
                                    {/* <div><RaisedButton primary={true} label={'Sign up'} /></div>
                                    <a><small>Not sure? Learn more.</small></a> */}
                                    <SearchBar 
                                        value={this.state.searchedTerm}
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
                        
                    <div className="mc-image " title="" style={{backgroundImage: `url(${homeBackground})`, height: 420, width: 1366}} data-href=""></div></div>
                    {/* //Single Image Background */}
                </section>{/* //Homepage */}
		
		
                {/* Menu bar */}
                <header id="menu_bar" className="menu_bar menu_bar-hide">
                    <div className="container">
                        <a href="" className="go_to_home logo_dark"><img src={require('./images/logo_light.png')} alt="logo" className="logo"/></a>
                        <a href="" className="go_to_home logo_light"><img src={require('./images/logo_light.png')} alt="logo" className="logo"/></a>
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
                <section className="subsection" style={{paddingTop: 0, background: '#EEEEEE'}}>
                    <div>
                    <Tabs style={{color: 'white'}} >
                        <Tab   label="Journalists" >
                            <div className="cards">
                                <List>
                                    {results.map((item, k)=>
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
                                            <Badge
                                              badgeStyle={{color: 'white', background: 'rgb(0, 188, 212)', top: 10, right: 10}}
                                              badgeContent={item.num_following}
                                              primary={true}
                                            >
                                                <IconButton tooltip="Followers">
                                                  <Person />
                                                </IconButton>
                                            </Badge>
                                            <IconButton tooltip="Star" touch={true} tooltipPosition="bottom-right">
                                                <ActionGrade />
                                            </IconButton>
                                            <FlatButton primary={true} label="Send Email" onClick={()=>this.props.history.push('/newpitch')} />
                                        </CardActions>
                                    </Card>
                                    )}
                                </List>
                            </div>
                            </Tab>
                            <Tab label="Press Opportunities">
                                {this.state.data.map((item, k)=>
                                <div style={{width: '70%', margin: '30px auto 20px'}} key={k} >
                                    <ListItem
                                        leftAvatar={<Avatar src={item.img} />}
                                        style={{marginTop: 20}}
                                        primaryText={item.title}
                                        rightIconButton={ 
                                            <div style={{ display: 'flex', justifyContent: 'space-between'}} >
                                                {/* <RaisedButton label="*" /> */}
                                                <RaisedButton label="Send Email" onClick={()=>this.props.history.push('/newpitch')} primary={true} />
                                            </div>
                                        }
                                        secondaryText={item.links.map((link, key)=>
                                            <p key={key} >
                                                <span style={{color: 'black'}}>{link.link}</span> --
                                                I&apos;{link.description}
                                            </p>
                                        )}
                                        secondaryTextLines={2}
                                        />
                                        <Divider inset={true} />
                                </div>
                                )}
                            </Tab>
                            <Tab
                            // style={{color: 'black'}}
                            label="Quora & Reddut results"
                            data-route="/home"
                            
                            >
                            <div>
                                <h2 style={styles.headline}>Tab Three</h2>
                                <p>
                                This is a third example tab.
                                </p>
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