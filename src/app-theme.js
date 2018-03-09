import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

//Custom Theme to change UI at application level
const CustomTheme = getMuiTheme({
  palette: {
    // Need to change based on requirments
    textColor: Colors.black,
    primary2Color: '#1565c0',
    primary1Color: '#1565c0',
    accent1Color: Colors.white,
    pickerHeaderColor: Colors.darkBlack,
  },
  appBar: {
    height: 57,
    color: Colors.white
  },
  raisedButton: {
    primaryColor: '#2196f3',
    primaryTextColor: Colors.white
  },
  textField: {
    focusColor: '#2196f3',
    textColor: Colors.black
  },
  stepper: 
  {
    iconColor:"rgba(33, 150, 243, 0.85)"
  }
});

function AppTheme(){
  return CustomTheme;
}

export default AppTheme();