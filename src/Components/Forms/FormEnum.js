import {Fields} from '../Fields/FieldEnum'

const principalForm = [
  {field: Fields.INITIAL_PRINCIPAL, type: 'required'}
  ,{field: Fields.ANNUAL_ADDITION, type: 'required'}
  ,{field: Fields.INTEREST_RATE, type: 'required'}
  ,{field: Fields.TIME, type: 'required'}
  ,{field: Fields.COMPOUND, type: 'required'}
  ,{field: Fields.FINAL_PRINCIPAL, type: 'solve'}
]

const timeForm = [
  {field: Fields.INITIAL_PRINCIPAL, type: 'required'}
  ,{field: Fields.ANNUAL_ADDITION, type: 'required'}
  ,{field: Fields.INTEREST_RATE, type: 'required'}
  ,{field: Fields.COMPOUND, type: 'required'}
  ,{field: Fields.FINAL_PRINCIPAL, type: 'required'}
  ,{field: Fields.TIME, type: 'solve'}
]

export const Forms = {
  PRINCIPAL_FORM: principalForm
  ,TIME_FORM: timeForm
}

export default class FormEmum {}