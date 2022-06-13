function getDateTime() {
  // 유저 시간 값
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  return year + "년" + month + "월" + date + "일";
}

export default getDateTime;
