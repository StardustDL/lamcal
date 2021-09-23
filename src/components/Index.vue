<script setup lang="ts">
import { ref } from 'vue'
import peggy from 'peggy'
import { useMessage, NLayout, NLayoutContent, NLayoutHeader, NLayoutFooter, NGrid, NGi, NPageHeader, NButton, NIcon, NSpace, NInput, NInputGroup, NTimeline, NTimelineItem, NButtonGroup, NStatistic } from 'naive-ui'
import { MathFunction, ChevronRight, Check } from '@vicons/tabler'
import { Icon } from '@vicons/utils'

import { Single, Abstraction, Application, Term, fromJson } from "../models/grammar"
import { reduct, freeVariables } from "../core/calculus"

class Step {
  value: Term;
  text: string;
  subject: string;
  constructor(value: Term, subject?: Term) {
    this.value = value;
    this.text = this.value.toText();
    this.subject = subject?.toText() ?? "";
  }
}

const message = useMessage();

const userInput = ref("λx. y");
const steps = ref<Step[]>([]);
const current = ref<Term | null>(null);
const currentFV = ref<string>("");


const grammar = await (await fetch("grammar.peggy")).text();
const parser = peggy.generate(grammar);

function setCurrent(term: Term) {
  current.value = term;
  currentFV.value = [...freeVariables(current.value)].toString();
}

function parse(text: string): Term {
  const result = parser.parse(text);
  return fromJson(result);
}

function onUserSubmit() {
  try {
    const result = parse(userInput.value);
    steps.value.length = 0;
    steps.value.push(new Step(result));
    setCurrent(result);
  }
  catch (error: any) {
    message.error(error.toString());
    return;
  }
}

function onReduct() {
  const result = reduct(current.value!);
  if (result.subject) {
    steps.value.push(new Step(result.result, result.subject));
    setCurrent(result.result);
  }
  else {
    message.info("Reduced to the final.");
  }
}

</script>

<script lang="ts">
export default {
  components: {
    Icon,
    MathFunction,
    ChevronRight,
    Check
  }
}
</script>

<template>
  <n-layout>
    <n-layout-header></n-layout-header>
    <n-layout-content content-style="padding: 24px">
      <n-grid :cols="24">
        <n-gi :offset="3" :span="18">
          <n-space vertical size="large">
            <n-page-header subtitle="λ 演算">
              <template #avatar>
                <n-icon>
                  <icon size="16">
                    <math-function />
                  </icon>
                </n-icon>
              </template>
              <template #title>
                <a href="#" style="text-decoration: none; color: inherit;">Lambda Calculus</a>
              </template>
            </n-page-header>
            <n-input-group size="large">
              <n-input placeholder="λ term" v-model:value="userInput">
                <template #prefix>
                  <n-icon>
                    <icon size="16">
                      <chevron-right />
                    </icon>
                  </n-icon>
                </template>
              </n-input>
              <n-button @click="onUserSubmit">
                <n-icon>
                  <icon size="16">
                    <check />
                  </icon>
                </n-icon>
              </n-button>
            </n-input-group>
            <n-space size="large">
              <n-space size="large" vertical v-if="current">
                <n-statistic label="Current" :value="current.toText()"></n-statistic>
                <n-statistic label="Free Variables" :value="currentFV"></n-statistic>
                <n-button-group vertical style="width: 100%">
                  <n-button @click="onReduct">Reduct</n-button>
                </n-button-group>
              </n-space>
              <n-timeline v-if="steps.length > 0">
                <n-timeline-item
                  v-for="item in steps"
                  :key="item.text"
                  :title="item.text"
                  :time="item.subject"
                ></n-timeline-item>
              </n-timeline>
            </n-space>
          </n-space>
        </n-gi>
      </n-grid>
    </n-layout-content>
  </n-layout>
</template>

