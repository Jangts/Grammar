class Sentence {
  constructor(S, V) {
    if (this.constructor.name === "Sentence") {
      throw new TypeError("cannot instantiate an abstract class.");
    }
    this.subject = S;
    this.verb = V;
  }

  // 返回陈述句
  toString() {}

  // 返回一般疑问句
  toGeneralQuestion() {}

  // 返回特殊疑问句
  toWhQuestion() {}
}

class SVSentence extends Sentence {
  constructor(S, V) {
    super(S, V);
  }

  toString() {
    return [this.subject, this.verb].join(" ") + ".";
  }
}

class SVOSentence extends Sentence {
  constructor(S, V, O) {
    super(S, V);
    this.object = O;
  }

  toString() {
    return [this.subject, this.verb, this.object].join(" ") + ".";
  }
}

class SVPSentence extends Sentence {
  constructor(S, V, P) {
    super(S, V);
    this.predicative = P;
  }

  toString() {
    return [this.subject, this.verb, this.predicative].join(" ") + ".";
  }
}

class SVIODOSentence extends SVOSentence {
  constructor(S, V, IO, DO) {
    super(S, V, [IO, DO]);
  }

  toString() {
    return [this.subject, this.verb, ...this.object].join(" ") + ".";
  }
}

class SVOOCSentence extends SVOSentence {
  constructor(S, V, O, OC) {
    super(S, V, O);
    this.objectComplement = OC;
  }

  toString() {
    return (
      [this.subject, this.verb, this.object, this.objectComplement].join(" ") +
      "."
    );
  }
}

const sv = new SVSentence("The boy", "laugh");
const svo = new SVOSentence("He", "play", "the violin");
const svp = new SVPSentence("She", "be", "a doctor");
const sviodo = new SVIODOSentence("I", "give", "she", "a present");
const svooc = new SVOOCSentence("We", "call", "he", "jack");

console.log(sv.toString());
console.log(svo.toString());
console.log(svp.toString());
console.log(sviodo.toString());
console.log(svooc.toString());
