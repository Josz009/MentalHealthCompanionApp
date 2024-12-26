import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Settings = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState('English');

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const toggleLanguage = () => {
        setLanguage((prevLanguage) =>
            prevLanguage === 'English' ? 'Spanish' : 'English'
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>

            <View style={styles.settingItem}>
                <Text style={styles.label}>Dark Mode</Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={toggleDarkMode}
                />
            </View>

            <View style={styles.settingItem}>
                <Text style={styles.label}>Language: {language}</Text>
                <Switch
                    value={language === 'Spanish'}
                    onValueChange={toggleLanguage}
                />
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
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
        paddingVertical: 8,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    label: {
        fontSize: 18,
    },
});

export default Settings;