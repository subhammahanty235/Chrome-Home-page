// to trigger the search when enter button is pressed
function googleSearch()
{
    var text=document.getElementById("search").value;
    var cleanQuery = text.replace(" ","+",text);
    var url='http://www.google.com/search?q='+cleanQuery;

    window.location.href=url;
}

const inputbox = document.getElementById("search")
inputbox.addEventListener('keydown' , (e)=>{
    if(e.key === "Enter"){
        googleSearch()
    }
})

