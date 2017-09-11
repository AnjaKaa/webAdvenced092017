function blogInit() {
	var blog=document.querySelector('#blog');
var listTextBlock=blog.querySelectorAll('.text-block');
var menuBlog=document.querySelector('#menu-blog');

listTextBlock.forEach(function(item,i){ 
  //Добавляем пункты меню для каждого текстового блока в блоге
  item.id="text"+(i+1).toString();
  var newLi=document.createElement('li');
  newLi.id="menu-"+item.id;
  newLi.innerText=item.querySelector('h3').innerText;  
  // первый пункт активный
  if (i==0) {
    newLi.classList.add('menu-blog-active');
  }
  menuBlog.appendChild(newLi);
});

//обработчик события прокрутки блога
blog.addEventListener('scroll', function(){
  // по всем текстовым блокам блога
	listTextBlock.forEach(function(item, i){
    // начало оболасти активности блока
    var startActive=blog.scrollTop;
    // конец области активности блока
    var endActive=blog.scrollTop+100;
      //если верхняя граница текстового блока сверху в верхних 100px блога, то блок активный
  		if (startActive <= item.offsetTop && endActive > item.offsetTop) {
      	setActiveTextBlok(listTextBlock[i]);
      }
   });
})

}

module.exports = blogInit;