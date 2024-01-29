import React from 'react'
import Header from './Header'
import DisplayCounter from './DisplayCounter'

function Model({ children }) {
  return <><div className="card" style={{ width: "50%" }}>
    <div className="card-body">
      {children}
    </div>
  </div></>
}

export default Model