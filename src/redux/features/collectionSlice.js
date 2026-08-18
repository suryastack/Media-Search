import { createSlice } from "@reduxjs/toolkit"
import { Slide, toast } from 'react-toastify';

const initialState = {
    items:JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name:'collection',
    initialState,
    reducers:{
        addCollection(state,action){
            const alreadyExists = state.items.find(
                items => items.id === action.payload.id
            )
            if(!alreadyExists){
                state.items.push(action.payload)
                localStorage.setItem('collection',JSON.stringify(state.items))
            }
        },
        removeCollection(state,action){
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection',JSON.stringify(state.items))
        },
        clearCollection(state){
            state.items = []
            localStorage.removeItem('collection')
        },
        addToast(){
            toast.success('Added To Collection ✅', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        },
        removeToast(){
            toast.error('Item Removed', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
    }
})

export const {addCollection,removeCollection,clearCollection,addToast,removeToast} = collectionSlice.actions
export default collectionSlice.reducer