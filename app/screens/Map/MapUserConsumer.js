import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import MapView from "react-native-maps";
import * as Permissions from "expo-permissions";
import Toast from "react-native-easy-toast";
import * as Location from "expo-location";

export default function MapUserConsumer() {
  const [locationConsumer, setLocationConsumer] = useState(null);
  const toastRef = useRef();
  return (
    <View>
      <Map setLocationConsumer={setLocationConsumer} toastRef={toastRef} />
      <Toast ref={toastRef} position="center" opacity={0.5} />
    </View>
  );
}

function Map(props) {
  const { setLocationConsumer, toastRef } = props;
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await Permissions.askAsync(Permissions.LOCATION);
      const statusPermissions = result.permissions.location.status;

      if (statusPermissions !== "granted") {
        toastRef.current.show(
          "Tienes que aceptar los permisos de localización"
        );
      } else {
        const loc = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        });
      }
    })();
  }, []);

  return (
    <View>
      {location && (
        <MapView
          style={styles.mapStyle}
          initialRegion={location}
          showsUserLocation={true}
          onRegionChange={region => setLocation(region)}
        >
          <MapView.Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude
            }}
            draggable
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: "100%",
    height: "100%"
  }
});
