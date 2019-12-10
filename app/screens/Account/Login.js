import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";

export default function Login(props) {
  const { navigation } = props;

  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/user-guest.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <Text>Form</Text>
        <CreateAccount navigation={navigation} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.viewContainer}>
        <Text>Login Facebook</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20
  },
  viewContainer: {
    marginLeft: 40,
    marginRight: 40
  },
  divider: {
    backgroundColor: "#c93c20",
    margin: 40
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  btnRegister: {
    color: "#c93c20",
    fontWeight: "bold"
  }
});

function CreateAccount(props) {
  const { navigation } = props;

  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes una cuenta?
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("Register")}
      >
        Regístrate
      </Text>
    </Text>
  );
}
