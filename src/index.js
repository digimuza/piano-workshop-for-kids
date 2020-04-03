import Tone from "tone";

const synth = new Tone.Synth().toMaster();

let data = {};
// A B C D E F G
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
