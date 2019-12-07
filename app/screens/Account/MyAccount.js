import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { View, Text } from "react-native";

export default function MyAccount() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    return (
      <View>
        <Text>Cargando</Text>
      </View>
    );
  }

  if (login) {
    return (
      <View>
        <Text>Sesión Iniciada</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Sesión No Iniciada</Text>
    </View>
  );
}
