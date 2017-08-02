const BattlefieldStats = require('battlefield-stats');
const API_KEY = '23dbb2ac-3ef3-4057-8d61-15038b8bcf01' // from https://battlefieldtracker.com/site-api
const bf = new BattlefieldStats(API_KEY);

// All params mirror params listed at http://docs.trnbattlefield.apiary.io/#
const params = {
  platform: bf.Platforms.XBOX, // also you can use XBOX or PS4
  displayName: Darkwolf king54  // Or you can use personaId
}

// Proxies to all api routes found http://docs.trnbattlefield.apiary.io/#
const route = '/Stats/BasicStats';

bf.Api.request(route, params, (error, response) => {
  // response callback
  if (!error && response) {
    console.log(response);
  }
})
