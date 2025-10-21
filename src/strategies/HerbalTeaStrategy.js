import { DrugUpdateStrategy } from './DrugUpdateStrategy.js';

export class HerbalTeaStrategy extends DrugUpdateStrategy {
  update(drug) {
    if (drug.benefit < 50) {
      drug.benefit = drug.benefit + 1;
    }

    drug.expiresIn = drug.expiresIn - 1;

    if (drug.expiresIn < 0) {
      if (drug.benefit < 50) {
        drug.benefit = drug.benefit + 1;
      }
    }
  }
}