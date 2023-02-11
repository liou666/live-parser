<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import run, { parseLiveUrl } from '@liou666/live-parser-core'
import type { Handles, DY } from '@liou666/live-parser-core'
import { TBox } from '@temir/core'

import { formatNumber } from './src/utils'

import Tab from './src/components/Tab.vue'
import Header from './src/components/Header.vue'
import MsgType from './src/components/MsgType.vue'
import Timer from './src/components/Timer.vue'
import Footer from './src/components/Footer.vue'
import ChatMessage from './src/components/msgcoms/ChatMessage.vue'
import FollowMessage from './src/components/msgcoms/FollowMessage.vue'
import GiftMessage from './src/components/msgcoms/GiftMessage.vue'
import LikeMessage from './src/components/msgcoms/LikeMessage.vue'
import MemberMessage from './src/components/msgcoms/MemberMessage.vue'

const { roomId } = defineProps<{ roomId: string }>()

const tabs = ['全部', '进房', '礼物', '弹幕', '点赞', '关注']
const contentHeight = 11

const activeIndex = ref(0)
const roomTitle = ref('')
const userId = ref('0')
const onlineUserCount = ref('0')
const nickName = ref<string>('')
const likeTotalCount = ref('0')
const type = ref('')
const subType = ref('')
const ranksList = ref<any[]>([])

const allMessage = ref<any[]>([])
const chatMessage = ref<DY.ChatMessage[]>([])
const giftMessage = ref<DY.GiftMessage[]>([])
const roomUserSeqMessage = ref<DY.RoomUserSeqMessage[]>([])
const socialMessage = ref<DY.SocialMessage[]>([])
const memberMessage = ref<DY.MemberMessage[]>([])
const likeMessage = ref<DY.LikeMessage[]>([])

const handles: Handles = {
	//弹幕
	handleChatMessage(data) {
		allMessage.value.push(data)
		chatMessage.value.push(data)
	},
	//直播间基本信息
	handleRoomUserSeqMessage(data) {
		ranksList.value = data.ranksList.map((x) => ({ nickName: x.user.nickName, rank: x.rank?.low }))
		onlineUserCount.value = data.onlineUserForAnchor
		roomUserSeqMessage.value.push(data)
	},
	//礼物
	handleGiftMessage(data) {
		allMessage.value.push(data)
		giftMessage.value.push(data)
	},
	//关注
	handleSocialMessage(data) {
		allMessage.value.push(data)
		socialMessage.value.push(data)
	},
	//点赞
	handleLikeMessage(data) {
		likeTotalCount.value = formatNumber(+data.total?.low)
		allMessage.value.push(data)
		likeMessage.value.push(data)
	},
	//进入直播间
	handleMemberMessage(data) {
		allMessage.value.push(data)
		memberMessage.value.push(data)
	},
}

onMounted(async () => {
	try {
		const { liveRoomTitle, userId: userid, nickName: nickname, onlineUserCount: onlineusercount, type: typeX, subType: subX } = await parseLiveUrl(roomId)
		userId.value = userid
		nickName.value = nickname
		roomTitle.value = liveRoomTitle
		onlineUserCount.value = formatNumber(+onlineusercount)
		type.value = typeX || ''
		subType.value = subX || ''
	} catch (error) {
		console.error('[ERROR] 直播间ID错误或者直播已结束'.red)
		process.exit(1)
	}
	run(roomId, handles)

})
</script>

<template>
	<TBox height="100%" flex-direction="column">
		<!-- header -->
		<Header :type="type" :subType="subType" :nickName="nickName" :roomTitle="roomTitle" />

		<TBox display="flex">
			<!-- tab -->
			<TBox :margin="0" :width="10" :height="13" border-style="single" justify-content="center"
				align-items="flex-start">
				<Tab :tabs="tabs" @change="(i) => (activeIndex = +i)" />
			</TBox>
			<!-- main -->
			<TBox v-if="activeIndex === 1" flex-direction="column" :padding-x="1" width="100%" :height="contentHeight + 2"
				:flex-grow="1" border-style="single">
				<TBox v-for="item in memberMessage.slice(-contentHeight)" :key="item.userId">
					<Timer :timestamp="+new Date()" />
					<MemberMessage :msg="item" />
				</TBox>
			</TBox>

			<TBox v-else-if="activeIndex === 2" flex-direction="column" :padding-x="1" width="100%"
				:height="contentHeight + 2" :flex-grow="1" border-style="single">
				<TBox v-for="item in giftMessage.slice(-contentHeight)" :key="item.giftId">
					<Timer :timestamp="+new Date()" />
					<GiftMessage :msg="item" />
				</TBox>
			</TBox>

			<TBox v-else-if="activeIndex === 3" flex-direction="column" :padding-x="1" width="100%"
				:height="contentHeight + 2" :flex-grow="1" border-style="single">
				<TBox v-for="item in chatMessage.slice(-contentHeight)" :key="item.agreeMsgId">
					<Timer :timestamp="+new Date()" />
					<ChatMessage :msg="item" />
				</TBox>
			</TBox>

			<TBox v-else-if="activeIndex === 4" flex-direction="column" :padding-x="1" width="100%"
				:height="contentHeight + 2" :flex-grow="1" border-style="single">
				<TBox v-for="(item, i) in likeMessage.slice(-contentHeight)" :key="i">
					<Timer :timestamp="+new Date()" />
					<LikeMessage :msg="item" />
				</TBox>
			</TBox>

			<TBox v-else-if="activeIndex === 5" flex-direction="column" :padding-x="1" width="100%"
				:height="contentHeight + 2" :flex-grow="1" border-style="single">
				<TBox v-for="(item, i) in socialMessage.slice(-contentHeight)" :key="i">
					<Timer :timestamp="+new Date()" />
					<FollowMessage :msg="item" />
				</TBox>
			</TBox>

			<TBox v-else flex-direction="column" :padding-x="1" width="100%" :height="contentHeight + 2" :flex-grow="1"
				border-style="single">
				<TBox v-for="(item, i) in allMessage.slice(-contentHeight)" :key="i">
					<Timer :timestamp="+new Date()" />
					<MsgType :type="item.common.method" />
					<TBox :flex-grow="1">
						<MemberMessage v-if="item.common.method === 'WebcastMemberMessage'" :msg="item" />
						<GiftMessage v-else-if="item.common.method === 'WebcastGiftMessage'" :msg="item" />
						<ChatMessage v-else-if="item.common.method === 'WebcastChatMessage'" :msg="item" />
						<LikeMessage v-else-if="item.common.method === 'WebcastLikeMessage'" :msg="item" />
						<FollowMessage v-else-if="item.common.method === 'WebcastSocialMessage'" :msg="item" />
					</TBox>
				</TBox>
			</TBox>
		</TBox>

		<!-- footer -->
		<Footer :memberMessage="memberMessage" :likeTotalCount="likeTotalCount" :nickName="nickName"
			:onlineUserCount="onlineUserCount" />
	</TBox>
</template>
