<script setup lang="ts">
import { TBox, TText } from '@temir/core'

const { type } = defineProps<{
  type: string
}>()

const typeDict: Record<string, string> = {
  WebcastChatMessage: '弹幕',
  WebcastMemberMessage: '进房',
  WebcastGiftMessage: '礼物',
  WebcastLikeMessage: '点赞',
  WebcastSocialMessage: '关注',
}
</script>

<template>
  <TBox :width="6" :margin-right="1">
    <TText color="yellow">[{{ typeDict[type] }}]</TText>
  </TBox>
</template>
