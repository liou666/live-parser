<script lang="ts" setup>
import type { DY } from '@liou666/live-parser-core';
import { TBox, TText } from '@temir/core'
import UserName from '../UserName.vue';

const { msg } = defineProps<{ msg: DY.ChatMessage }>();
</script>

<template>
	<TBox :padding-right="1" :flex-grow="1">
		<UserName :user="msg.user"/>
		<TBox width="100%">
			<TText wrap="truncate-middle">：{{ msg.content }}</TText>
		</TBox>
	</TBox>
</template>
