<script lang="ts" setup>
import type { DY } from '@liou666/live-parser-core';
import { TBox, TText } from '@temir/core'
import UserName from '../UserName.vue';

const {msg}= defineProps<{msg:DY.LikeMessage}>()

</script>

<template>
	<TBox :flex-grow="1">
		<UserName :user="msg.user"/>
		<TBox text-wrap="truncate" >
			<TText wrap="truncate">：点赞了{{ msg.count.low }}次</TText>
		</TBox>
	</TBox>
</template>
