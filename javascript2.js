// Dette lar oss enklere referere til ballen senere
const width = document.getElementById("svg").getBoundingClientRect().width;
const height = document.getElementById("svg").getBoundingClientRect().height;
const ball = document.getElementById("ball");
const radius = ball.getAttribute("r");
let xHastighet = 1;
let yHastighet = 1;
let i = 0;

function moveBall()
{
	// Vi legger posisjonene til sentrum av "ballen" i egne variabler
	let xPos = parseInt(ball.getAttribute("cx"));
	let yPos = parseInt(ball.getAttribute("cy"));
	// Vi flytter ballen med hastigheten i x og y
	xPos += xHastighet;
	yPos += yHastighet;
	// Vi sjekker om vi treffer kanten, og om vi treffer kanten eller er forbi så
	// endrer vi retning på hastigheten, og vi passer på at den posisjonen vi sier 
	// ballen har aldri kommer utenfor boksen som er "lærretet" dens.
	if (xPos <= radius)
		{
			xPos = radius;
			xHastighet = -xHastighet;
		}
	if (xPos >= (width - radius))
		{
			xPos = width - radius;
			xHastighet = -xHastighet;
		}
	if (yPos <= radius)
		{
			yPos = radius;
			yHastighet = -yHastighet;
		}
	if (yPos >= (height - radius))
		{
			yPos = height - radius;
			yHastighet = -yHastighet;
		}
	// Vi oppdaterer hva posisjonen til ballen faktisk skal være.
	ball.setAttribute("cx", xPos);
	ball.setAttribute("cy", yPos);
	changeBallColour();
}

function changeBallColour()
{
	var frequency = .01;
	// Fargene kan gå mellom 0 og 255
	red   = Math.sin(frequency*i + 0) * 127 + 128;
	green = Math.sin(frequency*i + 2) * 127 + 128;
	blue  = Math.sin(frequency*i + 4) * 127 + 128;
	ball.setAttribute("fill", RGB2Color(red, green, blue))
	i++
}

// Denne stjal jeg fra "https://krazydad.com/tutorials/makecolors.php" for å spare meg litt tid, 
// Om du sjekker dette og har lyst til å arrestere meg på det så kan jeg forklare litt
function RGB2Color(r,g,b)
{
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

// Og denne stjal jeg fra "https://krazydad.com/tutorials/makecolors.php"
function byte2Hex(n)
{
	let nybHexString = "0123456789ABCDEF";
	return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

// Dette kaller en gitt funksjon hvert (x) millisekund (tusendel av et sekund)
setInterval(moveBall, 10)