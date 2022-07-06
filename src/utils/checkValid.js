import RegexHelper from '../libs/RegexHelper';

const checkValid = (field, formRef) => {
  const regexHelper = new RegexHelper();
  let errorMsg;
  switch (field.name) {
    case 'id':
      regexHelper.value(field, '필수 정보입니다.');
      regexHelper.email(field, '형식에 맞는 이메일을 입력해주세요.');
      break;
    case 'password':
      regexHelper.value(field, '필수 정보입니다.');
      errorMsg = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.';
      regexHelper.minLength(field, 8, errorMsg);
      regexHelper.maxLength(field, 16, errorMsg);
      regexHelper.engNumAllSpecial(field, errorMsg);
      break;
    case 'passwordRe':
      regexHelper.value(field, '필수 정보입니다.');
      regexHelper.compareTo(
        field,
        formRef.current.password,
        '비밀번호가 일치하지 않습니다.',
      );
      break;
    case 'name':
      regexHelper.value(field, '필수 정보입니다.');
      errorMsg =
        '한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)';
      regexHelper.korEng(field, errorMsg);
      break;
    case 'birthYear':
      regexHelper.value(field, '필수 정보입니다.');
      errorMsg = '태어난 년도 4자리를 정확하게 입력하세요.';
      let rangeErrorMsg = '정말이세요?';
      let currentYear = new Date().getFullYear();
      regexHelper.value(field, errorMsg);
      regexHelper.num(field, errorMsg);
      regexHelper.minLength(field, 4, errorMsg);
      regexHelper.maxLength(field, 4, errorMsg);
      regexHelper.range(field, currentYear - 500, currentYear, rangeErrorMsg);
      break;
    case 'birthMonth':
      regexHelper.value(field, '태어난 월을 선택하세요.');
      break;
    case 'birthDay':
      errorMsg = '태어난 일(날짜) 2자리를 정확하게 입력하세요.';
      regexHelper.value(field, errorMsg);
      regexHelper.maxLength(field, 2, errorMsg);
      regexHelper.range(field, 1, 31, '생년월일을 다시 확인해주세요.');
      break;
    case 'contact':
      regexHelper.value(field, '필수 정보입니다.');
      regexHelper.phone(field, '형식에 맞지 않는 번호입니다.');
      break;
    case 'puppyName':
      regexHelper.value(field, '필수 정보입니다.');
      regexHelper.korEng(field, '한글, 영문만 사용 가능합니다.');
      break;
    case 'breed':
    case 'vaccination':
      regexHelper.value(field, '필수 정보입니다.');
  }
};

export default checkValid;
