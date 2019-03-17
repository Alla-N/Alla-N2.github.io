/*Счетчик кликов add to cart*/

var productsCount = document.getElementById('products-count');

var addToCartButtons  = document.querySelectorAll('.add-to-cart');


for(var i=0; i< addToCartButtons.length; i++){
	addToCartButtons[i].addEventListener('click', function(){
		var prevProductsCount = +productsCount.textContent;
        productsCount.textContent = prevProductsCount +1;

	})
}

/*Смена фона при лайке*/
	
/*function getElementsByIdList(){ 
    var results = [];
    for(var i=0; i<arguments.length; i++) {
        results.push(document.getElementById(arguments[i]));
    }
    return results;
};

var myIdArray = getElementsByIdList('buttonLike1','buttonLike2','buttonLike3',
    	'buttonLike4','buttonLike5', 'buttonLike6','buttonLike7','buttonLike8','buttonLike9');



    
for(var i=0; i<myIdArray.length; i++){
	
	var changedLikeButton = document.getElementById(myIdArray[i]);




// этот вариант работает для одного ид
	/*var changedLikeButton = document.getElementById('buttonLike1');

    changedLikeButton.onclick = function() {

    	if(changedLikeButton.classList.contains('expanded')){
    		changedLikeButton.classList.add('collapsed');
    		changedLikeButton.classList.remove('expanded');
    	}else{
    		changedLikeButton.classList.add('expanded');
    		changedLikeButton.classList.remove('collapsed');
    	}
}*/
  

    function changeButton (buttonId) {
    	var changedLikeButton = document.getElementById(buttonId);

    	if(changedLikeButton.classList.contains('expanded')){
    		changedLikeButton.classList.add('collapsed');
    		changedLikeButton.classList.remove('expanded');
    	}else{
    		changedLikeButton.classList.add('expanded');
    		changedLikeButton.classList.remove('collapsed');
    	}
}



  /*var changedLikeButton  = document.querySelectorAll('.buttonLike');


for(var i=0; i< changedLikeButton.length; i++){


	var changeButton = document.getElementById(this.id);

	changeButton.onclick = function(){
		if(changeButton.classList.contains('expanded')){
    		changeButton.classList.add('collapsed');
    		changeButton.classList.remove('expanded');
    	}else{
    		changeButton.classList.add('expanded');
    		changeButton.classList.remove('collapsed');
    	}
}
}
*/


	





  


