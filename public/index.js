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
      <div>
        <a href="javascript:void(0)" @click=${ this.clear }>重置站点数据</a>
      </div>
    `;
  },
  methods: {
    createToast( msg, delay = 1000 ){
      const container = document.createElement('div').$appendTo( document.body ).$css({
        position: 'fixed', top: '20px', right: '20px',
        pointerEvents: 'none'
      });

      Hu.render( container )`
        <div class="toast" data-delay="${ delay }">
          <div class="toast-header">
            <strong class="mr-auto">Tips</strong>
          </div>
          <div class="toast-body">${ msg }</div>
        </div>
      `;

      return $( '.toast', container ).toast('show').on( 'hidden.bs.toast', () => {
        container.$remove();
      });
    },
    clear(){
      const toast = this.createToast( '重置站点数据中, 请稍后...', Number.MAX_SAFE_INTEGER / 10 );
      const setTimeout = window.setTimeout.$args({
        1: Math.$random( 520, 2048 )
      });

      setTimeout(() => {
        openDatabase( '172712250017', '1.0', 'CL', 2 * 1024 * 1024 ).transaction(( tx ) => {
          tx.executeSql(`drop table gcjs`);
          tx.executeSql(`drop table zfcg`);
          localStorage.setItem( 'isInit', 'false' );
  
          toast.find('.toast-body').html('站点数据重置成功 !');
          window.setTimeout(
            () => toast.toast('hide'),
            2000
          );
        });
      });
    }
  }
});