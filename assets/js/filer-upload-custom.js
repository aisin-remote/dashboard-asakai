/**
 * Theme: Codefox Admin Template
 * Author: Coderthemes
 * Email: coderthemes@gmail.com
 * File Uploads
 */

$(document).ready(function () {
	"use-strict";

	$("#input-file-prd").filer({
		extensions: ["jpg", "jpeg", "png", "gif"],
		changeInput: true,
		showThumbs: true,
		addMore: true,
		templates: {
			box: '<ul class="jFiler-items-list jFiler-items-default" style="display: grid; grid-template-columns: 33% 33% 33%; column-gap: 1%;"></ul>',
			item: '<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info"><div class="jFiler-item-title" title="{{fi-name}}">{{fi-name | limitTo:30}}</div><div class="jFiler-item-others"><span style="padding: 0px 0px">size: {{fi-size2}}</span><span style="padding: 0px 10px">type: {{fi-extension}}</span><span class="jFiler-item-status">{{fi-progressBar}}</span></div><div style="margin-top: 15px;" class="show-image" id="show-image" >{{fi-image}} <textarea id="caption" name="caption" class="form-control caption" style="margin-top: 20px; font-size:12px;" placeholder="Add Caption" rows="2"></textarea> <input type="hidden" id="file_name" name="file_name" class="file_name" value="{{fi-name}}"></div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div><br/></li>',
			itemAppend: '<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info"><div class="jFiler-item-title">{{fi-name | limitTo:35}}</div><div class="jFiler-item-others"><span style="padding: 0px 0px">size: {{fi-size2}}</span><span style="padding: 0px 10px">type: {{fi-extension}}</span><span class="jFiler-item-status"></span></div><div style="margin-top: 15px;" class="show-image" id="show-image" >{{fi-image}} <textarea id="caption" name="caption" class="form-control caption" style="margin-top: 20px; font-size:12px;" placeholder="Add Caption" rows="2"></textarea> <input type="hidden" id="file_name" name="file_name" class="file_name" value="{{fi-name}}"</div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div></li>',
			progressBar: '<div class="bar"></div>',
			itemAppendToEnd: false,
			removeConfirmation: true,
			canvasImage: false,
			_selectors: {
				list: ".jFiler-items-list",
				item: ".jFiler-item",
				progressBar: ".bar",
				remove: ".jFiler-item-trash-action",
			},
		},
	});

	$("#input-file-eng").filer({
		extensions: ["jpg", "jpeg", "png", "gif"],
		changeInput: true,
		showThumbs: true,
		addMore: false,
		templates: {
			box: '<ul class="jFiler-items-list jFiler-items-default"></ul>',
			item: '<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info"><div class="jFiler-item-title" title="{{fi-name}}">{{fi-name | limitTo:30}}</div><div class="jFiler-item-others"><span style="padding: 0px 0px">size: {{fi-size2}}</span><span style="padding: 0px 10px">type: {{fi-extension}}</span><span class="jFiler-item-status">{{fi-progressBar}}</span></div><div style="margin-top: 15px;" class="show-image-eng" id="show-image-eng" >{{fi-image}} <textarea id="caption" name="caption" class="form-control caption" style="margin-top: 20px; font-size:12px;" placeholder="Add Caption" rows="2"></textarea> <input type="hidden" id="file_name" name="file_name" class="file_name" value="{{fi-name}}"></div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div><br/></li>',
			itemAppend: '<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info"><div class="jFiler-item-title">{{fi-name | limitTo:35}}</div><div class="jFiler-item-others"><span style="padding: 0px 0px">size: {{fi-size2}}</span><span style="padding: 0px 10px">type: {{fi-extension}}</span><span class="jFiler-item-status"></span></div><div style="margin-top: 15px;" class="show-image-eng" id="show-image-eng" >{{fi-image}} <textarea id="caption" name="caption" class="form-control caption" style="margin-top: 20px; font-size:12px;" placeholder="Add Caption" rows="2"></textarea> <input type="hidden" id="file_name" name="file_name" class="file_name" value="{{fi-name}}"</div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div></li>',
			progressBar: '<div class="bar"></div>',
			itemAppendToEnd: false,
			removeConfirmation: true,
			canvasImage: false,
			_selectors: {
				list: ".jFiler-items-list",
				item: ".jFiler-item",
				progressBar: ".bar",
				remove: ".jFiler-item-trash-action",
			},
		},
	});

	$("#input-file-qua").filer({
		extensions: ["jpg", "jpeg", "png", "gif"],
		changeInput: true,
		showThumbs: true,
		addMore: false,
		templates: {
			box: '<ul class="jFiler-items-list jFiler-items-default"></ul>',
			item: '<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info"><div class="jFiler-item-title" title="{{fi-name}}">{{fi-name | limitTo:30}}</div><div class="jFiler-item-others"><span style="padding: 0px 0px">size: {{fi-size2}}</span><span style="padding: 0px 10px">type: {{fi-extension}}</span><span class="jFiler-item-status">{{fi-progressBar}}</span></div><div style="margin-top: 15px;" class="show-image-qua" id="show-image-qua" >{{fi-image}} <textarea id="caption" name="caption" class="form-control caption" style="margin-top: 20px; font-size:12px;" placeholder="Add Caption" rows="2"></textarea> <input type="hidden" id="file_name" name="file_name" class="file_name" value="{{fi-name}}"></div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div><br/></li>',
			itemAppend: '<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info"><div class="jFiler-item-title">{{fi-name | limitTo:35}}</div><div class="jFiler-item-others"><span style="padding: 0px 0px">size: {{fi-size2}}</span><span style="padding: 0px 10px">type: {{fi-extension}}</span><span class="jFiler-item-status"></span></div><div style="margin-top: 15px;" class="show-image-qua" id="show-image-qua" >{{fi-image}} <textarea id="caption" name="caption" class="form-control caption" style="margin-top: 20px; font-size:12px;" placeholder="Add Caption" rows="2"></textarea> <input type="hidden" id="file_name" name="file_name" class="file_name" value="{{fi-name}}"</div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div></li>',
			progressBar: '<div class="bar"></div>',
			itemAppendToEnd: false,
			removeConfirmation: true,
			canvasImage: false,
			_selectors: {
				list: ".jFiler-items-list",
				item: ".jFiler-item",
				progressBar: ".bar",
				remove: ".jFiler-item-trash-action",
			},
		},
	});

	$("#input-file-ppic").filer({
		extensions: ["jpg", "jpeg", "png", "gif"],
		changeInput: true,
		showThumbs: true,
		addMore: false,
		templates: {
			box: '<ul class="jFiler-items-list jFiler-items-default"></ul>',
			item: '<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info"><div class="jFiler-item-title" title="{{fi-name}}">{{fi-name | limitTo:30}}</div><div class="jFiler-item-others"><span style="padding: 0px 0px">size: {{fi-size2}}</span><span style="padding: 0px 10px">type: {{fi-extension}}</span><span class="jFiler-item-status">{{fi-progressBar}}</span></div><div style="margin-top: 15px;" class="show-image-ppic" id="show-image-ppic" >{{fi-image}} <textarea id="caption" name="caption" class="form-control caption" style="margin-top: 20px; font-size:12px;" placeholder="Add Caption" rows="2"></textarea> <input type="hidden" id="file_name" name="file_name" class="file_name" value="{{fi-name}}"></div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div><br/></li>',
			itemAppend: '<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info"><div class="jFiler-item-title">{{fi-name | limitTo:35}}</div><div class="jFiler-item-others"><span style="padding: 0px 0px">size: {{fi-size2}}</span><span style="padding: 0px 10px">type: {{fi-extension}}</span><span class="jFiler-item-status"></span></div><div style="margin-top: 15px;" class="show-image-ppic" id="show-image-ppic" >{{fi-image}} <textarea id="caption" name="caption" class="form-control caption" style="margin-top: 20px; font-size:12px;" placeholder="Add Caption" rows="2"></textarea> <input type="hidden" id="file_name" name="file_name" class="file_name" value="{{fi-name}}"</div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div></li>',
			progressBar: '<div class="bar"></div>',
			itemAppendToEnd: false,
			removeConfirmation: true,
			canvasImage: false,
			_selectors: {
				list: ".jFiler-items-list",
				item: ".jFiler-item",
				progressBar: ".bar",
				remove: ".jFiler-item-trash-action",
			},
		},
	});

	$("#input-file-mte").filer({
		extensions: ["jpg", "jpeg", "png", "gif"],
		changeInput: true,
		showThumbs: true,
		addMore: false,
		templates: {
			box: '<ul class="jFiler-items-list jFiler-items-default"></ul>',
			item: '<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info"><div class="jFiler-item-title" title="{{fi-name}}">{{fi-name | limitTo:30}}</div><div class="jFiler-item-others"><span style="padding: 0px 0px">size: {{fi-size2}}</span><span style="padding: 0px 10px">type: {{fi-extension}}</span><span class="jFiler-item-status">{{fi-progressBar}}</span></div><div style="margin-top: 15px;" class="show-image-mte" id="show-image-mte" >{{fi-image}} <textarea id="caption" name="caption" class="form-control caption" style="margin-top: 20px; font-size:12px;" placeholder="Add Caption" rows="2"></textarea> <input type="hidden" id="file_name" name="file_name" class="file_name" value="{{fi-name}}"></div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div><br/></li>',
			itemAppend: '<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info"><div class="jFiler-item-title">{{fi-name | limitTo:35}}</div><div class="jFiler-item-others"><span style="padding: 0px 0px">size: {{fi-size2}}</span><span style="padding: 0px 10px">type: {{fi-extension}}</span><span class="jFiler-item-status"></span></div><div style="margin-top: 15px;" class="show-image-mte" id="show-image-mte" >{{fi-image}} <textarea id="caption" name="caption" class="form-control caption" style="margin-top: 20px; font-size:12px;" placeholder="Add Caption" rows="2"></textarea> <input type="hidden" id="file_name" name="file_name" class="file_name" value="{{fi-name}}"</div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div></li>',
			progressBar: '<div class="bar"></div>',
			itemAppendToEnd: false,
			removeConfirmation: true,
			canvasImage: false,
			_selectors: {
				list: ".jFiler-items-list",
				item: ".jFiler-item",
				progressBar: ".bar",
				remove: ".jFiler-item-trash-action",
			},
		},
	});

});
