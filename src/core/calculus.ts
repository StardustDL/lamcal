import { Abstraction, Application, Single, Term } from "../models/grammar"

export class ReductResult {
    subject?: Term;
    result: Term;

    constructor(result: Term, subject?: Term) {
        this.result = result;
        this.subject = subject;
    }
}

export function reduct(term: Term): ReductResult {

    

    return new ReductResult(term, term);
}

export function variables(term: Term): Set<string> {
    if (term instanceof Single) {
        return new Set([term.name]);
    }
    else if (term instanceof Application) {
        return new Set([...variables(term.left), ...variables(term.right)]);
    }
    else if (term instanceof Abstraction) {
        return new Set([...variables(term.body), term.arg]);
    }
    else {
        throw new TypeError(`Unknown term type.`);
    }
}

export function freeVariables(term: Term): Set<string> {
    if (term instanceof Single) {
        return new Set([term.name]);
    }
    else if (term instanceof Application) {
        return new Set([...freeVariables(term.left), ...freeVariables(term.right)]);
    }
    else if (term instanceof Abstraction) {
        let sub = freeVariables(term.body);
        sub.delete(term.arg);
        return sub;
    }
    else {
        throw new TypeError(`Unknown term type.`);
    }
}

export function generateFreshVariable(term: Term): string {
    let vars = variables(term);
    let index = 0;
    while (true) {
        let name = `v${index}`;
        if (!vars.has(name)) {
            return name;
        }
        index++;
    }
}

export function substitute(term: Term, variable: string, target: Term): Term {
    if (term instanceof Single) {
        if (term.name == variable) {
            return target;
        }
        else {
            return term;
        }
    }
    else if (term instanceof Application) {
        return new Application(substitute(term.left, variable, target), substitute(term.right, variable, target))
    }
    else if (term instanceof Abstraction) {
        if (term.arg == variable) {
            return term;
        }
        else {
            if (freeVariables(target).has(term.arg)) {
                let freshVar = generateFreshVariable(new Application(term, target))
                return new Abstraction(freshVar,
                    substitute(
                        substitute(term.body, term.arg, new Single(freshVar)),
                        variable, target))
            }
            else {
                return new Abstraction(term.arg, substitute(term.body, variable, target));
            }
        }
    }
    else {
        throw new TypeError(`Unknown term type.`);
    }
}

export function isRedex(term: Term): boolean {
    if (term instanceof Application) {
        if (term.left instanceof Abstraction) {
            return true;
        }
    }
    return false;
}