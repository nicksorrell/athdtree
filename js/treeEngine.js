/***********
NOTE: Node data is defined in the ATHDNodes variable in treeNodeData.js
***********/
var TREE = (function(nodes){
	var navHistory = [], 
		nodeList = {}, 
		pastTickets = [], 
		currentNode = "", 
		currentHistoryItem = null, 
		historyIndex = 0, 
		reviewMode = 0,
		recordHistoryItems = 1,
		debugMode = 0;
	
	var getChoiceType = function(choice) {
		if(choice.text == "Yes" || choice.text == "Somewhat") {
			return 'btn-success';
		}
		if(choice.text == "No") {
			return 'btn-danger';
		} else {
			return "btn-default";
		}
	};
	
	var getDateTime = function() {
		var timeNow = new Date();
		return timeNow.getFullYear() + "-" +
			((timeNow.getMonth()+1) < 10 ? "0" : "") + (timeNow.getMonth()+1) + "-" +
			((timeNow.getDate() < 10) ? "0" : "") + timeNow.getDate() + " @ " +
			((timeNow.getHours() < 10) ? "0" : "") + timeNow.getHours() + ":" + 
			((timeNow.getMinutes() < 10) ? "0" : "") +timeNow.getMinutes() + ":" + 
			((timeNow.getSeconds() < 10) ? "0" : "") + timeNow.getSeconds();
	};
	
	return {
		debug: {
			traverse: function(){
				if(debugMode) {
					console.log("debug.traverse() >> TRAVERSING TREE");
					for(var i = 0, numNodes = nodes.length; i < numNodes; i++) {
						console.log("debug.traverse() >> Loading node " + nodes[i].id + "...");
						TREE.displayNode(nodes[i].id);
						if(nodes[i].choices != null) {
							for(var j = 0, numChoices = nodes[i].choices.length; j < numChoices; j++) {
								console.log("debug.traverse() >> Loading node " + nodes[i].choices[j].targetNode + " linked from node " + nodes[i].id);
								TREE.displayNode(nodes[i].choices[j].targetNode);
							}
						}
					}
					console.log("debug.traverse() >> END TRAVERSAL");
				}
			},
			
			getHistory: function(){
				if(debugMode) {
					console.log("Current navigation history:");
					console.log(navHistory);
					console.log("Recorded tickets: ");
					console.log(pastTickets);
				}
			},
			
			getCodes: function(){
				if(debugMode) {
					var availableCodes = [];
					for(var i = 0, numNodes = nodes.length; i < numNodes; i++) {
						if(nodes[i].type == "end"){
							availableCodes.push(nodes[i].text.slice(7, 11));
						}					
					}
					return availableCodes;
				}
			},
			
			log: function(message) {
				if(debugMode) {
					console.log(message);
				}
			}
		},
		
		initView: function() {
			if(!recordHistoryItems) {
				$("#history").hide();
			}
		},
		
		init: function() {
			for(var i = 0, numNodes = nodes.length; i < numNodes; i++) {
				nodeList[nodes[i].id] = i;
			}
			navHistory = [];
			try {
				this.displayNode("1.0");				
			} catch (e) {
				return console.log("init() >> encountered a problem with the target node. (" + e + ")");
			}
		},
		
		goBack: function() {
			if(navHistory.length > 0) {
				try {
					//this.debug.log("Removing: " + navHistory.pop()[0] + " from history");
					this.displayNode(navHistory.pop()[0]);
				} catch (e) {
					return console.log("goBack() >> (" + e + ")");
				}
			}
		},

		displayNode: function(nodeID) {
			currentNode = nodeID;
			
			this.debug.log("Now at " + currentNode);
			
			try {
				myNode = nodes[nodeList[nodeID]];
				$('#title span').text(myNode.text);
			} catch (e) {
				return console.log("displayNode() >> couldn't read node title. (" + e + ")");
			}
			
			$('#choices').html("");
			
			try {
				if(myNode.type == "question") {
					var choicesFragment = $('<p>');
					for(var i = 0, numChoices = myNode.choices.length; i < numChoices; i++) {
						var choiceElement = '<button class="btn btn-lg choice-btn ' + getChoiceType(myNode.choices[i]) + '" data-target="' + myNode.choices[i].targetNode + '" data-num="' + i + '">' + myNode.choices[i].text + '</button>'
						choicesFragment.append(choiceElement);
					};
					$('#choices').append(choicesFragment);
					$("button.choice-btn").click(function() {
						choiceNum = $(this).data("num");
						TREE.debug.log("Leaving " + currentNode + " after choosing choice #" + choiceNum);
						TREE.debug.log("Recording [\"" + currentNode + "\", " + choiceNum + "] in history.");
						navHistory.push([currentNode, choiceNum]);
						TREE.displayNode($(this).data("target"));
					});
					$('#node-icon').removeClass().addClass("glyphicon glyphicon-question-sign");
				}
			} catch (e) {
				return console.log("displayNode() >> couldn't display question node choices. (" + e + ")");
			}
			
			if(navHistory.length >= 1) {
				$('#choices').append('<button id="back" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Back</button>');
				$('#back').click(function(){
					TREE.goBack();
				});
			}
			
			if(myNode.type == "end") {
				$('#choices').append('<button id="restart" class="btn btn-primary"><i class="glyphicon glyphicon-refresh"></i> Start Over</button>');
				$('#node-icon').removeClass().addClass("glyphicon glyphicon-pencil");
				this.debug.log("Recording [ " + currentNode + ", " + null + "] in history.");
				$('#restart').click(function() {
					navHistory.push([currentNode, null]);
					if(recordHistoryItems){
						TREE.recordHistory();
					}
					TREE.init();
				});
			}
		},
		
		reviewHistoryNode: function(historyItem, index) {
			try {
				myNode = nodes[nodeList[historyItem[index][0]]];
				myChoiceNum = historyItem[index][1];
				$('#title span').text(myNode.text);
			} catch (e) {
				return console.log("reviewHistoryNode() >> couldn't read node title. (" + e + ")");
			}
			
			$('#choices').html("");
			
			try {
				if(myNode.type == "question") {
					var choicesFragment = $('<p>');
					for(var i = 0, numChoices = myNode.choices.length; i < numChoices; i++) {
						if(i == myChoiceNum){
							var choiceElement = '<button class="btn btn-lg choice-btn ' + (getChoiceType(myNode.choices[i]) == "btn-default" ? "btn-primary" : getChoiceType(myNode.choices[i])) + '" data-target="' + myNode.choices[i].targetNode + '" data-num="' + i + '" disabled>' + myNode.choices[i].text + '</button>';
						} else {
							var choiceElement = '<button class="btn btn-lg btn-default choice-btn data-target="' + myNode.choices[i].targetNode + '" data-num="' + i + '" disabled>' + myNode.choices[i].text + '</button>';
						}
						choicesFragment.append(choiceElement);
					};
					$('#choices').append(choicesFragment);
					$("button.choice-btn").click(function() {
						TREE.displayNode($(this).data("target"), $(this).data("num"));
					});
					$('#node-icon').removeClass().addClass("glyphicon glyphicon-question-sign");
				} else {
					$('#node-icon').removeClass().addClass("glyphicon glyphicon-pencil");
				}
			} catch (e) {
				return console.log("displayNode() >> couldn't display question node choices. (" + e + ")");
			}
			
			if(historyIndex > 0) {
				$('#choices').append('<button id="prev" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Back</button>');
				$('#prev').click(function(){
					historyIndex--;
					TREE.reviewHistoryNode(currentHistoryItem, historyIndex);
				});
			}
			
			if(historyIndex < (currentHistoryItem.length-1)) {
				$('#choices').append('<button id="next" class="btn btn-default">Next <i class="glyphicon glyphicon-chevron-right"></i> </button>');
				$('#next').click(function(){
					historyIndex++;
					TREE.reviewHistoryNode(currentHistoryItem, historyIndex);
				});
			}
			
			$('#choices').append('<br/><button id="exitReview" class="btn btn-default">Exit Review</button>');
			$('#exitReview').click(function(){
				TREE.init();
			});
			
		},
		
		recordHistory: function() {
			$("#history .msg").html("");
			pastTickets.push(navHistory);
			var historyFragment = $("<button class='btn btn-sm btn-default history-btn' data-num=" + (pastTickets.length-1) + ">");
			var historyButton = "<p class='lead'>" + nodes[nodeList[currentNode]].text.slice(7, 11) + " Incident</p><span>" + getDateTime() + "</span>";
			historyFragment.append(historyButton);
			$('#history div').append(historyFragment);
			$('button.history-btn').click(function() {
				reviewMode = 1;
				currentHistoryItem = pastTickets[$(this).data("num")];
				historyIndex = 0;
				TREE.reviewHistoryNode(currentHistoryItem, historyIndex);
			});
		}
	};
})(ATHDNodes);