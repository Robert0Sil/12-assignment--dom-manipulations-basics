
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

  //var clas = document.getElementById('user-list').classList;          //Esto es para validar las clases que contiene
  //console.log(clas);                                                  //Y las despliego en consola para poder verlas
  var list = document.getElementById('user-list');                      //Aquí selecciono el id que contiene las calses que intento eliminar
  //console.log(list);                                                    //Y las despliego en consola para poder verlas
  // agregar clase
  //list.classList.add('ejemplo');
  //eliminar clase
  list.classList.remove('inactive');                                    //intenté eliminar la clase, pensando que eliminaría todo (iluso)
  //console.log(list);                                                    //Una de 50 frustraciones
  var iact = document.querySelectorAll('#user-list .inactive');         //Me doy cuenta que tengo que hacer una selección m;as especifica
  //console.log( ...iact);                                                //La despliego en consola
  var iactarr = [ ...iact];                                             //la meto en una array simulado
  //console.log(iactarr);                                                 //Y las despliego en consola para poder verlas
  iactarr.forEach( function(el, i){                                     //genero la iteración para poder eliminar los elementos
    //console.log(el.textContent);                                        //Despliego en consola para poder verificar
    el.textContent = '';                                                //Elimino el contenido(sólo el texto)
    el.classList.remove('inactive');                                    //Elimino la clase y me doy cuenta que hay que eliminar también la etiqueta de listado
    pad = el.parentNode;                                                //Genero el elemento a eliminar
		pad.removeChild(el);                                                //Elimino el elemento (la etiqueta)
    //console.log(el.textContent);                                        //Y las despliego en consola para poder verificarlo
    //console.log(el);                                                    //Y las despliego en consola para poder verificar los elementos
  })
  //console.log(iactarr);                                                 //Verifico sólo por curiosidad
  //console.log(iact);                                                    //Verifico sólo por curiosidad

})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var cua = document.querySelectorAll('#reverse-squares .answer-box');
  console.log( ...cua);
  var cuaarr = [ ...cua];
  var narr = '';
  var lis = [ ];
  var lif = '';

  cuaarr.forEach( function arr(el, i, arr){
    console.log(el.textContent);
    narr += el.textContent;

    lis.push(el.textContent);

    //el.innerHTML += `<span>${lis[rev]}</span>`;
  })
  console.log(narr);
  console.log(lis);
  console.log(typeof(lis));
  for(var i = 0; i < narr.length; i++){
    console.log(narr[i]);
    var rev = narr.length - 1 - i;
    lif += narr[rev];
    cua.innerHTML = `<span>${narr[rev]}</span>`;
  }
  console.log(lif);
  cua.innerHTML = lif;

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var lis = document.querySelectorAll('#tasks');
  console.log( ...lis);
  var arrl = [ ...lis];
  console.log(arrl);
  var palrev = '';
  var narr = [ ];
  arrl.forEach( function(el, i){
    console.log(el.textContent);
    var pal = el.textContent;
    for(var i = 0; i < pal.length; i++){
    //pal.forEach(function(el, i){
      console.log(pal);
      var rev = pal.length - 1 - i;
      palrev = palrev + pal[rev];

    }
    narr.push(palrev);
    console.log(palrev);

    el.innerHTML = `<li>${palrev}</li>`;
  })
  //lis.innerHTML = `<li>${narr}</li>`;
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
