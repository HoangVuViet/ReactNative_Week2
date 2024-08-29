var dolphinsScore=[97,112,100];
var koalasScore=[109,95,105];
var dolphinsTotal=0;
var koalasTotal=0;

dolphinsScore.forEach(function(element){
    dolphinsTotal+=element;
})
koalasScore.forEach(function(element){
    koalasTotal+=element;
})

//Task1:
const calcAverage = (scores) => {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
};

//Task2:
const dolphinsAverage = calcAverage(dolphinsScore);
const koalasAverage = calcAverage(koalasScore);
console.log(`Dolphins Average: ${dolphinsAverage}`);
console.log(`Koalas Average: ${koalasAverage}\n`);

//Task3:
const checkWwinner = (avgDolphins,avgKoalas) => {
  if (avgDolphins>avgKoalas){
      if (avgDolphins>=2*avgKoalas){
          console.log("Dolphins win ("+avgDolphins.toFixed()+" vs "+avgKoalas.toFixed()+")")
      }else console.log("No winner!")
  }
  if (avgDolphins<avgKoalas){
      if (avgKoalas>=2*avgDolphins){
          console.log("Koalas win ("+avgKoalas.toFixed(2)+" vs "+avgDolphins.toFixed(2)+")")
      }else console.log("No winner!")
  }
  if (avgDolphins==avgKoalas){
      console.log("Draw ("+avgDolphins.toFixed(2)+" vs "+avgKoalas.toFixed(2)+")")
  }
}
//Task4:
checkWwinner(calcAverage( dolScore=[44,23,71]),calcAverage(koaScore=[65,54,49]))
checkWwinner(calcAverage( dolScore=[85,54,41]),calcAverage(koaScore=[23,34,27]))


// var dolphinsAverage=dolphinsTotal/(dolphinsScore.length);
// var koalasAverage=koalasTotal/(koalasScore.length);
// console.log("Dolphins Average: "+dolphinsAverage.toFixed(2));
// console.log("Koalas Average: "+koalasAverage.toFixed(2));


