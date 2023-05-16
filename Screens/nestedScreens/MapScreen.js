import React from "react";
import { View,  StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';

export const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={{flex: 1}} initialRegion={{
                latitude: 45.6486,
                longitude: 25.6061,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
                <Marker coordinate={{latitude: 45.6486, longitude: 25.6061}}/>
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
});