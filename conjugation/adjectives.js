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

  conjugate: function conjugate(word) {
    if (!word.hasOwnProperty("stem") /*|| !word.group.endsWith("adjective")*/) {
      console.log("stem not found or wrong group, nothing to do");
      return;
    }

    if (!word.hasOwnProperty("conjugations")) {
      word["conjugations"] = {};
    }

    var subGroup = Adjectives.conjugations[word.group.startsWith("i") ? "i" : "na"];

    // Only fill-in missing forms
    Object.keys(subGroup).forEach(function (form) {
      if (!word.conjugations.hasOwnProperty(form)) {
        word.conjugations[form] = Adjectives.buildConjugation(subGroup, word.stem, form);
      }
    });
  },
}

