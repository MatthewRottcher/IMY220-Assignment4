//Matthew Rottcher
$linkPattern = /(https):\/\/[^\s/$.?#].[^\s]*/gi;

$(document).ready(function () {
    $("#left").on("click", function () {
        $messageValue = $("#message").val();
        if ($messageValue !== "") {
            if ($linkPattern.test($messageValue)) {

                let message = $('<p></p>', {
                    html: $("#message").val(),
                });
                let elementList = [message];

                let urlArray = $messageValue.match($linkPattern);//this is the first url
                urlArray.forEach(url => { //account for multiple links sent
                    let iframe;
                    if (url.includes("youtu.be") || url.includes("youtube")) {
                        let splitUrl = url.split("/");//id will be at teh nd of the split array
                        let videoId = splitUrl[splitUrl.length - 1];//extract last part in array - assuming id comes after last '/'
                        let embedUrl = "https://www.youtube.com/embed/" + videoId;
                        iframe = $('<iframe width="100%" height="315" src="' + embedUrl + '" frameborder="0" allowfullscreen></iframe>');
                    }
                    elementList.push(iframe);
                });


                $('div.messages').append(
                    $("<div></div>", {
                        html: elementList,
                        class: 'row col-4 offset-4 mb-3 left-message'
                    })
                )
            } else {
                $('div.messages').append(
                    $("<div></div>", {
                        html: $("#message").val(),
                        class: 'row col-4 offset-4 mb-3 left-message'
                    })
                )
            }
        }
    });
});


$(document).ready(function () {
    $("#right").on("click", function () {
        $messageValue = $("#message").val();
        if ($messageValue !== "") {
            if ($linkPattern.test($messageValue)) {

                let message = $('<p></p>', {
                    html: $("#message").val(),
                });
                let elementList = [message];

                let urlArray = $messageValue.match($linkPattern);//this is the first url
                urlArray.forEach(url => { //account for multiple links sent
                    let iframe;
                    if (url.includes("youtu.be") || url.includes("youtube")) {
                        let splitUrl = url.split("/");//id will be at teh nd of the split array
                        let videoId = splitUrl[splitUrl.length - 1];//extract last part in array - assuming id comes after last '/'
                        let embedUrl = "https://www.youtube.com/embed/" + videoId;
                        iframe = $('<iframe width="100%" height="315" src="' + embedUrl + '" frameborder="0" allowfullscreen></iframe>');
                    }
                    elementList.push(iframe);
                });


                $('div.messages').append(
                    $("<div></div>", {
                        html: elementList,
                        class: 'row col-4 offset-4 mb-3 right-message'
                    })
                )
            } else {
                $('div.messages').append(
                    $("<div></div>", {
                        html: $("#message").val(),
                        class: 'row col-4 offset-4 mb-3 right-message'
                    })
                )
            }
        }
    });
});

