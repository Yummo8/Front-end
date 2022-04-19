export const convertTime = (unix_timestamp: number) => {
    const date = new Date(unix_timestamp * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const dt = date.getDate();
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = `${year}-${month}-${dt} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
    
  return formattedTime;
};
