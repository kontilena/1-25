function go(){
    elem = document.getElementById('test');
    alert(elem.value);
}
function go2(){
			elem = document.getElementById('test2');
			elem.value = 'Ой, я поменял свой текст!';
        }
        function go1(){
			elem = document.getElementById('test1');
			elem.src = '2.jpg';
        }
        function go3(elem){
			alert(elem.value);
        }
        function go9(elem){
			elem.value = 'Ой, я поменял текст!';
        }
        function go10(elem){
			elem.value = 'Ой, я поменял текст!';
		}
		function stop(elem){
			elem.value = 'Ой, а теперь еще раз поменял!';
        }
        function go11(elem){
			elem.value = 'Ку-ку';
        }
        function go12(elem){
			elem.value = 'О, теперь на меня больше не нажать!';
			elem.disabled = true;
        }
        function over(elem){
			elem.src = '2.jpg';
		}
		function out(elem){
			elem.src = '1.jpg';
        }
        function go14(){
			elem = document.getElementById('test14');
			elem.style.color = 'red';
			elem.style.width = '300px';
        }
        function hide(){
			elem = document.getElementById('test15');
			elem.style.display = 'none';
		}
		function show(){
			elem = document.getElementById('test15');
			elem.style.display = 'inline-block';
        }
        function go16(){
			elem = document.getElementById('test16');
			elem.value = 'Ой, я поменял свой текст и css!';
			elem.style.width = '300px';
			elem.style.height = '50px';
			elem.style.color = 'red';
			elem.style.borderRadius = '10px';
        }
        function block(){
			var block = document.getElementById('block');
			var unblock = document.getElementById('unblock');
			block.value = 'О, теперь на меня больше не нажать!';
			block.disabled = true;
			unblock.style.display = 'block';
		}
		function unblock(){
			var block = document.getElementById('block');
			var unblock = document.getElementById('unblock');
			block.value = 'О, на меня снова можно нажимать!';
			block.disabled = false;
			unblock.style.display = 'none';
        }
        function go18(elem){
			elem.value = parseInt(elem.value) + 1;
        }
        function go19(){
			elem = document.getElementById('test19');
			elem.value = 'Теперь я плаваю справа!';
			elem.style.cssFloat = 'right';
        }
        function go20(){
			elem = document.getElementById('test20');
			elem.value = 'Мои css классы: '+elem.className;
        }
        function go21(){
			var test1 = document.getElementById('test211');
			var test2 = document.getElementById('test212');
			var tmp = test1.value;
			test1.value = test2.value;
			test2.value = tmp;
        }
        function go22(){
			var test = document.getElementById('test22');
			var value = test.value;
			var result = document.getElementById('result');
			result.value =  value*value;
        }
        function go23(){
			var test = document.getElementById('test23');
			var value = test.value;
			if(!isNaN(value)){
				var result = document.getElementById('result23');
				result.value =  value*value;
			} else {
				alert('Введено не число!')
			}
        }
        function go24(elem){
			elem.disabled = true;
			elem.style.cursor = 'not-allowed';
        }
        function add(text){
			var input = document.getElementById('input');
			input.value = input.value + text;
		}