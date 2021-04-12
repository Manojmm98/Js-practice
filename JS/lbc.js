let request = require("request");
let cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";
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
    let allballcommentry = selectorTool(".col-14.col-md-15.col-lg-14 .match-comment-long-text");

    let lastballcommentry = selectorTool(allballcommentry[0]).text();
    console.log(lastballcommentry);
}