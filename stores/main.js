import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    persist: true,

    state: () => {
        return {
            hello: 'hello pinia',
        }
    },


})