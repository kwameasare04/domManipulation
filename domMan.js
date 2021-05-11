function featureCheck(){
    try{
eval("`test string`;");
    }
    catch (e){  return false;}

return true;
}

function addScript(type){
var el = document.createElement("script");
el.src = "src/" + type + ".js"
document.body.appendChild(el);
}

if(featureCheck()){
    addScript("es6");
}
else {
    addScript("es5");
} 