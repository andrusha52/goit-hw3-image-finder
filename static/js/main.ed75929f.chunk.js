(this["webpackJsonpgoit-hw3-image-finder"]=this["webpackJsonpgoit-hw3-image-finder"]||[]).push([[0],{2:function(e,a,t){e.exports={App:"style_App__21FBE",Searchbar:"style_Searchbar__1Uswu",SearchForm:"style_SearchForm__16u5g",SearchForm_button:"style_SearchForm_button__3MUX3",SearchForm_button_label:"style_SearchForm_button_label__17n_2",SearchForm_input:"style_SearchForm_input__2ri6q",ImageGallery:"style_ImageGallery__1f7Gh",ImageGalleryItem:"style_ImageGalleryItem__1sZgv",ImageGalleryItem_image:"style_ImageGalleryItem_image__P-ga4",Overlay:"style_Overlay__3wYaT",Modal:"style_Modal__29APn",Button:"style_Button__3mL67",Loader:"style_Loader__QA4o2"}},22:function(e,a,t){e.exports=t(69)},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),l=t.n(o),s=t(4),c=t(16),i=t(17),m=t(20),u=t(18),h=t(21),p=t(5),g=t.n(p),_=t(2),d=t.n(_),y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:d.a.Searchbar},r.a.createElement("form",{className:d.a.SearchForm,onSubmit:e.searchValue},r.a.createElement("button",{type:"submit",className:d.a.SearchForm_button},r.a.createElement("span",{className:d.a.SearchForm_button_label},"Search")),r.a.createElement("input",{onChange:e.inputOnChange,className:d.a.SearchForm_input,type:"text",placeholder:"Search images and photos"}))))},b=function(e){return r.a.createElement("li",{className:d.a.ImageGalleryItem,onClick:e.openModal},r.a.createElement("img",{src:e.el.largeImageURL,alt:e.el.tags,className:d.a.ImageGalleryItem_image,onClick:e.openModal}))},f=t(44),I=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:d.a.ImageGallery},e.searchImage.map((function(a){return r.a.createElement(b,{el:a,key:f(),openModal:e.openModal})}))))},S=t(19),M=t.n(S),E=(t(68),function(e){return r.a.createElement("div",{className:d.a.Overlay,onClick:e.closeModal},r.a.createElement("div",{className:d.a.Modal},r.a.createElement("img",{src:e.srcImg,alt:""})))}),O="15153445-23879ff55371ef06c5f70070f",N=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={inputValue:"",pageRa:1,searchImage:[],spinnerON:!1,openModalWind:!1,srcImg:"",btnLoadMore:!1},t.inputOnChange=function(e){var a=e.target.value;t.setState({inputValue:a})},t.searchValue=function(e){e.preventDefault(),t.setState({searchImage:[],spinnerON:!0});var a=t.state.inputValue,n=t.state.pageRa;""!==a&&g.a.get("https://pixabay.com/api/?q="+a+"&page="+n+"&key="+O+"&image_type=photo&orientation=horizontal&per_page=12").then((function(e){return t.setState((function(a){return{btnLoadMore:!0,searchImage:[].concat(Object(s.a)(a.searchImage),Object(s.a)(e.data.hits))}}))})).finally(t.setState({spinnerON:!1}))},t.loadMore=function(e){t.setState({spinnerON:!0}),t.setState((function(e){return{pageRa:e.pageRa+1}}));var a=t.state.inputValue,n=t.state.pageRa+1;g.a.get("https://pixabay.com/api/?q="+a+"&page="+n+"&key="+O+"&image_type=photo&orientation=horizontal&per_page=12").then((function(e){e.data.hits.length?t.setState((function(a){return{btnLoadMore:!0,searchImage:[].concat(Object(s.a)(a.searchImage),Object(s.a)(e.data.hits))}})):t.setState((function(a){return{btnLoadMore:!1,searchImage:[].concat(Object(s.a)(a.searchImage),Object(s.a)(e.data.hits))}}))})).finally((function(){t.setState({spinnerON:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},t.pressKeyCLose=function(e){"Escape"===e.code&&t.setState({openModalWind:!1})},t.openModal=function(e){var a=e.target.src;t.setState({openModalWind:!0,srcImg:a}),window.onkeydown=t.pressKeyCLose},t.closeModal=function(e){t.setState({openModalWind:!1})},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.openModalWind?r.a.createElement(E,{srcImg:this.state.srcImg,closeModal:this.closeModal,pressKeyCLose:this.pressKeyCLose}):null,this.state.spinnerON?r.a.createElement(M.a,{className:d.a.Loader,type:"MutatingDots",color:"orange",height:80,width:80,timeout:3e3}):null,r.a.createElement(y,{searchValue:this.searchValue,inputOnChange:this.inputOnChange}),r.a.createElement(I,{searchImage:this.state.searchImage,openModal:this.openModal}),this.state.btnLoadMore?r.a.createElement("button",{onClick:this.loadMore,className:d.a.Button},"LOAD MORE"):null)}}]),a}(n.Component);l.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ed75929f.chunk.js.map