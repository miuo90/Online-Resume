'use strict';
var formattedName = HTMLheaderName.replace("%data%","Gowoon Lee");
var formattedRole =HTMLheaderRole.replace("%data%","web-developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name":"Gowoon Lee",
	"role": "innovator",
	"contacts": {
		"mobile": "613-552-1054",
		"email": "gowoon.m.lee@gmail.com",
		"github": "miuo90",
		"location": "Ottawa, Canada"
	},
	"welcomeMessage": "A highly motivated front-web developer",
	"skills":[
		"Languages: French, Korean, Spanish","Web Design: CSS, HTML, JavaScript, Bootstrap","Communication: Public-speaking, Business Analysis", "Work Ethics: Hard-working, Innovative, Logical"
	],
	"pictureURL": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/08f/0a9/1b422a4.jpg"
};


bio.display = function() {
var formattedbioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(formattedbioPic);
var formattedwelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedwelcome);

if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var skillSet = HTMLskills.replace("%data%", bio.skills[i]);
			$("#header").append(skillSet);
		}
	}
};

bio.display();


var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedmobile);

var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedemail);

var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedgithub);

var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedlocation);


var work = {
		"jobs": [
			{
			"worktitle":"Information Coordinator",
			"workemployer":"Federal Government of Canada",
			"location":"Ottawa, ON, Canada",
			"workdates":"June, 2014 - Present",
			"workdescription": "Modernize the way public servants communicate and share information; introduce new IM/IT tools such as GCConnex, a web communication platform and GCDOCS, a collaborative information repository."
				},
			{
			"worktitle":"Issues Manager-Business Analyst",
			"workemployer":"Federal Government of Canada",
			"location":"Ottawa, ON, Canada",
			"workdates":"November 2013 - May 2014",
			"workdescription": "Performed a comprehensive market analysis to uncover important trends and priorities for senior management; handled complex corporate requests for a directorate of 40+ people"
			},
			{
			"worktitle":"Communications Analyst",
			"workemployer":"Federal Government of Canada",
			"location":"Ottawa, ON, Canada",
			"workdates":"January 2011 - August 2013",
			"workdescription": "Presented accurate and timely media briefings and analyses for the advisers to the Prime Minister's Office; demonstrated an ability to work under pressure and multitask"
			}
			]
		};

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].workemployer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].worktitle);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].workdates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].workdescription);
		$(".work-entry:last").append(formattedDescription);

		var formattedworklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedworklocation);
	}
};
work.display();

//education object


var education = {
	"schools": [
		{
			"schoolname":"University of Ottawa",
			"location":"Ottawa, ON, Canada",
			"schooldegree": "Honours Bachelor Degree in Public Administration",
			"schooldates":2012
		},
				],
	"onlineCourses": [
		{
			"onlineltitle":"Front-End Web Developer Nanodegree",
			"onlinename": "Udacity",
			"onlinedates": "2015 - present",
			"onlineURL": "www.Udacity.com"
		}
					]
};


//encapsulating education

education.display = function () {
	for (var degree in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[degree].schoolname);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[degree].schooldegree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[degree].schooldates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[degree].location);
		$(".education-entry:last").append(formattedSchoolLocation);
	}
	for (var degree2 in education.onlineCourses) {
		$(".education-entry").append(HTMLonlineClasses);
		var formattedOnlineName = HTMLonlineTitle.replace("%data%", education.onlineCourses[degree2].onlineltitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[degree2].onlinename);
		var formattedHTML = formattedOnlineName + formattedOnlineSchool;
		$(".education-entry:last").append(formattedHTML);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[degree2].onlinedates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[degree2].onlineURL);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
};

education.display();

//project object

var projects = {
	"sample_project": [
	{
		"sampletitle": "Responsive Design Portfolio - https://github.com/miuo90/portfolio",
		"sampledates": "2015",
		"sampledescription": "Successfuly used Bootstrap and applied beautiful design to complete a responsive website",
		"sampleimageURL":"https://farm1.staticflickr.com/670/21981847666_22f2694631.jpg",
		}
	]
};

//encapsulating project

projects.display = function () {
	for (var sample in projects.sample_project) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.sample_project[sample].sampletitle);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.sample_project[sample].sampledates);
		$(".project-entry:last").append(formattedProjectDate);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.sample_project[sample].sampledescription);
		$(".project-entry:last").append(formattedProjectDescription);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.sample_project[sample].sampleimageURL);
		$(".project-entry:last").append(formattedProjectImage);
	}
};

projects.display();

//internationalized button

function inName() {
	name = bio.name;
	new_name = name.trim().split(" ");
	console.log(new_name);

	new_name[1] =new_name[1].toUpperCase();
	console.log(new_name[1]);
	new_name[0] =new_name[0].slice(0,1).toUpperCase() +new_name[0].slice(1).toLowerCase();
	console.log(new_name[0] + new_name[1]);
	return new_name[0] + " " + new_name[1];
}

//Let's Connect
var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#footerContacts").append(formattedmobile);

var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedemail);

var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedgithub);

var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedlocation);

//Google Maps

$("#main").prepend(internationalizeButton);

//googlemap

$("#mapDiv").append(googleMap);

