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

  conjugate: function conjugate(word, wordInfo) {
    if (!word.endsWith("する")) {
      console.log("expected verb ending する: " + word);
      return;
    }

    if (!wordInfo.hasOwnProperty("conjugations")) {
      wordInfo["conjugations"] = {};
    }

    var stem = word.slice(0, -2)

    // Only fill-in missing forms
    Object.keys(Suru.conjugations).forEach(function (form) {
      if (!wordInfo.conjugations.hasOwnProperty(form)) {
        wordInfo.conjugations[form] = Suru.buildConjugation(stem, form);
      }
    });
  },
}

