const getFinalAmount = (principal, interest, time, compound) => {

  if (compound < 1) {   
    throw new Error("compound must be greater than 0")
  }

  return principal * (Math.pow(1 + interest / compound, compound * time))
}

const getYearlyAmountTotal = (principal, interest, time, compound) => {

  if (compound < 1) {   
    throw new Error("compound must be greater than 0")
  }

  const yearlyTotal = [principal]

  for (i = 0; i < time; i++) {

    const currentPrincipal = yearlyTotal[yearlyTotal.length - 1];
    const total = getFinalAmount(currentPrincipal, interest, 1, compound);
    yearlyTotal.push(total);
  }

  return yearlyTotal;
}

const getTotalTime = (principal, interest, compound, total) => {

  time = total / principal / Math.pow((1 + interest / compound), 1 / compound)
}

