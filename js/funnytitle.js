var OriginTitle=document.title;
var titleTime;
document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        document.title='(๑>؂<๑) See you~~';
        clearTimeout(titleTime);
        titleTime=setTimeout(function(){document.title=OriginTitle;},1000);
    }else{
        document.title='(^∀^)/ Welcome back!!';
        clearTimeout(titleTime);
        titleTime=setTimeout(function(){document.title=OriginTitle;},1000);
    }
});
