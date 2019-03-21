
module.exports = function getLoveTrianglesCount(preferences = []) {
    var temp=0;
    for(var i=0; i<preferences.length-2; i++){
        for(var j=i+1; j<preferences.length-1; j++){
            for(var k=j+1; k<preferences.length; k++){
                var comp =[i,j,k];
                if((comp.includes(preferences[i]-1)&&preferences[i]!=preferences[j]&&preferences[i]!=preferences[k]&&preferences[j]!=preferences[k])&&comp.includes(preferences[j]-1)&&comp.includes(preferences[k]-1)){
                    if (preferences[i]!=i+1&&preferences[j]!=j+1&&preferences[k]!=k+1){
                        temp++; }
                   
                }
            }
        }
    }
    return temp;
};
