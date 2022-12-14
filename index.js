//This is for dark mode
var toggleC = 2;

// All the teams and the IDs for the table content
var allTeams = ["Almeria", "Athletic Bilbao","Atletico Madrid","Barcelona","Cadiz","Celta Vigo","Elche","Espanyol","Getafe","Girona","Mallorca","Osasuna","Rayo Vallecano","Real Betis","Real Madrid","Real Sociedad","Sevilla","Valencia","Valladolid","Villarreal"];
var clubIDs = ["posOneClub","posTwoClub","posThreeClub","posFourClub","posFiveClub","posSixClub","posSevenClub","posEightClub","posNineClub","posTenClub","posElevenClub","posTwelveClub","posThirteenClub","posFourteenClub","posFifteenClub","posSixteenClub","posSeventeenClub","posEighteenClub","posNineteenClub","posTwentyClub"];
var mpIDs = ["posOneMP","posTwoMP","posThreeMP","posFourMP","posFiveMP","posSixMP","posSevenMP","posEightMP","posNineMP","posTenMP","posElevenMP","posTwelveMP","posThirteenMP","posFourteenMP","posFifteenMP","posSixteenMP","posSeventeenMP","posEighteenMP","posNineteenMP","posTwentyMP"];
var wIDs = ["posOneW","posTwoW","posThreeW","posFourW","posFiveW","posSixW","posSevenW","posEightW","posNineW","posTenW","posElevenW","posTwelveW","posThirteenW","posFourteenW","posFifteenW","posSixteenW","posSeventeenW","posEighteenW","posNineteenW","posTwentyW"];
var dIDs = ["posOneD","posTwoD","posThreeD","posFourD","posFiveD","posSixD","posSevenD","posEightD","posNineD","posTenD","posElevenD","posTwelveD","posThirteenD","posFourteenD","posFifteenD","posSixteenD","posSeventeenD","posEighteenD","posNineteenD","posTwentyD"];
var lIDs = ["posOneL","posTwoL","posThreeL","posFourL","posFiveL","posSixL","posSevenL","posEightL","posNineL","posTenL","posElevenL","posTwelveL","posThirteenL","posFourteenL","posFifteenL","posSixteenL","posSeventeenL","posEighteenL","posNineteenL","posTwentyL"];
var GFIDs = ["posOneGF","posTwoGF","posThreeGF","posFourGF","posFiveGF","posSixGF","posSevenGF","posEightGF","posNineGF","posTenGF","posElevenGF","posTwelveGF","posThirteenGF","posFourteenGF","posFifteenGF","posSixteenGF","posSeventeenGF","posEighteenGF","posNineteenGF","posTwentyGF"];
var GAIDs = ["posOneGA","posTwoGA","posThreeGA","posFourGA","posFiveGA","posSixGA","posSevenGA","posEightGA","posNineGA","posTenGA","posElevenGA","posTwelveGA","posThirteenGA","posFourteenGA","posFifteenGA","posSixteenGA","posSeventeenGA","posEighteenGA","posNineteenGA","posTwentyGA"];
var GDIDs = ["posOneGD","posTwoGD","posThreeGD","posFourGD","posFiveGD","posSixGD","posSevenGD","posEightGD","posNineGD","posTenGD","posElevenGD","posTwelveGD","posThirteenGD","posFourteenGD","posFifteenGD","posSixteenGD","posSeventeenGD","posEighteenGD","posNineteenGD","posTwentyGD"];
var ptsIDs = ["posOnePts","posTwoPts","posThreePts","posFourPts","posFivePts","posSixPts","posSevenPts","posEightPts","posNinePts","posTenPts","posElevenPts","posTwelvePts","posThirteenPts","posFourteenPts","posFifteenPts","posSixteenPts","posSeventeenPts","posEighteenPts","posNineteenPts","posTwentyPts"];

