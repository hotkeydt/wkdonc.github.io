// adjectives .js

var Adjectives = {

    conjugations : {
    "i": {
      "dictionary": "い",
      "negative": "くない",
      "polite": "いです",
      "polite negative": "くないです",
      "past": "かった",
      "past negative": "くなかった",
      "polite past": "かったです",
      "polite past negative": "くなかったです",
    },

    "na": {
      "dictionary": "だ",
      "negative": ["ではない","じゃない"],
      "polite": "です",
      "polite negative": ["ではありません", "じゃありません"],
      "past": "だった",
      "past negative": ["ではなかった", "じゃなかった"],
      "polite past": "でした",
      "polite past negative": ["ではありませんでした", "じゃありませんでした"],
    }
  },

  buildConjugation: function buildConjugation(subGroup, stem, form) {
    var suffix = subGroup[form]
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

    if (!wordInfo.hasOwnProperty("conjugations")) {
      wordInfo["conjugations"] = {};
    }

    var isIAdjective = wordInfo.group.startsWith("i");

    var subGroup = Adjectives.conjugations[isIAdjective ? "i" : "na"];

    var stem = word;
    if (isIAdjective) {
      stem = word.slice(0, -1)
    }

    // Only fill-in missing forms
    Object.keys(subGroup).forEach(function (form) {
      if (!wordInfo.conjugations.hasOwnProperty(form)) {
        wordInfo.conjugations[form] = Adjectives.buildConjugation(subGroup, stem, form);
      }
    });
  },
}

