const Boxscores = require('mlbboxscores');
const Plays = require('mlbplays');
const ProbablePitchers = require('mlbprobablepitchers');

const mlbboxscores = new Boxscores({
  path: 'year_2018/month_01/day_22/',
});
mlbboxscores.get((err, boxscores) => {
  if (err) {
    console.log(err);
    return;
  }

  const data = boxscores.map(bs => ({
      gamePk: bs.game_pk,
      date: bs.date,
      away: {
        name: bs.away_fname,
      },
      home: {
        name: bs.home_fname,
      }
    })
  );

  console.log(data);
});

// const mlbplays = new Plays({
//   path: 'year_2011/month_07/day_23/',
// });
// mlbplays.get((err, plays) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//
//   console.log(plays);
// });

// ProbablePitchers.get('2011/07/23', (err, matchups) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//
//   console.log(matchups);
// });
