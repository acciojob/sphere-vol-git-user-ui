const inputRadius = document.getElementById("radius");
const inputVolume = document.getElementById("volume");

function volume_sphere(event) {
  event.preventDefault(); // Stop form from submitting

  // 1. Read the radius value
  const r = parseFloat(inputRadius.value);

  // 2. Validate the input
  if (isNaN(r) || r < 0) {
    inputVolume.value = "NaN";
    return;
  }

  // 3. Calculate the volume: (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

  // 4. Display result rounded to 4 decimal places
  inputVolume.value = volume.toFixed(4);
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
