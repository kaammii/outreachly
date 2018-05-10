import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';

const styles = {
      loginContainer: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '10%',
        left: 0,
        right: 0,
        margin: 'auto'
      },
      paper: {
        padding: 20,
        overflow: 'auto'
      },
      buttonsDiv: {
        textAlign: 'center',
        padding: 10
      },
      flatButton: {
        color: grey500
      },
      checkRemember: {
        style: {
          float: 'left',
          maxWidth: 180,
          paddingTop: 5
        },
        labelStyle: {
          color: grey500
        },
        iconStyle: {
          color: grey500,
          borderColor: grey500,
          fill: grey500
        }
      },
      loginBtn: {
        float: 'right'
      },
      btn: {
        background: '#4f81e9',
        color: white,
        padding: 7,
        borderRadius: 2,
        margin: 2,
        fontSize: 13
      },
      btnFacebook: {
        background: '#4f81e9'
      },
      btnGoogle: {
        background: '#e14441'
      },
      btnSpan: {
        marginLeft: 5
      },
    };

export default class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }

  handleSubmit = () => {
    // e.preventDefault();
    let { email, password, firstName, lastName } = this.state;
    let signUp = { email: email, password: password, first_name: firstName, last_name: lastName };
    fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      }),
    }).then((res)=> {
      if (res.status===200) {
        this.props.history.push('/login');
      }
    });
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.authObj) {
      // alert('aksjdlkj')
    }
    console.log(nextProps)
  }

  render() {
    
    let { firstName, lastName, email, password } = this.state;
    return (
        <div style={{background: '#eee'}} >
          <div style={styles.loginContainer}>

            <Paper style={styles.paper}>

              <form>
                <TextField
                  floatingLabelText="First Name"
                  fullWidth={true}
                  onChange={(e)=> this.setState({firstName: e.target.value})}
                />
                <TextField
                  floatingLabelText="Last Name"
                  fullWidth={true}
                  onChange={(e)=> this.setState({lastName: e.target.value})}
                />
                <TextField
                  floatingLabelText="Email"
                  fullWidth={true}
                  onChange={(e)=> this.setState({email: e.target.value})}
                />
                <TextField
                  floatingLabelText="Password"
                  fullWidth={true}
                  type="password"
                  onChange={(e)=> this.setState({password: e.target.value})}
                />
                
                <div>
                  {/*
                  <Checkbox
                    label="Remember me"
                    style={styles.checkRemember.style}
                    labelStyle={styles.checkRemember.labelStyle}
                    iconStyle={styles.checkRemember.iconStyle}
                  />
                  */}
                    <RaisedButton label="Sign Up"
                                  onClick={this.handleSubmit}
                                  primary={true}
                                  style={styles.loginBtn}/>
                  
                </div>
              </form>
            </Paper>

            <div style={styles.buttonsDiv}>
              <FlatButton
                label="or Click here to Sign in"
                onClick={()=> this.props.history.push('/login')}
                style={styles.flatButton}
                icon={<PersonAdd />}
              />

              
            </div>
            {/*
            <div style={styles.buttonsDiv}>
              <Link to="/" style={{...styles.btn, ...styles.btnFacebook}}>
                <i className="fa fa-facebook fa-lg"/>
                <span style={styles.btnSpan}>Log in with Facebook</span>
              </Link>
              <Link to="/" style={{...styles.btn, ...styles.btnGoogle}}>
                <i className="fa fa-google-plus fa-lg"/>
                <span style={styles.btnSpan}>Log in with Google</span>
              </Link>
            </div>
            */}
          </div>
        </div>
    );
  }
};