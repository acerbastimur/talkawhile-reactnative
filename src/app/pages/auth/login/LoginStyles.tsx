import { StyleSheet } from 'react-native';
const LoginStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: '100%',
    height: '100%'
  },
  loginText: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    marginTop: 60,
    marginBottom: 40,
    fontFamily: "Exo-Bold"
  },
  inputLabel: {
    lineHeight: 14,
    color: "white",
    fontFamily: "Exo-Bold",
    fontSize: 18,
  },
  formItem: {
    marginRight: 30,
    marginTop: 30,
    borderColor: "#4C4C4C"
  },
  loginBtnContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 50
  }
  , loginBtn: {
    justifyContent: "center",
    backgroundColor: "#FA811B",
    width: "80%"
  },
  loginBtnText: {
    fontFamily: "Exo-Bold"
  },
  registerRoute: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 60
  },
  registerRouteText: {
    fontFamily: "Exo-Bold",
    fontSize: 16
  },
  registerRouteTextInner: {
    fontFamily: "Exo-Bold",
    fontSize: 20,
    color: "#8549BA"
  }
})

export default LoginStyles;