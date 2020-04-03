import Tone from "tone";

const synth = new Tone.Synth().toMaster();

let data = {};
// A B C D E F G
// 1 - 7

let map = {
  a: "F4",
  b: "C3",
  s: "E6"
};

// synth.triggerAttack("D3");

// setTimeout(() => {
//   synth.triggerRelease();
// }, 500);
document.addEventListener("keydown", e => {
  if (!data[e.key] && map[e.key]) {
    data[e.key] = synth.triggerAttack(map[e.key]);
  }
});

document.addEventListener("keyup", e => {
  if (data[e.key]) {
    data[e.key].triggerRelease();
    delete data[e.key];
  }
});
