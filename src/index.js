import Tone from "tone";

const synth = new Tone.Synth().toMaster();

let data = {};
// C D E F G A B C
// C1 D1 E1 F1 G1 A1 B1 C1
// Do Re Mi Fa Sol La Si Do
// 1 - 7
document.addEventListener("keydown", e => {
  if (!data[e.key]) {
    data[e.key] = synth.triggerAttack("E5");
  }
});

document.addEventListener("keyup", e => {
  if (data[e.key]) {
    data[e.key].triggerRelease();
    delete data[e.key];
  }
});
