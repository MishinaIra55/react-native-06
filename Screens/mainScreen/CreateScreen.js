import React, {useEffect, useState} from "react";
import {View, StyleSheet, Image, Text, Dimensions, Keyboard, TextInput, KeyboardAvoidingView} from "react-native";
import { Camera } from 'expo-camera';
import {TouchableOpacity} from "react-native-gesture-handler";
import Photo from "../../assets/images/camera.svg";
import * as Location from 'expo-location';
import {MaterialCommunityIcons} from "@expo/vector-icons";


export const CreateScreen = ({navigation}) => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState('');
    const [isKeyBoardActive, setIsBoardActive] = useState(false);
    const [name, setName] = useState('');
    const [nameLocation, setNameLocation] = useState('');
    const [location, setLocation] = useState(null);
    const [dimensions, setdimensions] = useState(Dimensions.get('window').width - 20 * 2);


    const takePhoto = async ()=> {
        const photo = await  camera.takePictureAsync();
        const location = await Location.getCurrentPositionAsync();

        const coords = {
            latitude: location.latitude,
            longitude: location.longitude,
        };
        setLocation(coords);
        setPhoto(photo.uri);
    };

    const sendPhoto = () => {
        console.log("navigation", navigation);
        navigation.navigate('HomeDefault', {photo});
        setIsBoardActive(false)
        Keyboard.dismiss()
        setName('')
        setNameLocation('')
    };

    useEffect(() => {
        const onChange = () => {
            const width = Dimensions.get("window").width - 20 * 2;

            setdimensions(width);
        };
        const dimensionsHandler = Dimensions.addEventListener("change", onChange);
        return () => {
            dimensionsHandler.remove();
        };
    }, []);

    const handleChangeName = (value) => setName(value);
    const handleChangeNameLocation = (value) => setNameLocation(value);

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={setCamera}>
                {photo && (
                    <View style={styles.takePhotoContainer}>
                        <Image source={{uri: photo}}  style={{width: 200, height: 200}}/>
                    </View>
                )}
                <TouchableOpacity
                    style={styles.cameraContainer}
                    onPress={takePhoto}>
                    <Photo/>
                </TouchableOpacity>
            </Camera>
            <View style={{marginBottom: 48}}>
                <Text style={styles.text}>Загрузите фото</Text>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <View style={{...styles.form, marginBottom: isKeyBoardActive ? 32 : 100, width: dimensions}}>
                <View style={{ borderBottomColor: '#E8E8E8', borderBottomWidth: 1, marginBottom: 32}}>
                    <TextInput style={styles.input}    placeholder="Название..." value={name} onFocus={() => setIsBoardActive(true)}  onChangeText={handleChangeName}>

                    </TextInput>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomColor: '#E8E8E8', borderBottomWidth: 1, marginBottom: 32}}>
                    <MaterialCommunityIcons name="google-maps" size={24} color="#BDBDBD" />
                    <TextInput style={{...styles.input, paddingLeft: 8}}   placeholder="Местность..." value={nameLocation} onFocus={() => setIsBoardActive(true)} onChangeText={handleChangeNameLocation}>

                    </TextInput>
                </View>

                <TouchableOpacity onPress={sendPhoto} style={styles.btn}>
                    <Text style={styles.btnText}>Опубликовать</Text>
                </TouchableOpacity>
            </View>

            </KeyboardAvoidingView>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,

    },
    //not work border background for camera
    camera: {
        height: 240,
        alignItems: "center",
        overflow:'hidden',
        borderRadius: 8,
        backgroundColor: '#BDBDBD',

    },

    cameraContainer: {
        marginTop: 90,
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    takePhotoContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderWidth: 1,
        borderColor: '#fff',

    },
    btn: {
        backgroundColor: "#F6F6F6",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 32,
    },

    btnText: {
        fontStyle: "normal",
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,

        textAlign: "center",

        color: "#BDBDBD",
    },
    input: {
        padding: 10,
    },
    form: {
        marginBottom: 100,
    },
    text: {
        fontWeight: '400',
        fontSize: 16,
        color: '#BDBDBD',
    }
});