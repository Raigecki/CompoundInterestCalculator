import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import {Forms} from './FormEnum'

function FormTable(props) {

  const [values, setValues] = useState({}) 
  console.log('Values: ' + values)

  return (
    <div>
      <Table>
        <tbody>
          {Forms[props.type].map(field => {
            return (
            <tr key={field.name}>
              <td>{field.name}</td> 
              <td>
  
                <input 
                  value={values[field]}
                  onChange={e => {
                    setValues({...values, [field]: e.target.value})
                  }}
                />
              </td>
            </tr>
            )
          })}
          <td><td><Button>Calculate</Button></td></td>
        </tbody>
      </Table>
    </div>
  )
}

export default FormTable
