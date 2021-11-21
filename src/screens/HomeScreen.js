import React, { useReducer, useContext, } from "react";
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { NoteContext } from '../context/NoteContext';
import { MaterialIcons, Feather, Ionicons} from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

    const noteContext = useContext(NoteContext);

    return (
        <>
            <Text style={styles.AppTitle}>Notes APP</Text>
            <FlatList
                data={noteContext.state.notes}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.noteContent}>
                            <Text style={styles.noteTitle}>{item.title}</Text>
                            <Text style={styles.noteDescription}>{item.desc}</Text>
                            <View style={styles.icons}>
                                <View style={styles.icon}>
                                <TouchableOpacity                                
                                    onPress={() => { noteContext.remove(item.id) }}
                                >
                                    <MaterialIcons name="delete" size={30} color="red" />
                                </TouchableOpacity>
                                </View>
                                <View style={styles.icon2}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("UpdateNote", {
                                        id: item.id,
                                    })}
                                >
                                    <Feather name="edit" size={30} color="black" />
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
            <TouchableOpacity
                style={styles.addIcon}
                onPress={() => navigation.navigate("CreateNote")}
            >
                <Ionicons name="add-circle" size={80} color="black" />
            </TouchableOpacity>

        </>
    );
}

const styles = StyleSheet.create({
    AppTitle: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: 'bold',
    },
    noteContent: {
        backgroundColor: '#6893ce',
        padding: 10,
        margin: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
    },
    noteTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    noteDescription: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius:10,
        borderWidth: 2,
        padding:15,
        fontSize: 15,
        color: 'black',
        margin: 10,
    },
    icons: {
        flexDirection: "row",
    },
    icon: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        width: '50%',
        height: 50,
    },
    icon2: {
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        width: '50%',
        height: 50,
    },
    addIcon: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
})

export default HomeScreen;