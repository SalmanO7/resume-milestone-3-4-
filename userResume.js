let generateResumeButtonEl = document.getElementById("generateResumeBtn");
let userFormContainerEl = document.getElementById("userContainer");
let userFormEl = document.getElementById("userForm");
let resumeContainerEl = document.getElementById("resumeContainer");
let PersonalEditEl = document.getElementById("PersonalInfoEdit");
let ContactEditEl = document.getElementById("ContactInfoEdit");

let userNameEl = document.getElementById("userName");
let userAboutEl = document.getElementById("userAbout");
let userAgeEl = document.getElementById("userAge");
let userNationalityEl = document.getElementById("userNationality");
let userLanguageEl = document.getElementById("userLanguage");
let userHobbieEl = document.getElementById("userHobbie");
let userAddressEl = document.getElementById("userAddress");
let userEmailEl = document.getElementById("userEmail");
let userPhoneEl = document.getElementById("userPhone");
let userSocialEl = document.getElementById("userSocial");
let userInstituteEl = document.getElementById("userInstitute");
let userDegreeEl = document.getElementById("userDegree");
let userYearEl = document.getElementById("userYear");
let userJobTitleEl = document.getElementById("userJob");
let userJonDescriptionEl = document.getElementById("userJobDescription");
let userSkill1El = document.getElementById("userSkill1");
let userSkill2El = document.getElementById("userSkill2");
let userSkill3El = document.getElementById("userSkill3");
let userSkill4El = document.getElementById("userSkill4");
let userSkill5El = document.getElementById("userSkill5");

let NameEl = document.getElementById("Name");
let FullNameEl = document.getElementById("fullName");
let AboutEl = document.getElementById("About");
let AgeEl = document.getElementById("age");
let NationalityEl = document.getElementById("nationality");
let LanguageEl = document.getElementById("language");
let HobbieEl = document.getElementById("hobbie");
let AddressEl = document.getElementById("address");
let EmailEl = document.getElementById("email");
let PhoneEl = document.getElementById("number");
let SocialEl = document.getElementById("social");
let InstituteEl = document.getElementById("Institute");
let DegreeEl = document.getElementById("degree");
let YearEl = document.getElementById("year");
let JobTitleEl = document.getElementById("jobTitle");
let JobTime = document.getElementById("exTime");
let JobDescriptionEl = document.getElementById("jobDescription");
let Skill1El = document.getElementById("skill1");
let Skill2El = document.getElementById("skill2");
let Skill3El = document.getElementById("skill3");
let Skill4El = document.getElementById("skill4");
let Skill5El = document.getElementById("skill5");
resumeContainerEl.style.display = "none";

const generateResume = () => {
  if (
    userNameEl.value === "" ||
    userLanguageEl.value === "" ||
    userInstituteEl.value === "" ||
    userAddressEl === ""
  ) {
    userFormContainerEl.style.display = "block";
    resumeContainerEl.style.display = "none";
    generateResumeButtonEl.style.display = "block";
    alert("Please fill all required fields. For Resume");
  } else {
    userFormContainerEl.style.display = "none";
    resumeContainerEl.style.display = "block";
  }

  NameEl.innerText = userNameEl.value;
  AboutEl.innerText = userAboutEl.value;
  FullNameEl.innerText = userNameEl.value;
  AgeEl.innerText = userAgeEl.value;
  AddressEl.innerText = userAddressEl.value;
  NationalityEl.innerText = userNationalityEl.value;
  LanguageEl.innerText = userLanguageEl.value;
  HobbieEl.innerText = userHobbieEl.value;
  EmailEl.innerText = userEmailEl.value;
  PhoneEl.innerText = userPhoneEl.value;
  SocialEl.innerText = userSocialEl.value;
  InstituteEl.innerText = userInstituteEl.value;
  DegreeEl.innerText = userDegreeEl.value;
  YearEl.innerText = userYearEl.value;
  JobTitleEl.innerText = userJobTitleEl.value;
  JobTime.innerText = userYearEl.value;
  JobDescriptionEl.innerText = userJonDescriptionEl.value;
  Skill1El.innerText = userSkill1El.value;
  Skill2El.innerText = userSkill2El.value;
  Skill3El.innerText = userSkill3El.value;
  Skill4El.innerText = userSkill4El.value;
};

const personalSectionEdit = () => {
  FullNameEl.innerText = prompt("Edit your Name :", FullNameEl.innerHTML);
  AboutEl.innerText = prompt("Edit your About: ", AboutEl.innerHTML);
  AddressEl.innerText = prompt("Edit your Address :", AddressEl.innerHTML);
};
const contactSectionEdit = () => {
  EmailEl.innerHTML = prompt("Edit your email :", EmailEl.innerHTML);
  PhoneEl.innerHTML = prompt("Edit your Phone :", PhoneEl.innerHTML);
  SocialEl.innerHTML = prompt("Edit your Social Account :", SocialEl.innerHTML);
};
ContactEditEl.addEventListener("click", contactSectionEdit);
PersonalEditEl.addEventListener("click", personalSectionEdit);
generateResumeButtonEl.addEventListener("click", generateResume);
