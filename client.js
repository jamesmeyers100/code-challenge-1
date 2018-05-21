$(document).ready(atLoad);

let clickCount = 0;

function atLoad(){
    console.log('JQ');
    
    $('#generateButton').on('click', addToPage);
}

function addToPage(){
    console.log('in addToPage');
    let clickNumberSpot = $('#addSpot');
    clickCount++
    let outputElement = `<div id="outputArea" class="red">
                            <p>${clickCount}</p>
                            <button id="swapButton">Swap</button>
                            <button id="deleteButton">Delete</button>
                        </div>`;
    clickNumberSpot.append(outputElement);
    $('#swapButton').on('click', flipColor);
    $('#deleteButton').on('click', removeDiv);
}

function flipColor(){
    console.log('in flipColor');
    $('#outputArea').toggleClass('yellow');
}

function removeDiv(){
    console.log('in removeDiv');
    
    $(this).parent('div').remove();
}