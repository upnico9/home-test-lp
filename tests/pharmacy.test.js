import { Drug, Pharmacy } from "../src/index.js";

describe("Pharmacy", () => {
  test("should handle basic drugs", () => {
    const drug = new Drug("test", 2, 3);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(1);
    expect(drug.benefit).toBe(2);
  });

  test("should handle basic drugs expired", () => {
    const drug = new Drug("test", 0, 6);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(4);
  });

  test("should handle Herbal Tea", () => {
    const drug = new Drug('Herbal Tea', 10, 5);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(9);
    expect(drug.benefit).toBe(6);
  });

  test("should handle Herbal Tea expired", () => {
    const drug = new Drug('Herbal Tea', 0, 5);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(7);
  });

  test("should handle Magic Pill", () => {
    const drug = new Drug("Magic Pill", 15, 40);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(15);
    expect(drug.benefit).toBe(40);
  });


  test("should handle Fervex", () => {
    const drug = new Drug("Fervex", 15, 20);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(14);
    expect(drug.benefit).toBe(21);
  });

  test("should handle Fervex 10 days", () => {
    const drug = new Drug("Fervex", 10, 20);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(9);
    expect(drug.benefit).toBe(22);
  });

  test("should handle Fervex 5 days", () => {
    const drug = new Drug("Fervex", 5, 30);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(4);
    expect(drug.benefit).toBe(33);
  });

  test("should handle Fervex expired", () => {
    const drug = new Drug("Fervex", 0, 30);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(0);
  });

  test("should handle Dafalgan", () => {
    const drug = new Drug("Dafalgan", 10, 20);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(9);
    expect(drug.benefit).toBe(18);
  });

  test("should handle Dafalgan expired", () => {
    const drug = new Drug("Dafalgan", 0, 20);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(16);
  });
});
