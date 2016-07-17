var bio = {
  "name" : "Samiha",
  "role" : "FrontEnd Developer",
  "contacts" : {
    "mobile" : "9464322369",
    "email" : "<a href='mailto:samihaarya06@gmail.com'>samihaarya06@gmail.com</a>",
    "githhub" : "<a href='https://github.com/Samihaarya'>samihaarya</a>",
    "twitter" : "<a href='https://mobile.twitter.com/arya_samiha'>@arya_samiha</a>",
    "location" : "Rajpura,Punjab"
  },
  "welcomepMessage" : "A Smile is the Happiness you will find right under your Nose",
  "skills" : ["HTML","CSS","JavaScript","Bootstrap","C"],
  "biopic" : "images/IMG_20160704_083344.jpg"
};
var work ={
  "jobs" : [
    {
      "employer" : "Chitkara University,Punjab",
      "title" : "Student",
      "dates" : "2016",
      "description" : "I am currently enrolled in 2nd year in Computer Science Engineering"
    }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "Patel Public School, Rajpura",
      "location" : "Rajpura, Punjab",
      "degree" : "High School",
      "dates" : "2013-2015",
      "majors" : "PCM",
      "url" : "http://patelpublicschool.com/"
    },
    {
      "name" : "CHITKARA UNIVERSITY",
      "location" : "Chitkara University, Jhansala, Punjab",
      "degree" : "BTech",
      "dates" : "2015-2019",
      "majors" : "CompSci",
      "url" : "http://www.chitkara.edu.in/"
    }
  ]
};

var Projects = [
  {
    "projects" : {
      "title" : "SPEECH RECOGNISATION",
      "dates" : "2016-Present",
      "description" : "I worked under Chitkara University's Research Department(CURIN) on Natural Language Speech Recognisation in Punjabi Language",
      "image" : "images/IMG_20160716_230450.jpg",
      "url" : "https://www.facebook.com/Chitkara-University-Speech-Recognition-Hub-1712477912326760/"
    },
    {
      "title" : "My Portfolio",
      "dates" : "2016",
      "description" : "I have made a responsive Portfolio page using bootstrap under FrontEnd Course",
      "image" : "images/myPortfolio.png",
      "url" : "https://github.com/samihaarya/Frontend-Project--3"
    }
  ]
}

if(bio.skills.length>0){
  $("#header").append(HTMLskillStart);
  var formattedSkill = HTMLskills.replace("%dat%","bio.skills[o]");
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%","bio.skills[1]");
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%","bio.skills[2]");
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%","bio.skills[3]");
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%","bio.skills[4]");
  $("#skills").append(formattedSkill);
}
function displayWork(){
  for(job in work.jobs){
    $("#WorkExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",works.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",works.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",works.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%",works.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();
