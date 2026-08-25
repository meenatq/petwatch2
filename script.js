// Santa Cruz Pet Watch
// Pet report data

const petReports = [
{
name: "Rumba",
species: "Dog",
breed: "Mixed Breed",
status: "Lost",
area: "Urubo",
date: "August 15, 2026",
image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
contact: "Contact through Santa Cruz Pet Watch",
description: "Rumba was last seen in the Urubo area. Please contact us if you have information."
},

{
name: "Unknown",
species: "Cat",
breed: "Unknown",
status: "Found",
area: "Equipetrol",
date: "August 17, 2026",
image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
contact: "Contact through Santa Cruz Pet Watch",
description: "This cat was found in Equipetrol. The owner is currently being searched for."
},

{
name: "Max",
species: "Dog",
breed: "Golden Retriever",
status: "Lost",
area: "Sirari",
date: "August 18, 2026",
image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
contact: "Contact through Santa Cruz Pet Watch",
description: "Max was last seen near Sirari. Please report any sightings."
}
];


// Get HTML elements

const reportsContainer = document.getElementById("reports-container");
const statusFilter = document.getElementById("status-filter");
const areaFilter = document.getElementById("area-filter");
const petForm = document.getElementById("pet-form");


// Display the pet cards

function displayPets(pets) {

reportsContainer.innerHTML = "";

if (pets.length === 0) {
reportsContainer.innerHTML = `
<div class="no-results">
<h3>No reports found </h3>
<p>Try selecting a different filter.</p>
</div>
`;

return;
}

pets.forEach(function(pet) {

const card = document.createElement("div");

card.classList.add("pet-card");

const statusClass =
pet.status === "Lost" ? "lost" : "found";

card.innerHTML = `
<img src="${pet.image}" alt="${pet.name} ${pet.species}">

<div class="pet-info">

<span class="status ${statusClass}">
${pet.status}
</span>

<h3>${pet.name}</h3>

<p><strong>Species:</strong> ${pet.species}</p>

<p><strong>Breed:</strong> ${pet.breed}</p>

<p><strong>Area:</strong> ${pet.area}</p>

<p><strong>Date:</strong> ${pet.date}</p>

<p>${pet.description}</p>

<p>
<strong>Contact:</strong> ${pet.contact}
</p>

</div>
`;

reportsContainer.appendChild(card);
});
}


// Filter the reports

function filterPets() {

const selectedStatus = statusFilter.value;
const selectedArea = areaFilter.value;

const filteredPets = petReports.filter(function(pet) {

const statusMatches =
selectedStatus === "all" ||
pet.status === selectedStatus;

const areaMatches =
selectedArea === "all" ||
pet.area === selectedArea;

return statusMatches && areaMatches;
});

displayPets(filteredPets);
}


// When filters change

statusFilter.addEventListener("change", filterPets);
areaFilter.addEventListener("change", filterPets);


// Form validation

petForm.addEventListener("submit", function(event) {

event.preventDefault();

if (petForm.checkValidity()) {

alert(
"Thank you! Your pet report has been submitted."
);

petForm.reset();

} else {

petForm.reportValidity();

}
});


// Display all pets when the page opens

displayPets(petReports);
