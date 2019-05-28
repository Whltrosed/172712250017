// Header
new Hu({
  el: '#app-header',
  data: {
    nav: [ '首页', '政务公开', '项目审批', '曝光台', '行业信息', '机关党建', '下载专区', '互动平台' ],
    time: null
  },
  render( html ){
    const bindRenderNav = html.bind( this, 'render_nav' );
    const bindTime = html.bind( this, 'time' );

    return html`
      <div class="jumbotron jumbotron-fluid">某某市政府公共资源交易中心</div>
      <div class="row no-gutters">${ bindRenderNav }</div>
      <div class="time">今天是: ${ bindTime }</div>
    `;
  },
  computed: {
    render_nav({ nav }){
      return Hu.html.repeat( nav, name => name, name => {
        return Hu.html`<div class="col">${ name }</div>`;
      });
    }
  },
  beforeCreate(){
    const self = this;
    const weeks = '日一二六三四五'.split('');

    !function callback(){
      const date = new Date;
      self.time = date.$format(`YYYY-MM-DD HH:mm:ss Z ( 星期${ weeks[ date.$format('d') ] } / dddd )`);
      setTimeout( callback, 333 );
    }();
  }
});