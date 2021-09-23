[![Lamcal](https://socialify.git.ci/StardustDL/lamcal/image?description=1&font=Bitter&forks=1&issues=1&language=1&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Light)](https://github.com/StardustDL/lamcal)

![](https://github.com/StardustDL/lamcal/workflows/CI/badge.svg) ![](https://img.shields.io/github/license/StardustDL/lamcal.svg)

An online calculator for lambda calculus (λx. y).

Visit [here](http://www.stardustdl.top/lamcal/).

## Examples

```
(λu. λv. v)((λx. (x x))(λx. (x x)))
-> λv. v

(λx. (x x)) ((λy. y) (λz. z))
-> λz. z

((λe. λf. e) (((λa. λb. a) x) y)) (((λc. λd. c) u) v)
-> x

(λx. (x (λy. ((x y) y))))(λz. λw. z)
-> λw.λy.((λz.λw.z y) y)
-> λw.λy.y
```
