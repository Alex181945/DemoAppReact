import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

export default function RegisterForm() {
  const register = () => {
    console.log("Registrado");
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.inputForm}
        onChange={() => console.log("Registro")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRigth}
          />
        }
      />

      <Input
        placeholder="Contraseña"
        password={true}
        secureTextEntry={true}
        containerStyle={styles.inputForm}
        onChange={() => console.log("Contraseña")}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.iconRigth}
          />
        }
      />

      <Input
        placeholder="Confirmar Contraseña"
        password={true}
        secureTextEntry={true}
        containerStyle={styles.inputForm}
        onChange={() => console.log("Contraseña")}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.iconRigth}
          />
        }
      />

      <Button
        title="Registrarse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={register}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  inputForm: {
    width: "100%",
    marginTop: 20
  },
  iconRigth: {
    color: "#c93c20"
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%"
  },
  btnRegister: {
    backgroundColor: "#c93c20"
  }
});
