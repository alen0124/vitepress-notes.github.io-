import{V as D,_ as m,c as v,b as p,w as i,a as _,r,o as b,d as u,e as l}from"./app.b454e50a.js";const{defineComponent:g}=D,x=g({name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,createTextVNode:n,openBlock:t,createElementBlock:o}=D,F={class:"db-css__02"},c=s("h5",null,"welcome to",-1),e=s("p",null,"My name is Alen.",-1),a=s("p",null,"I live in Duckburg.",-1),C=s("div",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eum libero mollitia officia temporibus vero voluptatem. Aut commodi debitis excepturi hic itaque laudantium quam vero! Accusamus magnam porro quisquam vero",-1),E=s("h6",null,"天会晴就会暗",-1),A=s("br",null,null,-1),d=s("br",null,null,-1),y=s("br",null,null,-1),B=s("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nemo, voluptatem. Corporis eum illum maxime tempora temporibus. At consequuntur eos et ex hic illo impedit, odit pariatur placeat provident sapiente?",-1);function h(V,w){return t(),o("div",F,[c,e,a,C,E,A,d,n(" 选中下列文本 "),y,B])}return{render:h,...{}}}()}}),L=JSON.parse('{"title":"选择器","description":"","frontmatter":{},"headers":[{"level":2,"title":"1、通用选择器","slug":"_1、通用选择器","link":"#_1、通用选择器","children":[]},{"level":2,"title":"2、元素选择器","slug":"_2、元素选择器","link":"#_2、元素选择器","children":[]},{"level":2,"title":"3、类选择器","slug":"_3、类选择器","link":"#_3、类选择器","children":[]},{"level":2,"title":"4、id选择器","slug":"_4、id选择器","link":"#_4、id选择器","children":[]},{"level":2,"title":"5、群组选择器","slug":"_5、群组选择器","link":"#_5、群组选择器","children":[]},{"level":2,"title":"6、后代选择器","slug":"_6、后代选择器","link":"#_6、后代选择器","children":[]},{"level":2,"title":"7、子代选择器","slug":"_7、子代选择器","link":"#_7、子代选择器","children":[]},{"level":2,"title":"8、伪类选择器","slug":"_8、伪类选择器","link":"#_8、伪类选择器","children":[]},{"level":2,"title":"9、兄弟选择器","slug":"_9、兄弟选择器","link":"#_9、兄弟选择器","children":[]},{"level":2,"title":"10、属性选择器","slug":"_10、属性选择器","link":"#_10、属性选择器","children":[{"level":3,"title":"[attr]","slug":"attr","link":"#attr","children":[]},{"level":3,"title":"elem[attr]","slug":"elem-attr","link":"#elem-attr","children":[]},{"level":3,"title":"elem[attr1][attr2]","slug":"elem-attr1-attr2","link":"#elem-attr1-attr2","children":[]},{"level":3,"title":"elem[attr=value]","slug":"elem-attr-value","link":"#elem-attr-value","children":[]},{"level":3,"title":"elem[class~=value]","slug":"elem-class-value","link":"#elem-class-value","children":[]},{"level":3,"title":"elem[attr^=value]","slug":"elem-attr-value-1","link":"#elem-attr-value-1","children":[]},{"level":3,"title":"elem[attr$=value]","slug":"elem-attr-value-2","link":"#elem-attr-value-2","children":[]},{"level":3,"title":"elem[attr*=value]","slug":"elem-attr-value-3","link":"#elem-attr-value-3","children":[]}]},{"level":2,"title":"11、伪元素","slug":"_11、伪元素","link":"#_11、伪元素","children":[]}],"relativePath":"01.basics/03.css/02.选择器.md"}');const k=_(`<h1 id="选择器" tabindex="-1">选择器 <a class="header-anchor" href="#选择器">¶</a></h1><h2 id="_1、通用选择器" tabindex="-1">1、通用选择器 <a class="header-anchor" href="#_1、通用选择器">¶</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> 样式声明</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>作用 ： 匹配页面上所有的元素</li><li>注意 ： 效率低，尽量不用 尽可能通过 继承性 去代替通用选择器的效果</li></ul><h2 id="_2、元素选择器" tabindex="-1">2、元素选择器 <a class="header-anchor" href="#_2、元素选择器">¶</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">元素 </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>元素选择器（又名：标签选择器，标记选择器）</li><li>作用： 匹配页面某一指定元素。 比如：页面所有的 div 元素；页面所有的 p 元素</li></ul><h2 id="_3、类选择器" tabindex="-1">3、类选择器 <a class="header-anchor" href="#_3、类选择器">¶</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">类名</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> 若干样式声明 </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>作用 ： 允许元素使用附带class属性值，对选择器进行引用。</li><li>注意 ： 类名：由字母、数字、_ 组成；不能以数字开头。</li></ul><ol><li><p>引用类选择器：通过元素的class属性，进行引用</p></li><li><p>特殊用法————分类选择器</p><blockquote><p>作用：将 元素选择器 和 类选择器 结合到一起，从而实现某种元素的不同样式的细分控制。 语法： <code>元素选择器.类选择器{ 样式声明; }</code></p></blockquote></li><li><p>特殊应用————多类选择器</p><blockquote><p>作用：可以让一个元素同时引用多个类选择器,中间用 空格 分开即可。</p></blockquote></li></ol><h2 id="_4、id选择器" tabindex="-1">4、id选择器 <a class="header-anchor" href="#_4、id选择器">¶</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> 若干样式声明 </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>作用：只匹配指定id值的元素。</li></ul><h2 id="_5、群组选择器" tabindex="-1">5、群组选择器 <a class="header-anchor" href="#_5、群组选择器">¶</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">选择器1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">选择器2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">选择器n </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    若干样式声明</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>作用：选择器的声明是以 逗号 来隔开的选择器列表；其目的是为了声明一组选择器中的公共样式。</li></ul><h2 id="_6、后代选择器" tabindex="-1">6、后代选择器 <a class="header-anchor" href="#_6、后代选择器">¶</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">选择器1 选择器2 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    若干样式声明</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*（中间用空格）*/</span></span>
<span class="line"></span></code></pre></div><ul><li>作用：用于匹配某元素的后代元素时使用。</li></ul><h2 id="_7、子代选择器" tabindex="-1">7、子代选择器 <a class="header-anchor" href="#_7、子代选择器">¶</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">选择器1 </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 选择器2 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    若干样式声明</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* （中间用大于&gt;） */</span></span>
<span class="line"></span></code></pre></div><ul><li>作用：用于匹配某元素的子代元素。</li></ul><h2 id="_8、伪类选择器" tabindex="-1">8、伪类选择器 <a class="header-anchor" href="#_8、伪类选择器">¶</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">选择器:伪类选择器 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    样式声明</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* （以冒号作为结合符） */</span></span>
<span class="line"></span></code></pre></div><ul><li>作用：为了匹配元素不同的状态的。（向某些选择器添加特殊效果）</li><li>分类： <ol><li>链接伪类 <ul><li>:link 匹配超链接 未被访问时的状态。</li><li>:visited 匹配 超链接 被访问过的状态。</li></ul></li><li>动态伪类 <ul><li>:hover 匹配鼠标悬停在html元素时的状态</li><li>:active 匹配html元素被激活时的状态</li><li>:focus 匹配html获取焦点时的状态（文本框、密码框）</li></ul></li><li>目标伪类 <ul><li>作用： 突出显示活动的HTML锚元素。匹配当前页面中活动的HTML锚元素。</li><li>语法： ：target</li></ul></li><li>元素状态伪类 <ul><li>作用：元素状态：启用（enabled），禁用（disabled），被选中（checked）</li><li>语法： <ul><li>：enabled 匹配每个已启用元素</li><li>：disabled 匹配每个已禁用元素（表单控件）</li><li>：checked 匹配每个被选中元素（）</li></ul></li></ul></li><li>结构伪类 <ul><li>：first-child 匹配属于其父元素中的首个子元素</li><li>：last-child 匹配属于其父元素中的最后一个子元素</li><li>：nth-child（n） 匹配属于其父元素中的第n个子元素 ：nth-child(n/even/odd/2n/2n+1)</li><li>：empty 匹配没有子元素（包括文本）的每个元素</li><li>：only-child 匹配属于其父元素中的唯一子元素</li></ul></li><li>否定伪类 <ul><li>语法： :not(选择器) 将满足选择器的元素从指定范围中排除出去</li></ul></li></ol></li></ul><p>选择器优先级：</p><table><thead><tr><th>选择器类型</th><th>权值</th></tr></thead><tbody><tr><td>元素选择器</td><td>0 . 0 . 0 . 1</td></tr><tr><td>类选择器</td><td>0 . 0 . 1 . 0</td></tr><tr><td>伪类选择器</td><td>0 . 0 . 1 . 0</td></tr><tr><td>id选择器</td><td>0 . 1 . 0 . 0</td></tr><tr><td>内联样式</td><td>1 . 0 . 0 . 0</td></tr><tr><td>选择器的权值加到一起，大的优先；如果权值相同，后定义的优先。</td><td></td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">注意</p><p>继承的样式和自定义样式冲突时，永远都是以自定义的为主。</p></div><h2 id="_9、兄弟选择器" tabindex="-1">9、兄弟选择器 <a class="header-anchor" href="#_9、兄弟选择器">¶</a></h2><ul><li><p>作用：通过元素的平级关系来匹配其他元素。</p></li><li><p>分类</p><ul><li><p>相邻兄弟选择器 匹配指定元素的相邻兄弟（紧紧挨在指定元素的后面）。</p><blockquote><p>语法： <code>选择器1+选择器2</code> 🌰eg: <code>div+p</code></p></blockquote></li><li><p>通用兄弟选择器 匹配某元素后面所有的兄弟元素。</p><blockquote><p>语法： <code>选择器1~选择器2</code> 🌰eg： <code>div~p</code></p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>兄弟选择器只能往后找，不往前找。</p></div></blockquote></li></ul></li></ul><h2 id="_10、属性选择器" tabindex="-1">10、属性选择器 <a class="header-anchor" href="#_10、属性选择器">¶</a></h2><ul><li>作用：允许使用元素所附带的元素及其值，来匹配页面的元素。</li><li>语法规范 唯一一组以 <code>[ ]</code> 来进行表示的选择器。</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>attr: 任意属性名称</p><p>elem: 表示任意元素</p><p>value: 表示值</p></div><h3 id="attr" tabindex="-1">[attr] <a class="header-anchor" href="#attr">¶</a></h3><ul><li>作用：匹配附带attr属性的元素。</li><li>eg ： [id] 匹配页面所有附带id属性的元素。</li></ul><h3 id="elem-attr" tabindex="-1">elem[attr] <a class="header-anchor" href="#elem-attr">¶</a></h3><ul><li>作用：匹配附带attr属性的elem元素。 eg：p[id] 匹配页面中附带id的p元素</li></ul><h3 id="elem-attr1-attr2" tabindex="-1">elem[attr1][attr2] <a class="header-anchor" href="#elem-attr1-attr2">¶</a></h3><ul><li>作用：匹配页面中所有即附带attr1属性也同时附带attr2属性的elem元素。 eg：p[id][class]</li></ul><h3 id="elem-attr-value" tabindex="-1">elem[attr=value] <a class="header-anchor" href="#elem-attr-value">¶</a></h3><ul><li>作用：匹配页面上附带attr属性同时值为value的elem元素。 eg:input[type=&quot;text&quot;]</li></ul><h3 id="elem-class-value" tabindex="-1">elem[class~=value] <a class="header-anchor" href="#elem-class-value">¶</a></h3><ul><li>作用：匹配附带class属性的elem元素，其中class属性的值是以空格隔开的值列表，value是值列表中的一个独立值。 eg: p[class~=&quot;Myclass01 Myclass02&quot;]</li></ul><h3 id="elem-attr-value-1" tabindex="-1">elem[attr^=value] <a class="header-anchor" href="#elem-attr-value-1">¶</a></h3><p>^= 以value作为开始</p><ul><li>作用：匹配附带attr属性的elem元素，并且该属性值是以value作为开始的。</li></ul><h3 id="elem-attr-value-2" tabindex="-1">elem[attr$=value] <a class="header-anchor" href="#elem-attr-value-2">¶</a></h3><p>$= 以value作为结束</p><ul><li>作用：匹配附带attr属性的elem元素，并且该属性值是以value作为结束的。</li></ul><h3 id="elem-attr-value-3" tabindex="-1">elem[attr*=value] <a class="header-anchor" href="#elem-attr-value-3">¶</a></h3><p>*= 包含value值即可</p><ul><li>作用：匹配附带attr属性的elem元素，并且该属性值只要包含value即可。</li></ul><h2 id="_11、伪元素" tabindex="-1">11、伪元素 <a class="header-anchor" href="#_11、伪元素">¶</a></h2><p>匹配元素中的内容。常用伪元素：</p><ul><li>::first-letter 选择指定元素的第一个单词</li><li>::first-line 选择指定元素的第一行</li><li>::after 在指定的元素的内容后面插入内容</li><li>::before 在指定的元素的内容前面插入内容</li><li>::selection 在指定的元素中被用户选中的内容</li></ul>`,56),f=u("div",{class:"language-vue"},[u("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[u("code",null,[u("span",{class:"line"},[u("span",{style:{color:"#89DDFF"}},"<"),u("span",{style:{color:"#F07178"}},"template"),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"    "),u("span",{style:{color:"#89DDFF"}},"<"),u("span",{style:{color:"#F07178"}},"div"),u("span",{style:{color:"#89DDFF"}}," "),u("span",{style:{color:"#C792EA"}},"class"),u("span",{style:{color:"#89DDFF"}},"="),u("span",{style:{color:"#89DDFF"}},'"'),u("span",{style:{color:"#C3E88D"}},"db-css__02"),u("span",{style:{color:"#89DDFF"}},'"'),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        "),u("span",{style:{color:"#89DDFF"}},"<"),u("span",{style:{color:"#F07178"}},"h5"),u("span",{style:{color:"#89DDFF"}},">"),u("span",{style:{color:"#A6ACCD"}},"welcome to"),u("span",{style:{color:"#89DDFF"}},"</"),u("span",{style:{color:"#F07178"}},"h5"),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        "),u("span",{style:{color:"#89DDFF"}},"<"),u("span",{style:{color:"#F07178"}},"p"),u("span",{style:{color:"#89DDFF"}},">"),u("span",{style:{color:"#A6ACCD"}},"My name is Alen."),u("span",{style:{color:"#89DDFF"}},"</"),u("span",{style:{color:"#F07178"}},"p"),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        "),u("span",{style:{color:"#89DDFF"}},"<"),u("span",{style:{color:"#F07178"}},"p"),u("span",{style:{color:"#89DDFF"}},">"),u("span",{style:{color:"#A6ACCD"}},"I live in Duckburg."),u("span",{style:{color:"#89DDFF"}},"</"),u("span",{style:{color:"#F07178"}},"p"),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        "),u("span",{style:{color:"#89DDFF"}},"<"),u("span",{style:{color:"#F07178"}},"div"),u("span",{style:{color:"#89DDFF"}},">"),u("span",{style:{color:"#A6ACCD"}},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eum libero mollitia officia temporibus vero voluptatem. Aut commodi debitis excepturi hic itaque laudantium quam vero! Accusamus magnam porro quisquam vero"),u("span",{style:{color:"#89DDFF"}},"</"),u("span",{style:{color:"#F07178"}},"div"),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        "),u("span",{style:{color:"#89DDFF"}},"<"),u("span",{style:{color:"#F07178"}},"h6"),u("span",{style:{color:"#89DDFF"}},">"),u("span",{style:{color:"#A6ACCD"}},"天会晴就会暗"),u("span",{style:{color:"#89DDFF"}},"</"),u("span",{style:{color:"#F07178"}},"h6"),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        ")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        "),u("span",{style:{color:"#89DDFF"}},"<"),u("span",{style:{color:"#F07178"}},"br"),u("span",{style:{color:"#89DDFF"}},"><"),u("span",{style:{color:"#F07178"}},"br"),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        选中下列文本 "),u("span",{style:{color:"#89DDFF"}},"<"),u("span",{style:{color:"#F07178"}},"br"),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        ")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        "),u("span",{style:{color:"#89DDFF"}},"<"),u("span",{style:{color:"#F07178"}},"p"),u("span",{style:{color:"#89DDFF"}},">"),u("span",{style:{color:"#A6ACCD"}},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nemo, voluptatem. Corporis eum illum maxime tempora temporibus. At consequuntur eos et ex hic illo impedit, odit pariatur placeat provident sapiente?"),u("span",{style:{color:"#89DDFF"}},"</"),u("span",{style:{color:"#F07178"}},"p"),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"    "),u("span",{style:{color:"#89DDFF"}},"</"),u("span",{style:{color:"#F07178"}},"div"),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#89DDFF"}},"</"),u("span",{style:{color:"#F07178"}},"template"),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"}),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#89DDFF"}},"<"),u("span",{style:{color:"#F07178"}},"style"),u("span",{style:{color:"#A6ACCD"}}," "),u("span",{style:{color:"#C792EA"}},"lang"),u("span",{style:{color:"#89DDFF"}},"="),u("span",{style:{color:"#89DDFF"}},'"'),u("span",{style:{color:"#C3E88D"}},"less"),u("span",{style:{color:"#89DDFF"}},'"'),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#89DDFF"}},"."),u("span",{style:{color:"#FFCB6B"}},"db-css__02"),u("span",{style:{color:"#A6ACCD"}}," "),u("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"    "),u("span",{style:{color:"#FFCB6B"}},"p"),u("span",{style:{color:"#89DDFF"}},"::"),u("span",{style:{color:"#C792EA"}},"first-letter"),u("span",{style:{color:"#A6ACCD"}}," "),u("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        "),u("span",{style:{color:"#B2CCD6"}},"color"),u("span",{style:{color:"#89DDFF"}},":"),u("span",{style:{color:"#A6ACCD"}}," red"),u("span",{style:{color:"#89DDFF"}},";")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"    "),u("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"    "),u("span",{style:{color:"#FFCB6B"}},"div"),u("span",{style:{color:"#89DDFF"}},"::"),u("span",{style:{color:"#C792EA"}},"first-line"),u("span",{style:{color:"#A6ACCD"}}," "),u("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        "),u("span",{style:{color:"#B2CCD6"}},"background-color"),u("span",{style:{color:"#89DDFF"}},":"),u("span",{style:{color:"#A6ACCD"}}," green"),u("span",{style:{color:"#89DDFF"}},";")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"    "),u("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"    "),u("span",{style:{color:"#FFCB6B"}},"h6"),u("span",{style:{color:"#89DDFF"}},"::"),u("span",{style:{color:"#C792EA"}},"after"),u("span",{style:{color:"#A6ACCD"}}," "),u("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        "),u("span",{style:{color:"#FFCB6B"}},"content"),u("span",{style:{color:"#89DDFF"}},":"),u("span",{style:{color:"#A6ACCD"}}," "),u("span",{style:{color:"#89DDFF"}},'"'),u("span",{style:{color:"#C3E88D"}},"————后插入内容"),u("span",{style:{color:"#89DDFF"}},'"'),u("span",{style:{color:"#89DDFF"}},";")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"    "),u("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"    "),u("span",{style:{color:"#FFCB6B"}},"h6"),u("span",{style:{color:"#89DDFF"}},"::"),u("span",{style:{color:"#C792EA"}},"before"),u("span",{style:{color:"#A6ACCD"}}," "),u("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        "),u("span",{style:{color:"#FFCB6B"}},"content"),u("span",{style:{color:"#89DDFF"}},":"),u("span",{style:{color:"#A6ACCD"}}," "),u("span",{style:{color:"#89DDFF"}},'"'),u("span",{style:{color:"#C3E88D"}},"前插入内容————"),u("span",{style:{color:"#89DDFF"}},'"'),u("span",{style:{color:"#89DDFF"}},";")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"    "),u("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"    "),u("span",{style:{color:"#FFCB6B"}},"p"),u("span",{style:{color:"#89DDFF"}},"::"),u("span",{style:{color:"#C792EA"}},"selection"),u("span",{style:{color:"#A6ACCD"}}," "),u("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        "),u("span",{style:{color:"#B2CCD6"}},"color"),u("span",{style:{color:"#89DDFF"}},":"),u("span",{style:{color:"#A6ACCD"}}," white"),u("span",{style:{color:"#89DDFF"}},";")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"        "),u("span",{style:{color:"#B2CCD6"}},"background-color"),u("span",{style:{color:"#89DDFF"}},":"),u("span",{style:{color:"#A6ACCD"}}," springgreen"),u("span",{style:{color:"#89DDFF"}},";")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#A6ACCD"}},"    "),u("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),u("span",{class:"line"},[u("span",{style:{color:"#89DDFF"}},"</"),u("span",{style:{color:"#F07178"}},"style"),u("span",{style:{color:"#89DDFF"}},">")]),l(`
`),u("span",{class:"line"})])])],-1);function q(s,n,t,o,F,c){const e=r("render-demo-0"),a=r("demo");return b(),v("div",null,[k,p(a,{customClass:"db-layout",sourceCode:`<template>
    <div class="db-css__02">
        <h5>welcome to</h5>
        <p>My name is Alen.</p>
        <p>I live in Duckburg.</p>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eum libero mollitia officia temporibus vero voluptatem. Aut commodi debitis excepturi hic itaque laudantium quam vero! Accusamus magnam porro quisquam vero</div>
        <h6>天会晴就会暗</h6>
        
        <br><br>
        选中下列文本 <br>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nemo, voluptatem. Corporis eum illum maxime tempora temporibus. At consequuntur eos et ex hic illo impedit, odit pariatur placeat provident sapiente?</p>
    </div>
</template>

<style lang="less">
.db-css__02 {
    p::first-letter {
        color: red;
    }
    div::first-line {
        background-color: green;
    }
    h6::after {
        content: "————后插入内容";
    }
    h6::before {
        content: "前插入内容————";
    }
    p::selection {
        color: white;
        background-color: springgreen;
    }
}
</style>
`},{highlight:i(()=>[f]),default:i(()=>[p(e)]),_:1})])}const $=m(x,[["render",q]]);export{L as __pageData,$ as default};
