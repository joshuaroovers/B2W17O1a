var words = ["appel","aldus","afwas","aftel","aarde","armen","actie","apart","adres","avond","aders","alarm","boten","balen","beter","bomen","boren","boven","boxen","brood","broek","brand","breed","benen","beeld","brief","beten","basis","blauw","beren","buren","banen","bloed","broer","blond","boter","beleg","breng","baken","beker","blind","bezig","baden","bedel","bazen","bazin","baren","beden","beken","bezem","baard","bidet","breuk","conus","cello","creme","cloud","cacao","cadet","cavia","ceder","combi","china","clown","draai","deden","dalen","derde","delen","dwaas","daden","dader","dames","diner","datum","dozen","dreun","duits","dagen","deren","dwerg","dwaal","dwing","druil","droog","draad","dweil","drank","duren","dwars","drugs","daten","daler","doorn","disco","degen","droom","dient","drone","dadel","duwen","druif","deken","deler","elven","eigen","enger","engel","elder","enkel","effen","email","egaal","fiets","friet","files","forel","films","feest","fruit","falen","flora","fauna","feeen","freak","forum","fusie","geven","gaven","groen","graai","getal","grens","grond","groef","graal","gewei","games","grote","groet","garen","gebak","graag","genre","glans","geluk","geeuw","horen","heren","halen","hagel","haren","helen","harde","hemel","hoofd","huren","hamer","haken","heden","hotel","hobby","heler","hoger","ieder","index","immer","icoon","inlog","inzet","innig","jovel","jaren","jicht","jabot","jacht","jaden","jagen","jager","japon","jarig","jawel","jeans","jemig","jeugd","joint","jonas","joule","koken","kreet","koker","kerst","kegel","koude","kader","krent","kamer","kaars","kaart","kraan","krant","keren","kruid","kerel","kubus","kraal","kleur","kroon","klein","korst","klopt","kabel","kunst","kopje","krans","klimt","kater","klink","kudde","kruis","lopen","laten","lepel","links","laden","leven","lezen","lucht","lenen","laser","lente","licht","lader","leder","lunch","leger","leden","legen","lagen","lezer","lever","lingo","loper","luier","lager","leeuw","maand","malen","maken","media","meter","motor","maten","markt","mazen","molen","meest","meren","model","meden","maden","macht","meeuw","mager","magen","maren","manen","noord","nieuw","negen","namen","neven","nodig","naden","neder","nemen","onder","optel","ovaal","ovale","onwel","optie","orden","oppas","ouder","ophef","oases","palen","plein","pegel","paars","piano","pixel","paden","pasta","pizza","poten","paard","puber","pauze","preek","polis","pater","proef","panda","penis","prins","pluto","polen","plint","quota","quant","quark","queue","quilt","quote","robot","reken","raden","regen","radio","rente","regio","rugby","reden","roken","ruzie","ruist","regel","racen","races","riool","ramen","radar","roman","rokje","razen","roede","staan","staal","speel","steeg","stoel","stook","steek","schep","stoep","shirt","samen","sites","sport","spalk","sjaal","storm","staat","steun","strak","serie","shows","schat","snoep","sfeer","smeer","speer","scene","speld","smeed","smaak","super","stand","steer","smelt","sedan","skier","sluis","sneer","steel","truck","terug","typen","talen","taboe","tegel","taart","tafel","trouw","teken","teren","taken","treur","tenen","titel","thuis","tiara","teder","toets","tabak","trein","tarwe","telen","teler","uiten","uilig","uitje","uiver","ultra","uniek","uppie","uraan","uiers","velen","vloer","video","varen","vegen","veren","vader","vaten","vuren","vrouw","vlees","vogel","vroeg","vezel","veins","vorst","veder","vanaf","vieze","veger","villa","veler","vrede","vries","woord","wagen","wonen","waren","warme","weten","water","weren","wazig","wegen","weven","wezen","weken","wraak","wilde","wreed","wrede","wenst","woest","xenon","yacht","yucca","zwaar","zware","zesde","zagen","zalig","zomer","zeden","zwart","zeven","zicht","zadel","zweet","zenuw","zweer","zweef","zaden","zaken","zeker","zever","zeeen"];

b = 0
turnteam1 = true
turnteam2 = false


var maincontainer = document.createElement("div")
document.body.appendChild(maincontainer)

var Container1 = document.createElement("div")
maincontainer.appendChild(Container1)
//#region                              //this container
var Inbox1 = document.createElement("div")
Container1.appendChild(Inbox1)

var text = document.createElement("div")
Inbox1.appendChild(text)
text.innerHTML = "Team1's guess:"
var InputUser = document.createElement("input")
Inbox1.appendChild(InputUser)

var button = document.createElement("button")
Container1.appendChild(button)
button.innerHTML = "CHECK"
//#endregion
var Containerletters = document.createElement("div")
maincontainer.appendChild(Containerletters)
 

