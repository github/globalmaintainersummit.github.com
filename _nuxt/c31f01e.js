(window.webpackJsonp=window.webpackJsonp||[]).push([[11,13],{304:function(e,t,r){var content=r(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("51711937",content,!0,{sourceMap:!1})},315:function(e,t,r){"use strict";r(304)},316:function(e,t,r){var n=r(23)(!1);n.push([e.i,'[data-v-b0304fd8]:root{--ff-default:"AllianceNo2",georgia,serif;--ff-secondary:roc-grotesk,sans-serif;--ff-title:roc-grotesk-wide,sans-serif;--fw-regular:400;--fw-semi-bold:500;--fw-bold:600;--fw-extra-bold:700;--fs-colossal:4.5rem;--fs-giant:3.5rem;--fs-large:2.5rem;--fs-medium:2rem;--fs-default:1.5rem;--fs-small:1.25rem;--fs-smaller:1.125rem;--fs-extra-small:0.75rem;--white:#fff;--gray-200:#edf0f2;--gray-400:#d0d9dd;--salmon:#f67e82;--purple:#b348e5;--deep-purple:#7303b0;--navy:#220137;--lime:#63de17;--pastel-green:#6be096;--anakiwa:#85d6ff;--seaweed:#1b3b14;--firefly:#0d282b;--pale-sky:#6a737d;--white-lilac:#fafbfd;--stratos:rgba(15,23,31,0.2);--grad-transparent-gray:linear-gradient(90deg,rgba(237,240,242,0),#edf0f2);--grad-navigation-mobile:linear-gradient(135deg,var(--purple),var(--salmon));--bg-body:var(--white);--bg-primary:var(--purple);--bg-primary-dark:var(--deep-purple);--bg-dark:var(--navy);--bg-accent:var(--salmon);--bg-dimmed:var(--gray-400);--bg-close-icon:var(--gray-400);--bg-hamburger:var(--navy);--bg-hamburger--open:var(--white);--bg-feedback--success:var(--pastel-green);--bg-feedback--warning:var(--anakiwa);--bg-button--light:var(--white);--bg-button--dark:var(--navy);--bc-button--light:var(--purple);--bc-button--dark:var(--white);--fc-default:var(--navy);--fc-primary:var(--purple);--fc-accent:var(--salmon);--fc-light:var(--white);--fc-dimmed:var(--gray-400);--fc-dimmed--darker:var(--pale-sky);--fc-feedback--success:var(--firefly);--fc-feedback--warning:var(--seaweed);--bs-header:var(--stratos);--bs-button--light:var(--deep-purple);--bs-button--dark:var(--purple);--underline-color:var(--salmon);--input-border--hover:var(--lime);--z-index-decorative:-1;--z-index-content:1;--z-index-topbar:2;--z-index-navigation-mobile:3;--z-index-hamburger:4;--z-index-switch-off:1;--z-index-switch-on:2;--z-index-dropdown:2}.switch[data-v-b0304fd8]{display:flex;justify-content:center;width:100%;padding:40px 24px 12px;color:#fff;color:var(--fc-light);font-size:.75rem;font-size:var(--fs-extra-small);font-family:roc-grotesk-wide,sans-serif;font-family:var(--ff-title)}@media only screen and (min-width:450px){.switch[data-v-b0304fd8]{padding:40px 24px;font-size:1.25rem;font-size:var(--fs-small)}}@media only screen and (min-width:680px){.switch[data-v-b0304fd8]{justify-content:flex-end;padding:40px 40px 0}}.switch button[data-v-b0304fd8]{border:none}.switch-button[data-v-b0304fd8]{z-index:1;z-index:var(--z-index-switch-off);padding:11px 32px 9px;color:#220137;color:var(--fc-default);background:#fafbfd;background:var(--white-lilac);border-radius:32px;cursor:pointer;transition:color .4s ease,background .4s ease,opacity .4s ease}@media only screen and (min-width:450px){.switch-button[data-v-b0304fd8]{padding:11px 48px 9px}}@media only screen and (min-width:680px){.switch-button[data-v-b0304fd8]{padding:8px 32px 7px}}.switch-button[data-v-b0304fd8]:last-of-type{margin-left:-18px}@media only screen and (min-width:450px){.switch-button[data-v-b0304fd8]:last-of-type{margin-left:-28px}}@media only screen and (min-width:680px){.switch-button[data-v-b0304fd8]:last-of-type{margin-left:-24px}}.switch-button[data-v-b0304fd8]:focus,.switch-button[data-v-b0304fd8]:hover{color:#b348e5;color:var(--fc-primary)}.switch-button--selected[data-v-b0304fd8],.switch-button.nuxt-link-exact-active[data-v-b0304fd8]{z-index:2;z-index:var(--z-index-switch-on);color:#fff;color:var(--fc-light);background-image:linear-gradient(135deg,#c562f5,#f68084)}',""]),e.exports=n},319:function(e,t,r){"use strict";r.r(t);var n={props:{id:{type:String,required:!0},options:{type:Array,required:!0},selectedOption:{type:String,default:null}},computed:{type:function(){return this.options[0].to?"nuxt-link":"button"}}},o=(r(315),r(9)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"switch"},e._l(e.options,(function(option){return r(e.type,{key:option.label,tag:"Component",staticClass:"switch-button",class:{"switch-button--selected":e.selectedOption===option.label},attrs:{to:option.to?option.to:null,"aria-label":"Change the "+e.id+" to "+option.label},on:{click:function(t){return e.$emit("click",option.label)}}},[e._v("\n    "+e._s(option.label)+"\n  ")])})),1)}),[],!1,null,"b0304fd8",null);t.default=component.exports},382:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{options:[{label:"Maintainers",to:"/maintainers"},{label:"Projects",to:"/projects"}]}}},o=r(9),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("CommonSwitchButton",{attrs:{id:"list",options:e.options}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CommonSwitchButton:r(319).default})}}]);