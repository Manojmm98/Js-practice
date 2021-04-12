let request = require("request");
let cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
request(url, cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else{
        //console.log(html);
        extractHtml(html);
    }
}
function extractHtml(html)
{
    let selTool = cheerio.load(html);
    let totalteamname = [];
    let teamnameElem = selTool(".Collapsible h5");
    for(let i=0;i<teamnameElem.length;i++)
    {
        teamname = selTool(teamnameElem[i]).text();
        teamname = teamname.split("INNINGS")[0];
            console.log(teamname);
            totalteamname.push(teamname);
        
    }
let batsmantable = selTool(".table.batsman");
for(let i=0;i<batsmantable.length;i++)
{
   let batsmanname =selTool(batsmantable[i]).find("tbody tr .batsman-cell");
    for(let j=0;j<batsmanname.length;j++)
    {
        let nname = selTool(batsmanname[j]).text();
        console.log(nname+ " of " +totalteamname[i]);

    }
    console.log("--------------------------------------------------------");
}
}