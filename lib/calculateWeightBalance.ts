type AircraftData = {
  stations: {
    frontSeats: number;
    rearSeats: number;
    fuel: number;
    baggage1: number;
    baggage2: number;
  };

  fuel: {
    weightPerGallon: number;
  };
};

type CalculationInput = {
  emptyWeight: number;
  emptyCG: number;

  pilot: number;
  frontPassenger: number;
  rearLeft: number;
  rearRight: number;

  fuelGallons: number;

  baggage1: number;
  baggage2: number;
};

export function calculateWeightBalance(
  aircraft: AircraftData,
  input: CalculationInput
) {
  const emptyMoment = input.emptyWeight * input.emptyCG;

  const fuelWeight =
    input.fuelGallons * aircraft.fuel.weightPerGallon;

  const totalWeight =
    input.emptyWeight +
    input.pilot +
    input.frontPassenger +
    input.rearLeft +
    input.rearRight +
    fuelWeight +
    input.baggage1 +
    input.baggage2;

  const totalMoment =
    emptyMoment +
    input.pilot * aircraft.stations.frontSeats +
    input.frontPassenger * aircraft.stations.frontSeats +
    input.rearLeft * aircraft.stations.rearSeats +
    input.rearRight * aircraft.stations.rearSeats +
    fuelWeight * aircraft.stations.fuel +
    input.baggage1 * aircraft.stations.baggage1 +
    input.baggage2 * aircraft.stations.baggage2;

  const cg = totalMoment / totalWeight;

  return {
    totalWeight,
    totalMoment,
    cg,
  };
}