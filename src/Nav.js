import React, { Component } from 'react';
import Close from 'material-ui/svg-icons/navigation/close';
import {RaisedButton, Card, Dialog, Subheader, TextField, Checkbox} from 'material-ui';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	openUpdateSubscription: false,
        	openEditAccount: false,
        	openPaymentDetails: false
        }
    }
	handleUpdateSubscriptionClose = () => {
		this.setState({
			openUpdateSubscription: false
		})
	}
	handleEditAccount = () => {
		this.setState({
			openEditAccount: false
		})
	}
	handlePaymentDetails = () => {
		this.setState({
			openPaymentDetails: false
		})
	}
	handleLogout = () => {
		localStorage.removeItem('outReachlyToken');
		this.props.history.push('/')
	}
    render() {
    	let token = localStorage.getItem('outReachlyToken');
    	let {openUpdateSubscription, openEditAccount, openPaymentDetails} = this.state;
        return (
          	<nav className="navigation_desktop">
				<ul>
					{token &&
					<li className=""><a href="javascript:void(0)" onClick={()=> this.props.history.push('/emails')} className="visible-lg visible-md">Emails</a></li>
					}
					<li className=""><a href="javascript:void(0)" className="visible-lg visible-md go_to_overview" onClick={()=> this.props.history.push('/faq')} >FAQ</a></li>
					<li className=""><a href="javascript:void(0)" onClick={()=> this.props.history.push('/about')} className="visible-lg visible-md">About</a></li>
					<li className=""><a href="javascript:void(0)" onClick={()=> this.props.history.push('/customers')} className="visible-lg visible-md">Customers</a></li>
					{token &&
					<li className=""><a href="javascript:void(0)" onClick={()=> this.props.history.push('/favorites')} className="visible-lg visible-md">Favorites</a></li>
					}
					{!token ?
					<li className="drop_down"><a href="javascript:void(0)" onClick={()=> this.props.history.push('/login')} className="visible-lg visible-md">Login</a></li>
				  	:
				  	<li className="drop_down"><a href="javascript:void(0)" className="visible-lg visible-md">Account <span data-icon="&#xe104;" ></span>
						<ul className="dropdown-menu dropdown-content">
					    	<li><a href="javascript:void(0)" onClick={()=> this.setState({openUpdateSubscription: true})} >Subscription</a></li>
					    	<li><a href="javascript:void(0)" onClick={()=> this.setState({openEditAccount: true})} >Account Details</a></li>
					    	<li><a href="javascript:void(0)" onClick={()=> this.setState({openPaymentDetails: true})} >Payment Details</a></li>
					    	<li><a href="/" onClick={this.handleLogout} >Sign Out</a></li>
					  	</ul> 
				  	</a></li>
					}	
					<Dialog
			          title={
			          	<div>
			          		Update your Subscription
			          		<Close onClick={this.handleUpdateSubscriptionClose} style={{cursor:'pointer', float:'right', marginTop: '5px', width: '20px', color: 'white'}} />
			          	</div>
			          }
			          // actions={actions}
			          modal={false}
			          titleStyle={{backgroundImage: '-webkit-linear-gradient(top left, #2196F3 0%, #311B92 100%)', color: 'white'}}
			          open={openUpdateSubscription}
			          contentStyle={{width: '80%', maxWidth: 'none'}}
			          bodyStyle={{ padding: '0px 24px 0px'}}
			          onRequestClose={this.handleUpdateSubscriptionClose}
			          autoScrollBodyContent={true}
			        >
						<div className="row" style={{marginRight: -24}} >
							<div className="col-md-8">
								<Subheader>YOU WILL BE CHARGED</Subheader>
								<div className="row">
									<div className="col-md-4">
										<Card>
											<div className="text-center">
												<h3>$ 189.0</h3><span>/MO</span>
											</div>
										</Card>
									</div>
									<div className="col-md-4">
										<Card>
											<div className="text-center">
												<h3>$ 497.0</h3><span>/MO</span>
											</div>
										</Card>
									</div>
									<div className="col-md-4">
										<Card>
											<div className="text-center">
												<h3>$ 1297.0</h3><span>/MO</span>
											</div>
										</Card>
									</div>
								</div>
								<p className="text-center" >Visit <strong>Pricing</strong> to choose the best pricing option for you</p>
								<TextField floatingLabelText="Code" value="laskjdlaskjdlksajlkdashlsdahkjhaskjhkjh" style={{width: '100%'}} />
								<TextField value="sonny@copybreak.io" floatingLabelText="Email" style={{width: '100%'}} />
								<TextField type="password" style={{width: '100%'}} hintText="Your current password" floatingLabelText="Confirm Changes" />
								<RaisedButton style={{justifyContent: 'center', alignItems: 'center',margin: '20px 0px 20px 0px'}} label="Update Subscription" primary={true} />
								<p className="text-center">By clicking the Update Subscription button, you agree to the Terms of Use. We will charge you the amount listed above. You can cancel anytime.</p>
							</div>
							<div className="col-md-4  current-subscription" style={{backgroundImage: '-webkit-linear-gradient(top left, #2196F3 0%, #311B92 100%)', minHeight: '100%'}} >
								<p>Current Subscription Plan</p>
								<h1>$113.0</h1>
								<p>monthly payment</p><br />
								<p>You have a <strong>100%</strong> discount</p>
								<p>You pay <strong>$0.0/mo</strong></p>
								<p>PlAN VALID UPTO</p>
								<p><strong>04/11/2018 15:28 UTC</strong></p>
								<br /><br />
								<a href="#" >Cancel Subscription</a>
							</div>
						</div>
					</Dialog>
					<Dialog
			          title={
			          	<div>
			          		Edit your account details
			          		<Close onClick={this.handleEditAccount} style={{cursor:'pointer', float:'right', marginTop: '5px', width: '20px', color: 'white'}} />
			          	</div>
			          }
			          // actions={actions}
			          modal={false}
			          titleStyle={{backgroundImage: '-webkit-linear-gradient(top left, #2196F3 0%, #311B92 100%)', color: 'white'}}
			          open={openEditAccount}
			          // open={true}
			          contentStyle={{width: '50%', maxWidth: 'none'}}
			          bodyStyle={{ padding: '0px 24px 0px'}}
			          onRequestClose={this.handleEditAccount}
			          autoScrollBodyContent={true}
			        >
			        	<h6>Your Profile</h6>
						<TextField floatingLabelText="First Name" value="Sonny" style={{width: '100%'}} />
						<TextField floatingLabelText="Last Name" value="Tee" style={{width: '100%'}} />
						<TextField floatingLabelText="Email" value="Sonny@copybreak.io" style={{width: '100%'}} />
						<Checkbox
				          label="Recieve push notifications"
				        />
				        <Checkbox
				          label="Recieve pitch status notifications"
				        />
				        <h6>250 email lookups left on your basic account</h6>
				        <h6>You have 250 email sends left</h6>
				        <TextField floatingLabelText="Change your password" type="password" style={{width: '100%'}} value="lksjfalkjflkjdkljn" />
				        <TextField floatingLabelText="Input your current password" type="password" style={{width: '100%'}} />
				        <RaisedButton style={{justifyContent: 'center', alignItems: 'center',margin: '20px 0px 20px 0px'}} label="Update Account" primary={true} />

			        </Dialog>
			        <Dialog
			          title={
			          	<div>
			          		Payment Details
			          		<Close onClick={this.handlePaymentDetails} style={{cursor:'pointer', float:'right', marginTop: '5px', width: '20px', color: 'white'}} />
			          	</div>
			          }
			          // actions={actions}
			          modal={false}
			          titleStyle={{backgroundImage: '-webkit-linear-gradient(top left, #2196F3 0%, #311B92 100%)', color: 'white'}}
			          open={openPaymentDetails}
			          // open={true}
			          contentStyle={{width: '50%', maxWidth: 'none'}}
			          bodyStyle={{ padding: '0px 24px 0px'}}
			          onRequestClose={this.handlePaymentDetails}
			          autoScrollBodyContent={true}
			        >
						<div className="panel panel-default credit-card-box" style={{margin:20}} >
		                    <div className="panel-heading display-table" >
		                        <div className="row display-tr" >
		                            <h3 className="panel-title display-td" >Payment Details</h3>
		                            <div className="display-td" >                            
		                                <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"/>
		                            </div>
		                        </div>                    
		                    </div>
		                    <div className="panel-body">
		                        <form role="form" id="payment-form" method="POST" action="javascript:void(0);">
		                            <div className="row">
		                                <div className="col-xs-12">
		                                    <div className="form-group">
		                                        <label for="cardNumber">CARD NUMBER</label>
		                                        <div className="input-group">
		                                            <input 
		                                                type="tel"
		                                                className="form-control"
		                                                name="cardNumber"
		                                                placeholder="Valid Card Number"
		                                                autocomplete="cc-number"
		                                                required autofocus 
		                                            />
		                                            <span className="input-group-addon"><i className="fa fa-credit-card"></i></span>
		                                        </div>
		                                    </div>                            
		                                </div>
		                            </div>
		                            <div className="row">
		                                <div className="col-xs-7 col-md-7">
		                                    <div className="form-group">
		                                        <label for="cardExpiry"><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label>
		                                        <input 
		                                            type="tel" 
		                                            className="form-control" 
		                                            name="cardExpiry"
		                                            placeholder="MM / YY"
		                                            autocomplete="cc-exp"
		                                            required 
		                                        />
		                                    </div>
		                                </div>
		                                <div className="col-xs-5 col-md-5 pull-right">
		                                    <div className="form-group">
		                                        <label for="cardCVC">CV CODE</label>
		                                        <input 
		                                            type="tel" 
		                                            className="form-control"
		                                            name="cardCVC"
		                                            placeholder="CVC"
		                                            autocomplete="cc-csc"
		                                            required
		                                        />
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="row">
		                                <div className="col-xs-5 col-md-5">
		                                    <div className="form-group">
		                                        <label for="cardNumber">Your Current Password</label>
		                                        <div className="input-group" style={{border: '1px solid #ccc', borderRadius: 6}} >
		                                            <input 
		                                                type="password"
		                                                className="form-control"
		                                                name="cardNumber"
		                                                placeholder="Password"
		                                                autocomplete="cc-number"
		                                                required autofocus 
		                                            />
		                                            
		                                        </div>
		                                    </div>                            
		                                </div>
		                            </div>
		                            <div className="row">
		                                <div className="col-xs-12">
		                                    <button className="subscribe btn btn-success btn-lg btn-block" type="button">Start Subscription</button>
		                                </div>
		                            </div>
		                            <div className="row">
		                                <div className="col-xs-12">
		                                    <p className="payment-errors"></p>
		                                </div>
		                            </div>
		                        </form>
		                    </div>
		                </div>
			        </Dialog>			
					<li><div className="mobile_nav_open_button hidden-lg hidden-md"><a href="" id="showRight_1" className="active"><div className="button_icon close_icon"></div></a></div></li>
				</ul>
			</nav>
        );
    }
}

export default Nav;
