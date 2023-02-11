<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
defineProps<{
	nickName: string,
	roomTitle: string,
	type?: string,
	subType?: string,
}>()
</script>

<template>
	<TBox :height="3" :padding-left="1" border-style="single">
		<TBox v-if="roomTitle">
			<TText>
				<TText dim-color >
					<TText color="#222" background-color="#f8a5c2" v-if="subType">{{ ` ${subType} ` }}</TText>
					<TText color="#222" background-color="#1abc9c" v-if="type">{{ ` ${type} ` }}</TText>
				</TText>
				<TText bold>{{ ` ${roomTitle} ` }}</TText>
				<TText >{{ `(${nickName}) ` }}</TText>
			</TText>
		</TBox>
	</TBox>
</template>
