<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NIcon, NSpace, NTime, NStatistic } from 'naive-ui'
import { BrandGithub, At, License, GitCommit, Clock } from '@vicons/tabler'
import { Icon } from '@vicons/utils'

const buildStatus = await (await fetch("./build.json")).json();
</script>

<script lang="ts">
export default {
    components: {
        Icon,
        BrandGithub,
        At,
        License,
        GitCommit,
        Clock,
    }
}
</script>

<template>
    <n-space size="large">
        <n-statistic label="Author">
            <template #prefix>
                <n-icon>
                    <icon>
                        <at />
                    </icon>
                </n-icon>
            </template>
            <a
                href="https://www.stardustdl.top/"
                style="text-decoration: none; color: inherit;"
            >StardustDL</a>
        </n-statistic>
        <n-statistic label="License">
            <template #prefix>
                <n-icon>
                    <icon>
                        <license />
                    </icon>
                </n-icon>
            </template>
            <a
                href="https://github.com/StardustDL/lamcal/blob/master/LICENSE"
                style="text-decoration: none; color: inherit;"
            >MPL-2.0</a>
        </n-statistic>
        <n-statistic label="Source Code">
            <template #prefix>
                <n-icon>
                    <icon>
                        <brand-github />
                    </icon>
                </n-icon>
            </template>
            <a
                href="https://github.com/StardustDL/lamcal"
                style="text-decoration: none; color: inherit;"
            >GitHub</a>
        </n-statistic>
        <n-statistic label="Commit">
            <template #prefix>
                <n-icon>
                    <icon>
                        <git-commit />
                    </icon>
                </n-icon>
            </template>
            <a
                :href="`https://github.com/StardustDL/lamcal/commit/${buildStatus.commit}`"
                style="text-decoration: none; color: inherit;"
            >{{ buildStatus.shortCommit }}</a>
        </n-statistic>
        <n-statistic label="Build Date">
            <template #prefix>
                <n-icon>
                    <icon>
                        <clock />
                    </icon>
                </n-icon>
            </template>
            <n-time :time="new Date(buildStatus.date)" type="relative"></n-time>
        </n-statistic>
    </n-space>
</template>