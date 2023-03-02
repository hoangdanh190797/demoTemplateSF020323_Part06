function Services() {
  this.getData = function () {
    return axios({
      url: "https://api.adviceslip.com/advice",
      method: "GET",
    });
  };
}
