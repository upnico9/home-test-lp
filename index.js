import { Drug, Pharmacy } from "./src/index.js";
import fs from "fs";

function compareOutputs(file1, file2) {
  try {
    const content1 = fs.readFileSync(file1, 'utf8');
    const content2 = fs.readFileSync(file2, 'utf8');
    return content1 === content2;
  } catch (error) {
    return false;
  }
}

const originalDrugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 12, 35),
  new Drug("Magic Pill", 15, 40),
];
const originalPharmacy = new Pharmacy(originalDrugs);

const originalLog = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  originalLog.push(JSON.parse(JSON.stringify(originalPharmacy.updateBenefitValue())));
}

fs.writeFileSync(
  "output_verification.json",
  JSON.stringify({ result: originalLog }, null, 2).concat("\n")
);

const isIntegrityOk = compareOutputs("output.json", "output_verification.json");

if (isIntegrityOk) {
  console.log("Congrats ! You didn't break anything");
} else {
  console.log("Not cool, you broke the pharmacy");
}

const newDrugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 12, 35),
  new Drug("Magic Pill", 15, 40),
  new Drug("Dafalgan", 15, 30),
];
const newPharmacy = new Pharmacy(newDrugs);

const newLog = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  newLog.push(JSON.parse(JSON.stringify(newPharmacy.updateBenefitValue())));
}

fs.writeFile(
  "output_with_dafalgan.json",
  JSON.stringify({ result: newLog }, null, 2).concat("\n"),
  (err) => {
    if (err) {
      console.log("Error creating new file for dafalgan output");
    } else {
      console.log("output_with_dafalgan.json created !");
    }
  },
);

fs.unlinkSync("output_verification.json");
