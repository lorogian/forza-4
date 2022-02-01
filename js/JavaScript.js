var turni=1;
var posizione=[];
var turno=1;
function cella(p) 
{
    
    while (posizione[p]==1 || posizione[p]==2) 
    {
        p=p-7;
    }
    
    if (turni==1) 
    {
         
        document.getElementById(p).style.backgroundColor="red";
        controllo=turni;
        posizione[p]=1;
        turni++;
        
    }
    else if (turni==2)
    {
        document.getElementById(p).style.backgroundColor="black";
        controllo=turni;
        posizione[p]=2;
        turni--;
        
    }
    for (let i = 0; i < 42; i++) 
    {
        if (posizione[i]==posizione[i+1] && posizione[i+1] == posizione[i+2] && posizione[i+2] == posizione[i+3] && posizione[i]==controllo)
        {
            window.alert( "Ha vinto il giocatore"+ controllo +"!!");
            location.reload();
            
        } 
        else if (posizione[i]==posizione[i+7] && posizione[i+7] == posizione[i+14] && posizione[i+14] == posizione[i+21] && posizione[i]==controllo) 
        {
            window.alert( "Ha vinto il giocatore"+ controllo +"!!");
            location.reload();
            
        }
        else if (posizione[i]==posizione[i+8] && posizione[i+8] == posizione[i+16] && posizione[i+16] == posizione[i+24] && posizione[i]==controllo) 
        {
            window.alert( "Ha vinto il giocatore"+controllo+"!!");
            location.reload();
            
        }
        else if (posizione[i]==posizione[i+6] && posizione[i+6] == posizione[i+12] && posizione[i+12] == posizione[i+18] && posizione[i]==controllo) 
        {
            window.alert( "Ha vinto il giocatore"+controllo+"!!");
            location.reload();
            
        }
    }
}
