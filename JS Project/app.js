//object for the queen
queen = {
    direction: "S",
    position: {
        x: 4,
        y: 4
    }
}

console.log("Queen position before code: [" + queen.position.x, queen.position.y+"]");

function changedirection(Steps,direction){
    var temp=0,temp1=0;
    switch(direction){

        case "S":
            temp = queen.position.y - Steps;
            if (temp >= 0 && temp < 8) {
                queen.position.y = queen.position.y - Steps;
            } else {
                console.log("Not in range");
            }
        break;
        case "N":
            temp = queen.position.y + Steps;
            if (temp < 8 && temp >= 0) {
                    queen.position.y = queen.position.y + Steps;
            } 
            else {
                    console.log("Not in range");
                }
        break;    

        case "E":
            temp = queen.position.x + Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.x = queen.position.x + Steps;
            } else {
                console.log("Not in range");
            }
        break;

        case "W":
            temp = queen.position.x - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.x = queen.position.x - Steps;
            } else {
                console.log("Not in range");
            }
        break;

        case "NE":
            temp = queen.position.y + Steps;
            temp1 = queen.position.x + Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.y = queen.position.y + Steps;
                    queen.position.x = queen.position.x + Steps;
                }
                else {
                    console.log("Not in range");
                }
            }
            else {
                console.log("Not in range");
            }
        break;

        case "SE":
            temp = queen.position.y - Steps;
            temp1 = queen.position.x + Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.y = queen.position.y - Steps;
                    queen.position.x = queen.position.x + Steps;
                }
                else {
                    console.log("Not in range");
                }
            }
            else {
                console.log("Not in range");
            }
        break;

        case "NW":
            temp = queen.position.y + Steps;
            temp1 = queen.position.x - Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.y = queen.position.y + Steps;
                    queen.position.x = queen.position.x - Steps;
                }
                else {
                    console.log("Not in range");
                }
            }
            else {
                console.log("Not in range");
            }
        break;

        case "SW":
            temp = queen.position.y - Steps;
            temp1 = queen.position.x - Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.y = queen.position.y - Steps;
                    queen.position.x = queen.position.x - Steps;
                }
                else {
                    console.log("Not in range");
                }
            }
            else {
                console.log("Not in range");
            }
        break;
        


    }
}


var move=["1E","2SW","3NW","2S","3W","1N"];
var i,len;
len=move.length;
for(i=0;i<len;i++)
{
    var data=move[i];
    var stepdata=data.charAt(0);
    var stepint=parseInt(stepdata);
    // console.log(typeof(stepint));
    data=data.substring(1);
    // console.log(typeof(data));
    changedirection(stepint,data);
    console.log("Updated position of queen : ["+queen.position.x,queen.position.y+"]");

}


// changedirection(1,'E');
// console.log("Updated position of queen : "+queen.position.x,queen.position.y);


