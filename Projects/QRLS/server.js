let h = document.getElementById('menu');
let menuBtn = document.querySelector('.menuBtn');
let closeBtn = document.querySelector('.closeBtn');

function openMenu(){
    h.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
}

function closeMenu(){
    h.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
}

// --------------------------


function showQuote(mood) {
    let quote = "";

    if (mood === "happy"){
        quote = "Make someone smile every day. but never forget that you are someone too.";
    }
    else if (mood === "sad"){
        quote = "Sadness files away on the wings of time.";
    }
    else if (mood === "lonely"){
        quote = "Fear is temporary. Regret is forever";
    }
    else if (mood === "afraid"){
        quote = "I'm always here for you!";
    }
    else if (mood === "pressured"){
        quote = "You can don it";
    }

    document.getElementById("quoteArea").value = quote;
}


// ----- FEEDBACK --------------------

function submitFeedback(event) {
    event.preventDefault();
    document.getElementById("message").innerText = "Thank you for your feedback";
}