
import { configureStore } from '@reduxjs/toolkit'
import slice from './slice/slice'
import { Provider } from 'react-redux'


const Store = configureStore({
  reducer: { slice },
})

export const StoreProvider = ({ children }) => {
    return  <Provider store={Store}> {children} </Provider>
}

