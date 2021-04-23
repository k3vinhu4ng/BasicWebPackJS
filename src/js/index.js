"use strict";
import ConsoleLog from './ConsoleLog.js';
import alertMe from "./AlertMe";

(function(){
    alertMe('Keith');
    ConsoleLog(document);
    window.onload = function() {

        // create a couple of elements in an otherwise empty HTML page
        const heading = document.createElement("h1");
        const heading_text = document.createTextNode("Click here to make Boxes disappear.");
        const heading2 = document.createElement("h1");
        const heading_text2 = document.createTextNode("Click Here to Reset Boxes");
        heading.appendChild(heading_text);
        heading.style.color = "green";
        document.body.appendChild(heading);
        heading2.appendChild(heading_text2);
        document.body.appendChild(heading2);
        heading2.style.color = "red";
        heading2.style.border = "solid 1px black";
        heading2.onclick = function () {
            heading2.innerText = "Boxes are Reset!";
            heading2.style.border = "solid 1px blue";
            box1.style.backgroundColor = "aliceblue";
            box2.style.backgroundColor = "aliceblue";
            box3.style.backgroundColor = "aliceblue";
            box1.style.display = "block";
            box2.style.display = "block";
            box3.style.display = "block";
            heading.innerText = "Click here to make Boxes disappear."


        };

        heading.onclick = function(){

            box1.style.display = "none";
            box2.style.display = "none";
            box3.style.display = "none";
            heading.innerText = "Boxes are gone!";
            heading2.innerText = "Click Here to Reset Boxes";
        }
        const box1 = document.getElementById("box1");
        const box2 = document.getElementById("box2");
        const box3 = document.getElementById("box3");

        box1.onclick = function (){
            box1.style.backgroundColor = "red";
            heading2.innerText = "Click Here to Reset Boxes";
        }

        box2.onclick = function (){
            box2.style.backgroundColor = "green";
            heading2.innerText = "Click Here to Reset Boxes";
        }

        box3.onclick = function (){
            box3.style.backgroundColor = "blue";
            heading2.innerText = "Click Here to Reset Boxes";
        }




    }
})();
/*


 */

