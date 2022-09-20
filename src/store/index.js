import {configureStore} from '@reduxjs/toolkit';
import cards from './cardsSlice';



export default configureStore({
    reducer:{
        cards:cards,
    }
});