# Incident Determination Decision Tree

Simple decision tree app built with jQuery and Bootstrap. Originally created as an internal application for the Army Training Help Desk. Data is organized as nodes in numeric categories (e.g., 1.1, 1.2, 3.3, 3.3.1) and intended to recreate a paper decision flowchart. Also supports recording temporary and persistent replayable history of paths to end-points.

## Usage
To navigate the tree, open _index.html_ and select choices at each node.

For exploring node data without editing the JSON file, open _explorenodes.html_ for a visual version.

History may be toggled with the following two config options in _js/treeEngine.js_

* **recordHistoryItems**: toggles temporary recording of paths to end-points
* **saveHistory**: toggles persistence of history using localStorage

## Editing Data
Edit the JSON structure in _js/treeNodeData.js_. Nodes link to other nodes until an end-point is reached.
