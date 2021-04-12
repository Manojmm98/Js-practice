let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
let request = require("request");
let cheerio = require("cheerio");
console.log("Before");
request(url, cb);
function cb(error, response, html) {
    if (error) {
        console.log(error)
    } else {
        // console.log(html);
        extractHtml(html);
    }
}
function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let teamNameElemArr = selectorTool(".Collapsible h5");
    let teamNameArr = [];
    for (let i = 0; i < teamNameElemArr.length; i++) {
        let teamName = selectorTool(teamNameElemArr[i]).text();
        // console.log(teamName.split("INNINGS"));
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        teamNameArr.push(teamName);
       // console.log(teamNameArr);
    }
 let batsmantable =selectorTool(".table.batsman");
 for(let i=0;i<batsmantable.length;i++){
     let batsmannameAnchor =selectorTool(batsmantable[i]).find("tbody tr .batsman-cell a")
     for(let j=0;j<batsmannameAnchor.length;j++){
         let batsmanname =selectorTool(batsmannameAnchor[j]).text();
         let teamName = teamNameArr[i];
         let link =selectorTool(batsmannameAnchor[j]).attr("href");
         //printbirthday(html,link,teamName);
        // console.log(link+" "+teamName+" "+batsmanname);
        printbirthday(link,batsmanname,teamName);
      }
   }
 }
 function printbirthday(link,batsmanname,teamName){
     request(link, cb);
     function cb(err,res,html){
         if(err){
             console.log(error);
         }
         else{
             extractbirthday(html,batsmanname,teamName);
         }
     }
 }
 function extractbirthday(html,batsmanname,teamName)
 {
     let selectorTool = cheerio.load(html);
     let fullbirthday = selectorTool(".ciPlayerinformationtxt span");
     let birthday = selectorTool(fullbirthday[1]).text();
     console.log(batsmanname + " plays for " + teamName + " was born on " +birthday);
 }