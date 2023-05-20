import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image, Button } from "react-native";

import {firestore} from '../../firebase/config';
import { collection, onSnapshot } from "firebase/firestore";

export const DefaultScreenPosts = ({  navigation }) => {
    const [posts, setPosts] = useState([]);

    const getAllPosts = async () => {
        try {
            await onSnapshot(collection(firestore, 'posts'), (data) => {
                setPosts(data.docs.map((doc) => ({
                    ...doc.data(), id: doc.id
                })));
            })
        } catch (error) {

        }
    }

    useEffect(() => {
        getAllPosts()

    }, []);
    console.log("posts", posts);
    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(item, indx) => indx.toString()}
                renderItem={({ item }) => (
                    <View
                        style={{
                            marginBottom: 10,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            source={{ uri: item.photo }}
                            style={{ width: 350, height: 200 }}
                        />
                    </View>
                )}
            />
            <Button title="go to map" onPress={() => navigation.navigate("Map")} />
            <Button
                title="go to Comments"
                onPress={() => navigation.navigate("Comments")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});

