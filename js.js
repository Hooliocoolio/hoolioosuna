
  function getVehiclesCostInCreditsSumTotal(character) {
    return character.vehicles.reduce((accum, current) => {
      return accum + current.cost_in_credits;
    }, 0);
  }
