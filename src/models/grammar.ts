export type Term = Single | Abstraction | Application;

export class Single {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    toText(): string {
        return this.name;
    }
};

export class Abstraction {
    arg: string;
    body: Term;

    constructor(arg: string, body: Term) {
        this.arg = arg;
        this.body = body;
    }

    toText(): string {
        return `λ${this.arg}.${this.body.toText()}`;
    }
};

export class Application {
    left: Term;
    right: Term;

    constructor(left: Term, right: Term) {
        this.left = left;
        this.right = right;
    }

    toText(): string {
        return `(${this.left.toText()} ${this.right.toText()})`;
    }
};

export function fromJson(json: { [key: string]: any }): Term {
    switch (json["type"]) {
        case "single":
            return new Single(json["name"]);
        case "abstraction":
            return new Abstraction(json["arg"], fromJson(json["body"]));
        case "application":
            return new Application(fromJson(json["left"]), fromJson(json["right"]));
    }
    throw new TypeError(`Unknown type ${json["type"]}.`);
}
