import React from 'react'
import Header from './components/Header'
import DisplayCounter from './components/DisplayCounter'
import Model from './components/Model'
import Controls from './components/Controls'
import './App.css'
import PrivacyMsg from './components/PrivacyMsg'
import { useSelector } from 'react-redux'

const App = () => {
  const privacyState = useSelector(store => store.privacy);
  return (
    <div className="px-4 py-5 my-5 text-center" style={{ display: "flex", justifyContent: 'center' }}>
      <Model>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacyState ? <PrivacyMsg /> : <DisplayCounter />}
          <Controls></Controls>
        </div>
      </Model>
    </div>
  )
}

export default App