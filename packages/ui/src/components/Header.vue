<script lang="ts" setup>
import { TBox, TText, TSpacer } from '@temir/core'
defineProps<{
	nickName: string,
	roomTitle: string,
	type?: string,
	subType?: string,
}>()
</script>

<template>
	<TBox :height="3" :padding-left="1" border-style="single">
		<TBox display="flex" justify-content="space-between" v-if="roomTitle">
			<TText wrap="truncate">
				<TText color="#222" dim-color>
					<TText background-color="#f8a5c2" v-if="subType">{{ ` ${subType} ` }}</TText>
					<TText background-color="#1abc9c" v-if="type">{{ ` ${type} ` }}</TText>
				</TText>
				<TText bold>{{ ` ${roomTitle} ` }}</TText>
			</TText>

			<TText wrap="truncate">{{ `(${nickName})` }}</TText>

		</TBox>
	</TBox>
</template>
