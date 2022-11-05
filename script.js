var button = document.querySelector("#newbutton");
var quote = document.querySelector(".quote");
var person = document.querySelector(".person");


var Quotes= [
{
	quote:"“Just be good and kind to your children. Not only are they the future of the world, they’re the ones who can sign you into a home.”" ,
	person:"Dennis Miller "

},
{
	quote:" “A perfect parent is a person with excellent child-rearing theories and no actual children.”" ,
	person:"Dave Barry"

},
{
	quote:"“Instead of getting married again, I’m going to find a woman I don’t like and give her a house.” " ,
	person:"Rod Stewart "

},
{
	quote:"“If you are not yelling at your kids, you are not spending enough time with them.”" ,
	person:"Reese Witherspoon"

},
{
	quote:" “Nobody can do for little children what grandparents do. Grandparents sort of sprinkle stardust over the lives of little children.”" ,
	person:"Alex Haley"

},
{
	quote:"“The simplest toy, one which even the youngest child can operate, is called a grandparent.” " ,
	person:"Sam Levenson"

},
{
	quote:". “Not in doing what you like but in liking what you do is the secret of happiness.” " ,
	person:"J.M. Barrie "

},
{
	quote:" “Anybody who tells you money can’t buy happiness never had any.”" ,
	person:"Samuel L. Jackson"

},
{
	quote:"“Happiness is good health and a bad memory.” " ,
	person:"Ingrid Bergman"

},
{
	quote:" “Don’t wait around for other people to be happy for you. Any happiness you get you’ve got to make yourself.” " ,
	person:"Alice Walker (June 1992)"

},




];


button.addEventListener("click" , function(){
	var random = Math.floor(Math.random() * Quotes.length);
	quote.innerText = Quotes[random].quote
	person.innerText = Quotes[random].person



})