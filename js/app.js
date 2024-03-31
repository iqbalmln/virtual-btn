function setBrowseFileLabel(fileObj)
{
	var nextElem = fileObj.nextElementSibling;
	if(nextElem != null)
		nextElem.innerHTML = fileObj.files[0].name;
}

function getCommonErrStr(errStr)
{
	if(errStr == '')
	{
		return 'jaringan bermasalah';
	}
	return errStr;
}

function setFormSelectDefVal(formObj, elemName, elemVal, otherElemName, otherElemVal) {
	if (elemVal.length <= 0) {
		return;
	}
	var tmpElem = formObj[elemName];
	tmpElem.value = elemVal;
	$(tmpElem).trigger('change');
	if (otherElemName.length > 0) {
		formObj[otherElemName].value = otherElemVal;
	}
}

function setFormSelectDefVal2(formObj, elemName, optId, optText) {
	if (optText.length <= 0) {
		return;
	}
	var tmpElem = formObj[elemName];
	$(tmpElem).append(new Option(optText, optId, true, true)).trigger('change');
}

function setFormCheckBoxState(elemId, elemState) {
	var tmpElem = $('#' + elemId);
	tmpElem[0].checked = elemState;
	tmpElem.trigger('change');
}