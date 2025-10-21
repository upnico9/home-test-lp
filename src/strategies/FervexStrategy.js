import { DrugUpdateStrategy } from './DrugUpdateStrategy.js';

export class FervexStrategy extends DrugUpdateStrategy {
  update(drug) {
    if (drug.benefit < 50) {
      drug.benefit = drug.benefit + 1;


      if (drug.expiresIn < 11) {
        if (drug.benefit < 50) {
          drug.benefit = drug.benefit + 1;
        }
      }

      if (drug.expiresIn < 6) {
        if (drug.benefit < 50) {
          drug.benefit = drug.benefit + 1;
        }
      }
    }

    drug.expiresIn = drug.expiresIn - 1;

    if (drug.expiresIn < 0) {
      drug.benefit = 0;
    }
  }
}