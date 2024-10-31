import './App.css'
import { User, Countries } from './User'
import { UserProvider } from './UserContextProvider'

function App() {

  return (
    <UserProvider>
      <User name={"Juan"} age={27} isMarried={false} country={Countries.Brazil} />
      <User name={"Alfredo"} age={47} isMarried={true} country={Countries.UnitedStates} />
    </UserProvider>
  )
}

export default App
