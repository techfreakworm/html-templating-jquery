var data = [
    "My name is Mayank Gupta",
    "I live in Faridabad",
    "I've been a Cyber Group employee for more than 1 and a half years",
    "Current I'm working in AI division of the company"
]

$( document ).ready(function() {
    $("#loadButton").click(function() {
        // $( "#dataContainer" ).load( "template.html", function() {
        // });

        for (let index = 0; index < data.length; index++) {
            // Create row
            let divRow = document.createElement('div');
            divRow.className = "row";
            divRow.id = "row" + index;
            document.getElementById("dataContainer").appendChild(divRow);
            $( "#row" + index ).load( "template.html", function() {
                $("#data").empty();
                $("#data").html(data[index]);
                $("#data").attr('id', index);
            });
        }
    })
});

