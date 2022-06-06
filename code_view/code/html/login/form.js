let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
let regExpId = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;
let regId = /^[a-z]+[a-z0-9]{5,19}$/g;

$('#id').keyup(function () {
	if (regExpId.test($('#id').val())) {
		$('#id_check').html('아이디 형식에 일치합니다.');
	} else {
		$('#id_check').html('');
	}
});

$('#password').keyup(function () {
	$('#pw_check').css({
		color: 'red',
	});
	if ($(this).val().length > 8 && regExpId.test($(this).val())) {
		$('#pw_check').html('비밀번호 형식에 일치 합니다.').css({
			color: '#3333ff',
		});
		$('#password_re').removeAttr('readonly');
	} else {
		$('#pw_check').html('영문 및 특수문자, 숫자 8자리 이상 입력하세요.').css({
			color: 'red',
		});
		$('#password_re').attr('readonly', 'readonly');
	}
});

$('#password_re').keyup(function () {
	if ($(this).val() === $('#password').val()) {
		$('#pw_re_check').html('비밀번호가 일치합니다');
		$('#password').attr('readonly', 'readonly');
	} else {
		$('#pw_re_check').html('');
		$('#password').removeAttr('readonly');
	}
});

$('#email').keyup(function () {
	if ($(this).val().length > 5) {
		$('#email_check').html('이메일 형식에 일치합니다.');
	} else {
		$('#email_check').html('');
	}
});

$('#birthday').keyup(function () {
	if ($(this).val().length === 6) {
		$('#birthd_check').html('생년월일 형식에 일치합니다.');
	} else {
		$('#birthd_check').html('');
	}
});

$('#submit_btn').click(function (e) {
	let email = $('#email').val() + '@' + $('#com > option:selected').attr('value');
});
