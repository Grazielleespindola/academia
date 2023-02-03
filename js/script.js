//Função para mostrar uma caixa de diálogo na página
//alert('Olá!');

//var, let, const são tipos de variáveis;

// = significa 'recebe'
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');


// console.log(btnMenu);        Só para verificar se está chamando o que eu quero


btnMenu.addEventListener('click', function () {        //Associar o evento de clique ao btnMenu
  //  console.log('clicou ');
  //console.log(menu);  
  //menu.classlist.add('menu-open');
  //menu.classlist.remove('menu-open);

  menu.classList.toggle('menu-open');       //add e remove a classe
  btnMenu.classList.toggle('x');
})


menu.addEventListener('click', function () {    // Após o menu aberto, qualquer clique no menu faz ele ser fechado
menu.classList.toggle('menu-open');       
btnMenu.classList.toggle('x');
})


