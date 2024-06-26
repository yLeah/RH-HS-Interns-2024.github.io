const students = [
  {
    "name": "Christopher Arnold",
    "location": "Raleigh, North Carolina",
    "school": "Heritage High School",
    "class": "2025",
    "pronouns": "He/Him",
    "blog": "example"
  },
  {
    "name": "Delanie Blatchford",
    "location": "Raleigh, North Carolina",
    "school": "Wake STEM Early College High School",
    "class": "2025",
    "pronouns": "She/Her",
    "blog": "example"
  },
  {
    "name": "Jorge Romero",
    "location": "Boston, Massachusetts",
    "school": "Boston Latin Academy",
    "class": "2025",
    "pronouns": "He/Him",
    "blog": "example"
  },
  {
    "name": "Kwame Mensah-Boone",
    "location": "Raleigh, North Carolina",
    "school": "Durham Academy Upper School",
    "class": "2026",
    "pronouns": "He/Him",
    "blog": "example"
  },
  {
    "name": "Leah Wang",
    "location": "Boston, Massachusetts",
    "school": "Needham High School",
    "class": "2025",
    "pronouns": "She/Her",
    "blog": "example"
  },
  {
    "name": "Navya Sharma",
    "location": "Boston, Massachusetts",
    "school": "Shrewsbury",
    "class": "2025",
    "pronouns": "She/Her",
    "blog": "example"
  },
  {
    "name": "Niyam Badani",
    "location": "Boston, Massachusetts",
    "school": "Buckingham Browne & Nichols",
    "class": "2025",
    "pronouns": "He/Him",
    "blog": "example"
  },
  {
    "name": "Sai Sahasra",
    "location": "Raleigh, North Carolina",
    "school": "Enloe Magnet High School",
    "class": "2025",
    "pronouns": "She/Her",
    "blog": "example"
  },
  {
    "name": "Samuel Hudson Emig",
    "location": "Raleigh, North Carolina",
    "school": "Middle Creek High School",
    "class": "2025",
    "pronouns": "He/Him",
    "blog": "example"
  },
  {
    "name": "Sushant Santhosh",
    "location": "Boston, Massachusetts",
    "school": "Westborough High School",
    "class": "2026",
    "pronouns": "He/Him",
    "blog": "example"
  },
  {
    "name": "Tamara Nicole Medrano",
    "location": "Raleigh, North Carolina",
    "school": "Wake STEM Early College High School",
    "class": "2026",
    "pronouns": "She/Her",
    "blog": "example"
  },
  {
    "name": "Walter Hernandez",
    "location": "Boston, Massachusetts",
    "school": "Charlestown High School",
    "class": "2025",
    "pronouns": "He/Him",
    "blog": "example"
  }
];


const wrapper = document.querySelector('.student-card-list');
let html = '';
for (let student of students) {

  let locationChip = '';

  if(student.location === "Raleigh, North Carolina") {
    locationChip =
    `
    <span class="pf-v5-c-label pf-m-red">
      <span class="pf-v5-c-label__content">
        <span class="pf-v5-c-label__icon">
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        </span>
        <span class="pf-v5-c-label__text student-location">${student.location}</span>
      </span>
    </span>
    `
  }

  if(student.location === "Boston, Massachusetts") {
    locationChip =
    `
    <span class="pf-v5-c-label pf-m-cyan">
      <span class="pf-v5-c-label__content">
        <span class="pf-v5-c-label__icon">
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        </span>
        <span class="pf-v5-c-label__text student-location">${student.location}</span>
      </span>
    </span>
    `
  }

  let projectLink = `./interns/${student.name.replace(/\s+/g, '-').toLowerCase()}/index.html`;

  html +=
  `
    <div class="pf-v5-c-card" id="student-card">
      <div class="pf-v5-c-card__title">
        <h2 class="pf-v5-c-card__title-text student-name">${student.name}</h2>
      </div>
      <div class="pf-v5-c-card__body student-info">
        <span class="student-school">${student.school} | Class of ${student.class}</span>
        ${locationChip}
      </div>
      <div class="pf-v5-c-card__footer">
        <a
          class="pf-v5-c-button pf-m-secondary student-page"
          href=${projectLink}
        >Test page</a>
        <a
          class="pf-v5-c-button pf-m-link student-journal"
          href=${student.blog}
        >Journal entries</a>
      </div>
    </div>
  `
};

wrapper.innerHTML = html;