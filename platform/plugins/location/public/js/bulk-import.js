(()=>{function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,o){if(t){if("string"==typeof t)return e(t,o);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,o):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=Array(e);o<e;o++)n[o]=t[o];return n}$((function(){var e=$(document).find(".bulk-import"),o=e.find(".form-bulk-import"),n=o.find('button[type="submit"]'),a=[],i=function(d){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;0===s&&e.find(".bulk-import-message").text(n.data("validating-text")),$httpClient.make().post(o.data("validate-url"),{file:d,offset:s,limit:u}).then((function(s){var u=s.data,m=u.data,f=u.message;if(m&&m.count>0)e.find(".bulk-import-message").text(f),i(d,m.offset),a=[].concat(t(a),t(m.failed));else if(a.length>0){var c=e.find("#imported-listing"),h=e.find(".show-errors"),p=$(document).find("#failure-template").html(),g="";a.forEach((function(t){g+=p.replace("__row__",t.row).replace("__errors__",t.errors.join(", "))})),h.show(),e.find(".main-form-message").show(),c.show().html(g),a=[],Botble.hideLoading(o),Botble.hideButtonLoading(n),l.removeAllFiles(),e.find(".bulk-import-message").hide()}else r(d)}))},r=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0;0===a&&(e.find(".bulk-import-message").text(n.data("importing-text")),Botble.showButtonLoading(n),Botble.showLoading(o)),$httpClient.make().post(o.data("import-url"),{file:t,offset:a,limit:i}).then((function(a){var i=a.data,d=i.data,s=i.message;d&&d.count>0?r(t,d.offset):(Botble.showSuccess(s),d.total_message&&(e.find(".main-form-message").show(),e.find(".bulk-import-message").removeClass("alert-info").addClass("alert-success").text(d.total_message),l.removeAllFiles(),Botble.hideLoading(o),Botble.hideButtonLoading(n)))}))},l=new Dropzone(".location-dropzone",{url:o.data("upload-url"),method:"post",headers:{"X-CSRF-TOKEN":o.find("input[name=_token]").val()},previewTemplate:$(document).find("#preview-template").html(),autoProcessQueue:!1,chunking:!0,chunkSize:1048576,acceptedFiles:o.find(".location-dropzone").data("mimetypes"),maxFiles:1,maxfilesexceeded:function(t){this.removeFile(t)},success:function(t,e){var o=e.data;e.message;o&&o.file_path&&i(o.file_path)}});$(document).on("submit",o,(function(t){t.preventDefault();var n=o.find("button[type=submit]");Botble.showLoading(o),Botble.showButtonLoading(n),e.find(".bulk-import-message").removeClass("alert-success").addClass("alert-info").hide(),e.find(".show-errors").hide(),l.getQueuedFiles().length>0&&l.processQueue(),l.on("sending",(function(){e.find(".bulk-import-message").show().text(n.data("uploading-text"))})),l.on("error",(function(t,e){Botble.showError(e.message)}))}));var d=!1;$(document).on("click",".download-template",(function(t){if(t.preventDefault(),!d){var e=$(t.currentTarget),o=e.data("extension"),n=e.html();e.html(e.data("downloading")),e.addClass("text-secondary"),d=!0,$httpClient.make().withResponseType("blob").post(e.data("url"),{extension:o}).then((function(t){var o=t.data,n=document.createElement("a"),a=window.URL.createObjectURL(o);n.href=a,n.download=e.data("filename"),document.body.append(n),n.click(),n.remove(),window.URL.revokeObjectURL(a)})).finally((function(){setTimeout((function(){e.html(n),e.removeClass("text-secondary"),d=!1}),2e3)}))}}));var s=$(document).find("#available-remote-locations");if(s.length){$httpClient.make().get(s.data("url")).then((function(t){var e=t.data;s.html(e.data)})),$(document).on("click",".btn-import-location-data",(function(t){t.preventDefault(),$(document).find(".button-confirm-import").data("url",$(this).data("url")),$(document).find(".modal-confirm-import").modal("show")})),$(document).find(".button-confirm-import").on("click",(function(t){t.preventDefault();var e=$(t.currentTarget);Botble.showButtonLoading(e),$httpClient.make().post(e.data("url")).then((function(t){var o=t.data;return e.closest(".modal").modal("hide"),Botble.showSuccess(o.message)})).finally((function(){Botble.hideButtonLoading(e)}))}))}}))})();