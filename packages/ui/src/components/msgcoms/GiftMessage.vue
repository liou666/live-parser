<script lang="ts" setup>
import type { DY } from '@liou666/live-parser-core';
import { TBox, TText } from '@temir/core'
import UserName from '../UserName.vue';

const {msg}= defineProps<{msg:DY.GiftMessage}>()
</script>

<template>
	<TBox :flex-grow="1">
		<UserName :user="msg.user"/>
		<TBox text-wrap="truncate">
			<TText wrap="truncate">：{{ `送给主播 ${msg.gift.diamondCount}个${msg.gift.name}`}}</TText>
		</TBox>
	</TBox>
</template>
