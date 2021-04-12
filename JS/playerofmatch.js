let request = require('request');
let cheerio = require('cheerio');
let url = ("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results");
request(url, cb);
function cb(error,res,html)
{
    if(error)

    {
        console.log(error);
    }
    else{
        extractHtml(html);
    }
}
function extractHtml(html){
    let selTool = cheerio.load(html);
    let matchCard = selTool(".col-md-8.col-16");
     //console.log(matchCard.length); 
     for(let i = 0; i < matchCard.length; i++){
         let fullscorecard = selTool(matchCard[i]).find(".btn.btn-sm.btn-outline-dark.match-cta");
         //console.log(scorecard);
         let scorecard = selTool(fullscorecard[2]).attr("href");
         //console.log(scorecard);
         let fulllink = "https://www.espncricinfo.com"+scorecard;
         //console.log(fulllink);
        getplayerofmatch(fulllink);
     }
}
function getplayerofmatch(fulllink)
{
    request(fulllink, cb);
    function cb(error,res,html){
        if(error)
        {
            console.log(error);
        }
        else{
            extractplayerofmatch(html);
        }
    }
}
function extractplayerofmatch(html){
    let selTool = cheerio.load(html);
    let playerofmatch = selTool(".best-player-name").text();
    console.log(playerofmatch);
}