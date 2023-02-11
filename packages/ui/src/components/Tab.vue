<script lang="ts" setup>
import { ref } from 'vue'
import { TTab, TTabs } from '@temir/tab'
const activeIndex = ref(0)

const emit = defineEmits<(e: 'change', value: number) => void>()

const handleTabChange = (index: string) => {
  activeIndex.value = +index
  emit('change', parseInt(index))
}
const {tabs} = defineProps<{tabs:any[]}>()
</script>

<template>
		<TTabs flex-direction="column" :on-change="handleTabChange">
			<TTab v-for="item in tabs" :key="item">
				{{ item }}
			</TTab>
		</TTabs>
</template>
