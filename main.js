
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box');
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"

})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment');
  // you do the rest
  //console.log(answerPTagWithValue);
  var num = answerPTagWithValue.textContent
  //console.log(num);
  //console.log(typeof(num));
  var nu = parseInt(num);
  //console.log(typeof nu);
  var n = nu * 2;
  answerPTagWithValue.textContent = n
  //console.log(n);
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var cir = document.querySelector('#circle-bw');

  //console.log(cir);
  //console.log(cir.style.backgroundColor);
  //cir.style.color = "#3333ff";
  //cir.style.backgroundColor = 'rgb(0, 0, 0)';
  if(cir.style.backgroundColor === 'rgb(0, 0, 0)'){
    cir.style.backgroundColor = 'rgb(255, 255, 255)';
    cir.style.color = '#3333ff';
  }else{
    cir.style.backgroundColor = 'rgb(0, 0, 0)';
    cir.style.color = '#ffff33';
  }
  //var sty = window.getComputedStyle(cir);
  //console.log(sty.width);
  //console.log(sty.color);
  //console.log(typeof(sty.height));
  //console.log(sty.backgroundColor);

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var cir = document.querySelector('.circle-red');
  //console.log(cir);

  var sty = window.getComputedStyle(cir);
  //console.log(sty.width);
  //console.log(sty.color);
  //console.log(sty.height);
  var cal = parseInt(sty.width);

  //console.log(cal);
  //console.log(cir.style.width);
  if(cal < 320){
    var ncal = cal * 2;

  }else{
    var ncal = 40;
    alert("Has llegado al maximo tamaño");
  }

  //console.log(ncal);
  var tam = ncal.toString();
  cir.style.width = tam + 'px';
  cir.style.height = tam + 'px';
  //console.log(tam);
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var act = document.querySelectorAll('#user-list .active');
  console.log( ...act);
  var actarr = [ ...act];
  console.log(actarr);

  var use = document.querySelectorAll('#user-list');
  console.log( ...use);
  var usearr = [ ... use];
  console.log(usearr);
  actarr.forEach( function(el, i){

    console.log(el.textContent);
    var narr = el.textContent

    if(narr === 'active user'){
      var list = narr;
      //console.log(list);
    }
    //list = list;
    console.log(list);
    use.textContent = `<li>${list}</li>`;
  })
  //use.innerHTML = `<li>${list}</li>`;
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var cua = document.querySelectorAll('#reverse-squares .answer-box');
  console.log( ...cua);
  var cuaarr = [ ...cua];
  var lis = '';

  cuaarr.forEach( function(el, i){
    console.log(el.textContent);
    lis = el.textContent;
    var rev = el.length - i;
    var narr = `<span>${lis[rev]}</span>`;
    console.log(el.length);
    console.log(lis);
    el.innerHTML += `<span>${lis[rev]}</span>`;
  })
  //cua.innerHTML = lis;

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
