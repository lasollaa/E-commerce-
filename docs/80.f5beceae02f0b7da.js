"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[80],{5080:(g,l,i)=>{i.r(l),i.d(l,{WishlistComponent:()=>T});var _=i(6814),u=i(1120),h=i(8129),t=i(4769),o=i(9196),v=i(2425),r=i(6286);const n=function(c){return["/productdetails",c]};function C(c,m){if(1&c){const s=t.EpF();t.TgZ(0,"div",6)(1,"div",7)(2,"header",8),t._UZ(3,"img",9),t.TgZ(4,"h3",10),t._uU(5),t.ALo(6,"cuttext"),t.qZA(),t.TgZ(7,"h4",11),t._uU(8),t.qZA(),t.TgZ(9,"div",12)(10,"span",13),t._uU(11),t.ALo(12,"currency"),t.qZA(),t.TgZ(13,"span"),t._UZ(14,"i",14),t.TgZ(15,"span",15),t._uU(16),t.qZA()()()(),t.TgZ(17,"button",16),t.NdJ("click",function(){const d=t.CHM(s).$implicit,p=t.oxw(2);return t.KtG(p.removeFav(d._id))}),t._uU(18," Reomve "),t._UZ(19,"i",17),t.qZA(),t.TgZ(20,"footer")(21,"button",18),t.NdJ("click",function(){const d=t.CHM(s).$implicit,p=t.oxw(2);return t.KtG(p.addProduct(d._id))}),t._uU(22,"+Add To Cart"),t.qZA()()()()}if(2&c){const s=m.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(14,n,s._id)),t.xp6(1),t.Q6J("src",s.imageCover,t.LSH)("title",s.title)("alt",s.title),t.xp6(2),t.Oqu(t.xi3(6,8,s.title,3)),t.xp6(3),t.Oqu(s.category.name),t.xp6(3),t.Oqu(t.xi3(12,11,s.price,"EGP")),t.xp6(5),t.Oqu(s.ratingsAverage)}}function x(c,m){if(1&c&&(t.TgZ(0,"section",1)(1,"h2",2),t._UZ(2,"i",3),t._uU(3," My WishList "),t._UZ(4,"i",3),t.qZA(),t.TgZ(5,"div",4),t.YNc(6,C,23,16,"div",5),t.qZA()()),2&c){const s=t.oxw();t.xp6(6),t.Q6J("ngForOf",s.products)}}let T=(()=>{class c{constructor(s,e,a){this._WishlistService=s,this._ToastrService=e,this._CartService=a,this.products=[]}ngOnInit(){this._WishlistService.getWishList().subscribe({next:s=>{console.log(s),this.products=s.data}})}addFav(s){this._WishlistService.addToWishList(s).subscribe({next:e=>{console.log(e),this._ToastrService.success(e.message)}})}removeFav(s){this._WishlistService.removeWishList(s).subscribe({next:e=>{console.log(e),this._ToastrService.success(e.message),this._WishlistService.getWishList().subscribe({next:a=>{this.products=a.data}})}})}addProduct(s){this._CartService.addToCart(s).subscribe({next:e=>{console.log(e),console.log(e.message),this._ToastrService.success(e.message),this._CartService.cartNumber.next(e.numOfCartItems)}})}static#t=this.\u0275fac=function(e){return new(e||c)(t.Y36(o.M),t.Y36(v._W),t.Y36(r.N))};static#s=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-wishlist"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","py-4",4,"ngIf"],[1,"py-4"],[1,"text-center","py-3","text-main"],[1,"fas","fa-heart"],[1,"row","g-4","my-3"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","h-100"],["role","button",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"h6"],[1,"h6","text-main"],[1,"d-flex","align-items-center","justify-content-between"],[1,"small"],[1,"fas","fa-star","rating-color"],[1,"text-muted"],[1,"btn","text-danger","m-0","p-0","btn-sm",3,"click"],[1,"fa","fa-trash"],[1,"main-btn","w-100","mt-1",3,"click"]],template:function(e,a){1&e&&t.YNc(0,x,7,1,"section",0),2&e&&t.Q6J("ngIf",a.products.length>0)},dependencies:[_.ez,_.sg,_.O5,_.H9,u.rH,h.r]})}return c})()},6286:(g,l,i)=>{i.d(l,{N:()=>t});var _=i(5619),u=i(4769),h=i(9862);let t=(()=>{class o{constructor(r){this._HttpClient=r,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new _.X(0)}addToCart(r){return this._HttpClient.post(this.baseUrl+"cart",{productId:r})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(r){return this._HttpClient.delete(this.baseUrl+`cart/${r}`,{})}updateCartCount(r,n){return this._HttpClient.put(this.baseUrl+`cart/${r}`,{count:n})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(r,n){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${r}?url=http://localhost:4200`,{shippingAddress:n})}static#t=this.\u0275fac=function(n){return new(n||o)(u.LFG(h.eN))};static#s=this.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()}}]);