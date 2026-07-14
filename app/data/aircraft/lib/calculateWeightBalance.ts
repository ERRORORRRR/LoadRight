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

const FRONT_ARM = 37;
const REAR_ARM = 73;
const FUEL_ARM = 48;
const BAG1_ARM = 95;
const BAG2_ARM = 123;

const FUEL_WEIGHT = 6;

export function calculateWeightBalance(input: CalculationInput) {

  const emptyMoment = input.emptyWeight * input.emptyCG;

  const fuelWeight = input.fuelGallons * FUEL_WEIGHT;

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
    input.pilot * FRONT_ARM +
    input.frontPassenger * FRONT_ARM +
    input.rearLeft * REAR_ARM +
    input.rearRight * REAR_ARM +
    fuelWeight * FUEL_ARM +
    input.baggage1 * BAG1_ARM +
    input.baggage2 * BAG2_ARM;

  const cg = totalMoment / totalWeight;

  return {
    totalWeight,
    totalMoment,
    cg,
  };
}