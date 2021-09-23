import { Abstraction, Application, Single, Term } from "../models/grammar"

export enum ReductType {
    NormalOrder,
    ApplicativeOrder
}

export class ReductResult {
    redex?: Term;
    result: Term;

    constructor(result: Term, redex?: Term) {
        this.result = result;
        this.redex = redex;
    }

    done(): boolean {
        return this.redex != undefined;
    }
}

export function reduct(term: Term, type: ReductType): ReductResult {
    if (term instanceof Single) {
    }
    else if (term instanceof Application) {
        if (type == ReductType.NormalOrder && isRedex(term)) {
            let func = <Abstraction>term.left;
            let subed = substitute(func.body, func.arg, term.right);
            return new ReductResult(subed, term);
        }

        let left = reduct(term.left, type);
        if (left.done()) {
            return new ReductResult(new Application(left.result, term.right), left.redex);
        }
        let right = reduct(term.right, type);
        if (right.done()) {
            return new ReductResult(new Application(term.left, right.result), right.redex);
        }

        if (type == ReductType.ApplicativeOrder && isRedex(term)) {
            let func = <Abstraction>term.left;
            let subed = substitute(func.body, func.arg, term.right);
            return new ReductResult(subed, term);
        }
    }
    else if (term instanceof Abstraction) {
        let body = reduct(term.body, type);
        if (body.done()) {
            return new ReductResult(new Abstraction(term.arg, body.result), body.redex);
        }
    }
    return new ReductResult(term);
}

export function isCanonicalForm(term: Term): boolean {
    return term instanceof Abstraction && [...freeVariables(term)].length == 0;
}

export function isNormalForm(term: Term): boolean {
    if (term instanceof Single) {
        return true;
    }
    else if (term instanceof Application) {
        if (isRedex(term)) {
            return false;
        }
        return isNormalForm(term.left) && isNormalForm(term.right);
    }
    else if (term instanceof Abstraction) {
        return isNormalForm(term.body);
    }
    return false;
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
    return term instanceof Application && term.left instanceof Abstraction;
}