const constitutes = require("./constitutes");

class Sentence {
  constructor(subject, predicate) {
    if (this.constructor.name === "Sentence") {
      throw new TypeError("cannot instantiate an abstract class.");
    }
    this.subject = subject;
    this.predicate = predicate;
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
    super(new constitutes.Subject(S), new constitutes.Predicate({V}));
  }

  toString() {
    return [this.subject.toString(), this.predicate.toString()].join(" ") + ".";
  }
}

class SVOSentence extends Sentence {
  constructor(S, V, O) {
    super(new constitutes.Subject(S), new constitutes.Predicate({V}));
    if (O instanceof Array || O instanceof constitutes.Object) {
      this.object = O;
    } else {
      this.object = constitutes.Object(O);
    }
  }

  toString() {
    return (
      [
        this.subject.toString(),
        this.predicate.toString(),
        this.object.toString()
      ].join(" ") + "."
    );
  }
}

class SVPSentence extends Sentence {
  constructor(S, V, P) {
    super(new constitutes.Subject(S), new constitutes.VPPredicate({V, P}));
  }

  toString() {
    return [this.subject.toString(), this.predicate.toString()].join(" ") + ".";
  }
}

class SVIODOSentence extends SVOSentence {
  constructor(S, V, IO, DO) {
    super(new constitutes.Subject(S), new constitutes.Predicate({V}), [
      new constitutes.Object(IO),
      new constitutes.Object(DO)
    ]);
  }

  toString() {
    return (
      [this.subject.toString(), this.predicate.toString(), ...this.object].join(
        " "
      ) + "."
    );
  }
}

class SVOOCSentence extends SVOSentence {
  constructor(S, V, O, OC) {
    super(
      new constitutes.Subject(S),
      new constitutes.Predicate({V}),
      new constitutes.Object(O)
    );
    this.objectComplement = new constitutes.ObjectComplement(OC);
  }

  toString() {
    return (
      [
        this.subject.toString(),
        this.predicate.toString(),
        this.object.toString(),
        this.objectComplement.toString()
      ].join(" ") + "."
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
