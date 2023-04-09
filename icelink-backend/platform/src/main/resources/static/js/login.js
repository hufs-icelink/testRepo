$('#login--submit').on('click', function() {
	let data = {
		userName : $('#userName').val(),
		password : $('#password').val(),
	};

	$.ajax({
		type : 'POST',
		url : '/member/login',
		data : JSON.stringify(data),
		contentType : 'application/json; charset=utf-8',
		dataType : 'json'
	}).done(function(resp){
        location.href = "/";
    }).fail(function(error){
        alert(JSON.stringify(error));
    });
}
);