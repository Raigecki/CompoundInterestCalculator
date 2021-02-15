import React from 'react'

function OneBaseInteger() {
  const [field, setfield] = useState(1)

  return (
    <input 
      value={values[field]}
      onChange={e => {
        const value = e.target.value.replace(/\D/g,'')
        value == '' ? 1 : value 
        setfield(value)
      }}
    />
  )
}

export default OneBaseInteger
