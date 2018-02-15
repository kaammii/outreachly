import React, { Component } from 'react';
import logo from './logo.svg';
import './main.css';

class App extends Component {
  render() {
    return (
      <div>
        
        <header id="hero" className="hero overlay">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="fa fa-bars"></span>
                        </button>
                        <a href="/index.html" className="brand">
                            <img src="assets/images/logo.png" alt="Knowledge" />
                        </a>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="archive.html">
                                    Archive
                                </a>
                            </li>
                            <li>
                                <a href="browse.html">
                                    Browse
                                </a>
                            </li>
                            <li>
                                <a href="login.html">
                                    Login
                                </a>
                            </li>
                            <li>
                                 <a href="register.html" className="btn btn-success nav-btn">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="masthead text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h1>Knowledgebase</h1>
                            <p className="lead text-muted">Sed eget orci eleifend enim mattis suscipit. Suspendisse potenti non ipsum.</p>
                            <form>
                                <input type="text" className="search-field" placeholder="Search Something ... "/>
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                            <a href="#" className="btn btn-hero"><span className="icon-git"></span> Github Project<span className="icon-right"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section id="features" className="features bgc-light-gray">
            <div className="container ">
                <div className="row features-section">
                    <div className="text-center col-sm-4">
                        <div className="media-body">
                            <span className="icon"><img src="assets/images/icon/icon1.png" alt=""/></span>
                            <h3>Help & Documentation</h3>
                            <p className="text-muted">Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress</p>
                        </div>
                    </div>
                    <div className="text-center col-sm-4">
                        <div className="media-body">
                            <span className="icon"><img src="assets/images/icon/icon2.png" alt=""/></span>
                            <h3>Developer Resources</h3>
                            <p className="text-muted">An incredibly codex has been created for you to use as reference when developing extensions</p>
                        </div>
                    </div>
                    <div className="text-center col-sm-4">
                        <div className="media-body">
                            <span className="icon"><img src="assets/images/icon/icon3.png" alt=""/></span>
                            <h3>Community Support</h3>
                            <p>The source code is available on GitHub, you can grab it and twist it to your heart’s content</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="topics">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <header>
                            <h2><span className="icon-pages"></span>Explore Topics</h2>
                            <p>We did our best to cover all topics related to this product. Each section have number which represent number of topic in each category.</p>
                        </header>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="topics-list">
                                    <h3><a href="#"><span className="badge">19</span>Introduction</a></h3>
                                    <ul>
                                        <li><a href="single.html"> How to use this documentation? </a></li>
                                        <li><a href="single.html"> How to find topics? </a></li>
                                        <li><a href="single.html"> What is included and why? </a></li>
                                        <li><a href="single.html"> Basic knowledge requirments. </a></li>
                                        <li><a href="single.html"> Getting Started & What is next. </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="topics-list">
                                    <h3><a href="#"><span className="badge">7</span>Intallation & Activation</a></h3>
                                    <ul>
                                        <li><a href="#"> How to use this documentation? </a></li>
                                        <li><a href="#"> How to find topics? </a></li>
                                        <li><a href="#"> What is included and why? </a></li>
                                        <li><a href="#"> Basic knowledge requirments. </a></li>
                                        <li><a href="#"> Getting Started & What is next. </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="topics-list">
                                    <h3><a href="#"><span className="badge">5</span>Import & Export</a></h3>
                                    <ul>
                                        <li><a href="#"> How to use this documentation? </a></li>
                                        <li><a href="#"> How to find topics? </a></li>
                                        <li><a href="#"> What is included and why? </a></li>
                                        <li><a href="#"> Basic knowledge requirments. </a></li>
                                        <li><a href="#"> Getting Started & What is next. </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="topics-list">
                                    <h3><a href="#"><span className="badge">17</span>Settings & Configuration</a></h3>
                                    <ul>
                                        <li><a href="#"> How to use this documentation? </a></li>
                                        <li><a href="#"> How to find topics? </a></li>
                                        <li><a href="#"> What is included and why? </a></li>
                                        <li><a href="#"> Basic knowledge requirments. </a></li>
                                        <li><a href="#"> Getting Started & What is next. </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar">
                            <div className="widget widget-support-forum">
                                <span className="icon icon-forum"></span>
                                    <h4>Looking for help? Join Community</h4>

                                    <p>Couldn’t find what your are looking for ? Why not join out support forums and let us help you.</p>


                                <a href="#" className="btn btn-success">Support Forum</a>
                            </div>


                            <div className="pt-50">
                                <div className="topics-list">
                                    <h3><a href="#"><span className="badge">10</span>API Guide Lines</a></h3>
                                    <ul>
                                        <li><a href="#"> How to use this documentation? </a></li>
                                        <li><a href="#"> How to find topics? </a></li>
                                        <li><a href="#"> What is included and why? </a></li>
                                        <li><a href="#"> Basic knowledge requirments. </a></li>
                                        <li><a href="#"> Getting Started & What is next. </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                     </div>
                    <div className="topics-btn text-center">
                        <a className="btn btn-default" href="archive.html"><span className="icon-adn"></span> Explore All Topics</a>
                    </div>
                </div>

            </div>
        </section>

        <section className="support-section text-white section ">
            <div className="container">
                <div className="row">
                    <div className="divider"><i className="fa fa-support"></i></div>
                    <header className="text-center">
                        <h2 className="section-title">Get Support From Real People</h2>
                        <p className="section-subtitle">When you are stuck in something don’t waste your time just let us know we are here to help you</p>
                    </header>
                        <ul className="members">
                            <li><img src="assets/images/u1.png" alt=""/></li>
                            <li><img src="assets/images/u2.png" alt=""/></li>
                            <li><img src="assets/images/u3.png" alt=""/></li>
                            <li><img src="assets/images/u4.png" alt=""/></li>
                            <li><img src="assets/images/u5.png" alt=""/></li>
                        </ul>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row call-to-action">

                        <div className="col-lg-1">
                             <span className="icon icon-envelope"></span>
                        </div>
                        <div className="col-lg-9">
                        <h3>Contact Us</h3>
                        <p>If you have question which is beyond this knowledgebase Kindly contact us</p>
                        </div>
                    <div className="col-lg-2">
                        <a href="#" className="btn btn-success btn-action">Write to Us Now</a>
                        </div>

                </div>
            </div>
        </section>

        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-3">
                        <a href="#" className="brand">
                            <img src="assets/images/logo2.png" alt="Knowledge" />
                            <span className="circle"></span>
                        </a>
                    </div>
                    <div className="col-lg-7 col-md-5 col-sm-9">
                        <ul className="footer-links">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="login.html">Login</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="copyright">
                            <p>© 2016 knowledge Copyrights</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

      </div>
    );
  }
}

export default App;
