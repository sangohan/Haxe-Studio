var haxe_server = (function(obj)
{
	var plugin_path = "../plugin/haxe_server";
	obj.plugin_path = plugin_path;
	obj.services = {};
	
	obj.init = function()
		{
		central.haxe_server = {};
		support.loadJS(plugin_path+"/start_server.js");
		support.loadJS(plugin_path+"/check_haxe_available.js");
		support.loadJS(plugin_path+"/haxe_completion.js");
		support.loadJS(plugin_path+"/haxe_build.js");
		support.loadJS(plugin_path+"/jquery_xml2json.js");
		
		
		
		};
		
	obj.destroy = function()
		{
		obj.stop_haxe_server();
		};
		
	return obj;
})(haxe_server||{});
