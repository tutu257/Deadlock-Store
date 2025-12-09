const tier1Items = [
  {
    name: "Close Quarters",
    image: "https://deadlock.wiki/images/4/43/Close_Quarters.png",
  },
  {
    name: "Extended Magazine",
    image: "https://deadlock.wiki/images/8/8a/Extended_Magazine.png",
  },
  {
    name: "Headshot Booster",
    image: "https://deadlock.wiki/images/a/ac/Headshot_Booster.png",
  },
  {
    name: "High-Velocity Rounds",
    image: "https://deadlock.wiki/images/0/0e/High-Velocity_Rounds.png",
    small: true,
  },
  {
    name: "Monster Rounds",
    image: "https://deadlock.wiki/images/f/f8/Monster_Rounds.png",
  },
  {
    name: "Rapid Rounds",
    image: "https://deadlock.wiki/images/6/6e/Rapid_Rounds.png",
  },
  {
    name: "Restorative Shot",
    image: "https://deadlock.wiki/images/4/4c/Restorative_Shot.png",
    small: true,
  },
];

const tier2Items = [
  {
    name: "Active Reload",
    image: "https://deadlock.wiki/images/b/b4/Active_Reload.png",
  },
  {
    name: "Backstabber",
    image: "https://deadlock.wiki/images/5/52/Backstabber.png",
    small: true,
  },
  {
    name: "Fleetfoot",
    image: "https://deadlock.wiki/images/c/cf/Fleetfoot.png",
  },
];

function createItems(items, selector) {
  const card = document.querySelector(selector);
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const textClass = item.small ? "small-text" : "";
    const itemHtml = `<div class="item">
    <img src="${item.image}" />
    <div class="${textClass}">${item.name}</div>
    </div>`;
    card.insertAdjacentHTML("beforeend", itemHtml);
  }
}

createItems(tier1Items, ".tier-1 .content");
createItems(tier2Items, ".tier-2 .content");

const items = document.querySelectorAll(".item");
const tooltip = document.querySelector(".tooltip");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseenter", (e) => {
    // tooltip
    tooltip.style.display = "unset";
    const position = items[i].getBoundingClientRect();
    if (window.innerWidth - position.right >= 380) {
      tooltip.style.left = String(position.right + 14) + "px";
      tooltip.style.top = String(position.top - 40) + "px";
    } else {
      tooltip.style.left = String(position.left - 380 - 14) + "px";
      tooltip.style.top = String(position.top - 40) + "px";
    }

    // opacity
    for (let j = 0; j < items.length; j++) {
      if (items[i].isSameNode(items[j])) {
        continue;
      }

      items[j].style.opacity = 0.6;
    }
  });
  items[i].addEventListener("mouseleave", (e) => {
    tooltip.style.display = "none";
    for (let j = 0; j < items.length; j++) {
      items[j].style.opacity = 1;
    }
  });
}
