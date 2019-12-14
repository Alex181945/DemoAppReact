import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import Loading from "../Loading";
import { withNavigation } from "react-navigation";

import { validateEmail } from "../../utils/Validation";
import * as firebase from "firebase";

function RegisterForm(props) {
  const { toastRef, navigation } = props;
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword2, setHidePassword2] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  const register = async () => {
    let flag = false;
    setIsVisibleLoading(true);
    const resultEmailValidation = validateEmail(email);

    if (!email || !password || !repeatPassword) {
      toastRef.current.show("Todos los campos obligatorios");
      flag = true;
    } else {
      if (!validateEmail(email)) {
        toastRef.current.show("Email incorrecto");
        flag = true;
      }

      if (password !== repeatPassword) {
        toastRef.current.show("Las contraseñas no son iguales");
        flag = true;
      }

      if (!flag) {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            navigation.navigate("Account");
            //toastRef.current.show("Usuario creado exitosamente");
          })
          .catch(() => {
            toastRef.current.show("Error al momento de crear al usuario");
          });
      }
    }

    setIsVisibleLoading(false);
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.inputForm}
        onChange={e => setEmail(e.nativeEvent.text)}
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
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        onChange={e => setPassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRigth}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />

      <Input
        placeholder="Confirmar Contraseña"
        password={true}
        secureTextEntry={hidePassword2}
        containerStyle={styles.inputForm}
        onChange={e => setRepeatPassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword2 ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRigth}
            onPress={() => setHidePassword2(!hidePassword2)}
          />
        }
      />

      <Button
        title="Registrarse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={register}
      />

      <Loading text="Creando cuenta" isVisible={isVisibleLoading} />
    </View>
  );
}

export default withNavigation(RegisterForm);

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
