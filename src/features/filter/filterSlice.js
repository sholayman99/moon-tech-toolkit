import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    stock : false ,
    brand : [] ,
    keyword : ""
}

const filterSlice = createSlice({
    name : "filter" ,
    initialState ,
    reducers : {

    }
})

export default filterSlice.reducer