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
		text: "This is an end point"
	}
];
