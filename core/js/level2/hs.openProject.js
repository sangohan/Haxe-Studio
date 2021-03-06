(function(){
	central.event.listen("FileMenu.openProject",function()
		{
		filesystem.file_dialog()
			.then(function(filename)
				{
				return project.open_project(filename);
				})
			.then(function(data)
				{
				if (data != "fail")
					{
					central.project.projectOpened = true;
					project.create_project_tree(central.project.projectParameter);
					central.event.broadcast("openProject.complete","hs.openProject.js","");
					project.compile_project_ui();
					}
				})
		});
})(hs);
