function toggleLD() 
{
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function initialize()
{
    var allTeams = ["Almeria", "Athletic Bilbao","Atletico Madrid","Barcelona","Cadiz","Celta Vigo","Elche","Espanyol","Getafe","Girona","Mallorca","Osasuna","Rayo Vallecano","Real Betis","Real Madrid","Real Sociedad","Sevilla","Valencia","Valladolid","Villarreal"];
    console.log(allTeams);

    testLoop();
}

function testLoop()
{
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
    for (let x=0; x < 20; x++)
    {
        var a1=document.getElementById(clubIDs[x]);
        console.log(clubIDs[x]);
        a1.innerHTML= allTeams[x];

        var a2=document.getElementById(mpIDs[x]);
        console.log(mpIDs[x]);
        a2.innerHTML= 0;

        var a3=document.getElementById(wIDs[x]);
        console.log(wIDs[x]);
        a3.innerHTML= 0;

        var a4=document.getElementById(dIDs[x]);
        console.log(lIDs[x]);
        a4.innerHTML= 0;

        var a5=document.getElementById(lIDs[x]);
        a5.innerHTML= 0;

        var a6=document.getElementById(GFIDs[x]);
        a6.innerHTML= 0;

        var a7=document.getElementById(GAIDs[x]);
        a7.innerHTML= 0;

        var a8=document.getElementById(GDIDs[x]);
        a8.innerHTML= 0;

        var a9=document.getElementById(ptsIDs[x]);
        a9.innerHTML= 0;
        
        console.log("x is "+x);
        console.log(allTeams.length);
    }
}