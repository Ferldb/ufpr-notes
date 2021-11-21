import React, { useState, useContext } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';
import { NoteContext } from '../context/NoteContext';
import uuid from 'react-native-uuid';

const CreateNote = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const noteContext = useContext(NoteContext);
    let id = uuid.v1();
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={(t) => setTitle(t)}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"   
                value={desc}
                onChangeText={(t) => setDesc(t)}
            />
            <TouchableOpacity
                style={styles.createButton}
                onPress={() => { noteContext.create(id, title, desc) , navigation.navigate("Home")}}
            >
                <Text style={{color: 'white'}}>Create a Note</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    createButton: {
        margin: 20,
        padding: 10,
        alignSelf: 'center',
        alignItems: 'center',
        width: '80%',
        backgroundColor: 'black',
        borderRadius:15,
    },
    input: {
        color: 'black',
        margin: 20,
        padding: 10,
        backgroundColor: 'lightgrey',
    }
})

export default CreateNote;