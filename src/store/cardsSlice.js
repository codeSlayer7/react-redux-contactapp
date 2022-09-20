import {createSlice, createAsyncThunk,  }from '@reduxjs/toolkit'
//import axios from 'axios';



export  const fetchCards = createAsyncThunk( 
        'cards/fetchCards',  
        async function(_,{rejectWithValue}){

            try {
             const response = await fetch('https://my-json-server.typicode.com/RomanChasovitin/demo-api/users');
             const data = await response.json();
     
             return data.data;
                
            } catch (error) {
                return rejectWithValue(error.message)
           }
         }
    );
         
 const initialState= {
        cards: null,
        error: '',
    };



const Cards = createSlice({
    name: 'cards',
    initialState,

    reducers:{
        addTodo(state,action){
            console.log(state)
            console.log(action)
            state.todos.push(action.payload)
        
         },
        sort(state){
            
            state.cards.sort(function(a, b){
                if(a.firstName < b.firstName) { return -1; }
                if(a.firstName > b.firstName) { return 1; }
                return 0;
            })
        
            
        },
         sortReverse(state){
            state.cards.sort(function(a, b){
            if(a.firstName > b.firstName) { return -1; }
            if(a.firstName < b.firstName) { return 1; }
            return 0;
        })
     },
        editCard(state , action){
          
            let index = state.cards.findIndex(el=>el.id=== action.payload.id);
            console.log(index)
            state.cards[index] = action.payload;
        }
    },
    
    extraReducers:{
        [fetchCards.pending]: ( state )=>{state.error = true},
        [fetchCards.fulfilled]: (state, action)=>{ state.cards = action.payload},
    }


});


export default Cards.reducer;
export const { sort, sortReverse, favorite, editCard} = Cards.actions