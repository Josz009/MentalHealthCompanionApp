import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';

const MoodTracker = () => {
    const [mood, setMood] = useState('');
    const [moodHistory, setMoodHistory] = useState([
        { day: 1, mood: 5 },
        { day: 2, mood: 3 },
        { day: 3, mood: 4 },
    ]);

    const logMood = () => {
        if (mood) {
            const newEntry = { day: moodHistory.length + 1, mood: parseInt(mood) };
            setMoodHistory([...moodHistory, newEntry]);
            setMood('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Mood Tracker</Text>
            <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
                <VictoryLine
                    data={moodHistory}
                    x="day"
                    y="mood"
                    style={{ data: { stroke: '#c43a31' } }}
                />
            </VictoryChart>
            <TextInput
                style={styles.input}
                placeholder="Log your mood (1-10)"
                value={mood}
                keyboardType="numeric"
                onChangeText={setMood}
            />
            <Button title="Log Mood" onPress={logMood} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default MoodTracker;