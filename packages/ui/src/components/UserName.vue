<script lang="ts" setup>
import type { DY } from '@liou666/live-parser-core';
import { TBox, TText } from '@temir/core'

const { user } = defineProps<{ user: DY.User }>()

</script>

<template>
	<TBox>
		<TText wrap="truncate-middle" dimColor v-if="+user.FollowInfo.followerCountStr>10000" background-color="#d1ccc0">{{' '+ user.nickName.replace(/\r\n/g,"")+' ' }}</TText>
		<TText wrap="truncate-middle" dimColor v-if="+user.FollowInfo.followerCountStr>6000" background-color="#d35400 ">{{' '+ user.nickName.replace(/\r\n/g,"")+' ' }}</TText>
		<TText wrap="truncate-middle" dimColor v-else-if="+user.FollowInfo.followerCountStr>3000" background-color="#34495e">{{' '+ user.nickName.replace(/\r\n/g,"")+' ' }}</TText>
		<TText wrap="truncate-middle" dimColor v-else-if="+user.FollowInfo.followerCountStr>1000" background-color="red">{{' '+ user.nickName.replace(/\r\n/g,"")+' '  }}</TText>
		<TText wrap="truncate-middle" dimColor v-else-if="+user.FollowInfo.followerCountStr>500" background-color="magenta">{{ ' '+ user.nickName.replace(/\r\n/g,"")+' ' }}</TText>
		<TText wrap="truncate-middle" dimColor v-else-if="+user.FollowInfo.followerCountStr>200" background-color="blue">{{ ' '+ user.nickName.replace(/\r\n/g,"")+' ' }}</TText>
		<TText wrap="truncate-middle" dimColor v-else background-color="#8e44ad">{{' '+ user.nickName.replace(/\r\n/g,"")+' '  }}</TText>
	</TBox>
</template>
