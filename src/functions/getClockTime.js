export const getClockTime = () => {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var ap = "am";
    if (hour > 11) {
      ap = "pm";
    }
    if (hour > 12) {
      hour = hour - 12;
    }
    if (hour === 0) {
      hour = 12;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    var timeString = hour + ":" + minute + " " + ap;
    return timeString;
  };
  
  