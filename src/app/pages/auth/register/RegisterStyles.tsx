import { StyleSheet } from 'react-native';
const RegisterStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: '100%',
    height: '100%'
  },
  registerText: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Exo-Bold",
    marginTop: 60,
    marginBottom: 40
  },
  inputLabel: {
    lineHeight: 14,
    color: "white",
    fontFamily: "Exo-Bold",
    fontSize: 18,
  },
  formItem: {
    marginRight: 30,
    marginTop: 20,
    borderColor: "#4C4C4C"

  },
  registerBtnContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 50
  }
  , registerBtn: {
    justifyContent: "center",
    backgroundColor: "#1CB0F6",
    width: "80%"
  },
  registerBtnText: {
    fontFamily: "Exo-Bold"
  },
  loginRoute: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30
  },
  loginRouteText: {
    fontFamily: "Exo-Bold",
    fontSize: 18
  },
  loginRouteTextInner: {
    fontFamily: "Exo-Bold",
    fontSize: 20,
    color: "#7AC70C"
  }
})

export default RegisterStyles;