import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'


function CompoundForm() {

  const [fields, setFields] = useState({
    initialAmount : {
      name: "Initial Amount",
      value: ''
    },
    annualAddition: {
      name: "Annual Addition",
      value: ''
    },
    interestRate: {
      name: "Interest Rate",
      value: ''
    },
    yearsToGrow: {
      name: "Years To Grow",
      value: ''
    },
    compoundAmount: {
      name: "Compounded",
      value: ''
    },
    finalAmount: {
      name: "Final Amount",
      value: ''
    }
  })

  function updateFieldValue (field, value) {
    const updatedFields = {...fields}
    updatedFields[field].value = value
    setFields(updatedFields)
  }

  const [selected, setSelected] = useState("")

  function parseForm() {

    Object.entries(fields).filter(f => console.log(f[1].value))

    //set default values for empty fields

  }

  function chooseEquation() {

  }

  function calculate() {
    console.log(fields);
  }

  return (
    <div>
      <Table >
        <tbody style={{textAlign:"left"}}>
            <tr key={fields.initialAmount.name} 
              onClick={() => setSelected("initialAmount")}>
              <td style={{width:"45%"}}>{fields.initialAmount.name}</td> 
              <td>$ 
                <input style={{width:"90%"}}
                  onChange={e => updateFieldValue(
                    "initialAmount", e.target.value
                )}/>
              </td>
            </tr>
            <tr key={fields.annualAddition.name} 
              onClick={() => setSelected("annualAddition")}>
              <td>{fields.annualAddition.name}</td> 
              <td>$ 
                <input style={{width:"90%"}}
                  onChange={e => updateFieldValue(
                    "annualAddition", e.target.value
                )}/>
              </td>
            </tr>
            <tr key={fields.interestRate.name} 
              onClick={() => setSelected("interestRate")}>
              <td>{fields.interestRate.name}</td> 
              <td>&nbsp;&nbsp; 
                <input style={{width:"80%"}}
                  onChange={e => updateFieldValue(
                    "interestRate", e.target.value
                )}/> %
              </td>
            </tr>
            <tr key={fields.yearsToGrow.name} 
              onClick={() => setSelected("yearsToGrow")}>
              <td>{fields.yearsToGrow.name}</td> 
              <td>&nbsp;&nbsp;
                <input style={{width:"90%"}}
                  onChange={e => updateFieldValue(
                    "yearsToGrow", e.target.value
                )}/>
              </td>
            </tr>
            <tr key={fields.compoundAmount.name} 
              onClick={() => setSelected("compoundAmount")}>
              <td>{fields.compoundAmount.name}</td> 
              <td>&nbsp;&nbsp; 
                <input style={{width:"30%"}}
                  onChange={e => updateFieldValue(
                    "compoundAmount", e.target.value
                )}/> 
                &nbsp;time(s) anually
              </td>
            </tr>
            <tr key={fields.finalAmount.name} 
              onClick={() => setSelected("finalAmount")}>
              <td>{fields.finalAmount.name}</td> 
              <td>$ 
              <input style={{width:"90%"}}
                  onChange={e => updateFieldValue(
                    "finalAmount", e.target.value
                )}/>
              </td>
            </tr>
          <tr style={{textAlign:"right"}}>
            <td></td>
            <td><Button onClick={() => calculate()}>
              Calculate</Button>
            </td>
          </tr>          
        </tbody>
      </Table>
    </div>
  )
}

export default CompoundForm
