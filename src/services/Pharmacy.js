import {
    DefaultDrugStrategy,
    FervexStrategy,
    HerbalTeaStrategy,
    MagicPillStrategy,
    DafalganStrategy
} from "../strategies/index.js";


export class Pharmacy {
    constructor(drugs = []) {
        this.drugs = drugs;

        this.defaultDrugStrategy = new DefaultDrugStrategy();
        this.strategies = {
            "Fervex": new FervexStrategy(),
            "Herbal Tea": new HerbalTeaStrategy(),
            "Magic Pill": new MagicPillStrategy(),
            "Dafalgan": new DafalganStrategy()
        };
    }

    updateBenefitValue() {
        for (let i = 0; i < this.drugs.length; i++) {
            const drug = this.drugs[i];

            const strategy = this.strategies[drug.name] || this.defaultDrugStrategy;
            strategy.update(drug);

        }

        return this.drugs;
    }
}