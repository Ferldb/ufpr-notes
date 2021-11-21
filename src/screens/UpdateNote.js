import React, { useState, useContext } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';
import { NoteContext } from '../context/NoteContext';

const CreateNote = ({ navigation, route, }) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const noteContext = useContext(NoteContext);
    const index = getIndex(route.params.id);

    function getIndex(id) {
        return noteContext.state.notes.findIndex(obj => obj.id === id);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder= {noteContext.state.notes[index].title}
                value={title}
                onChangeText={(t) => setTitle(t)}
            />
            <TextInput
                style={styles.input}
                placeholder= {noteContext.state.notes[index].desc}
                value={desc}
                onChangeText={(t) => setDesc(t)}
            />
            <TouchableOpacity
                style={styles.createButton}
                onPress={() => { noteContext.update(index, title, desc) , navigation.navigate("Home")}}
            >
                <Text style={{color: 'white'}}>Update Note</Text>
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