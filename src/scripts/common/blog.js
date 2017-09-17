function blogInit() {
	var blog=document.querySelector('.blog__content');
  var listTextBlock=blog.querySelectorAll('.blog__text-block');
  var menuBlogWrap=document.querySelector('.blog__menu');
  var menuBlog=document.querySelector('.blog-menu');

listTextBlock.forEach(function(item,i){ 
  //Добавляем пункты меню для каждого текстового блока в блоге
  item.id="text"+(i+1).toString();
  var newLi=document.createElement('li');
  newLi.classList.add('blog-menu__item');
  newLi.id="menu-"+item.id;
  newLi.innerText=item.querySelector('.blog__text-title').innerText;  
  // первый пункт активный
  if (i==0) {
    newLi.classList.add('blog-menu__item--active');
  }
  menuBlog.appendChild(newLi);
});

//обработчик события прокрутки блога
document.addEventListener('scroll', function(){
  // по всем текстовым блокам блога
	listTextBlock.forEach(function(item, i){
    // начало оболасти активности блока
    var startActive=window.pageYOffset;
    // конец области активности блока
    var endActive=startActive+100;
    
      //если верхняя граница текстового блока сверху в верхних 400px блога, то блок активный
  		if (startActive <= item.offsetTop && item.offsetTop < endActive) {
      	setActiveTextBlok(listTextBlock[i]);
      }
      if (menuBlogWrap.offsetTop< window.pageYOffset) {
          menuBlog.style.position='fixed';
       
      }
      else {
        menuBlog.style.position='absolute';
      }
   });
})

// назначаем активный класс для блока и его пункта меню
function setActiveTextBlok(curTextBlock) {
  listTextBlock.forEach(function(item){
    if (item != curTextBlock){
      //удаляем активный класс у всех остальных текстовых блоков
      item.classList.remove('blog__text-block--active');
      document.querySelector('#menu-'+item.id).classList.remove('blog-menu__item--active');
    }
  });
  //добавляем активный класс к текущему текстовому блоку
  curTextBlock.classList.add('blog__text-block--active');  
  document.querySelector('#menu-'+curTextBlock.id).classList.add('blog-menu__item--active');
}


}

module.exports = blogInit;