import React, { useState } from 'react'

function ZeroBaseFloat() {

  const [field, setfield] = useState(0.00)

  return (
    <input 
      value={values[field]}
      onChange={e => {
        const value = e.target.value.replace(/\D/g,'')
        isNaN(value) ? 0.00 : value 
        setfield(value)
      }}
    />
  )
}

export default ZeroBaseFloat
