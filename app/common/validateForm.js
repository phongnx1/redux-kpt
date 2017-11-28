export const checkCombinedLimitedPointAndExpiredDate = (limitedPoint, expiredDate) => {
  if(limitedPoint.length > 0) {
    if(expiredDate.length == 0) {
      alert("期間限定日を入力して下さい！");
      return false;
    }
  }
  return true;
};
