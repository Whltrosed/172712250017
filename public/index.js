// Header
new Hu({
  el: '#app-header',
  data: {
    nav: [ '首页', '政务公开', '项目审批', '曝光台', '行业信息', '机关党建', '下载专区', '互动平台' ]
  },
  render( html ){
    const bindRenderNav = html.bind( this, 'render_nav' );

    return html`
      <div class="jumbotron jumbotron-fluid">
        某某市政府公共资源交易中心
      </div>
      <ul class="list-unstyled row no-gutters">${ bindRenderNav }</ul>
    `;
  },
  computed: {
    render_nav({ nav }){
      return Hu.html.repeat( nav, name => name, name => {
        return Hu.html`<li class="col">${ name }</li>`;
      });
    }
  },
});