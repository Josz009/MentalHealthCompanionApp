import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const motivationalQuotes = [
    { id: '1', text: 'Believe in yourself!' },
    { id: '2', text: 'Every day is a second chance.' },
    { id: '3', text: 'You are stronger than you think.' },
];

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome Back!</Text>
            <FlatList
                data={motivationalQuotes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.quote}>{item.text}</Text>
                )}
            />
            <Button
                title="Go to Mood Tracker"
                onPress={() => navigation.navigate('MoodTracker')}
            />
            <Button
                title="Open Journal"
                onPress={() => navigation.navigate('Journal')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f8ff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    quote: {
        fontSize: 18,
        marginVertical: 8,
    },
});

export default Home;