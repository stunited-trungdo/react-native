import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<any>;
}

const HomeScreen: FC<Props> = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('DetailScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button title='Go to Detail Screen' onPress={handlePress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default HomeScreen;
