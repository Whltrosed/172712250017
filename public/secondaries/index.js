
// Content
new Hu({
  el: '#app-content',
  data: {
    data: null,
    table: $('#app-content').attr('db')
  },
  render( html ){
    return html`
      <div class="title">
        <div>招标公告</div>
      </div>
      <ul class="content">${ this.render_data }</ul>
    `;
  },
  computed: {
    render_data({ data, table }){
      if( data == null ) return Hu.html`<div class="loading">数据加载中</div>`;
      if( data.length === 0 ) return Hu.html`<div class="null">无数据</div>`;

      return data.map(({ rowid, name, time, state }) => {
        return Hu.html`
          <li>
            <a href="../article/?table=${ table }&id=${ rowid }" target="_blank">
              ${ name }
            </a>
          </li>
        `;
      });
    } 
  },
  mounted(){
    const setTimeout = window.setTimeout.$args({
      1: Math.$random( 520, 2048 )
    });

    setTimeout(() => {
      openDatabase( '172712250017', '1.0', 'CL', 2 * 1024 * 1024 ).transaction(( tx ) => {
        tx.executeSql(`select rowid, * from ${ this.table }`, [], ( tx, data ) => {
          const result = [];

          if( data && data.rows && data.rows.length ){
            for( const item of data.rows ) result.push( item );
          }

          this.data = result;
        });
      });
    });
  }
});