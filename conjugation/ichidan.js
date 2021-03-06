// ichidan.js

var Ichidan = {

  conjugations : {
    "dictionary": "る",
    "negative": "ない",
    "polite": "ます",
    "polite negative": "ません",
    "past": "た",
    "past negative": "なかった",
    "polite past": "ました",
    "polite past negative": "ませんでした",
    "te-form": "て",
    "te-form negative": ["なくて", "ないで"],
    "potential": "られる",
    "potential negative": "られない",
    "passive": "られる",
    "passive negative": "られない",
    "causative": "させる",
    "causative negative": "させない",
    "causative passive": "させられる",
    "causative passive negative": "させられない",
    "imperative": "ろ",
    "imperative negative": "るな",
    "progressive": "ている",
    "progressive negative": "ていない",
    "polite progressive": "ています",
    "polite progressive negative": "ていません",
    "progressive past": "ていた",
    "progressive past negative": "ていなかった",
    "polite progressive past": "ていました",
    "polite progressive past negative": "ていませんでした"
  },

  buildConjugation: function buildConjugation(stem, form) {
    var suffix = Ichidan.conjugations[form];
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
    if (word[word.length - 1] != 'る') {
      console.log("expected verb ending る: " + word);
      return;
    }

    if (!wordInfo.hasOwnProperty("conjugations")) {
      wordInfo["conjugations"] = {};
    }

    var stem = word.slice(0, -1)

    // Only fill-in missing forms
    Object.keys(Ichidan.conjugations).forEach(function (form) {
      if (!wordInfo.conjugations.hasOwnProperty(form)) {
        wordInfo.conjugations[form] = Ichidan.buildConjugation(stem, form);
      }
    });
  },
}

