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
		saveHistory = 0,
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
	
	var getCurrentSection = function(nodeID){
		var sectionNameArray = [
			"Initial Section",
			"Section A: Training",
			"Section B: In a Course",
			"Section C: In a Course",
			"Section D: Registration Incident",
			"Section E: Assessment Incident",
			"Section F: Media, Appearance or Content Incident",
			"Section G: Content Appearance Covered, Illegible or Other",
			"Section H: Instructional Content Incorrect"
		]
		
		try {
			return sectionNameArray[Number(String(nodeID).charAt(0)) - 1];
		} catch (e) {
			return this.debug.log("getCurrentSection() >> encountered a problem reading the nodeID. (" + e + ")");
		}
	}
	
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

		init: function(clearHistory) {
			if(saveHistory) {
				recordHistoryItems = true;
			}
			for(var i = 0, numNodes = nodes.length; i < numNodes; i++) {
				nodeList[nodes[i].id] = i;
			}
			
			navHistory = [];
			
			try {
				this.displayNode("1.0");				
			} catch (e) {
				return this.debug.log("init() >> encountered a problem with the target node. (" + e + ")");
			}
			
			if(recordHistoryItems) {
				$("#history").css({"visibility" : "visible"});
				if(saveHistory) {
					this.showSavedHistory();
				}
			}
		},
		
		reset: function(clearHistory){
			if(clearHistory) {
				pastTickets = [];
				$("#history .container").html("");
				$("#history .msg").html("No saved incidents");
				$("#clear-history").css({"display" : "none"})	
			} else {
				$("#history .msg").html("");
			}
			
			navHistory = [];
			
			$("#mode small").html("");
			$("button.history-btn").removeClass("active");
			
			try {
				this.displayNode("1.0");				
			} catch (e) {
				return this.debug.log("init() >> encountered a problem with the target node. (" + e + ")");
			}
			
			$("#clear-history").css({"display" : "inline"}).on("click", function(){
				TREE.reset(true);
			});
		},
				
		showSavedHistory: function() {
			//if there are localStorageitems
			if(localStorage.length > 0) {
				//check to see if they are history items
				for(var item in localStorage){
					this.debug.log("showSavedHistory() >> Reading " + item + " from localStorage");
					if(item.indexOf("history") == 0) {
						//if so, read them in (create a button with the stored code and date, push the history to pastTickets)
						var myNum = item.slice(-1);
						this.debug.log("showSavedHistory() >> Using " + myNum + " as item number");
						this.debug.log("showSavedHistory() >> createHistoryButon() info: " + this.readStoredHistory(myNum).dateTime);
						this.createHistoryButton(myNum);
						pastTickets.push(this.readStoredHistory(myNum).history);
					}
				}
			}
			
			if(pastTickets.length > 0) {
				$("#history .msg").html("");
				
				//Make the clear history button clear localStorage, pastTickets, and reset the view
				$("#clear-history").css({"display" : "inline"}).on("click", function() {
					localStorage.clear();
					TREE.reset(true);
				});
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
			
			$("#mode small").html("Currently in: <b>" + getCurrentSection(currentNode) + "</b>");
			
			try {
				myNode = nodes[nodeList[nodeID]];
				$('#title span').text(myNode.text);
			} catch (e) {
				return this.debug.log("displayNode() >> couldn't read node title. (" + e + ")");
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
				return this.debug.log("displayNode() >> couldn't display question node choices. (" + e + ")");
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
					TREE.reset();
				});
			}
		},
		
		reviewHistoryNode: function(historyItem, index) {
			$("#mode small").html("Reviewing:");
			try {
				myNode = nodes[nodeList[historyItem[index][0]]];
				myChoiceNum = historyItem[index][1];
				$('#title span').text(myNode.text);
			} catch (e) {
				return this.debug.log("reviewHistoryNode() >> couldn't read node title. (" + e + ")");
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
				return this.debug.log("displayNode() >> couldn't display question node choices. (" + e + ")");
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
				reviewMode = 0;
				TREE.reset();
			});
			
		},
		
		recordHistory: function() {
			if(saveHistory) {
				localStorage.setItem("history" + localStorage.length, navHistory + "," + nodes[nodeList[currentNode]].code + "," + getDateTime());
			}
			pastTickets.push(navHistory);
			
			//Add a history button (not from saved history) to the list
			this.createHistoryButton();
		},
		
		readStoredHistory: function(itemNum) {
			if(localStorage.getItem("history" + itemNum) != null) {
				var historyData = localStorage.getItem("history" + itemNum).split(",");
				var historyDateTime = historyData.pop();
				var historyCode = historyData.pop();
				var	parsedHistory = [],
					numIterations = historyData.length / 2;
					tempIndex0 = null,
					tempIndex1 = null;
				for(var i = 0; i < numIterations; i++){
					tempIndex0 = historyData.shift();
					tempIndex1 = historyData.shift();
					parsedHistory.push([tempIndex0, tempIndex1]);
				}
				return {
					dateTime: historyDateTime,
					code: historyCode,
					history: parsedHistory
				};
			}
		},
		
		createHistoryButton: function(fromHistory) {
			var historyBtnNum = (fromHistory) ? fromHistory : pastTickets.length - 1;
			var historyBtnCode = (fromHistory) ? this.readStoredHistory(fromHistory).code : nodes[nodeList[currentNode]].code;
			var historyBtnDateTime = (fromHistory) ? this.readStoredHistory(fromHistory).dateTime : getDateTime();
			
			var historyFragment = $("<button class='btn btn-sm btn-default history-btn' data-num=" + historyBtnNum + ">");
			var historyButton = "<p class='lead'>" +historyBtnCode + " Incident</p><span>" + historyBtnDateTime + "</span>";
			historyFragment.append(historyButton);
			$('#history .container').append(historyFragment);
			$('button.history-btn').click(function() {
				$("button.history-btn").removeClass("active");
				$(this).addClass("active");
				reviewMode = 1;
				currentHistoryItem = pastTickets[$(this).data("num")];
				historyIndex = 0;
				TREE.reviewHistoryNode(currentHistoryItem, historyIndex);
			});
		}
	};
})(ATHDNodes);