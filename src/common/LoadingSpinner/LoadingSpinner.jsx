import { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const override = {
   display: 'block',
   margin: '0 auto',
   borderColor: 'red',
}
const LoadingSpinner = () => {
   return (
      <div className="sweet-loading">
         <ClipLoader cssOverride={override} size={150} aria-label="Loading Spinner" data-testid="loader" />
      </div>
   )
}

export default LoadingSpinner
