import LogIn from './components/LogIn'
import UserContextProvider from './contextApi/UserContexProvider'
import Profile from './components/Profile'
import './App.css'
function App() {


  return (
    <div className='div1'>
      <UserContextProvider>
        <LogIn />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App
