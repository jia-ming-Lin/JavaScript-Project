/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScoure, activePlayer,playing;


//document.querySelector("#current-"+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML="<em>"+dice+"</em>";

//var x = document.querySelector('#score-0').textContent;
init();
document.querySelector('.btn-roll').addEventListener('click',function()
                                                    {
     if(playing){
    //1. Random.NUmber
    var dice = Math.floor(Math.random()*6)+1;
    //2. Display the ressult
    var diceDom =   document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';
    if(dice!==1){
        //add score;
        roundScore+=dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        document.querySelector('.dice').style.display='none';
        
    }
    else{
        
        
        nextPlayer();
    }
     }
    
});
document.querySelector('.btn-hold').addEventListener('click',function(){
        if(playing){     
        scores[activePlayer]+=roundScore;
             
             document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
            if(scores[activePlayer]>=25){
                document.querySelector('#name-'+activePlayer).textContent="Winner";
                document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                playing=false;
            }
            else{
              nextPlayer();
            }
        }
 });
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            //document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
            document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);
function init(){
    playing = true;
    scores=[0,0];
roundScore=0;
activePlayer=0;
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
};
           


