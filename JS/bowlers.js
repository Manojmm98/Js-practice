let request = require("request");
let cheerio = require("cheerio");
//let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
request(url, cb)
function cb(error,res,html)
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
    let selectorTool = cheerio.load(html);
    let bowlersTable = selectorTool(".table.bowler");
    // let stringHtml = "";
    // for(let i=0;i<bowlersTable.length;i++)
    // {
    //     stringHtml = stringHtml+selectorTool(bowlersTable[i]);
    // }
    // console.log(stringHtml);
    let hwname="" ;
    let hwickets=0;
    for(let i=0;i<bowlersTable.length;i++)
    {
    let bowlersrow =selectorTool(bowlersTable[i]).find("tbody tr");
    for(let j=0;j<bowlersrow.length;j++)
    {
        let bowlerscolom = selectorTool(bowlersrow[j]).find("td");
        let bname = selectorTool(bowlerscolom[0]).text();
        let wicktes = selectorTool(bowlerscolom[4]).text();
        console.log("bowlersname--->",bname,"wickets-->",wicktes);
        if(wicktes>hwickets)
        {
            hwickets=wicktes;
            hwname= bname;
        }
    }
    // console.log("`````````````````")
    // for (let i = 0; i < bothBowlerTable.length; i++) {
    //     // tableHtml += selTool(bothBowlerTable[i]).html();
    //     let playersRow = selTool(bothBowlerTable[i]).find("tbody tr");
    //     for (let j = 0; j < playersRow.length; j++) {
    //         let allcolOfPlayer = selTool(playersRow[j]).find("td");
    //         let name = selTool(allcolOfPlayer[0]).text();
    //         let wicket = selTool(allcolOfPlayer[4]).text();
    //         console.log("name", name, "wicket", wicket);
console.log("``````````````````````````")
    }
    console.log(hwname,hwickets);
}
   
