// godan.js

var Godan = {
  
    conjugations : {
      "う": {
        "dictionary": "う",
        "negative": "わない",
        "polite": "います",
        "polite negative": "いません",
        "past": "った",
        "past negative": "わなかった",
        "polite past": "いました",
        "polite past negative": "いませんでした",
        "te-form": "って",
        "te-form negative": ["わなくて", "わないで"],
        "potential": "える",
        "potential negative": "えない",
        "imperative": "え",
        "imperative negative": "うな",
        "passive": "われる",
        "passive negative": "われない",
        "causative": "わせる",
        "causative negative": "わせない",
        "causative passive": "わせられる",
        "causative passive negative": "わせられない",
        "progressive": "っている",
        "progressive negative": "っていない",
        "polite progressive": "っています",
        "polite progressive negative": "っていません",
        "progressive past": "っていた",
        "progressive past negative": "っていなかった",
        "polite progressive past": "っていました",
        "polite progressive past negative": "っていませんでした",
      },

      "つ": {
        "dictionary": "つ",
        "negative": "たない",
        "polite": "ちます",
        "polite negative": "ちません",
        "past": "った",
        "past negative": "たなかった",
        "polite past": "ちました",
        "polite past negative": "ちませんでした",
        "te-form": "って",
        "te-form negative": ["たなくて", "たないで"],
        "potential": "てる",
        "potential negative": "てない",
        "passive": "たれる",
        "passive negative": "たれない",
        "causative": "たせる",
        "causative negative": "たせない",
        "causative passive": "たせられる",
        "causative passive negative": "たせられない",
        "imperative": "て",
        "imperative negative": "つな",
        "progressive": "っている",
        "progressive negative": "っていない",
        "polite progressive": "っています",
        "polite progressive negative": "っていません",
        "progressive past": "っていた",
        "progressive past negative": "っていなかった",
        "polite progressive past": "っていました",
        "polite progressive past negative": "っていませんでした",
      },

      "る": {
        "dictionary": "る",
        "negative": "らない",
        "polite": "ります",
        "polite negative": "りません",
        "past": "った",
        "past negative": "らなかった",
        "polite past": "りました",
        "polite past negative": "りませんでした",
        "te-form": "って",
        "te-form negative": ["らなくて", "らないで"],
        "potential": "れる",
        "potential negative": "れない",
        "passive": "られる",
        "passive negative": "られない",
        "causative": "らせる",
        "causative negative": "らせない",
        "causative passive": "らせられる",
        "causative passive negative": "らせられない",
        "imperative": "れ",
        "imperative negative": "るな",
        "progressive": "っている",
        "progressive negative": "っていない",
        "polite progressive": "っています",
        "polite progressive negative": "っていません",
        "progressive past": "っていた",
        "progressive past negative": "っていなかった",
        "polite progressive past": "っていました",
        "polite progressive past negative": "っていませんでした",
      },
      
  // ***********************************
  //  Section: godan verbs in bu/mu/nu
  // ***********************************

    "ぶ": {
      "dictionary": "ぶ",
      "negative": "ばない",
      "polite": "びます",
      "polite negative": "びません",
      "past": "んだ",
      "past negative": "ばなかった",
      "polite past": "びました",
      "polite past negative": "びませんでした",
      "te-form": "んで",
      "te-form negative": ["ばなくて", "ばないで"],
      "potential": "べる",
      "potential negative": "べない",
      "passive": "ばれる",
      "passive negative": "ばれない",
      "causative": "ばせる",
      "causative negative": "ばせない",
      "causative passive": "ばせられる",
      "causative passive negative": "ばせられない",
      "imperative": "べ",
      "imperative negative": "ぶな",
      "progressive": "んでいる",
      "progressive negative": "んでいない",
      "polite progressive": "んでいます",
      "polite progressive negative": "んでいません",
      "progressive past": "んでいた",
      "progressive past negative": "んでいなかった",
      "polite progressive past": "んでいました",
      "polite progressive past negative": "んでいませんでした",
    },

    "む": {
      "dictionary": "む",
      "negative": "まない",
      "polite": "みます",
      "polite negative": "みません",
      "past": "んだ",
      "past negative": "まなかった",
      "polite past": "みました",
      "polite past negative": "みませんでした",
      "te-form": "んで",
      "te-form negative": ["まなくて", "まないで"],
      "potential": "める",
      "potential negative": "めない",
      "imperative": "め",
      "imperative negative": "むな",
      "passive": "まれる",
      "passive negative": "まれない",
      "causative": "ませる",
      "causative negative": "ませない",
      "causative passive": "ませられる",
      "causative passive negative": "ませられない",
      "progressive": "んでいる",
      "progressive negative": "んでいない",
      "polite progressive": "んでいます",
      "polite progressive negative": "んでいません",
      "progressive past": "んでいた",
      "progressive past negative": "んでいなかった",
      "polite progressive past": "んでいました",
      "polite progressive past negative": "んでいませんでした",
    },

    "ぬ": {
      "dictionary": "ぬ",
      "negative": "なない",
      "polite": "にます",
      "polite negative": "にません",
      "past": "んだ",
      "past negative": "ななかった",
      "polite past": "にました",
      "polite past negative": "にませんでした",
      "te-form": "んで",
      "te-form negative": ["ななくて", "なないで"],
      "potential": "ねる",
      "potential negative": "ねない",
      "passive": "なれる",
      "passive negative": "なれない",
      "causative": "なせる",
      "causative negative": "なせない",
      "causative passive": "なせられる",
      "causative passive negative": "なせられない",
      "imperative": "ね",
      "imperative negative": "ぬな",
      "progressive": "んでいる",
      "progressive negative": "んでいない",
      "polite progressive": "んでいます",
      "polite progressive negative": "んでいません",
      "progressive past": "んでいた",
      "progressive past negative": "んでいなかった",
      "polite progressive past": "んでいました",
      "polite progressive past negative": "んでいませんでした",
    },
      
  // ***********************************
  //  Section: godan verbs in ku/gu/su
  // ***********************************
    "く": {

      "dictionary": "く",
      "negative": "かない",
      "polite": "きます",
      "polite negative": "きません",
      "past": "いた",
      "past negative": "かなかった",
      "polite past": "きました",
      "polite past negative": "きませんでした",
      "te-form": "いて",
      "te-form negative": ["かなくて", "かないで"],
      "potential": "ける",
      "potential negative": "けない",
      "passive": "かれる",
      "passive negative": "かれない",
      "causative": "かせる",
      "causative negative": "かせない",
      "causative passive": "かせられる",
      "causative passive negative": "かせられない",
      "imperative": "け",
      "imperative negative": "くな",
      "progressive": "いている",
      "progressive negative": "いていない",
      "polite progressive": "いています",
      "polite progressive negative": "いていません",
      "progressive past": "いていた",
      "progressive past negative": "いていなかった",
      "polite progressive past": "いていました",
      "polite progressive past negative": "いていませんでした",
    },
      
      
    "ぐ": {
      "dictionary": "ぐ",
      "negative": "がない",
      "polite": "ぎます",
      "polite negative": "ぎません",
      "past": "いだ",
      "past negative": "がなかった",
      "polite past": "ぎました",
      "polite past negative": "ぎませんでした",
      "te-form": "いで",
      "te-form negative": ["がなくて", "がないで"],
      "potential": "げる",
      "potential negative": "げない",
      "passive": "がれる",
      "passive negative": "がれない",
      "causative": "がせる",
      "causative negative": "がせない",
      "causative passive": "がせられる",
      "causative passive negative": "がせられない",
      "imperative": "げ",
      "imperative negative": "ぐな",
      "progressive": "いでいる",
      "progressive negative": "いでいない",
      "polite progressive": "いでいます",
      "polite progressive negative": "いでいません",
      "progressive past": "いでいた",
      "progressive past negative": "いでいなかった",
      "polite progressive past": "いでいました",
      "polite progressive past negative": "いでいませんでした",      
    },
    
    "す": {
      "dictionary": "す",
      "negative": "さない",
      "polite": "します",
      "polite negative": "しません",
      "past": "した",
      "past negative": "さなかった",
      "polite past": "しました",
      "polite past negative": "しませんでした",
      "te-form": "して",
      "te-form negative": ["さなくて", "さないで"],
      "potential": "せる",
      "potential negative": "せない",
      "passive": "される",
      "passive negative": "されない",
      "causative": "させる",
      "causative negative": "させない",
      "causative passive": "させられる",
      "causative passive negative": "させられない",
      "imperative": "せ",
      "imperative negative": "すな",
      "progressive": "している",
      "progressive negative": "していない",
      "polite progressive": "しています",
      "polite progressive negative": "していません",
      "progressive past": "していた",
      "progressive past negative": "していなかった",
      "polite progressive past": "していました",
      "polite progressive past negative": "していませんでした",
    }
  },
  
  buildConjugation: function buildConjugation(subGroup, stem, form) {
    var truncStem = stem.slice(0, -1)
    var suffix = subGroup[form]
    if (jQuery.isArray(suffix)) {
      var out = [];
      suffix.forEach(function(item){
        out.push(truncStem + item)
      });
      return out;
    }
    else {    
      return truncStem + suffix;
    }
  },
  
  conjugate: function conjugate(word) {
    if (!word.stem || word.group != "godan") {
      console.log("stem not found or wrong group, nothing to do");
      return;
    }

    // Only fill-in missing forms   
    
    var lastChar = word.stem[word.stem.length - 1];
    
    if (!Godan.conjugations.hasOwnProperty(lastChar)) {
      console.log("subgroup for " + word.stem + " not found, skipping");
      return;
    }
    
    if (!word.hasOwnProperty("conjugations")) {
      word["conjugations"] = {};
    }

    var subGroup = Godan.conjugations[lastChar];
    
    Object.keys(subGroup).forEach(function (form) {   
      if (!word.conjugations.hasOwnProperty(form)) {
        word.conjugations[form] = Godan.buildConjugation(subGroup, word.stem, form);        
      }
    }); 
  },  
}

