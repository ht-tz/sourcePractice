/*
 * @Author: htz
 * @Date: 2024-05-30 22:41:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-05-30 22:41:46
 * @Description: 请填写简介
 */
import { defineStore } from 'pinia'
import type { eventWithTime } from '@rrweb/types'

interface EventState {
    events: eventWithTime[]
}
export const useEventStore = defineStore('eventStore', {
    state: (): EventState => ({
        events: []
    }),
    getters: {},
    actions: {
        setEvents(events: eventWithTime[]) {
            this.events = events
        },
        getEvents() {
            return this.events
        }
    }
}) as any