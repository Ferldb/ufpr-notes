import React, { useReducer, createContext } from 'react';

const NoteContext = createContext();

const init = { notes: [] };

const noteReducer = (state, action) => {
    switch (action.type) {
        case "create":
            return { ...state, notes: [...state.notes, action.payload] };
        case "update": {
            const newArray = state.notes;
            newArray[action.payload.id].title = action.payload.title;
            newArray[action.payload.id].desc = action.payload.desc;
            return {
                ...state, notes: newArray,
            }
        }
        case "delete": {
            const newArray = state.notes.filter(note => note.id !== action.payload);
            return {
                ...state,
                notes: newArray
            }
        }
        default:
            return { ...state };
    }
};



const NoteProvider = ({ children }) => {
    const [state, dispatch] = useReducer(noteReducer, init);

    const create = (id, title, desc) => {
    dispatch({ type: "create", payload: { id, title, desc } });
};

const update = (id, title, desc) => {
    dispatch({ type: "update", payload: { id, title, desc } });
};

const remove = (id) => {
    dispatch({ type: "delete", payload: id });
};

    return (
        <NoteContext.Provider value={{ state, create, update, remove }}>
            {children}
        </NoteContext.Provider>
    )


};

export { NoteContext, NoteProvider };
