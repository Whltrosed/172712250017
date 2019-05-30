const ISGITHUBSERVER = location.pathname.startsWith('/172712250017/');

// Header
new Hu({
  el: '#app-header',
  data: {
    nav: [
      { name: '首页', href: '/' },
      { name: '工程建设', href: '/secondaries/gcjs/' },
      { name: '政府采购', href: '/secondaries/zfcg/' },
      { name: '政务公开' },
      { name: '项目审批' },
      { name: '曝光台' },
      { name: '行业信息' },
      { name: '机关党建' }
    ],
    time: null
  },
  methods: {
    jump({ target }){
      const href = target.getAttribute('href');

      if( href ){
        location.href = ( ISGITHUBSERVER ? '/172712250017' : '' ) + href;
      }
    }
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
    render_nav({ nav, jump }){
      return Hu.html.repeat( nav, 'name', data => {
        return Hu.html`<div class="col" href=${ data.href } @click=${ jump } ?disabled=${ !data.href }>${ data.name }</div>`;
      });
    }
  },
  beforeCreate(){
    const self = this;
    const weeks = '日一二三四五六'.split('');

    !function callback(){
      const date = new Date;
      self.time = date.$format(`YYYY-MM-DD HH:mm:ss Z ( 星期${ weeks[ date.$format('d') ] } / dddd )`);
      setTimeout( callback, 333 );
    }();
  }
});

// Footer
new Hu({
  el: '#app-footer',
  render( html ){
    return html`
      <hr>
      <div class="title">社会主义核心价值观：富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善</div>
      <br>
    `;
  }
});