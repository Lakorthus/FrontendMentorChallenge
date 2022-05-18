const projects = [
  "single-price-grid-component-master",
  "nft-preview-card-component-main",
  "order-summary-component-main",
  "qr-code-component-main",
  "interactive-rating-component-main",
  "3-column-preview-card-component-main",
  "profile-card-component-main",
  "intro-component-with-signup-form-master",
  "base-apparel-coming-soon-master",
  "fylo-landing-page-with-two-column-layout-master",
  "stats-preview-card-component-main",
  "four-card-section-master",
  "social-proof-section-master",
  "huddle-landing-page-with-single-introductory-section-master",
  "huddle-landing-page-master",
  "social-proof-section-master",
  "faq-accordion-card-main",
];

const list = document.getElementById("list");

projects.forEach((project, i) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = `/${project}/index.html`;
  link.innerText = `${i + 1}.${formatProjectName(project)}`;

  const img = document.createElement("img");
  img.src = `/${project}/design/desktop-design.jpg`;

  link.prepend(img);
  listItem.appendChild(link);
  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