//All the scores for all the teams in alphabetical order
var allTeamsMP = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var allTeamsW = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var allTeamsD = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var allTeamsL = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var allTeamsGF = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var allTeamsGA = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var allTeamsGD = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var allTeamsPts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//All the matchsays are recorded inside there arrays
var matchday1 = [];
var matchday2 = [];
var matchday3 = [];
var matchday4 = [];
var matchday5 = [];
var matchday6 = [];
var matchday7 = [];
var matchday8 = [];
var matchday9 = [];
var matchday10 = [];
var matchday11 = [];
var matchday12 = [];
var matchday13 = [];
var matchday14 = [];
var matchday15 = [];
var matchday16 = [];
var matchday17 = [];
var matchday18 = [];
var matchday19 = [];
var matchday20 = [];


const topToBottom = [];
//Some global variables to be used later
var biggestValue;
var posBiggestValue;
const allTeamsPtsCopy = [];

var buttonClickedAmount = 0;
var table = document.getElementById("leagueTable");
var matchdaynum = 0;


//Toggles Light or Dark Mdode
function toggleLD() 
{
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (toggleC%2==0)
    {
        document.getElementById('genButton').style.backgroundColor='White';
        document.getElementById('genButton').style.color='Black';    

        document.getElementById('skipButton').style.backgroundColor='White';
        document.getElementById('skipButton').style.color='Black';   
    }
    if (toggleC%2!=0)
    {
        document.getElementById('genButton').style.backgroundColor='Black';
        document.getElementById('genButton').style.color='White';    

        document.getElementById('skipButton').style.backgroundColor='Black';
        document.getElementById('skipButton').style.color='White';  
    }
    toggleC++;
}

//This will set up all the functions when page is loaded/reloaded
function initialize()
{
    var table = document.getElementById("leagueTable");
    table.style.display = "none";

    for (let x=0; x < 20; x++)
    {
        var a1=document.getElementById(clubIDs[x]);
        a1.innerHTML= allTeams[x];

        var a2=document.getElementById(mpIDs[x]);
        a2.innerHTML= allTeamsMP[x];

        var a3=document.getElementById(wIDs[x]);
        a3.innerHTML= allTeamsW[x];

        var a4=document.getElementById(dIDs[x]);
        a4.innerHTML= allTeamsD[x];

        var a5=document.getElementById(lIDs[x]);
        a5.innerHTML= allTeamsL[x];

        var a6=document.getElementById(GFIDs[x]);
        a6.innerHTML= allTeamsGF[x];

        var a7=document.getElementById(GAIDs[x]);
        a7.innerHTML= allTeamsGA[x];

        var a8=document.getElementById(GDIDs[x]);
        a8.innerHTML= allTeamsGD[x];

        var a9=document.getElementById(ptsIDs[x]);
        a9.innerHTML= allTeamsPts[x];
    }
}

function buttonClicked()
{
    //console.log("BUTTON CLICKED AMOUNT:");
    //console.log(buttonClickedAmount);
    if (buttonClickedAmount==0)
    {
        var table = document.getElementById("leagueTable");
        table.style.display = "block";
        var but = document.getElementById("genButton");
        but.innerHTML = "Start Season";    
    }
    if (buttonClickedAmount >= 1)
    {
        var but = document.getElementById("genButton");
        but.innerHTML = "Next MatchDay";
        matchmaker();
        restructureTable();
    }
    if (buttonClickedAmount>21)
    {
        console.log("This shouldn't print until all matchdays are certain");
        restructureTable();
    }
    buttonClickedAmount++;
    matchdaynum++;
}

