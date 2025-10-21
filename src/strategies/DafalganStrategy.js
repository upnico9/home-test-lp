import { DefaultDrugStrategy } from "./DefaultDrugStrategy.js";

export class DafalganStrategy extends DefaultDrugStrategy {
    update(drug) {
        if (drug.benefit > 0) {
            drug.benefit = Math.max(0, drug.benefit - 2);
        }

        drug.expiresIn -= 1;

        if (drug.expiresIn < 0 && drug.benefit > 0) {
            drug.benefit = Math.max(0, drug.benefit - 2);
        }
    }
}