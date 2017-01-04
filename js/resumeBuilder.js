var bio = {
    "name": "Samiha",
    "role": "FrontEnd Developer",
    "contacts": {
        "mobile": "9464322369",
        "email": "samihaarya06@gmail.com</a>",
        "github": "samihaarya",
        "twitter": "@arya_samiha</a>",
        "location": "Rajpura,Punjab"
    },
    "welcomeMessage": "A Smile is the Happiness you will find right under your Nose",
    "skills": ["HTML", "CSS", "JavaScript", "Bootstrap", "C", "Python"],
    "biopic": "images/IMG_20160704_083344.jpg"
};

bio.display= function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#header").append(formattedImage);
    $("#header").append(formattedMessage);
   $('#topContacts, #footerContacts').append(formattedMobile, formattedEmail, formattedTwitter, formattedLocation);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var s = 0; s < bio.skills.length; s++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[s]);
            $("#skills").append(formattedSkills);
        }
    }

};

var work = {
    "jobs": [{
        "employer": "Chitkara University,Punjab",
        "title": "Student",
        "dates": "2016",
        "location": "Jhansala, Punjab, India",
        "description": "I am currently enrolled in 2nd year in Computer Science Engineering"
    }]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};


var education = {
    "schools": [{
            "name": "Patel Public School, Rajpura",
            "location": "Rajpura, Punjab",
            "degree": "High School",
            "dates": "2013-2015",
            "majors": ["Physics", "Chemestry", "Maths"],
            "url": "http://patelpublicschool.com/"
        },
        {
            "name": "CHITKARA UNIVERSITY",
            "location": "Chitkara University, Jhansala, Punjab",
            "degree": "BTech",
            "dates": "2015-2019",
            "majors": ["CompSci"],
            "url": "http://www.chitkara.edu.in/"
        }
    ],
    "onlineCourses": [{
        "title": "Front End Nanodegree",
        "school": "Udacity",
        "dates": "Ongoing",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    if (education.schools.length > 0) {
        for (var j = 0; j < education.schools.length; j++) {
            var formattedName = HTMLschoolName.replace("%data%", education.schools[j].name);
            var formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[j].location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[j].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[j].dates);
            var formattedUrl = HTMLschoolURL.replace("%data%", education.schools[j].url);
            $(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedlocation);
            $(".education-entry:last").append(formattedDates);
            for (var m = 0; m < education.schools[j].majors.length; m++) {
              var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[j].majors[m]);
              $(".education-entry:last").append(formattedMajor);
            }
            $(".education-entry:last").append(formattedUrl);
        }
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        for (var c = 0; c < education.onlineCourses.length; c++) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[c].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[c].school);
            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[c].dates);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[c].url);
            $(".education-entry:last").append(formattedTitle + formattedSchool);
            $(".education-entry:last").append(formattedDate);
            $(".education-entry:last").append(formattedURL);
        }
    }
};
var projects = {
    "Projects": [{
            "title": "SPEECH RECOGNISATION",
            "dates": "2016",
            "description": "I worked under Chitkara University's Research Department(CURIN) on Natural Language Speech Recognisation in Punjabi Language",
            "images": ["images/image2.png"],
            "url": "https://www.facebook.com/Chitkara-University-Speech-Recognition-Hub-1712477912326760/"
        },
        {
            "title": "My Portfolio",
            "dates": "2016",
            "description": "I have made a responsive Portfolio page using bootstrap under FrontEnd Course",
            "images": ["images/image1.png"],
            "url": "https://github.com/samihaarya/Frontend-Project--3"
        },
        {
            "title": "Movie Website",
            "dates": "2016",
            "description": "I made a responsive website using python under Intro to programming",
            "images": ["images/image3.png"],
            "url": "https://github.com/samihaarya/Intro-to-programming---lesson-3"
        }
    ]
};
projects.display = function() {
    if (projects.Projects.length > 0) {
        for (var i = 0; i < projects.Projects.length; i++) {
            $("#Projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.Projects[i].title).replace("#", projects.Projects[i].url);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.Projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.Projects[i].description);

            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            for (var n = 0; n < projects.Projects[i].images.length; n++) {
              var formattedImage = HTMLprojectImage.replace("%data%", projects.Projects[i].images[n]);
              $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

bio.display();
//bio displayed
/**
the display function of this particular object (bio in  this case), displays all the properties of that object in the resume.
**/


work.display();
//work displayed
/**
the display function of this particular object (work in  this case), displays all the properties of that object in the resume.
**/


education.display();
//education displayed
/**
the display function of this particular object (education in  this case), displays all the properties of that object in the resume.
**/


projects.display();
//projects displayed
/**
the display function of this particular object (projects in  this case), displays all the properties of that object in the resume.
**/

$("#mapDiv").append(googleMap);
// map displaying my work and home location.
