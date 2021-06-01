chrome.runtime.onMessage.addListener(function (request) {
    

    let cartAvailable = false;
    while (cartAvailable == false){
        try {
        document.getElementsByClassName("src-components-___sizes-dropdown__iconArrow___2BXHg")[0].click();
        document.querySelector("#app > div > div.src-components-___container__container___Grvi1.src-components-___container__show___28O40 > div.src-components-___pdp__available___2OJ67 > div.src-components-___product__container___2Cq_M > div.src-components-___product__productInfo___aOq2I > div.src-components-___add-to-bag-form__container___VykWT > div.src-components-___sizes-dropdown__container___1xcFK > div.src-components-___sizes-dropdown__sizes___ztM1k > div > ul > li").click();
        //setTimeout( () => { document.querySelector("#app > div > div.src-components-___container__container___Grvi1.src-components-___container__show___28O40 > div.src-components-___pdp__available___2OJ67 > div.src-components-___product__container___2Cq_M > div.src-components-___product__productInfo___aOq2I > div.src-components-___add-to-bag-form__container___VykWT > button").click() }, 2000);
        document.querySelector("#app > div > div.src-components-___container__container___Grvi1.src-components-___container__show___28O40 > div.src-components-___pdp__available___2OJ67 > div.src-components-___product__container___2Cq_M > div.src-components-___product__productInfo___aOq2I > div.src-components-___add-to-bag-form__container___VykWT > button").click();
        cartAvailable = true;
        } catch (err) {
          cartAvailable = false;
          console.log("Trying to atc")
        }
    }
    console.log("added to card")

    let ppClicked = false;
    while (ppClicked == false && document.URL == "https://www.adidas.com.au/cart"){
      try {
        document.querySelector("#app > div > div:nth-child(1) > div > div > div > div.checkout_page___bUohj.fullHeader___2_gX_ > div > div > main > div.col-s-12.no-gutters.cart-page__actions___30zQO.gl-hidden-s-m.gl-vspace-bpall-medium > div:nth-child(3) > button").click()                  
        ppClicked = true;
      }
      catch (err) {
        ppClicked = false;
        console.log("Trying to click PP");
      }
    }
    console.log("PP clicked");

    let ppLogin = false;
    while (ppLogin == false && (document.URL).includes("paypal")){
      try {
        document.querySelector("#btnLogin").click();
        ppLogin = true;
      }
      catch (err) {
        ppLogin = false;
        console.log("Trying to logging to PP");
      }
    }
    console.log("logged in to PP")

    let ppContinue = false;
    while (ppContinue == false && (document.URL).includes("paypal")){
      try {
        document.querySelector("#payment-submit-btn").click();
        ppContinue = true;
      }
      catch (err) {
        ppLogin = false;
        console.log("Trying to click continue");
      }
    }

    let ReviewAndPay = false;
    while (ReviewAndPay == false && (document.URL).includes("PaymentReview")){
      try {
        document.querySelector("#app > div > div:nth-child(1) > div > div > div > div.checkout_page___bUohj > div > main > div:nth-child(7) > button > span").click();
        ReviewAndPay = true;
      }
      catch (err) {
        ReviewAndPay = false;
        console.log("Trying to click review and pay");
      }
    }
    console.log("Success");
})