function matchmaker()
{   
    var allTeamsDup = ["Almeria", "Athletic Bilbao","Atletico Madrid","Barcelona","Cadiz","Celta Vigo","Elche","Espanyol","Getafe","Girona","Mallorca","Osasuna","Rayo Vallecano","Real Betis","Real Madrid","Real Sociedad","Sevilla","Valencia","Valladolid","Villarreal"];
    if (matchdaynum==1)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday1.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md1").innerHTML = matchday1;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        
    }

    if (matchdaynum==2)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday2.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md2").innerHTML = matchday2;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }
    
    if (matchdaynum==3)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday3.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md3").innerHTML = matchday3;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }


    if (matchdaynum==4)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday4.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md4").innerHTML = matchday4;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==5)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday5.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md5").innerHTML = matchday5;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==6)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday6.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md6").innerHTML = matchday6;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==7)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday7.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md7").innerHTML = matchday7;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==8)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday8.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md8").innerHTML = matchday8;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==9)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday9.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md9").innerHTML = matchday9;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==10)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday10.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md10").innerHTML = matchday10;
        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==11)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday11.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md11").innerHTML = matchday11;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==12)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday12.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md12").innerHTML = matchday12;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==13)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday13.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md13").innerHTML = matchday13;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==14)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday14.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md14").innerHTML = matchday14;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==15)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday15.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md15").innerHTML = matchday15;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==16)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday16.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md16").innerHTML = matchday16;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==17)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday17.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md17").innerHTML = matchday17;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==18)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday18.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md18").innerHTML = matchday18;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==19)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday19.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md19").innerHTML = matchday19;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }

    if (matchdaynum==20)
    {        
        for (var z=0; z <21; z++)
        {
            var x = Math.floor(Math.random() * (allTeamsDup.length));
            matchday20.push(allTeamsDup[x]);
            allTeamsDup.splice(x, 1);
        }
        document.getElementById("md20").innerHTML = matchday20;

        for (var r = 0; r <20; r+=2)
        {
            createMatch(matchday1[r], matchday1[r+1], matchday1);
        }
        

    }
}

function createMatch(teamA, teamB, matchday)
{
    var teamAPos = allTeams.indexOf(teamA);
    var teamBPos = allTeams.indexOf(teamB);

    teamAScore = Math.floor(Math.random() * 10);
    teamBScore = Math.floor(Math.random() * 10);

    if (teamAScore > teamBScore)
    {
    //Matches Won/Lost:    
        allTeamsW[teamAPos] +=1;
        document.getElementById(wIDs[teamAPos]).innerHTML = allTeamsW[teamAPos];
    //Points
        allTeamsPts[teamAPos] +=3;
        document.getElementById(ptsIDs[teamAPos]).innerHTML = allTeamsPts[teamAPos];

        allTeamsL[teamBPos] +=1;
        document.getElementById(lIDs[teamBPos]).innerHTML = allTeamsL[teamBPos];

        allTeamsPts[teamBPos] +=0;
        document.getElementById(ptsIDs[teamBPos]).innerHTML = allTeamsPts[teamBPos];
    }
    
    if (teamBScore > teamAScore)
    {
    //Matches Won/Lost:    
        allTeamsW[teamBPos] +=1;
        document.getElementById(wIDs[teamBPos]).innerHTML = allTeamsW[teamBPos];
    //Points
        allTeamsPts[teamAPos] +=0;
        document.getElementById(ptsIDs[teamAPos]).innerHTML = allTeamsPts[teamAPos];

        allTeamsL[teamAPos] +=1;
        document.getElementById(lIDs[teamAPos]).innerHTML = allTeamsL[teamAPos];

        allTeamsPts[teamBPos] +=3;
        document.getElementById(ptsIDs[teamBPos]).innerHTML = allTeamsPts[teamBPos];

    }
    else if (teamAScore==teamBScore)
    {
    //Matches Drawn:
        allTeamsD[teamAPos] +=1;
        document.getElementById(dIDs[teamAPos]).innerHTML = allTeamsD[teamAPos];

        allTeamsPts[teamAPos] +=1;
        document.getElementById(ptsIDs[teamAPos]).innerHTML = allTeamsPts[teamAPos];

        allTeamsD[teamBPos] +=1;
        document.getElementById(dIDs[teamAPos]).innerHTML = allTeamsD[teamBPos];

        allTeamsPts[teamBPos] +=1;
        document.getElementById(ptsIDs[teamBPos]).innerHTML = allTeamsPts[teamBPos];

    }

    document.getElementById(wIDs[teamAPos]).innerHTML = allTeamsW[teamAPos];

    //Matches Played:
    allTeamsMP[teamAPos] += 1;
    document.getElementById(mpIDs[teamAPos]).innerHTML = allTeamsMP[teamAPos];
    allTeamsMP[teamBPos] += 1;
    document.getElementById(mpIDs[teamBPos]).innerHTML = allTeamsMP[teamBPos];

    //Goals For:
    allTeamsGF[teamAPos] += teamAScore;
    document.getElementById(GFIDs[teamAPos]).innerHTML = allTeamsGF[teamAPos];

    allTeamsGF[teamBPos] += teamBScore;
    document.getElementById(GFIDs[teamBPos]).innerHTML = allTeamsGF[teamBPos];

    //Goals Against:
    allTeamsGA[teamAPos] += teamBScore;
    document.getElementById(GAIDs[teamAPos]).innerHTML = allTeamsGA[teamAPos];
    allTeamsGA[teamBPos] += teamAScore;
    document.getElementById(GAIDs[teamBPos]).innerHTML = allTeamsGA[teamBPos];

    //Goal Difference (Calculate Later)
    allTeamsGD[teamAPos] = (allTeamsGF[teamAPos] - allTeamsGA[teamAPos]);
    document.getElementById(GDIDs[teamAPos]).innerHTML = allTeamsGD[teamAPos];

    allTeamsGD[teamBPos] = (allTeamsGF[teamBPos] - allTeamsGA[teamBPos]);
    document.getElementById(GDIDs[teamBPos]).innerHTML = allTeamsGD[teamBPos];
}

