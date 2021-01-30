import { getField, updateField } from 'vuex-map-fields';

export default {
    state() {
        return {
            numberOfJournals: 0,
            currentJournal: {
                id: new Date().toISOString(),
                title: '',
                body: '',
            },
            notes: [
                {id: 1, title: 'Best Note', body: 'Thank you GOD! I DOD LOVE YOU!', author: 'Masih'},
                {id: 2, title: 'Vue is Awesome!', body: 'Vue is really cool and fun to use ❤', author: 'Masih'},
                {
                    id: 3,
                    title: 'Great things will happens!',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n',
                    author: 'Masih'
                },
            ],
            isNewJournal: false
        }
    },
    mutations: {
        updateField,
        createNewJournal(state) {
            state.isNewJournal = true
        },
        publishNote(state) {
            // state.notes.push(payload);
            state.notes.push(state.currentJournal)
            state.isNewNote = false;
            state.numberOfJournals ++;
        },
        editJournal(state, payload) {
            const i = state.notes.map(item => item.id).indexOf(payload.id);
            state.currentJournal = {
                id: i,
                title: payload.title,
                body: payload.body
            };
            state.isNewJournal = true
        },
        deleteJournal(state, payload) {
            const i = state.notes.map(item => item.id).indexOf(payload);
            state.notes.splice(i, 1);
            state.numberOfJournals --;
        },
        closeNote(state) {
            state.isNewJournal = false
        },
    },
    actions: {
        createNewJournal(context) {
          context.commit('createNewJournal');
        },
        publishNote(context, payload) {
            context.commit('publishNote', payload);
        },
        editJournal(context, payload) {
            context.commit('editJournal', payload)
        },
        deleteJournal(context, payload) {
            context.commit('deleteJournal', payload);
        }
    },
    getters: {
        getField,
        newNote(state) {
            return state.isNewJournal
        },
        getNotes(state) {
            return state.notes;
        },
        hasJournals(state) {
            return state.notes && state.notes.length > 0;
        }
    }
}
