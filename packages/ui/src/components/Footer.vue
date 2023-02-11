<script lang="ts" setup>
import { TBox, TText, TSpacer } from '@temir/core'
import MemberMessage from './msgcoms/MemberMessage.vue';
import dayjs from 'dayjs'
import { onMounted, ref } from 'vue';

const time = ref(+new Date())

defineProps<{
	onlineUserCount: string,
	likeTotalCount: string,
	memberMessage: any[]
}>()

const count= ref(0)

onMounted(() => {
	setInterval(() => {
		count.value++
	}, 600)
})
</script>

<template>
	<TBox text-wrap="truncate-middle" :padding-right="2" :height="3" display="flex" justify-content="space-between"
		border-style="single">

		<TBox></TBox>
<!-- 
		<TBox
			 flex-direction="column" :padding-x="1" 
				>
				<template v-for="item in memberMessage.slice(-1)" :key="item.userId">
					<MemberMessage :msg="item" />
				</template>
			</TBox> -->
		<TBox>
			<TText background-color="#2c3e50">
				{{ ` 👀 ${onlineUserCount} ` }}
			</TText>
			<TText dim-color background-color="#e74c3c">
				{{ ` 💖 ${likeTotalCount} ` }}
			</TText>
		</TBox>
	</TBox>
</template>
