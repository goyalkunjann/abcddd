
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'slice',
    initialState: {
        modal: { visible: false, screen: "", assets: {} }
    },
    reducers: {
        toggleModal: (state, action) => {
            state.visible = true
            state.modal = action.payload
        },
        closeModal: (state, _) => {
            state.modal = {
                visible: false,
                screen: "",
            }
        }
    }
})

export const { toggleModal, closeModal } = slice.actions
export default slice.reducer