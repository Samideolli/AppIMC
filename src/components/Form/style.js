import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
    width:"100%",
    height:"100%",
    bottom:0,
    backgroundColor:"white",
    alignItems: 'center',
    marginTop:30,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  },
  form: {
    width:"100%",
    height:"auto",
    marginTop:30,
    padding:10,
  },
  formLabel:{
    color: "black",
    fontSize:18,
    paddingLeft:20,
  },
  formInput:{
    width:"90%",
    borderRadius:50,
    backgroundColor:"#f6f6f6",
    height: 40,
    margin:12,
    paddingLeft:10,
  },
  formButton:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "black",
    borderRadius:50,
    width:"50%",
    height:"15%",
    marginLeft:90,
    marginTop:10
  },
  formText:{
    color:"white",
    
  }, 
  errormessage:{
    fontSize:15,
    fontWeight:"bold",
    paddingLeft:20,
    color:"red"
  }
});

export default styles;
