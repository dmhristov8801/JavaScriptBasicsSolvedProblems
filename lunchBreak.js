function lunchBreak(input) {

    let seriesName = (input[0]);
    let episodeTime = Number(input[1]);
    let restTime = Number(input[2]);
    let lunchTime = restTime / 8;
    let resting = restTime / 4;
    let totalTime = restTime - lunchTime - resting;

    let diff = Math.abs(totalTime - episodeTime);

    if (episodeTime<=totalTime) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(diff)} minutes free time.`)

    } else if (episodeTime>totalTime) {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(diff)} more minutes.`)
    }


}
lunchBreak([`Teen Wolf`,`48`,`60`])