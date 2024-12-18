import{_ as e,c as t,o as r,a as o}from"./app.b454e50a.js";const m=JSON.parse('{"title":"Github","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用图床","slug":"使用图床","link":"#使用图床","children":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"Github+picGo搭建图床","slug":"github-picgo搭建图床","link":"#github-picgo搭建图床","children":[]}]}],"relativePath":"02.advanced/01.version-control-systems/03.Github.md"}'),i={name:"02.advanced/01.version-control-systems/03.Github.md"},s=o('<h1 id="github" tabindex="-1">Github <a class="header-anchor" href="#github">¶</a></h1><p>GitHub是一家使用Git进行软件开发和版本控制的互联网托管提供商。它提供了Git的分布式版本控制和源代码管理功能，以及它自己的特性。</p><p>学习资料：</p><ul><li><a href="https://docs.github.com/zh/get-started/quickstart/hello-world" target="_blank" rel="noreferrer">GitHub: Quickstart</a></li></ul><h2 id="使用图床" tabindex="-1">使用图床 <a class="header-anchor" href="#使用图床">¶</a></h2><p>使用技术：GitHub + jsDelivr + TinyPNG + PicGo图床</p><h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言">¶</a></h3><p><strong>Q1：为什么要使用图床呢？什么是图床？</strong></p><p>A：写博客文章时，图片的上传和存放是一个问题，有的朋友可能会把图片放到和博客同一个仓库当中，使用相对路径来引用，这样后期维护起来会比较麻烦。还有的朋友会在不同的平台发布同一篇文章，这样一来每个平台都要上传图片，为了解决这些问题，比较推荐的做法是把图片统一上传到一个在线的第三方静态资源库中，我们把这个资源库称为图床，其返回一个图片的URL，使用<code>markdown+图片url</code> 的方式写作文章，一次编写，到处使用~</p><p><strong>Q2：图床的选择</strong></p><p>A：推荐使用GitHub作为图床，特点是免费、稳定，有一个小缺点是国内访问速度慢，不过没关系，可以使用<code>jsDelivr</code>免费CDN加速。</p><p><strong>Q3：jsDelivr是什么？</strong></p><p>A：<a href="http://www.jsdelivr.com/" target="_blank" rel="noreferrer">jsDelivr</a>是国外的一家优秀的公共 CDN 服务提供商，该平台是首个「打通中国大陆与海外的免费CDN服务」，无须担心中国防火墙问题而影响使用。官网：<a href="http://www.jsdelivr.com/" target="_blank" rel="noreferrer">http://www.jsdelivr.com/</a></p><p><strong>Q4：PicGo是什么？</strong></p><p>A: <a href="https://gitee.com/Molunerfinn/PicGo" target="_blank" rel="noreferrer">PicGo</a>是一个用于快速上传图片并获取图片 URL 链接的工具</p><h3 id="github-picgo搭建图床" tabindex="-1">Github+picGo搭建图床 <a class="header-anchor" href="#github-picgo搭建图床">¶</a></h3><ol><li>创建一个新仓库，用于存放图片 <img src="https://raw.githubusercontent.com/alen0124/noteImages/master/notes/version-control-systems/github/1.png" alt=""></li></ol><p>填写仓库名称和描述，且仓库必须是public的，否则存储的图片不能正常访问。</p><p><img src="https://raw.githubusercontent.com/alen0124/noteImages/master/notes/version-control-systems/github/2.png" alt=""></p><ol start="2"><li>生成一个token，用于picGo访问github，选择左侧菜单的 <code>Developer settings</code></li></ol><p><img src="https://raw.githubusercontent.com/alen0124/noteImages/master/notes/version-control-systems/github/3.png" alt=""></p><p>之后选择左侧Personal access tokens，再点击Generate new token</p><p><img src="https://raw.githubusercontent.com/alen0124/noteImages/master/notes/version-control-systems/github/4.png" alt=""></p><p>填写Note，勾选repo.</p><p><img src="https://raw.githubusercontent.com/alen0124/noteImages/master/notes/version-control-systems/github/5.png" alt=""></p><p>注意，生成的token只会在这里显示一次，所以记得单独保存下来。至此，Github的配置完成。</p><ol start="3"><li>在 <a href="https://github.com/Molunerfinn/picgo/releases" target="_blank" rel="noreferrer">这里</a> 下载PicGo，安装完成后打开，<code>图床设置</code> 选 <code>GitHub图床</code>，并填写相应的信息： <ul><li>仓库名：前面新建的仓库，格式：<code>&lt;用户名&gt;/&lt;仓库名&gt;</code></li><li>分支名：填写主分支<code>master</code>即可</li><li>Token：前面生成的token密钥</li><li>存储路径：按你自己的需求填写</li><li>自定义域名：图片上传后，PicGo 会按照 <code>自定义域名+上传的图片名</code> 的方式生成访问链接，此处我们填写<code>jsDelivr</code> 的CDN加速地址，格式：<code>https://cdn.jsdelivr.net/gh/&lt;用户名&gt;/&lt;仓库名&gt;</code></li></ul></li></ol><p><img src="https://raw.githubusercontent.com/alen0124/noteImages/master/notes/version-control-systems/github/6.png" alt=""></p><ol start="5"><li><p>使用<a href="https://tinypng.cn/" target="_blank" rel="noreferrer">https://tinypng.cn/</a>压缩你要上传的图片（如图片已经很小或你有更好的压缩工具可省略这一步）</p></li><li><p>在PigGo的<code>上传区</code>上传你的图片，到<code>相册</code>一键复制刚刚上传的图片URL，至此，你就可以在你的文章当中愉快的插入图片。</p></li></ol><ul><li><a href="https://www.gaitubao.com/jpg-gif-png" target="_blank" rel="noreferrer">在线转换图片格式工具</a></li><li><a href="https://tinify.cn/" target="_blank" rel="noreferrer">在线图片压缩攻击</a></li></ul>',30),n=[s];function l(a,c,p,h,g,d){return r(),t("div",null,n)}const b=e(i,[["render",l]]);export{m as __pageData,b as default};
