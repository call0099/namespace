/********************************
Filename: namespace.js
Author: @Liam Callahan
Description: Namespace Assignment
Date: 2018-10-25
*********************************/

var CALL0099 = {


    init: function () {
        let newDiv = document.createElement("div");
        newDiv.className = "box", newDiv.textContent = "CALL0099";
        document.getElementById("boxes").appendChild(newDiv),
            newDiv.addEventListener("click", function () {
                newDiv.style.backgroundColor = "purple",
                    newDiv.style.borderColor = "cyan"

            }),
           
            newDiv.addEventListener("mouseover", function () {
                newDiv.classList.toggle("highlight")

            }),

            newDiv.addEventListener("mouseout", function () {
                newDiv.classList.toggle("highlight"),
                    newDiv.removeAttribute("style")
            })

    }
};
