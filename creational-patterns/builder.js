class Banner {
    constructor(params) {
        this.url = params.url;
        this.lowResImg = params.lowResImg;
        this.highResImg = params.highResImg;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    setImg(img) {
        this.currentImg = img;
    }
    render() {
        let banner = document.getElementById("banner");
        banner.style.width = this.width + "px";
        banner.style.height = this.height + "px";
        banner.setAttribute('src', this.currentImg);
        banner.setAttribute('data-url', this.url);
        document.body.appendChild(banner);
    }
}

class BuilderBanner {
    constructor(params) {
        this.banner = new Banner(params);
    }
    renderBanner() {
        this.banner.render();
    }
}


class BuilderLowResBanner extends BuilderBanner {
    setWidth(width) {
        this.banner.setWidth(320);
    }
    setHeight(height) {
        this.banner.setHeight(100);
    }
    setImg(img) {
        this.banner.setImg(this.banner.lowResImg);
    }
}


class BuilderHighResBanner extends BuilderBanner {
    setWidth(width) {
        this.banner.setWidth(820);
    }
    setHeight(height) {
        this.banner.setHeight(400);
    }
    setImg(img) {
        this.banner.setImg(this.banner.highResImg);
    }
}

class DirectorBanner {
    constructor(builder) {
        if (! builder instanceof BuilderBanner) {
            throw "not builder object passed";
        }
        this.builder = builder;
    }
    constructBanner() {
        this.builder.setWidth();
        this.builder.setHeight();
        this.builder.setImg();
    }
    renderBanner() {
        this.builder.renderBanner();
    }
}

// первичная инициализация
initBanner(); 

// перерисовка при масштабировании страницы
window.onresize = () => initBanner(); 

//функция инициализации
function initBanner() {
    const bannerParams = {
        url: "/some-page.html",
        lowResImg: "awesome-mob.jpeg",
        highResImg: "avesome-desc.jpeg"
    };
    let bulder = window.innerWidth > 819 
        ? new BuilderHighResBanner(bannerParams)
        : new BuilderLowResBanner(bannerParams);
    let director = new  DirectorBanner(bulder);
    director.constructBanner();
    director.renderBanner();
}