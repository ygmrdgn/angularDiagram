if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-builder-field-choice/aui-form-builder-field-choice.js']) {
   __coverage__['build/aui-form-builder-field-choice/aui-form-builder-field-choice.js'] = {"path":"build/aui-form-builder-field-choice/aui-form-builder-field-choice.js","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":41},"end":{"line":1,"column":60}}},"2":{"name":"(anonymous_2)","line":28,"loc":{"start":{"line":28,"column":19},"end":{"line":28,"column":30}}},"3":{"name":"(anonymous_3)","line":78,"loc":{"start":{"line":78,"column":27},"end":{"line":78,"column":38}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":100,"column":3}},"2":{"start":{"line":20,"column":0},"end":{"line":89,"column":3}},"3":{"start":{"line":30,"column":8},"end":{"line":68,"column":10}},"4":{"start":{"line":79,"column":8},"end":{"line":87,"column":10}}},"branchMap":{},"code":["(function () { YUI.add('aui-form-builder-field-choice', function (A, NAME) {","","/**\r"," * The Form Builder Field Choice Component\r"," *\r"," * @module aui-form-builder\r"," * @submodule aui-form-builder-field-choice\r"," */\r","\r","/**\r"," * A base class for Form Builder Field Choice.\r"," *\r"," * @class A.FormBuilderFieldChoice\r"," * @extends A.FormFieldChoice\r"," * @uses A.FormBuilderFieldBase\r"," * @param {Object} config Object literal specifying widget configuration\r"," *     properties.\r"," * @constructor\r"," */\r","A.FormBuilderFieldChoice = A.Base.create('form-builder-field-choice', A.FormFieldChoice, [A.FormBuilderFieldBase], {\r","    /**\r","     * Fills the settings array with the information for this field.\r","     *\r","     * @method _fillSettings\r","     * @override\r","     * @protected\r","     */\r","    _fillSettings: function() {\r","\r","        this._settings.push(\r","            {\r","                attrName: 'required',\r","                editor: new A.BooleanDataEditor({\r","                    label: 'Required'\r","                })\r","            },\r","            {\r","                attrName: 'type',\r","                editor: new A.TabsDataEditor({\r","                    tabs: [\r","                        {\r","                            label: 'Radio button',\r","                            value: A.FormFieldChoice.TYPES.RADIO\r","                        },\r","                        {\r","                            label: 'Checkbox',\r","                            value: A.FormFieldChoice.TYPES.CHECKBOX\r","                        },\r","                        {\r","                            label: 'List Select',\r","                            value: A.FormFieldChoice.TYPES.LIST\r","                        }\r","                    ]\r","                })\r","            },\r","            {\r","                attrName: 'options',\r","                editor: new A.OptionsDataEditor({\r","                    required: true\r","                })\r","            },\r","            {\r","                attrName: 'otherOption',\r","                editor: new A.BooleanDataEditor({\r","                    label: 'Add an option called \"Other\"'\r","                })\r","            }\r","        );\r","    },\r","\r","    /**\r","     * Fills the advanced settings array with the information for this field.\r","     *\r","     * @method _fillAdvancedSettings\r","     * @override\r","     * @protected\r","     */\r","    _fillAdvancedSettings: function() {\r","        this._advancedSettings = [\r","            {\r","                attrName: 'name',\r","                footerLabel: 'Name',\r","                editor: new A.TextDataEditor({\r","                    label: 'Name'\r","                })\r","            }\r","        ];\r","    }\r","});\r","","","}, '3.1.0', {","    \"requires\": [","        \"aui-boolean-data-editor\",","        \"aui-options-data-editor\",","        \"aui-tabs-data-editor\",","        \"aui-form-builder-field-base\",","        \"aui-form-field-choice\"","    ]","});","","}());"]};
}
var __cov_QOwgeFrX$Q2h7bW8i1y3UA = __coverage__['build/aui-form-builder-field-choice/aui-form-builder-field-choice.js'];
__cov_QOwgeFrX$Q2h7bW8i1y3UA.s['1']++;YUI.add('aui-form-builder-field-choice',function(A,NAME){__cov_QOwgeFrX$Q2h7bW8i1y3UA.f['1']++;__cov_QOwgeFrX$Q2h7bW8i1y3UA.s['2']++;A.FormBuilderFieldChoice=A.Base.create('form-builder-field-choice',A.FormFieldChoice,[A.FormBuilderFieldBase],{_fillSettings:function(){__cov_QOwgeFrX$Q2h7bW8i1y3UA.f['2']++;__cov_QOwgeFrX$Q2h7bW8i1y3UA.s['3']++;this._settings.push({attrName:'required',editor:new A.BooleanDataEditor({label:'Required'})},{attrName:'type',editor:new A.TabsDataEditor({tabs:[{label:'Radio button',value:A.FormFieldChoice.TYPES.RADIO},{label:'Checkbox',value:A.FormFieldChoice.TYPES.CHECKBOX},{label:'List Select',value:A.FormFieldChoice.TYPES.LIST}]})},{attrName:'options',editor:new A.OptionsDataEditor({required:true})},{attrName:'otherOption',editor:new A.BooleanDataEditor({label:'Add an option called "Other"'})});},_fillAdvancedSettings:function(){__cov_QOwgeFrX$Q2h7bW8i1y3UA.f['3']++;__cov_QOwgeFrX$Q2h7bW8i1y3UA.s['4']++;this._advancedSettings=[{attrName:'name',footerLabel:'Name',editor:new A.TextDataEditor({label:'Name'})}];}});},'3.1.0',{'requires':['aui-boolean-data-editor','aui-options-data-editor','aui-tabs-data-editor','aui-form-builder-field-base','aui-form-field-choice']});
