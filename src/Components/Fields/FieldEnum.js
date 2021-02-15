const InitialPrincipal = {
  name: "Initial Principal"
  , type: "ZeroBaseFloat"
}

const FinalPrincipal = {
  name: "Final Principal"
  , type: "ZeroBaseFloat"
}

const AnnualAddition = {
  name: "Annual Addition"
  , type: "ZeroBaseFloat"
}

const InterestRate = {
  name: "Interest Rate"
  , type: "ZeroBaseFloat"
}

const Time = {
  name : "Time"
  , type: "OneBaseInteger"
}

const Compound = {
  name : "Compound"
  , type: "OneBaseInteger"
}

export const Fields = {
  INITIAL_PRINCIPAL : InitialPrincipal
  ,FINAL_PRINCIPAL: FinalPrincipal
  ,ANNUAL_ADDITION: AnnualAddition
  ,INTEREST_RATE : InterestRate
  ,TIME : Time
  ,COMPOUND: Compound
}

export default class FieldEnum {}