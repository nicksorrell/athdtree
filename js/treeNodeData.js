var ATHDNodes =
[
	//////START SECTION (1.X)//////
	{
		id: "1.0",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "2.0"
			},
			chioice2 = {
				text: "No",
				targetNode: "1.1"
			}
		]
	},
	{
		id: "1.1",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "1.2"
			},
			chioice2 = {
				text: "No",
				targetNode: "1.7"
			}
		]
	},
	{
		id: "1.2",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "1.3"
			},
			chioice2 = {
				text: "No",
				targetNode: "1.2.1"
			}
		]
	},
	{
		id: "1.2.1",
		type: "end",
		code: "N1B",
		text: "This is an end point"
	},
	{
		id: "1.3",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "1.3.1"
			},
			chioice2 = {
				text: "No",
				targetNode: "1.4"
			}
		]
	},
	{
		id: "1.3.1",
		type: "end",
		code: "N1A",
		text: "This is an end point"
	},
	{
		id: "1.4",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "1.5"
			},
			chioice2 = {
				text: "No",
				targetNode: "1.4.1"
			}
		]
	},
	{
		id: "1.4.1",
		type: "end",
		code: "N1D",
		text: "This is an end point"
	},
	{
		id: "1.5",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "1.5.1"
			},
			chioice2 = {
				text: "No",
				targetNode: "1.6"
			}
		]
	},
	{
		id: "1.5.1",
		type: "end",
		code: "N8A",
		text: "This is an end point"
	},
	{
		id: "1.6",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "1.6.1"
			},
			choice2 = {
				text: "No",
				targetNode: "1.6.2"
			}
		]
	},
	{
		id: "1.6.1",
		type: "end",
		code: "N8B",
		text: "This is an end point"
	},
	{
		id: "1.6.2",
		type: "end",
		code: "N8C",
		text: "This is an end point"
	},
	{
		id: "1.7",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "1.7.1"
			},
			choice2 = {
				text: "No",
				targetNode: "1.7.2"
			}
		]
	},
	{
		id: "1.7.1",
		type: "end",
		code: "N1C",
		text: "This is an end point"
	},
	{
		id: "1.7.2",
		type: "end",
		code: "N1D",
		text: "This is an end point"
	},
	//////SECTION A: Training (2.X)//////
	{
		id: "2.0",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "2.1"
			},
			choice2 = {
				text: "No",
				targetNode: "2.4"
			}
		]
	},
	{
		id: "2.1",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "2.1.1"
			},
			choice2 = {
				text: "No",
				targetNode: "2.2"
			}
		]
	},
	{
		id: "2.1.1",
		type: "end",
		code: "N8A",
		text: "This is an end point"
	},
	{
		id: "2.2",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "2.2.1"
			},
			choice2 = {
				text: "No",
				targetNode: "2.3"
			}
		]
	},
	{
		id: "2.2.1",
		type: "end",
		code: "N8B",
		text: "This is an end point"
	},
	{
		id: "2.3",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "2.3.1"
			},
			choice2 = {
				text: "No",
				targetNode: "2.6"
			}
		]
	},
	{
		id: "2.3.1",
		type: "end",
		code: "N8C",
		text: "This is an end point"
	},
	{
		id: "2.4",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "2.5"
			},
			choice2 = {
				text: "No",
				targetNode: "2.7"
			}
		]
	},
	{
		id: "2.5",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "3.0"
			},
			choice2 = {
				text: "No",
				targetNode: "2.6"
			}
		]
	},
	{
		id: "2.6",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "2.6.1"
			},
			choice2 = {
				text: "No",
				targetNode: "2.6.1"
			}
		]
	},
	{
		id: "2.6.1",
		type: "end",
		code: "N4A",
		text: "This is an end point"
	},
	{
		id: "2.7",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "2.5"
			},
			choice2 = {
				text: "No",
				targetNode: "2.8"
			}
		]
	},
	{
		id: "2.8",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "2.8.1"
			},
			choice2 = {
				text: "No",
				targetNode: "2.5"
			}
		]
	},
	{
		id: "2.8.1",
		type: "end",
		code: "C5A",
		text: "This is an end point"
	},
	//////SECTION B: Training (3.X)//////
	{
		id: "3.0",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "3.1"
			},
			choice2 = {
				text: "No",
				targetNode: "3.1.1"
			}
		]
	},
	{
		id: "3.1",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "3.1.1"
			},
			choice2 = {
				text: "No",
				targetNode: "3.2"
			}
		]
	},
	{
		id: "3.1.1",
		type: "end",
		code: "C4A",
		text: "This is an end point"
	},
	{
		id: "3.2",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "3.2.1"
			},
			choice2 = {
				text: "No",
				targetNode: "3.3"
			}
		]
	},
	{
		id: "3.2.1",
		type: "end",
		code: "C4B",
		text: "This is an end point"
	},
	{
		id: "3.3",
		type: "question",
		text: "Is this a sample question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "3.3.1"
			},
			choice2 = {
				text: "No",
				targetNode: "3.3.2"
			}
		]
	},
	{
		id: "3.3.1",
		type: "end",
		code: "C4C",
		text: "This is an end point"
	},
	{
		id: "3.3.2",
		type: "end",
		code: "C4D",
<<<<<<< HEAD
		text: "This is an end point"
=======
		text: "Record C4D Lesson Material Explanation Required Other Incident"
	},
	//////SECTION C: Training (4.X)//////
	{
		id: "4.0",
		type: "question",
		text: "Do you have a problem moving from page to page?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "4.1"
			},
			choice2 = {
				text: "No",
				targetNode: "4.5"
			}
		]
	},
	{
		id: "4.1",
		type: "question",
		text: "Were you able to use the Table of Contents topic links?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "4.2"
			},
			choice2 = {
				text: "No",
				targetNode: "4.1.1"
			}
		]
	},
	{
		id: "4.1.1",
		type: "end",
		code: "N14",
		text: "Record N4F Table of Contents Topic Incident"
	},
	{
		id: "4.2",
		type: "question",
		text: "Did the Forward/Next or Previous/Back buttons work?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "4.3"
			},
			choice2 = {
				text: "No",
				targetNode: "4.2.1"
			}
		]
	},
	{
		id: "4.2.1",
		type: "end",
		code: "N4E",
		text: "Record N4E Navigation Button Incident"
	},
	{
		id: "4.3",
		type: "question",
		text: "Did you arrive at a point from which you were unable to continue?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "4.4"
			},
			choice2 = {
				text: "No",
				targetNode: "4.6"
			}
		]
	},
	{
		id: "4.4",
		type: "question",
		text: "Were you asked for input at this point?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "4.4.1"
			},
			choice2 = {
				text: "No",
				targetNode: "4.4.2"
			}
		]
	},
	{
		id: "4.4.1",
		type: "end",
		code: "N4D",
		text: "Record N4D Dialog Box Issues"
	},
	{
		id: "4.4.2",
		type: "end",
		code: "N4B",
		text: "Record N4B Progress Blocked"
	},
	{
		id: "4.5",
		type: "question",
		text: "Were you able to return to your previous location?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "4.2"
			},
			choice2 = {
				text: "No",
				targetNode: "4.5a"
			}
		]
	},
	{
		id: "4.5a",
		type: "question",
		text: "Were you attempting to re-enter the course?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "4.5a.1"
			},
			choice2 = {
				text: "No",
				targetNode: "4.5a.2"
			}
		]
	},
	{
		id: "4.5a.1",
		type: "end",
		code: "N4G",
		text: "Record N4G Bookmark Incident"
	},
	{
		id: "4.5a.2",
		type: "end",
		code: "N4G",
		text: "Record N4H Navigation Other Incident"
	},
	{
		id: "4.6",
		type: "question",
		text: "Did you select a button that exited the course unexpectedly?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "4.6.1"
			},
			choice2 = {
				text: "No",
				targetNode: "4.7"
			}
		]
	},
	{
		id: "4.6.1",
		type: "end",
		code: "N4C",
		text: "Record N4C Learner Forced Out of Course Incident"
	},
	{
		id: "4.7",
		type: "question",
		text: "Did you encounter an issue with one or more parts of an assessment?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.0"
			},
			choice2 = {
				text: "No",
				targetNode: "4.8"
			}
		]
	},
	{
		id: "4.8",
		type: "question",
		text: "Did you encounter an issue with multimedia?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "7.0"
			},
			choice2 = {
				text: "No",
				targetNode: "4.9"
			}
		]
	},
	{
		id: "4.9",
		type: "question",
		text: "Did you encounter an issue with illegible or missing text?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "8.0"
			},
			choice2 = {
				text: "No",
				targetNode: "9.0"
			}
		]
	},
	//////SECTION D: Registration (5.X)//////
	{
		id: "5.0",
		type: "question",
		text: "Were you trying to register for a course?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "5.1"
			},
			choice2 = {
				text: "No",
				targetNode: "5.6"
			}
		]
	},
	{
		id: "5.1",
		type: "question",
		text: "Were you trying to register for an ATRRS course?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "5.1.1"
			},
			choice2 = {
				text: "No",
				targetNode: "5.2"
			}
		]
	},
	{
		id: "5.1.1",
		type: "end",
		code: "N3A",
		text: "Record N3A ATRRS Registration Incident, and add description in text field"
	},
	{
		id: "5.2",
		type: "question",
		text: "Were you able to get a registration confirmation message?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "5.3"
			},
			choice2 = {
				text: "No",
				targetNode: "5.2.1"
			}
		]
	},
	{
		id: "5.2.1",
		type: "end",
		code: "N3B",
		text: "Record N3B ATRRS Can't Register Incident"
	},
	{
		id: "5.3",
		type: "question",
		text: "Did you see the course you registered for in your list of enrollments?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "5.4"
			},
			choice2 = {
				text: "No",
				targetNode: "5.3.1"
			}
		]
	},
	{
		id: "5.3.1",
		type: "end",
		code: "N3D",
		text: "Record N3D Enrollment Not Visible Incident"
	},
	{
		id: "5.4",
		type: "question",
		text: "Are you able to launch the course from your enrollments?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "5.5"
			},
			choice2 = {
				text: "No",
				targetNode: "5.4.1"
			}
		]
	},
	{
		id: "5.4.1",
		type: "end",
		code: "N4A",
		text: "Record N4A Learner Unable to Launch from Enrollments"
	},
	{
		id: "5.5",
		type: "question",
		text: "Do you have a problem with a test or assessment?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.0"
			},
			choice2 = {
				text: "No",
				targetNode: "4.0"
			}
		]
	},
	{
		id: "5.6",
		type: "question",
		text: "Were you searching for a course?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "5.7"
			},
			choice2 = {
				text: "No",
				targetNode: "5.8"
			}
		]
	},
	{
		id: "5.7",
		type: "question",
		text: "Are you sure your search terms were accurate?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "5.7.1"
			},
			choice2 = {
				text: "No",
				targetNode: "5.7.2"
			}
		]
	},
	{
		id: "5.7.1",
		type: "end",
		code: "N2A",
		text: "Record N2A Search Fails to Find Item"
	},
	{
		id: "5.7.2",
		type: "end",
		code: "N2B",
		text: "Record N2B User Unable to Use Search"
	},
	{
		id: "5.8",
		type: "question",
		text: "Were you unable to drop a course you registered for?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "5.8.1"
			},
			choice2 = {
				text: "No",
				targetNode: "5.5"
			}
		]
	},
	{
		id: "5.8.1",
		type: "end",
		code: "N3C",
		text: "Record N3C Learner Cannot Drop a Course"
	},
	//////SECTION E: Assessment Incident (6.X)//////
	{
		id: "6.0",
		type: "question",
		text: "Did you encounter an issue with a particular question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.1"
			},
			choice2 = {
				text: "No",
				targetNode: "6.5"
			}
		]
	},
	{
		id: "6.1",
		type: "question",
		text: "Was there no correct answer for the question?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.1.1"
			},
			choice2 = {
				text: "No",
				targetNode: "6.2"
			}
		]
	},
	{
		id: "6.1.1",
		type: "end",
		code: "C1C",
		text: "Record C1C Content Assessment Question has No Correct Answer"
	},
	{
		id: "6.2",
		type: "question",
		text: "Does this question have answers that cannot be selected?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.2.1"
			},
			choice2 = {
				text: "No",
				targetNode: "6.3"
			}
		]
	},
	{
		id: "6.2.1",
		type: "end",
		code: "C1B",
		text: "Record C1B Content Assessment Questions have Inactive Answers"
	},
	{
		id: "6.3",
		type: "question",
		text: "Does this question have more than one correct answer?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.3.1"
			},
			choice2 = {
				text: "No",
				targetNode: "6.4"
			}
		]
	},
	{
		id: "6.3.1",
		type: "end",
		code: "C1D",
		text: "Record C1D Content Assessment Question has Multiple Correct Answers"
	},
	{
		id: "6.4",
		type: "question",
		text: "Did the question have missing answers?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.4.1"
			},
			choice2 = {
				text: "No",
				targetNode: "6.4.2"
			}
		]
	},
	{
		id: "6.4.1",
		type: "end",
		code: "C1A",
		text: "Record C1A Content Assessment Question has Answers Missing"
	},
	{
		id: "6.4.2",
		type: "end",
		code: "C1H",
		text: "Record C1H Content Assessment Other"
	},
	{
		id: "6.5",
		type: "question",
		text: "Is the test score incorrect?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.6"
			},
			choice2 = {
				text: "No",
				targetNode: "6.8"
			}
		]
	},
	{
		id: "6.6",
		type: "question",
		text: "Was the score reported immediately after you completed the test incorrect?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.6.1"
			},
			choice2 = {
				text: "No",
				targetNode: "6.7"
			}
		]
	},
	{
		id: "6.6.1",
		type: "end",
		code: "C1E",
		text: "Record C1E Content Assessment Scores Incorrectly"
	},
	{
		id: "6.7",
		type: "question",
		text: "Did you not see the incorrect score until you finished the test and were looking at result displays and lesson progress information?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.7.1"
			},
			choice2 = {
				text: "No",
				targetNode: "6.8"
			}
		]
	},
	{
		id: "6.7.1",
		type: "end",
		code: "N5C",
		text: "Record N5C Non-Content Assessment Score Reported Incorrectly"
	},
	{
		id: "6.8",
		type: "question",
		text: "Did the test say you passed, but your record shows unsuccessful, incomplete, or not evaluated for the test?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.8.1"
			},
			choice2 = {
				text: "No",
				targetNode: "6.9"
			}
		]
	},
	{
		id: "6.8.1",
		type: "end",
		code: "C1G",
		text: "Record C1G Content Assessment Completed Issue"
	},
	{
		id: "6.9",
		type: "question",
		text: "Did the test say you passed, and your record for this test indicated you passed but the status for the course says unsuccessful, incomplete, or not evaluated?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.9.1"
			},
			choice2 = {
				text: "No",
				targetNode: "6.10"
			}
		]
	},
	{
		id: "6.9.1",
		type: "end",
		code: "N5A",
		text: "Record N5A Non-Content Lesson/Module Roll-up Issue"
	},
	{
		id: "6.10",
		type: "question",
		text: "Did the test say you passed, with a passing status for the test in your record; however, your record is still in enrollments and did not go to transcript?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.10.1"
			},
			choice2 = {
				text: "No",
				targetNode: "6.11"
			}
		]
	},
	{
		id: "6.10.1",
		type: "end",
		code: "N5B",
		text: "Record N5B Non-Content Course Roll-up Issue"
	},
	{
		id: "6.11",
		type: "question",
		text: "Did the registration information say you have another test attempt but you are not able to take the assessment again?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "6.11.1"
			},
			choice2 = {
				text: "No",
				targetNode: "6.4.2"
			}
		]
	},
	{
		id: "6.11.1",
		type: "end",
		code: "C1F",
		text: "Record C1F Content Number of Attempts Incident"
	},
	//////SECTION F: Audio Appearance (7.X)//////
	{
		id: "7.0",
		type: "question",
		text: "Did you encounter a problem with a video?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "7.1"
			},
			choice2 = {
				text: "No",
				targetNode: "7.4"
			}
		]
	},
	{
		id: "7.1",
		type: "question",
		text: "Did you find a video that would not play?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "7.1.1"
			},
			choice2 = {
				text: "No",
				targetNode: "7.2"
			}
		]
	},
	{
		id: "7.1.1",
		type: "end",
		code: "N6A",
		text: "Record N6A Video Does Not Play Incident"
	},
	{
		id: "7.2",
		type: "question",
		text: "Did the video stop abruptly or did not play properly?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "7.2.1"
			},
			choice2 = {
				text: "No",
				targetNode: "7.3"
			}
		]
	},
	{
		id: "7.2.1",
		type: "end",
		code: "N6B",
		text: "Record N6B Video Plays Improperly Incident"
	},
	{
		id: "7.3",
		type: "question",
		text: "Did you encounter a video whose audio track was out of sync?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "7.3.1"
			},
			choice2 = {
				text: "No",
				targetNode: "7.3.2"
			}
		]
	},
	{
		id: "7.3.1",
		type: "end",
		code: "N6E",
		text: "Record N6E Audio Out of Sync with Video Incident"
	},
	{
		id: "7.3.2",
		type: "end",
		code: "N6F",
		text: "Record N6F Media Other Incident"
	},
	{
		id: "7.4",
		type: "question",
		text: "Did you encounter a problem with the audio?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "7.5"
			},
			choice2 = {
				text: "No",
				targetNode: "7.3.2"
			}
		]
	},
	{
		id: "7.5",
		type: "question",
		text: "Was there a page where the audio stopped abruptly or played improperly?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "7.5.1"
			},
			choice2 = {
				text: "No",
				targetNode: "7.6"
			}
		]
	},
	{
		id: "7.5.1",
		type: "end",
		code: "N6D",
		text: "Record N6D Audio Plays Improperly Incident"
	},
	{
		id: "7.6",
		type: "question",
		text: "If it wasn't audio or video, was there no media where there should have been media?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "7.6.1"
			},
			choice2 = {
				text: "No",
				targetNode: "7.3.2"
			}
		]
	},
	{
		id: "7.6.1",
		type: "end",
		code: "N6C",
		text: "Record N6C No Audio when Expected Incident"
	},
	//////SECTION G: Content Appearance Blocke/Illegibile/etc (8.X)//////
	{
		id: "8.0",
		type: "question",
		text: "Did you find text was illegible, covered, or missing?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "8.0.1"
			},
			choice2 = {
				text: "No",
				targetNode: "8.1"
			}
		]
	},
	{
		id: "8.0.1",
		type: "end",
		code: "C2A",
		text: "Record C2A Legibility of Text Incident"
	},
	{
		id: "8.1",
		type: "question",
		text: "Did you find text was covered by an image or an image was unclear or inappropriate?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "8.1.1"
			},
			choice2 = {
				text: "No",
				targetNode: "8.2"
			}
		]
	},
	{
		id: "8.1.1",
		type: "end",
		code: "C2B",
		text: "Record C2B Image Rendering Incident"
	},
	{
		id: "8.2",
		type: "question",
		text: "Did you you find text that ended abruptly or had no scroll bar?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "8.2.1"
			},
			choice2 = {
				text: "No",
				targetNode: "8.2.2"
			}
		]
	},
	{
		id: "8.2.1",
		type: "end",
		code: "C2C",
		text: "Record C2C Text Incomplete or Scroll Bar Not Present"
	},
	{
		id: "8.2.2",
		type: "end",
		code: "C2D",
		text: "Record C2D Other Appearance Incident, with description entered in text"
	},
	//////SECTION H: Content Appearance Blocke/Illegibile/etc (9.X)//////
	{
		id: "9.0",
		type: "question",
		text: "Did you encounter a problem with the instructional content in a course?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "9.1"
			},
			choice2 = {
				text: "No",
				targetNode: "9.7"
			}
		]
	},
	{
		id: "9.1",
		type: "question",
		text: "Did you find the course contained incorrect or outdated doctrine?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "9.1.1"
			},
			choice2 = {
				text: "No",
				targetNode: "9.2"
			}
		]
	},
	{
		id: "9.1.1",
		type: "end",
		code: "C3A",
		text: "Record C3A Incorrect or Outdated Doctrine Incident"
	},
	{
		id: "9.2",
		type: "question",
		text: "Did you find the course contained incorrect or outdated images or video?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "9.2.1"
			},
			choice2 = {
				text: "No",
				targetNode: "9.3"
			}
		]
	},
	{
		id: "9.2.1",
		type: "end",
		code: "C3B",
		text: "Record C3B Incorrect or Outdated Imagery Incident"
	},
	{
		id: "9.3",
		type: "question",
		text: "Did you find a test in the course that did not test the instructional material in the course?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "9.3.1"
			},
			choice2 = {
				text: "No",
				targetNode: "9.4"
			}
		]
	},
	{
		id: "9.3.1",
		type: "end",
		code: "C3C",
		text: "Record C3C Test Does Not Assess Instructional Material Presented in the Course"
	},
	{
		id: "9.4",
		type: "question",
		text: "Did you find the course contained Personally Identifiable Information (PII)?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "9.4.1"
			},
			choice2 = {
				text: "No",
				targetNode: "9.5"
			}
		]
	},
	{
		id: "9.4.1",
		type: "end",
		code: "C3D",
		text: "Record C3D Personally Identifiable Information (PII) in Courseware Incident"
	},
	{
		id: "9.5",
		type: "question",
		text: "Did you find the course contained redundant or unnecessary information?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "9.5.1"
			},
			choice2 = {
				text: "No",
				targetNode: "9.6"
			}
		]
	},
	{
		id: "9.5.1",
		type: "end",
		code: "C3E",
		text: "Record C3E Course Content Redundant Incident"
	},
	{
		id: "9.6",
		type: "question",
		text: "Did you find the course contained hyperlinks that did not work?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "9.6.1"
			},
			choice2 = {
				text: "No",
				targetNode: "9.6.2"
			}
		]
	},
	{
		id: "9.6.1",
		type: "end",
		code: "C3F",
		text: "Record C3F Course Content Link Failure Incident"
	},
	{
		id: "9.6.2",
		type: "end",
		code: "C3G",
		text: "Record C3G Content Instructional Content Other Incident"
	},
	{
		id: "9.7",
		type: "question",
		text: "Is the issue related to distributed learning content?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "9.8"
			},
			choice2 = {
				text: "No",
				targetNode: "9.9"
			}
		]
	},
	{
		id: "9.8",
		type: "question",
		text: "Do you have a suggestion?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "9.8.1"
			},
			choice2 = {
				text: "No",
				targetNode: "9.8.2"
			}
		]
	},
	{
		id: "9.8.1",
		type: "end",
		code: "C5A",
		text: "Record C5A Content Suggestion and enter learner suggestion in description"
	},
	{
		id: "9.8.2",
		type: "end",
		code: "C5B",
		text: "Record C5B Non-Content Suggestion and enter learner suggestion in description"
	},
	{
		id: "9.9",
		type: "question",
		text: "Do you have a suggestion?",
		choices: [
			choice1 = {
				text: "Yes",
				targetNode: "9.9.1"
			},
			choice2 = {
				text: "No",
				targetNode: "9.9.2"
			}
		]
	},
	{
		id: "9.9.1",
		type: "end",
		text: "Record N9A Content Suggestion and enter learner suggestion in description"
	},
	{
		id: "9.9.2",
		type: "end",
		text: "Record N9B Non-Content Other Incident and enter learner suggestion in description"
>>>>>>> origin/master
	}
];
