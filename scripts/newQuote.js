function newQuote(){
    var category = 'happiness'
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'WV//AmsZ8LpnEHYNSSn08A==WpJLBgRmdx8bCzQB'}, //TODO: swap out api key
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            let quoteText = result[0].quote;
            let quoteAuthor = result[0].author;


            $('#text').text(quoteText);
            $('#author').text(quoteAuthor);
            let new_url = `https://twitter.com/intent/tweet/?text=${encodeURIComponent(`"${quoteText}" -${quoteAuthor}`)}`;
            console.log(new_url);
            $("a").attr('href',new_url);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });


}

//run it once on page load
newQuote();