
// Content
new Hu({
  el: '#app-content',
  render( html ){
    return html`
      <div class="left">
        <div id="app-content-carousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#app-content-carousel" data-slide-to="0" class="active"></li>
            <li data-target="#app-content-carousel" data-slide-to="1"></li>
            <li data-target="#app-content-carousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./public/index/images/Carousel-1.png" class="d-block w-100" alt="Carouse 1">
              <div class="carousel-caption d-none d-md-block">
                <p>Title 1</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="./public/index/images/Carousel-2.png" class="d-block w-100" alt="Carouse 2">
              <div class="carousel-caption d-none d-md-block">
                <p>Title 2</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="./public/index/images/Carousel-3.png" class="d-block w-100" alt="Carouse 3">
              <div class="carousel-caption d-none d-md-block">
                <p>Title 3</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#app-content-carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#app-content-carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="right">
        <div class="title">
          <span>公共服务系统</span>
        </div>
        <ul class="list-unstyled">
          <li>后台管理系统</li>
          <li>OA 办公登陆</li>
        </ul>
      </div>
    `;
  },
  mounted(){

  }
});