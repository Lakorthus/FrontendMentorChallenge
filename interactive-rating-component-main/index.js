
   
var value;
var oldValue='';
var error=document.getElementById('error');
var a;
function ratingValue(v){
    value=v;
    if(oldValue!=''){
        a=document.getElementsByClassName('input-rating')[parseInt(oldValue)-1]; 
        oldValue='';
    }
    a=document.getElementsByClassName('input-rating')[parseInt(value)-1];
    oldValue=value;

    
    error.style.display="none";
}

function afterRating(){

    if(value==undefined){
        error.innerHTML='*Please select the rating';
    }
    else
    {
        var beforeRating=document.getElementById('beforeRating');
        beforeRating.style.display='none';

        var activeRating=document.getElementById('activeRating');
        activeRating.style.display='block';

        var valueRate=document.getElementById('valueRate');
        valueRate.innerHTML=value;

    }
}