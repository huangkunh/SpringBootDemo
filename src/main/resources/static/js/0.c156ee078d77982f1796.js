webpackJsonp([0],{"9O00":function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=o("mvHQ"),t=o.n(s),l=o("zL8q"),n={data:function(){var e=this;return{ruleForm2:{username:"",password:"",checkPass:""},rules2:{username:[{validator:function(e,r,o){if(!r)return o(new Error("用户名不能为空"));o()},trigger:"blur"}],password:[{validator:function(r,o,s){""===o?s(new Error("请输入密码")):(""!==e.ruleForm2.checkPass&&e.$refs.ruleForm2.validateField("checkPass"),s())},trigger:"blur"}],checkPass:[{validator:function(r,o,s){""===o?s(new Error("请再次输入密码")):o!==e.ruleForm2.password?s(new Error("两次输入密码不一致!")):s()},trigger:"blur"}]}}},methods:{login:function(e){var r=this;this.$refs[e].validate(function(e){console.log("进入成功"),console.log(r.ruleForm2.username),console.log(r.ruleForm2.password),e&&r.$http({url:"http://120.24.5.178:8100/user/register",method:"POST",body:t()({username:r.ruleForm2.username,password:r.ruleForm2.password}),headers:{"Content-Type":"application/json"}}).then(function(e){console.log(e.data),0==e.data.code?(l.Message.success("注册成功"),this.$router.push({name:"list"})):l.Message.warning("注册失败，请重新填写信息")},function(e){return console.log("error submit"+e),!1})})},resetForm:function(e){this.$refs[e].resetFields()}}},a={render:function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticStyle:{width:"50%","margin-left":"25%"}},[o("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"用户名",prop:"username"}},[o("el-input",{model:{value:e.ruleForm2.username,callback:function(r){e.$set(e.ruleForm2,"username",e._n(r))},expression:"ruleForm2.username"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.password,callback:function(r){e.$set(e.ruleForm2,"password",r)},expression:"ruleForm2.password"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[o("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.checkPass,callback:function(r){e.$set(e.ruleForm2,"checkPass",r)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),o("el-form-item",[o("el-button",{on:{click:function(r){e.resetForm("ruleForm2")}}},[e._v("重置")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(r){e.login("ruleForm2")}}},[e._v("确认")])],1)],1)],1)},staticRenderFns:[]},u=o("VU/8")(n,a,!1,null,null,null);r.default=u.exports},mvHQ:function(e,r,o){e.exports={default:o("qkKv"),__esModule:!0}},qkKv:function(e,r,o){var s=o("FeBl"),t=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return t.stringify.apply(t,arguments)}}});
//# sourceMappingURL=0.c156ee078d77982f1796.js.map