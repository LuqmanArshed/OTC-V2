const loadGMaps = (callback) => {
  const existingScript = document.getElementById("theme-toggler");
  if (!existingScript) {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js";
    script.id = "googleMaps";
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default loadGMaps;
