import _ from "lodash";

const player = [
  {
    nama: "Ballsky",
    email: "Ballsky@gmail.com",
    motor: "Suzuki",
  },
  {
    nama: "Ari",
    email: "ari@gmail.com",
    motor: "Ducati",
  },
  {
    nama: "Miki",
    email: "miki@gmail.com",
    motor: "Honda",
  },
];

const ply = _.find(player, { nama: "Miki" });
console.log(ply);
