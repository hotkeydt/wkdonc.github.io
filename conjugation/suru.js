// suru.js

var Suru = {

  conjugations : {
    "dictionary": "する",
    "negative": "しない",
    "polite": "します",
    "polite negative": "しません",
    "past": "した",
    "past negative": "しなかった",
    "polite past": "しました",
    "polite past negative": "しませんでした",
    "te-form": "して",
    "te-form negative": ["しなくて", "しないで"],
    "imperative": "しろ",
    "imperative negative": "さるな",
    "progressive": "している",
    "progressive negative": "していない",
    "polite progressive": "しています",
    "polite progressive negative": "していません",
    "progressive past": "していた",
    "progressive past negative": "していなかった",
    "polite progressive past": "していました",
    "polite progressive past negative": "していませんでした",
  },
  
  buildConjugation: function buildConjugation(stem, form) {
    var suffix = Suru.conjugations[form];
    if (jQuery.isArray(suffix)) {
      var out = [];
      suffix.forEach(function(item){
        out.push(stem + item)
      });
      return out;
    }
    else {    
      return stem + suffix;
    }
  },
  
  conjugate: function conjugate(word) {
    if (!word.hasOwnProperty("stem") || word.group != "suru") {
      console.log("stem not found or wrong group, nothing to do");
      return;
    }

    if (!word.hasOwnProperty("conjugations")) {
      word["conjugations"] = {};
    }

    // Only fill-in missing forms   
    Object.keys(Suru.conjugations).forEach(function (form) {   
      if (!word.conjugations.hasOwnProperty(form)) {
        word.conjugations[form] = Suru.buildConjugation(word.stem, form);        
      }
    }); 
  },  
}