style()
function style()
{
    
    Containerletters.style.margin = "110px"
    Containerletters.style.marginTop = "22px"

    for(y = 0 ; y < 5; y++)
    {
        for(x = 0 ; x < 5; x++)
        {
            var letter = document.createElement("div")
            Containerletters.appendChild(letter)
            letter.innerHTML = (x+1)
            letter.id = "box" + (y+1) + "-" + (x+1)
            letter.style.display = "inline-block"
            letter.style.width = "70px"
            letter.style.height = "70px"
            letter.style.border = "black solid 2px"
            letter.style.fontSize = "55px"
            letter.style.textAlign = "center"
            letter.style.margin = "1px"
        }
    }   
    Container1.style.width = "auto"
    Container1.style.height = "25%"
    Container1.style.backgroundColor = "rgba(255,255,255,0)"
    Container1.style.borderRight = "black 1px solid"

    maincontainer.style.width = "40%"
    maincontainer.style.height = "600px"
    maincontainer.style.border = "black solid 2px"
    maincontainer.style.marginLeft = "30%"
    maincontainer.style.marginRight = "30%"
    maincontainer.style.backgroundColor = "rgba(255,255,255,0.6)"

    button.style.position = "absolute"
    button.style.marginTop = "100px"
    button.style.marginLeft = "260px"

    Inbox1.style.marginTop = "50px"
    Inbox1.style.position = "absolute"

    text.style.marginRight = "40px"
    text.style.marginLeft = "45px"
    text.style.display = "inline-block"
    text.style.fontWeight = "700"
    text.style.fontSize = "20px"
 


    inputword = words[Math.floor(Math.random() * words.length)]
    //console.log(inputword)
    word1 = inputword.split("")

    for(x = 0; x < 5; x++)
    {
        ID = "box" + (x+1) + "-1"
        document.getElementById(ID).innerHTML = word1[0]
        document.getElementById(ID).style.backgroundColor = "rgba(0,255,0,0.5)"
    }
    
    

    button.onclick = function()
    {
        checkword = InputUser.value
        word2 = checkword.split("") 
        if(word2.length < 5 || word2.length > 5)
        {
            alert("Alleen vijf letter woorden")
        }
        else
        {
            CHECK()
        }
    }

}
function CHECK()
{
    
    checkword = InputUser.value
    
    word1 = inputword.split("")
    word2 = checkword.split("") 
    b++
    for(z = 0; z < 5; z++)
    {
        ID = "box" + b + "-" + (z+1)
        document.getElementById(ID).innerHTML = word2[z]
    }

    for(x = 0; x < 5; x++)
    {
        ID = "box" + b + "-" + (x+1)
        
        if (word1[x] === word2[x])
        {
            document.getElementById(ID).style.backgroundColor = "rgba(0,255,0,0.5)"
            document.getElementById(ID).style.borderRadius = "0px 0px 0px 0px"
            
        }
        else
        {
            document.getElementById(ID).style.backgroundColor = "rgba(255,0,0,0.5)"
            document.getElementById(ID).style.borderRadius = "0px 0px 0px 0px"
            
        }
        
    }
    
    for(z = 0; z < 5; z++)
    { 
        
        for(y = 0; y < 5; y++)
        {
            ID = "box" + b + "-" + (y+1)
            if(word1[z] === word2[y] && word1[y] != word2[y] && word1.includes(word2[y]) === true)
            {
                document.getElementById(ID).style.backgroundColor = "rgba(255,240,0,0.5)"
                document.getElementById(ID).style.borderRadius = "1000px 1000px 1000px 1000px"
                
                word1[z] = null
                word2[y] = null
            }
            else if(word1[y] === word2[y])
            {
                word1[y] = null
                word2[y] = null
            }
        }                            
    }  

    if(inputword === InputUser.value)
    {
        
        if(turnteam1 === true)
        {
            setTimeout(function(){
                alert("Team 1 Wint!")
                restart = prompt("Wilt u opnieuw beginnen?\nj/n")
                if(restart === "j" || restart === "J")
                {
                    location.reload()
                }
                else if(restart === "n" || restart === "N")
                {
                    window.close()
                }
            }, 100)
        }
        if(turnteam2 === true)
        {
            setTimeout(function(){
                alert("Team 2 Wint!")
                restart = prompt("Wilt u opnieuw beginnen?\nj/n")
                if(restart === "j" || restart === "J")
                {
                    location.reload()
                }
                else if(restart === "n" || restart === "N")
                {
                    window.close()
                }
            }, 100)
        }
    }
    if(b === 5)
    {
        b = 0
        if(turnteam1 === true)
        {
            setTimeout(function(){alert("Team 2 is aan de beurt")},100)
            text.innerHTML = "Team2's guess:"
            turnteam1 = false
            turnteam2 = true
        }
        else if(turnteam2 === true)
        {
            setTimeout(function(){alert("Team 1 is aan de beurt")},100)
            text.innerHTML = "Team1's guess:"
            turnteam2 = false
            turnteam1 = true
        }
    }
}