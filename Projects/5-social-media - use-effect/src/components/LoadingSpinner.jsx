import React, { useEffect } from 'react'

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center spinner">
      <div className="spinner-border" style={{ width: "5rem", height: "5rem" }} role="status">
      </div>
    </div>
  )
}

export default LoadingSpinner