function restructureTable()
{
    const topPositions = [];
    const topPositionsGD = [];
    const biggestValues = [];
    //biggestValue = Math.max(...allTeamsPts);

    for (i = 0; i < allTeamsPts.length; i++) 
    {
        allTeamsPtsCopy[i] = allTeamsPts[i];
    }
/*
    for (var a = 0; a <= allTeamsPtsCopy.length; a++)
    {
        var biggestValue = Math.max(...allTeamsPtsCopy);
        if (biggestValue == allTeamsPtsCopy[a])
        {
            topPositions.push(a);
            console.log("TOP POSITIONS:");
            console.log(topPositions);
        }
    }

    for (var k = 0; k < topPositions.length; k++)
    {
        topPositionsGD.push(getGD(topPositions[k]));
        console.log(topPositionsGD);
    }


    for (var L = 0; L <= topPositionsGD.length; L++)
    {
        var biggestGD = Math.max(...topPositionsGD);
        console.log(biggestGD);
        if (biggestGD == topPositionsGD[L])
        {
            var tempIndex = topPositionsGD.indexOf(topPositionsGD[L]);
            console.log("Temp Index");
            console.log(tempIndex);

            var topTeamI = topPositions[tempIndex];
            console.log("topTeamI");
            console.log(topTeamI);

            var topTeam = allTeams[topTeamI];
            console.log(topTeam);

            topPositions.splice[L,1];
            console.log(topPositions);
        }
    }

function getGD(team)
{
    return allTeamsGD[team];
}
*/

for (var x = 0; x <= allTeamsPtsCopy.length; x++)
{
    for (var y=1; y<= allTeamsPtsCopy.length; y++)
    {
        if (allTeamsPtsCopy[x] == allTeamsPtsCopy[y])
        {
        console.log("PTS equal");
            /*
            var tempIndexX = allTeamsPtsCopy.indexOf(allTeamsPtsCopy[x]);
            console.log("Temp X");
            console.log(tempIndexX);

            var tempIndexY = allTeamsPtsCopy.indexOf(allTeamsPtsCopy[y]);
            console.log("Temp Y");
            console.log(tempIndexY);
            */
            if (allTeamsGD[x] == allTeamsGD[y])
            {
                console.log("GD equal");
                if (allTeamsGF[x] > allTeamsGF[y])
                {
                    topToBottom.push(allTeams[x]);
                    console.log("ALL TEAMS");
                    console.log(allTeams[x]);
                    console.log(topToBottom);
                }
                if (allTeamsGF[x] < allTeamsGF[y])
                {
                    topToBottom.push(allTeams[y]);
                    console.log("ALL TEAMS");
                    console.log(allTeams[y]);
                    console.log(topToBottom);
                }
            }
        }
        if (allTeamsPtsCopy[x] > allTeamsPtsCopy[y])
        {
        console.log("PTS X higher");
        }
        if (allTeamsPtsCopy[x] < allTeamsPtsCopy[y])
        {
        console.log("PTS Y higher");
        }
    }
}


}

