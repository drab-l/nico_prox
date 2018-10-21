
function find_formtextbox (form)
{
	if (form == undefined) {
		return undefined;
	}
	for (let i in form.children) {
		if (form.children[i].type == "text") {
			return form.children[i];
		}
	}
	return undefined;
}

function focus_textbox (textbox)
{
	textbox.scrollIntoView({block: "center"});
	textbox.focus();
	textbox.value="";
}

function find_mypage_searchbox ()
{
	for (let i in document.forms) {
		if (document.forms[i].action != undefined && document.forms[i].action.endsWith("nicovideo.jp/search/")) {
			return find_formtextbox(document.forms[i]);
		}
	}
	return undefined;
}

function find_result_searchbox ()
{
	return document.getElementById("search_united");
}

function focu_searchbox ()
{
	searchbox = undefined;
	if (document.URL.indexOf("nicovideo.jp/search") != -1) {
		searchbox = find_result_searchbox();
	} else if (document.URL.indexOf("nicovideo.jp/my/top") != -1) {
		searchbox = find_mypage_searchbox();
	}
	if (searchbox == undefined) {
		return;
	}
	focus_textbox(searchbox);
}

function keydown (event)
{
	if (!event.ctrlKey){
		return;
	}
	if ( " " == String.fromCharCode(event.keyCode).toLowerCase()) {
		focu_searchbox();
	} else if (event.keyCode == 37) {
		if (document.getElementsByClassName("pager")[0].firstChild.href){
			document.location = document.getElementsByClassName("pager")[0].firstChild.href;
		}
	} else if (event.keyCode == 39) {
		if (document.getElementsByClassName("pager")[0].lastChild.href){
			document.location=document.getElementsByClassName("pager")[0].lastChild.href
		}
	}
	event.preventDefault();
}

document.onkeydown = keydown;
