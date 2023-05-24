export const validateName = (name) => {
    if (!name) {
      return "이름을 입력해주세요.";
    } else if (name.length < 3) {
      return "이름은 3자 이상이어야 합니다.";
    } else {
      return "";
    }
  };