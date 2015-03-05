var TREE = {
	navHistory: [],
	displayNode: function(nodeNum){
		this.navHistory.push(nodeNum);
		myNode = this.nodes["node" + nodeNum];
		$('#title').text(myNode.text);
		$('#choices').html("");
		if(myNode.type == "question"){
			var choicesFragment = $('<p>');
			for(var i = 0, numChoices = myNode.choices.length; i < numChoices; i++) {
				choiceElement = '<a href="#" id="choice' + i + '" data-target="' + myNode.choices[i].targetNode + '">' + myNode.choices[i].text + '</a><br/>'
				choicesFragment.append(choiceElement);
			};
			$('#choices').append(choicesFragment);
			$("a[id^='choice']").click(function(){TREE.displayNode($(this).data("target"));});
		}
		
		if(this.navHistory.length > 1){
			$('#choices').append('<a href="#" id="back">Back</a>');
			$('#back').click(function(){
				TREE.navHistory.pop();
				TREE.displayNode(TREE.navHistory.pop());
			});
		}
    },
	nodes: {
		node1: {
			type: "question",
			text: "START: Go to node 2?",
			choices: [
				choice1 = {
					text: "Yes",
					targetNode: "2"
				},
				chioice2 = {
					text: "No",
					targetNode: "1"
				}
			]
		},
		node2: {
			type: "question",
			text: "Go to node 3?",
			choices: [
				choice1 = {
					text: "Yes",
					targetNode: "3"
				},
				chioice2 = {
					text: "No",
					targetNode: "1"
				}
			]
		},
		node3: {
			type: "end",
			text: "You've reach an end point."
		}
	}
}
$(function(){
	$('#start').click(function(){ TREE.displayNode(1); });
});