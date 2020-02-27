class SentenceConstituent {
  constructor(options) {
    if (this.constructor.name === "SentenceConstituent") {
      throw new TypeError("cannot instantiate an abstract class.");
    }
    this.options = options;
  }

  // 返回句子片段
  toString() {}
}

class Subject extends SentenceConstituent {
  constructor(options) {
    super(options);
    if (typeof options === "string") {
      this.main = options;
    } else {
      this.main = options.main;
    }
  }
}

class Predicate extends SentenceConstituent {
  constructor(options) {
    super(options);
    this.verb = options.V;
    this.tense = options.T;
    this.voice = options.isP ? "passive" : "active";
    this.isSigularTrio = options.isS;
  }
}

class VPPredicate extends Predicate {
  constructor(options) {
    super(options);
    this.predicative = options.P;
    this.person = options.N;
  }
}

class ObjectConstituent extends SentenceConstituent {
  constructor(options) {
    super(options);
    if (typeof options === "string") {
      this.main = options;
    } else {
      this.main = options.main;
    }
  }
}

class ObjectComplement extends SentenceConstituent {
  constructor(options) {
    super(options);
    if (typeof options === "string") {
      this.main = options;
    } else {
      this.main = options.main;
    }
  }
}

module.exports = {
  Subject,
  Predicate,
  VPPredicate,
  Object: ObjectConstituent,
  ObjectComplement
};
