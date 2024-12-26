import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Journal = () => {
    const [entry, setEntry] = useState('');
    const [journalEntries, setJournalEntries] = useState([]);

    const saveEntry = () => {
        if (entry.trim()) {
            setJournalEntries([...journalEntries, entry]);
            setEntry('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Journal</Text>
            <TextInput
                style={styles.textInput}
                multiline
                numberOfLines={4}
                placeholder="Write your thoughts here..."
                value={entry}
                onChangeText={setEntry}
            />
            <Button title="Save Entry" onPress={saveEntry} />
            <View style={styles.entriesContainer}>
                {journalEntries.map((entry, index) => (
                    <Text key={index} style={styles.entry}>
                        {entry}
                    </Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    textInput: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
        textAlignVertical: 'top',
        backgroundColor: '#fff',
    },
    entriesContainer: {
        marginTop: 16,
    },
    entry: {
        fontSize: 16,
        paddingVertical: 8,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
});

export default Journal;