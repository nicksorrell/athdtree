/***********
NOTE: Node data is defined in the ATHDNodes variable in treeNodeData.js
***********/
var TREE = (function(nodes){
	var nodeList = {};
	
	for(var i = 0, numNodes = nodes.length; i < numNodes; i++) {
		nodeList[nodes[i].id] = i;
	}
		
	return {
		getNodeList: function() {
			return nodes;
		},
		
		
		createSectionList: function(sectionNum) {
			$('#node-list').html("");
			$('#section-title').text("Section " + sectionNum + ".0");
			var nodeListFragment = $('<ul class="list-unstyled list-inline">');
			for(var i = 0, numNodes = nodes.length; i < numNodes; i++) {
				if(nodes[i].id.indexOf(sectionNum) == 0){
					nodeListFragment.append('<li><a href="#" data-node="' + nodes[i].id + '" class="nodeLink">' + nodes[i].id + '</a></li>');
				}
			}
			$("#node-list").append(nodeListFragment);
			$("#node-list .nodeLink").click(function() {
				TREE.displayNodeData($(this).data("node"));
			});
		},
		
		displayNodeData: function(nodeID) {
			var myNode = nodes[nodeList[nodeID]];
			$('#current-node h3').html('<b>' + nodeID + '</b>');
			$('#current-node h4').text("Type: " + myNode.type);
			$('#current-node input').attr("value", myNode.text);
			
			$('#current-node-branch1 h3').html("");
			$('#current-node-branch1 h4').html("None");
			$('#current-node-branch1 p').html("");
			$('#current-node-branch2 h3').html("");
			$('#current-node-branch2 h4').html("None");
			$('#current-node-branch2 p').html("");
			
			if(myNode.choices.length > 0) {
				$('#current-node-branch1 h3').html('<b>' + myNode.choices[0].targetNode + '</b>');
				$('#current-node-branch1 h4').text("Type: " + nodes[nodeList[myNode.choices[0].targetNode]].type);
				$('#current-node-branch1 input').attr("value", myNode.choices[0].text);
				
				$('#current-node-branch2 h3').html('<b>' + myNode.choices[1].targetNode + '</b>');
				$('#current-node-branch2 h4').text("Type: " + nodes[nodeList[myNode.choices[1].targetNode]].type);
				$('#current-node-branch2 input').attr("value", myNode.choices[1].text);
			}
		},
		
		init: function() {
			$('.section-btn').click(function(){
				TREE.createSectionList($(this).data("section"));
			});
		}
	};
})(ATHDNodes);