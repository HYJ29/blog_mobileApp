import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { View, Text, Alert, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

export default function Map() {
  const [isFetching, setIsFetching] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState({
    latitude: 37.78,
    longitude: -122.43
  });
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.78,
    longitude: -122.43
  });

  useEffect(() => {
    getUserLocationHandler();
  }, []);
  const mapRegion = {
    latitude: currentLocation.latitude,
    longitude: currentLocation.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  const veryfyPermission = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions",
        "You need a permission on locatioon to use it.",
        [{ text: Okay }]
      );
      return false;
    }
    return true;
  };

  const getUserLocationHandler = async () => {
    const hasPermission = await veryfyPermission();
    if (!hasPermission) {
      return;
    }
    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000
      });
      const { latitude, longitude } = location.coords;
      setCurrentLocation({
        latitude,
        longitude
      });
    } catch (e) {
      Alert.alert(
        "Could not fetch location!",
        "Please try again or pick a location on the map",
        [{ text: "Okay" }]
      );
    }
    setIsFetching(false);
  };

  return isFetching ? (
    <ActivityIndicator size="large" />
  ) : (
    <MapViewStyled region={mapRegion}>
      <Marker coordinate={currentLocation} />
    </MapViewStyled>
  );
}

const MapViewStyled = styled(MapView)`
  flex: 1;
`;
