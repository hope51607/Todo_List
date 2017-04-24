$(document).ready(function () {
	var txtId=0;

	$(document).on('click','.check',function(){
		if($(this).prop("checked")){
			$(this).parent().css({
				'text-decoration':'line-through'
			});
		}
		else
			$(this).parent().css({
				'text-decoration':'none'
			});
	})

	$('#pre').click(function(){
		if($('#text').val()!=''){
			var todo=$('#text').val();
			var sel ="<input type='checkbox' class='check'/>";
			var but ="<button id ='del' onclick=del("+txtId+")"+" class='btn btn-danger'"+">刪除</button>"
			$('#now').prepend("<div id='div"+txtId+"' class='row'><p>"+sel+' '+todo+' '+but+'</p></div>');
			$('#text').val('');
			txtId++;
		}
		return false;
	});
});
function del(id){
	$('#div'+id).remove();
};