import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";

interface Props {
    navigation: NavigationScreenProp<any>;
}

const DetailScreen: FC<Props> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detail Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});

export default DetailScreen;
