<script lang="ts" setup>
import type { DY } from '@liou666/live-parser-core';
import { TBox, TText } from '@temir/core'
import UserName from '../UserName.vue';

const {msg}= defineProps<{msg:DY.MemberMessage}>()

</script>

<template>
	<TBox :flex-grow="1">
		<UserName :user="msg.user"/>
		<TBox text-wrap="truncate-middle" >
			<TText wrap="truncate-middle">：进入了直播间</TText>
		</TBox>
	</TBox>
</template>
