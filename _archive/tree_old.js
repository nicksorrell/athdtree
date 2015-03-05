var TREE = {
	navHistory: [],
	nodeList: {},
	
	init: function() {
		for(var i = 0, numChoices = this.nodes.length; i < numChoices; i++) {
			this.nodeList[this.nodes[i].id] = i;
		}
		try {
			this.displayNode("1.0"); 
		} catch (e) {
			alert("Error. Check node data.");
		}
	},
	
	displayNode: function(nodeID) {
		this.navHistory.push(nodeID);
		myNode = this.nodes[this.nodeList[nodeID]];
		$('#title').text(myNode.text);
		$('#choices').html("");
		
		if(myNode.type == "question") {
			var choicesFragment = $('<p>');
			for(var i = 0, numChoices = myNode.choices.length; i < numChoices; i++) {
				choiceElement = '<button id="choice' + i + '"' + this.getChoiceType(myNode.choices[i]) + ' data-target="' + myNode.choices[i].targetNode + '">' + myNode.choices[i].text + '</button>'
				choicesFragment.append(choiceElement);
			};
			$('#choices').append(choicesFragment);
			$("button[id^='choice']").click(function() {TREE.displayNode($(this).data("target"));});
			$("#icon").removeClass().addClass("question");
		}
		
		if(this.navHistory.length > 1) {
			$('#choices').append('<button id="back" class="nav">Back</button>');
			$('#back').click(function() {
				TREE.navHistory.pop();
				TREE.displayNode(TREE.navHistory.pop());
			});
		}
		
		if(myNode.type == "end") {
			$('#choices').append('<button id="reset" class="nav">Reset</button>');
			$("#icon").removeClass().addClass("end");
			$('#reset').click(function() {
				TREE.displayNode("1.0");
			});
		}
    },
	
	getChoiceType: function(choice) {
		if(choice.text == "Yes" || choice.text == "Somewhat") {
			return 'class="yes"';
		}
		if(choice.text == "No") {
			return 'class="no"';
		} else {
			return "";
		}
	},
	
	nodes: [
		{
			id: "1.0",
			type: "question",
			text: "Have you logged into an LMS?",
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
			text: "Did your system freeze or crash?",
			choices: [
				choice1 = {
					text: "Yes",
					targetNode: "1.2"
				},
				chioice2 = {
					text: "No",
					targetNode: "1.5"
				}
			]
		},
		{
			id: "1.2",
			type: "question",
			text: "Were you in the browser?",
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
			text: "Record N1B System Crash Incident",
		},
		{
			id: "1.3",
			type: "question",
			text: "Did you try to start an LMS?",
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
			text: "Record N1A Browser Crash Incident",
		},
		{
			id: "1.4",
			type: "question",
			text: "Did you see an error message?",
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
			text: "Record N1D System Other"
		},
		{
			id: "1.5",
			type: "question",
			text: "Was the message a Java error?",
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
			text: "Record N8A Java Error"
		},
		{
			id: "1.6",
			type: "question",
			text: "Was the message a Oracle error?",
			choices: [
				choice1 = {
					text: "Yes",
					targetNode: "1.6.1"
				},
				chioice2 = {
					text: "No",
					targetNode: "1.6.2"
				}
			]
		},
		{
			id: "1.6.1",
			type: "end",
			text: "Record N8B Oracle Error"
		},
		{
			id: "1.6.2",
			type: "end",
			text: "Record N8C Other Error"
		},
		{
			id: "2.0",
			type: "end",
			text: "Training section. Coming soon."
		}
	]
}

$(function() {
	$('#start').click(function() { 
		$(this).hide(); 
		TREE.init(); 
	});
});