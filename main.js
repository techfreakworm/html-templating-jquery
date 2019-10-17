var data = [
    "My name is Mayank Gupta",
    "I live in Faridabad",
    "I've been a Cyber Group employee for more than 1 and a half years",
    "Current I'm working in AI division of the company"
]

$( document ).ready(function() {
    $("#loadButton").click(function() {
        $( "#dataContainer" ).load( "template.html", function() {
        });
    })
});

