import React from "react";
// import {  StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {MapScreen} from "../nestedScreens/MapScreen";
import {CommentsScreen} from "../nestedScreens/CommentsScreen";
import {DefaultScreenPosts} from "../nestedScreens/DefaultScreenPosts";

const NestedScreen = createNativeStackNavigator();

export const PostsScreen = () => {

    return(
        <NestedScreen.Navigator>
            <NestedScreen.Screen name='HomeDefault' component={DefaultScreenPosts} options={{ headerShown: false }} />
            <NestedScreen.Screen name="Comments" component={CommentsScreen}/>
            <NestedScreen.Screen name="Map" component={MapScreen}/>
        </NestedScreen.Navigator>
    )
    // return (
    //     <View style={styles.container}>
    //         <View style={styles.text}>
    //             <View style={styles.imageContainer}>
    //             <Image source={require("../../assets/images/foto.png")} style={styles.image}/>
    //             </View>
    //             <View style={{ display: "flex", flexDirection:"column" }}>
    //                 <Text style={styles.name}>Natali Romanova</Text>
    //                 <Text style={styles.email}>email@example.com</Text>
    //             </View>
    //         </View>
    //     </View>
    // );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "flex-start",
//         paddingTop: 32,
//         backgroundColor: '#FFFFFF',
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//     },
//     text: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     name: {
//         fontWeight: '700',
//         fontSize: 13,
//         lineHeight: 15,
//     },
//     email: {
//         fontWeight: '400',
//         fontSize: 11,
//         lineHeight: 13,
//         color: 'rgba(33, 33, 33, 0.8)',
//     },
//     image: {
//         width: 60,
//         height: 60,
//         borderRadius: 16,
//     },
//     imageContainer: {
//         paddingLeft: 16,
//         paddingRight: 8,
//     }
//
// });