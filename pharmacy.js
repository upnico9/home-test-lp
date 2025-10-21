export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];

      if (this._isMagicPill(drug)) {
        this._updateMagicPill(drug);
      } else if (this._isFervex(drug)) {
        this._updateFervex(drug);
      } else if (this._isHerbalTea(drug)) {
        this._updateHerbalTea(drug);
      } else {
        this._updateNormalDrug(drug);
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

  _updateFervex(drug) {
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


  _updateNormalDrug(drug) {
    if (drug.benefit > 0) {
      drug.benefit = Math.max(0, drug.benefit - 1);
    }

    drug.expiresIn -= 1;

    if (drug.expiresIn < 0 && drug.benefit > 0) {
      drug.benefit = Math.max(0, drug.benefit - 1);
    }
  }

}
