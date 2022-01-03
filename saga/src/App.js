import React from 'react'
import { Provider} from 'react-redux'
import store from './store';
import Userdetails from './Components/Userdetails/userdetails';


const App = () => {
  return (
    <Provider store={store}>
      <Userdetails/>
    </Provider>
  )
}

export default App
