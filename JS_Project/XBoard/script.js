import teamsData from "./data.js";

function displayTeamPills(teamsData) {
  teamsData.forEach((team) => {
    let pill = document.createElement("div");
    pill.className = "card m-2";
    pill.innerHTML = `<div id="${team.id}" class="card-body">${team.name}</div>`;
    document.getElementById("teams-container").append(pill);
  });
}

displayTeamPills(teamsData);

const teamPillsContainer = document.getElementById("teams-container");

teamPillsContainer.addEventListener("click", (e) => {
  if (!e.target.id) return;

  const selectedTeam = teamsData.find(
    (team) => team.id == e.target.id
  );

  const contentContainer = document.getElementById(
    "team-content-container"
  );

  // ✅ Clear previous carousel
  contentContainer.innerHTML = "";

  // ✅ Create carousel
  const carousel = document.createElement("div");
  carousel.className = "carousel slide";
  carousel.id = "carouselExample";
  carousel.setAttribute("data-bs-ride", "carousel");

  carousel.innerHTML = `
    <div class="carousel-inner" id="carousel-items"></div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  `;

  contentContainer.append(carousel);

  // ✅ Add images
  const carouselItems = document.getElementById("carousel-items");

  selectedTeam.images.forEach((imgUrl, index) => {
    const item = document.createElement("div");
    item.className = index === 0 ? "carousel-item active" : "carousel-item";

    item.innerHTML = `
      <img src="${imgUrl}" class="d-block w-100" alt="team image">
    `;

    carouselItems.append(item);
  });
});
