import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Notefromdirector from './components/Pages/Notefromdirector'
import Principlemessage from './components/Pages/Principlemessage'
import Governingcounsil from './components/Pages/Governingcounsil'
import Vision from './components/Pages/Vision'
import Mission from './components/Pages/Mission'
import Faculty from './components/Pages/Faculty'
import Barch from './components/Pages/Barch'
import Overview from './components/Pages/Overview'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path="/" component={Home} />
       <Route  path="/about" component={About} />
       <Route  path="/notefromdirector" component={Notefromdirector} />
       <Route  path="/principlemessage" component={Principlemessage} />
       <Route  path="/governingcounsil" component={Governingcounsil} />
       <Route  path="/vision" component={Vision} />
       <Route  path="/mission" component={Mission} />
       <Route  path="/faculty" component={Faculty} />
       <Route  path="/barch" component={Barch} />
       <Route  path="/overview" component={Overview} />
       </Switch>
  </BrowserRouter>
  )
}

export default App
