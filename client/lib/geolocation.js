export const getlocation = () => {
  const successCallback = (position) => {
    console.log(position.coords.longitude);
    const url = `https://www.google.com/maps/search/pharmacies+OR+doctors/@${position.coords.latitude},${position.coords.latitude},14z`;
    window.open(url, "_blank");
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};
