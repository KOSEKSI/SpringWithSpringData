var a=10;
var b=20;
var c=a+b;
document.getElementById("demo").innerHTML=c;
var items=["monitor","keyboard","mouse","harddesk","cables"];
var desktop=new Object();
desktop.company="hp";
desktop.items=items;
desktop.price="70000";
desktop.grapcard="2gb";
desktop.os="10/8/7";
desktop.items[0]="hp monitor";


document.getElementById("demo2").innerHTML="desktop properties <br>CompanyName:"+desktop.company+
"<br>Price:"+desktop.price+" <br>GraphicsCard:"
+desktop.grapcard+"<br>Supported OSs:"
+desktop.os+"<br> Containing Properties <br>1:>"
+desktop.items[0]+"<br>2:>"
+desktop.items[1]+"<br>3:>" 
+desktop.items[2]+"<br>4:>" 
+desktop.items[3]+"<br>5:>" 
+desktop.items[4]+"<br>"; 


var browsers=new Array();
browsers[0]="chrome";
browsers[1]="safari";
browsers[2]="ucweb";
browsers[3]="firefox";
browsers[4]="opera";
browsers[5]="uc browser";


console.log(browsers);


console.log(desktop.company);