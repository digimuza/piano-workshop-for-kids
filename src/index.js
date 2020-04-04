import Tone from "tone";
import l from "lodash";
const synth = new Tone.FMSynth().toMaster();

let data = {};
// C D E F G A B C
// C1 D1 E1 F1 G1 A1 B1 C1
// Do Re Mi Fa Sol La Si Do
// 1 - 7

let keys = {
  "1": "C4",
  "2": "D4",
  "3": "E4",
  "4": "F4",
  "5": "G4",
  "6": "A4",
  "7": "B4",
  "8": "C5"
};

let muzike = "C4,D4,E4,F4,C4,D4,E4,F4,C4,D4,E4,F4,C4,D4,E4,F4".split(",");
let i = 0;
document.addEventListener("keydown", e => {
  if (muzike[i]) {
    data[e.key] = synth.triggerAttack(muzike[i]);
    i++;
  }
  if (!data[e.key]) {
    if (e.key in keys) {
      data[e.key] = synth.triggerAttack(keys[e.key]);
    } else {
      data[e.key] = synth.triggerAttack(getRandomAcord());
    }
  }
});
document.addEventListener("keyup", e => {
  if (data[e.key]) {
    data[e.key].triggerRelease();
    delete data[e.key];
  }
});

function randomItem(items) {
  return l.sample(items);
}

function getRandomAcord() {
  var natos = "C D E F G A B C".split(" ");
  var skaiciai = "1,2,3,4,5,6,7".split(",");
  return randomItem(natos) + randomItem(skaiciai);
}

console.log(getRandomAcord());
