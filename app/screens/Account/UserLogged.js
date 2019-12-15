import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";
import { withNavigation } from "react-navigation";

function UserLogged(props) {
  const { navigation } = props;

  return (
    <View>
      <Text>Usuario con sesión</Text>
      <Button
        title="Mapa Usuario"
        onPress={() => navigation.navigate("MapUser")}
      />
      <Button
        title="Mapa Repartidor"
        onPress={() => navigation.navigate("MapDeliveryMan")}
      />
      <Button title="Cerrar Sesión" onPress={() => firebase.auth().signOut()} />
    </View>
  );
}

export default withNavigation(UserLogged);
