/***********
NOTE: Node data is defined in the ATHDNodes variable in treeNodeData.js
***********/
var TREE = (function(nodes){
	var navHistory = [];
	var nodeList = {};
	
	var getChoiceType = function(choice) {
		if(choice.text == "Yes" || choice.text == "Somewhat") {
			return 'class="yes"';
		}
		if(choice.text == "No") {
			return 'class="no"';
		} else {
			return "";
		}
	};
	
	return {
		init: function() {
			for(var i = 0, numChoices = nodes.length; i < numChoices; i++) {
				nodeList[nodes[i].id] = i;
			}
			try {
				this.displayNode("1.0"); 
			} catch (e) {
				return alert(e);
			}
		},
		
		goBack: function() {
			if(navHistory.length > 1) {
				try {
					navHistory.pop();
					this.displayNode(navHistory.pop());
				} catch (e) {
					return alert(e);
				}
			}
		},
	
		displayNode: function(nodeID) {
			navHistory.push(nodeID);
			
			try {
				myNode = nodes[nodeList[nodeID]];
				$('#title').text(myNode.text);
			} catch (e) {
				return alert(e);
			}
			
			$('#choices').html("");
			
			try {
				if(myNode.type == "question") {
					var choicesFragment = $('<p>');
					for(var i = 0, numChoices = myNode.choices.length; i < numChoices; i++) {
						choiceElement = '<button id="choice' + i + '"' + getChoiceType(myNode.choices[i]) + ' data-target="' + myNode.choices[i].targetNode + '">' + myNode.choices[i].text + '</button>'
						choicesFragment.append(choiceElement);
					};
					$('#choices').append(choicesFragment);
					$("button[id^='choice']").click(function() {
						TREE.displayNode($(this).data("target"));
					});
					$("#icon").removeClass().addClass("question");
				}
			} catch (e) {
				return alert(e);
			}
			
			if(navHistory.length > 1) {
				$('#choices').append('<button id="back" class="nav">Back</button>');
				$('#back').click(function(){
					TREE.goBack();
				});
			}
			
			if(myNode.type == "end") {
				$('#choices').append('<button id="restart" class="nav">Start Over</button>');
				$("#icon").removeClass().addClass("end");
				$('#restart').click(function() {
					TREE.displayNode("1.0");
				});
			}
		},
	};
})(ATHDNodes);