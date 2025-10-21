import {
    DefaultDrugStrategy,
    FervexStrategy,
} from "../strategies/index.js";


export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;

    this.defaultDrugStrategy = new DefaultDrugStrategy();
    this.fervexStrategy = new FervexStrategy();
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];

      if (this._isMagicPill(drug)) {
        this._updateMagicPill(drug);
      } else if (this._isFervex(drug)) {
        this.fervexStrategy.update(drug);
      } else if (this._isHerbalTea(drug)) {
        this._updateHerbalTea(drug);
      } else {
        this.defaultDrugStrategy.update(drug);
      }

    }

    return this.drugs;
  }

  _isMagicPill(drug) {
    return drug.name === "Magic Pill";
  }

  _isFervex(drug) {
    return drug.name === "Fervex";
  }

  _isHerbalTea(drug) {
    return drug.name === "Herbal Tea";
  }


  _updateMagicPill(drug) {
    // good drug 
  }

  _updateHerbalTea(drug) {
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