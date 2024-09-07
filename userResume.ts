// Element references with proper typing
let generateResumeButtonEl = document.getElementById("generateResumeBtn") as HTMLButtonElement;
let userFormContainerEl = document.getElementById("userContainer") as HTMLDivElement;
let userFormEl = document.getElementById("userForm") as HTMLFormElement;
let resumeContainerEl = document.getElementById("resumeContainer") as HTMLDivElement;
let PersonalEditEl = document.getElementById("PersonalInfoEdit") as HTMLButtonElement;
let ContactEditEl = document.getElementById("ContactInfoEdit") as HTMLButtonElement;

let userNameEl = document.getElementById("userName") as HTMLInputElement;
let userAboutEl = document.getElementById("userAbout") as HTMLInputElement;
let userAgeEl = document.getElementById("userAge") as HTMLInputElement;
let userNationalityEl = document.getElementById("userNationality") as HTMLInputElement;
let userLanguageEl = document.getElementById("userLanguage") as HTMLInputElement;
let userHobbieEl = document.getElementById("userHobbie") as HTMLInputElement;
let userAddressEl = document.getElementById("userAddress") as HTMLInputElement;
let userEmailEl = document.getElementById("userEmail") as HTMLInputElement;
let userPhoneEl = document.getElementById("userPhone") as HTMLInputElement;
let userSocialEl = document.getElementById("userSocial") as HTMLInputElement;
let userInstituteEl = document.getElementById("userInstitute") as HTMLInputElement;
let userDegreeEl = document.getElementById("userDegree") as HTMLInputElement;
let userYearEl = document.getElementById("userYear") as HTMLInputElement;
let userJobTitleEl = document.getElementById("userJob") as HTMLInputElement;
let userJonDescriptionEl = document.getElementById("userJobDescription") as HTMLInputElement;
let userSkill1El = document.getElementById("userSkill1") as HTMLInputElement;
let userSkill2El = document.getElementById("userSkill2") as HTMLInputElement;
let userSkill3El = document.getElementById("userSkill3") as HTMLInputElement;
let userSkill4El = document.getElementById("userSkill4") as HTMLInputElement;
let userSkill5El = document.getElementById("userSkill5") as HTMLInputElement;

let NameEl = document.getElementById("Name") as HTMLElement;
let FullNameEl = document.getElementById("fullName") as HTMLElement;
let AboutEl = document.getElementById("About") as HTMLElement;
let AgeEl = document.getElementById("age") as HTMLElement;
let NationalityEl = document.getElementById("nationality") as HTMLElement;
let LanguageEl = document.getElementById("language") as HTMLElement;
let HobbieEl = document.getElementById("hobbie") as HTMLElement;
let AddressEl = document.getElementById("address") as HTMLElement;
let EmailEl = document.getElementById("email") as HTMLElement;
let PhoneEl = document.getElementById("number") as HTMLElement;
let SocialEl = document.getElementById("social") as HTMLElement;
let InstituteEl = document.getElementById("Institute") as HTMLElement;
let DegreeEl = document.getElementById("degree") as HTMLElement;
let YearEl = document.getElementById("year") as HTMLElement;
let JobTitleEl = document.getElementById("jobTitle") as HTMLElement;
let JobTime = document.getElementById("exTime") as HTMLElement;
let JobDescriptionEl = document.getElementById("jobDescription") as HTMLElement;
let Skill1El = document.getElementById("skill1") as HTMLElement;
let Skill2El = document.getElementById("skill2") as HTMLElement;
let Skill3El = document.getElementById("skill3") as HTMLElement;
let Skill4El = document.getElementById("skill4") as HTMLElement;
let Skill5El = document.getElementById("skill5") as HTMLElement;

resumeContainerEl.style.display = "none";

const generateResume = (): void => {
  if (
    userNameEl.value === "" ||
    userLanguageEl.value === "" ||
    userInstituteEl.value === "" ||
    userAddressEl.value === ""
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

const personalSectionEdit = (): void => {
  FullNameEl.innerText = prompt("Edit your Name :", FullNameEl.innerText) || FullNameEl.innerText;
  AboutEl.innerText = prompt("Edit your About: ", AboutEl.innerText) || AboutEl.innerText;
  AddressEl.innerText = prompt("Edit your Address :", AddressEl.innerText) || AddressEl.innerText;
};

const contactSectionEdit = (): void => {
  EmailEl.innerText = prompt("Edit your email :", EmailEl.innerText) || EmailEl.innerText;
  PhoneEl.innerText = prompt("Edit your Phone :", PhoneEl.innerText) || PhoneEl.innerText;
  SocialEl.innerText = prompt("Edit your Social Account :", SocialEl.innerText) || SocialEl.innerText;
};

ContactEditEl.addEventListener("click", contactSectionEdit);
PersonalEditEl.addEventListener("click", personalSectionEdit);
generateResumeButtonEl.addEventListener("click", generateResume);
