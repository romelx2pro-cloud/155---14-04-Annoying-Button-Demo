// const btn = document.querySelector('button');

// btn.addEventListener('mouseover', function() {
// 	console.log('MOUSED OVER ME!');
// 	const height = Math.floor(Math.random() * window.innerHeight);
// 	const width = Math.floor(Math.random() * window.innerWidth);
// 	btn.style.left = `${width}px`;
// 	btn.style.top = `${height}px`;
// });

// btn.addEventListener('click', function() {
// 	btn.innerText = 'YOU GOT ME!';
// 	document.body.style.backgroundColor = 'green';
// });
const btn = document.querySelector("button");
const img = document.querySelector("img");
img.addEventListener("mouseover", function () {
  console.log("mouseover");
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  console.log(width, height);
  img.style.left = `${width}px`;
  img.style.top = `${height}px`;
});
btn.addEventListener("click", function () {
  btn.innerText = "You got me!";
  document.body.style.backgroundColor = "green";
});
