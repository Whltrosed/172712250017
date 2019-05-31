
// Content
new Hu({
  el: '#app-content',
  data: {
    title: null,
    content: null
  },
  render( html ){
    return html`
      <div class="title" :html=${ this.render_title }></div>
      <div class="content" :html=${ this.render_content }></div>
    `;
  },
  computed: {
    render_title({ title }){
      if( title === null ) return '<div class="loading">数据加载中</div>';
      return title;
    },
    render_content({ content }){
      if( content === null ) return '<div class="loading">数据加载中</div>';
      return content;
    }
  },
  mounted(){
    openDatabase( '172712250017', '1.0', 'CL', 2 * 1024 * 1024 ).transaction(( tx ) => {
      const { table, id } = location.$search();

      tx.executeSql( `select * from ${ table } where rowid=${ id }`, [], ( tx, data ) => {
        const {
          name: title,
          content
        } = data.rows['0'];

        this.title = document.title = title;
        this.content = content.split('\n').join('<br>');
      });
    });
  }
});