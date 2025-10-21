import { DrugUpdateStrategy } from './DrugUpdateStrategy.js';

export class DefaultDrugStrategy extends DrugUpdateStrategy {
  update(drug) {

    if (drug.benefit > 0) {
      drug.benefit = Math.max(0, drug.benefit - 1);
    }

    drug.expiresIn -= 1;

    if (drug.expiresIn < 0 && drug.benefit > 0) {
      drug.benefit = Math.max(0, drug.benefit - 1);
    }

  }
}