module.exports = {
    mlabKey: process.env.MLABKEY,
    auth0 : {
      redirectUri: process.env.AUTH_REDIRECT
    }
};


// heroku config:set AUTH_REDIRECT=http://standupstash.com/callback -a standup-stash
