import ValidationRegex from '../libs/validationRegex';

const checkValid = (field, formRef) => {
  const validationRegex = new ValidationRegex();
  let errorMsg;
  switch (field.name) {
    case 'id':
      validationRegex.value(field, '필수 정보입니다.');
      validationRegex.email(field, '형식에 맞는 이메일을 입력해주세요.');
      break;
    case 'password':
      validationRegex.value(field, '필수 정보입니다.');
      errorMsg = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.';
      validationRegex.minLength(field, 8, errorMsg);
      validationRegex.maxLength(field, 16, errorMsg);
      validationRegex.engNumAllSpecial(field, errorMsg);
      break;
    case 'passwordRe':
      validationRegex.value(field, '필수 정보입니다.');
      validationRegex.compareTo(
        field,
        formRef.current.password,
        '비밀번호가 일치하지 않습니다.',
      );
      break;
    case 'name':
      validationRegex.value(field, '필수 정보입니다.');
      errorMsg =
        '한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)';
      validationRegex.korEng(field, errorMsg);
      break;
    case 'birthYear':
      validationRegex.value(field, '필수 정보입니다.');
      errorMsg = '태어난 년도 4자리를 정확하게 입력하세요.';
      let rangeErrorMsg = '정말이세요?';
      let currentYear = new Date().getFullYear();
      validationRegex.value(field, errorMsg);
      validationRegex.num(field, errorMsg);
      validationRegex.minLength(field, 4, errorMsg);
      validationRegex.maxLength(field, 4, errorMsg);
      validationRegex.range(
        field,
        currentYear - 500,
        currentYear,
        rangeErrorMsg,
      );
      break;
    case 'birthMonth':
      validationRegex.value(field, '태어난 월을 선택하세요.');
      break;
    case 'birthDay':
      errorMsg = '태어난 일(날짜) 2자리를 정확하게 입력하세요.';
      validationRegex.value(field, errorMsg);
      validationRegex.maxLength(field, 2, errorMsg);
      validationRegex.range(field, 1, 31, '생년월일을 다시 확인해주세요.');
      break;
    case 'contact':
      validationRegex.value(field, '필수 정보입니다.');
      validationRegex.phone(field, '형식에 맞지 않는 번호입니다.');
      break;
    case 'puppyName':
      validationRegex.value(field, '필수 정보입니다.');
      validationRegex.korEng(field, '한글, 영문만 사용 가능합니다.');
      break;
    case 'breed':
    case 'vaccination':
      validationRegex.value(field, '필수 정보입니다.');
      break;
    default:
      break;
  }
};

export default checkValid;
