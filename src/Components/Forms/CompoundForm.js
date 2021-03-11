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

  function parseForm(fields) {
    const {initial, addition, interest, years, compound, final} = fields

    const emptyVal = []
    
    if (initial.val = '') emptyVal.push(initial)
    if (addition.val = '') emptyVal.push(addition)
    if (interest.val = '') emptyVal.push(interest)
    if (years.val = '') emptyVal.push(years)
    if (final.val = '') emptyVal.push(final)

    if (emptyVal.length > 1) return emptyVal

    const compoundVal = Number.parseInt(compound.value)
    if (compoundVal.isNaN() || compoundVal < 1) {
      compound.value = 1
    }

  }

  function chooseEquation() {

  }

  function calculate() {

  }

  return (
    <div>
      <Table >
        <tbody style={{textAlign:"left"}}>
            <tr key={fields.initialAmount.name}>
              <td style={{width:"45%"}}>{fields.initialAmount.name}</td> 
              <td>$ <input style={{width:"90%"}}/></td>
            </tr>
            <tr key={fields.annualAddition.name}>
              <td>{fields.annualAddition.name}</td> 
              <td>$ <input style={{width:"90%"}}/></td>
            </tr>
            <tr key={fields.interestRate.name}>
              <td>{fields.interestRate.name}</td> 
              <td>&nbsp;&nbsp; <input style={{width:"80%"}}/> %</td>
            </tr>
            <tr key={fields.yearsToGrow.name}>
              <td>{fields.yearsToGrow.name}</td> 
              <td>&nbsp;&nbsp; <input style={{width:"80%"}}/></td>
            </tr>
            <tr key={fields.compoundAmount.name}>
              <td>{fields.compoundAmount.name}</td> 
              <td>&nbsp;&nbsp; <input style={{width:"30%"}}/> time(s) anually</td>
            </tr>
            <tr key={fields.finalAmount.name}>
              <td>{fields.finalAmount.name}</td> 
              <td>$ <input style={{width:"90%"}}/></td>
            </tr>
          <tr><td><Button>Calculate</Button></td></tr>          
        </tbody>
      </Table>
    </div>
  )

  
}

export default CompoundForm
