let documents = [];
let counter = 1;

document.getElementById("docForm").addEventListener("submit", function(e){
    e.preventDefault();

    let trackingNumber = "SDO-2026-" + String(counter).padStart(6,'0');
    counter++;

    let doc = {
        tracking: trackingNumber,
        title: document.getElementById("title").value,
        type: document.getElementById("type").value,
        office: document.getElementById("office").value,
        date: document.getElementById("date").value,
        personnel: document.getElementById("personnel").value,
        status: "Ongoing",
        location: "Receiving Unit"
    };

    documents.push(doc);

    document.getElementById("trackingOutput").innerHTML =
        "Tracking Number Generated: <strong>" + trackingNumber + "</strong>";

    updateDashboard();
    document.getElementById("docForm").reset();
});

function trackDocument(){
    let input = document.getElementById("trackInput").value;
    let result = documents.find(doc => doc.tracking === input);

    if(result){
        document.getElementById("trackResult").style.display = "block";
        document.getElementById("trackResult").innerHTML = `
        <h3>Document Details</h3>
        <p><strong>Tracking Number:</strong> ${result.tracking}</p>
        <p><strong>Current Status:</strong> ${result.status}</p>
        <p><strong>Current Location:</strong> ${result.location}</p>
        <p><strong>Assigned Personnel:</strong> ${result.personnel}</p>
        <p><strong>Processing Duration:</strong> In Progress</p>
        <h4>Routing History</h4>
        <p>Received – ${result.date} – Receiving Unit</p>
        <p>Ongoing Review – ${result.personnel}</p>
        `;
    } else {
        alert("Tracking number not found!");
    }
}

function updateDashboard(){
    document.getElementById("totalDocs").innerText = documents.length;
    document.getElementById("ongoingDocs").innerText =
        documents.filter(doc => doc.status === "Ongoing").length;
}