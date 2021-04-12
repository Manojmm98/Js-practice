let request = require('request');
let cheerio = require('cheerio');
let url = ("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results");
request(url, cb);
function cb(err,res,html) {
    if (err){
        console.log(err);
    }else{
        extractHtml(html);
    }
}
function extractHtml(html){
 let selTool = cheerio.load(html);
 let matchcard = selTool(".col-md-8.col-16");
 let totallink=[];
 for (let i=0;i<matchcard.length;i++) {
     let scorecard =selTool(matchcard[i]).find(".btn.btn-sm.btn-outline-dark.match-cta");
     let link = selTool(scorecard[2]).attr("href");
     //console.log(link);
     let fulllink = "https://www.espncricinfo.com"+link;
     //console.log(fulllink);
     //getPlayerofmatch(fulllink);
     totallink.push(fulllink);

 }
 getplayerofmatch(totallink,0);
}
// function getPlayerofmath(fulllink) {
//     request(fulllink, cb);
//     function cb(err,res,html) {
//         if (err){
//             console.log(err);
//         }
//         else{
//           extractplayer(html);
//         }
//     }
// // }
// function extractPlayer(html) {
//     let selTool = cheerio.load(html);
//     let playername = selTool(".best-player-content").text();
//     console.log(playername);
// }
function getplayerofmatch(totallink,n){
    if(n==totallink.length){
         return;
    }
   request(totallink[n],function(err,res,html){
       if(err){
           console.log(err);
       }
       else{
           extractplayer(html);
           //console.log(html);
           getplayerofmatch(totallink,n+1);
       }
   })
}
function extractplayer(html){
    let selTool = cheerio.load(html);
    let playerofmatch = selTool(".best-player-name").text();
    console.log(playerofmatch);
}