const authGuard = () => {
  let isValid = localStorage.getItem("county_token");
  let flag = false;
  if (isValid) {
    flag = true;
  } else {
    flag = false;
  }
  return flag;
};

export default authGuard;
