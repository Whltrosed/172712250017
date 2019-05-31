
// Content
new Hu({
  el: '#app-content',
  data: {
    title: null,
    content: null
  },
  render( html ){
    return html`
      <div class="title">${ this.render_title }</div>
      <div class="content">${ this.render_content }</div>
    `;
  },
  computed: {
    render_title({ title }){
      if( title === null ) return Hu.html`<div class="loading">数据加载中</div>`;
    },
    render_content({ content }){
      if( content === null ) return Hu.html`<div class="loading">数据加载中</div>`;
    }
  }
});