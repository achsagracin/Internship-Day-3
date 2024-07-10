// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import View from './components/View'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//       <h1>Welcome to React Session</h1>
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>Department</th>
//         </tr>
//         <tr>
//           <td>Achsa</td>
//           <td>CT</td>
//         </tr>
//       </table>

//       <View/>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import './App.css'
import View from './components/View'
import Records from './components/Record'
import Add from './components/Add'
import {Routes,Route} from 'react-router-dom'

function App() {
 

  return (
    <>
      <h1>Welcome to React Session</h1>
      <View />
    <Routes>
      <Route path='/' element={<Records/>}></Route>
      <Route path='/add' element={<Add person={{fname:"Anu",Department:"English",semester:"s4"}}/>}></Route>

    </Routes>
    </>
  )
}

export default App