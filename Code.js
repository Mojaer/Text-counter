let textValue = document.getElementById('textInput');

let latter = document.getElementById('letter');

let word = document.getElementById('Word'); 

let = sentance = document.getElementById('sentance') ;

document.addEventListener('input',countFunction);



function countFunction(){

    let text = textValue.value;
    latter.innerHTML = text.match(/[a-z|[0-9]/gi).length;

    word.innerHTML = text.match(/ /g).length;
      if(text.match(/\s(?=\s)/g)){
          alert("avoid more than one space!!");
          textValue.value = text.substr(0,text.length-1);

      }
    
    sentance.innerHTML = text.match(/\56/g).length;

}

console.log('a'.charCodeAt(0));