$('#join--submit').on('click', function() {
	let data = {
		userName : $('#userName').val(),
		password : $('#password').val(),
	};

	$.ajax({
		type : 'POST',
		url : '/member/join',
		data : JSON.stringify(data),
		contentType : 'application/json; charset=utf-8',
		dataType : 'json'
	}).done(function(resp){
        alert("회원가입이 완료되었습니다.");
        //console.log(resp);
        location.href = "/";
    }).fail(function(error){
        alert(JSON.stringify(error));
    });
}
);