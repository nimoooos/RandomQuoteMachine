function newQuote(){
    var category = 'happiness'
    console.log("while testing, you're only going to see the category: "+category);
    // $.ajax({
    //     method: 'GET',
    //     url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    //     headers: { 'X-Api-Key': 'InsertApiKey'}, //TODO: swap out api key
    //     contentType: 'application/json',
    //     success: function(result) {
    //         console.log(result);
    //         console.log(`"${result[0].quote}"\n-${result[0].author}`);
    //     },
    //     error: function ajaxError(jqXHR) {
    //         console.error('Error: ', jqXHR.responseText);
    //     }
    // });
}

//run it once on page load
newQuote();