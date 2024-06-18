<!--
 * @Author: htz
 * @Date: 2024-05-30 22:39:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-05-30 23:24:18
 * @Description: 回放
-->
<template>
  <div class="play">
    <el-button type="primary" @click="onPlay">回放</el-button>
    <hr />
    <div id="doPlay"></div>
  </div>
</template>
<script setup lang="ts">
import * as rrweb from 'rrweb'

import rrwebPlayer from 'rrweb-player'
import 'rrweb-player/dist/style.css'
import { useEventStore } from '@/stores/eventStore'
const eventStore = useEventStore()
let events = eventStore.getEvents()
const onPlay = () => {
  if (events.length === 0) return
  new rrwebPlayer({
    target: document.querySelector('#doPlay')!,
    props: {
      events,
      unpackFn: rrweb.unpack
    }
  })
}
</script>



