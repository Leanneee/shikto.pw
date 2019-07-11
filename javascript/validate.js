	
	function addValidation(id,offsetX,offsetY) {
		$("#"+id).after("<div class='jsError' id='jsError_"+id+"'><div class='jsErrorTitle'></div></div>");
		coords = $("#"+id).position();
		offsetX+=coords.left;
		offsetY+=coords.top;
		$("#jsError_"+id).css({"left":offsetX,"top":offsetY});
	}
	
	function trim(str, chars) {
		return ltrim(rtrim(str, chars), chars);
	}
	 
	function ltrim(str, chars) {
		chars = chars || "\\s";
		return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
	}
	 
	function rtrim(str, chars) {
		chars = chars || "\\s";
		return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
	}

	function checkPattern(value,pattern) {
		var regExp = pattern;
		test = value.search(regExp);
		if (test==-1) {
			return false;
		} else {
			return true;
		}
	}

	function checkBlank(id) {
		value = $("#"+id).val();
		value = trim(value);
		if(value=="") {
			return true;
		} else {
			return false;
		}
	}

	function checkEmail(id) {
		value = $("#"+id).val();
		if(checkPattern(value,/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)) {
			return false;
		} else { 
			return true;			
		}
	}

	function checkValue(id,val) {
		var drp = document.getElementById(id);
		var selVal = drp.options[drp.selectedIndex].value;
		if(selVal==val) {
			return true;
		} else {
			return false;
		}
	}

	function showError(id,msg) {
		if ( $("#jsError_"+id).length > 0 ) { 
			$("#jsError_"+id+" .jsErrorTitle").html(msg);
			$("#jsError_"+id).fadeIn("slow");
		} else {
			addValidation(id,150,0);
			$("#jsError_"+id+" .jsErrorTitle").html(msg);
			$("#jsError_"+id).fadeIn("slow");
		}
	}

	function hideError(id) {
		$("#jsError_"+id).fadeOut("slow");
	}