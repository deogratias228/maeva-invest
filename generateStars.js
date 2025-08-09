const fs = require('fs');

const stars = Array.from({ length: 150 }, () => {
  const x = Math.floor(Math.random() * 1600);
  const y = Math.floor(Math.random() * 1000);
  return `${x}px ${y}px white`;
});
console.log(stars.join(',\n'));


fs.writeFileSync('stars.txt', stars.join(','));
console.log('✅ 150 étoiles générées dans stars.txt');
