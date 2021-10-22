<script setup lang="ts">
import { NH1, NH2, NCode, NResult, NImage, NCard, NSpace } from 'naive-ui'
import Status from './Status.vue'

const examples = `(λu. λv. v)((λx. x x)(λx. x x))
-> λv. v

(λx. x x) ((λy. y) (λz. z))
-> λz. z

(λe. λf. e) ((λa. λb. a) x y) ((λc. λd. c) u v)
-> x

(λx. x (λy. x y y) x)(λz. λw. z)
-> λy.((λz.λw.z) y y)
-> λy.y
`
</script>

<template>
    <n-space vertical>
        <n-card title="Lamcal Information" hoverable embedded>
            <suspense>
                <Status />
            </suspense>
        </n-card>
        <n-card title="Lamcal is an online calculator for lambda calculus (λx. y).">
            <n-image
                alt="Lamcal"
                height="300"
                src="https://socialify.git.ci/StardustDL/lamcal/image?description=1&font=Bitter&forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1&theme=Light"
            ></n-image>
        </n-card>
        <n-card title="Examples">
            <n-code :code="examples"></n-code>
        </n-card>
    </n-space>
</template>

