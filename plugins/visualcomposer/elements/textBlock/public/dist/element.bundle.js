(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./textBlock/editor.css":function(e,t){e.exports=".vce-text-block {\n  min-height: 1em;\n}\n"},"./textBlock/component.js":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(s("./node_modules/babel-runtime/helpers/extends.js")),o=r(s("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),a=r(s("./node_modules/babel-runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/babel-runtime/helpers/createClass.js")),i=r(s("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),c=r(s("./node_modules/babel-runtime/helpers/inherits.js")),u=r(s("./node_modules/react/index.js"));function r(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){(0,a.default)(this,t);var s=(0,i.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return s.updateElementAssets=s.updateElementAssets.bind(s),s}return(0,c.default)(t,e),(0,l.default)(t,[{key:"updateElementAssets",value:function(e,t,s){this.updateElementAssetsWithExclusion(this.props.id,s,["output","customClass","metaCustomId"])}},{key:"render",value:function(){var e=this.props,t=e.id,s=e.atts,o=e.editor,a=s.output,l=s.customClass,i=s.metaCustomId,c="vce-text-block",r={};"string"==typeof l&&l&&(c=c.concat(" "+l)),i&&(r.id=i);var d=this.applyDO("all");return u.default.createElement("div",(0,n.default)({className:c},o,r),u.default.createElement("div",(0,n.default)({className:"vce-text-block-wrapper vce",id:"el-"+t},d),a))}}]),t}(r(s("./node_modules/vc-cake/index.js")).default.getService("api").elementComponent);t.default=d},"./textBlock/index.js":function(e,t,s){"use strict";var n=a(s("./node_modules/vc-cake/index.js")),o=a(s("./textBlock/component.js"));function a(e){return e&&e.__esModule?e:{default:e}}(0,n.default.getService("cook").add)(s("./textBlock/settings.json"),function(e){e.add(o.default)},{css:!1,editorCss:s("./node_modules/raw-loader/index.js!./textBlock/editor.css")},"")},"./textBlock/settings.json":function(e){e.exports={output:{type:"htmleditor",access:"public",value:"<h2>Typography is the art and technique</h2>\n<p>Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed. The arrangement of type involves selecting typefaces, point size, line length, line-spacing (leading), letter-spacing (tracking), and adjusting the space within letters pairs (kerning).</p>",options:{label:"Content",description:"Content for text block",inline:!0,skinToggle:"darkTextSkin"}},darkTextSkin:{type:"toggleSmall",access:"public",value:!1},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["output","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},metaBackendLabels:{type:"group",access:"protected",value:[{value:["output"]}]},relatedTo:{type:"group",access:"protected",value:["General"]},metaOrder:{type:"number",access:"protected",value:3},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},assetsLibrary:{access:"public",type:"string",value:["animate"]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"textBlock"}}}},[["./textBlock/index.js"]]]);