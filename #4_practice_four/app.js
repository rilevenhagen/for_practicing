
const dolphinsScoreAverage = (96 + 108 + 89) /3;
const koalasScoreAverage = (88 + 91 + 100) / 3;

console.log(dolphinsScoreAverage);
console.log(koalasScoreAverage);

if(dolphinsScoreAverage > koalasScoreAverage) {
    console.log(`Dolphins are que winners, with the average of  ${dolphinsScoreAverage
} points🏆🏆🏆🏆!!!`)
} else {
    console.log(`koalas are que winners, with the average of ${koalasScoreAverage
} points🏆🏆🏆🏆!!!`)
}

//extra

const dolphinsScoreAverageExtra = (97 + 112 + 101) /3;
const koalasScoreAverageExtra = (109 + 95 + 110) /3;


if (dolphinsScoreAverageExtra > koalasScoreAverageExtra && dolphinsScoreAverageExtra >= 100) {
    console.log(`Dolphins are que winners, with the average of  ${dolphinsScoreAverageExtra
} points🏆🏆🏆🏆!!!`)
} else if (koalasScoreAverageExtra > dolphinsScoreAverageExtra && koalasScoreAverageExtra >= 100){
    console.log(`koalas are que winners, with the average of ${koalasScoreAverageExtra} points🏆🏆🏆🏆!!!`)
};

//extra2

const dolphinsScoreAverageExtra2 = (97 + 112 + 101) / 3;

const koalasScoreAverageExtra2  = (109 + 95 + 106) / 3;

if (dolphinsScoreAverageExtra2 > koalasScoreAverageExtra2){
    console.log('dolphins won the trophy🏆🏆🏆🏆!!!')
} else if (dolphinsScoreAverageExtra2 < koalasScoreAverageExtra2 ){
    console.log('koalas won the trophy🏆🏆🏆🏆!!!')
} else if (dolphinsScoreAverageExtra2 === koalasScoreAverageExtra2 && dolphinsScoreAverageExtra2 >= 100 && koalasScoreAverageExtra2 >= 100) {
    console.log('"🚨 it was a draw, nobody won 🚨"')
} else {
    console.log("🚨 Nobody won 🚨")
}
;
