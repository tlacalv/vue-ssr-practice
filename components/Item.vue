<template>
    <div v-if="item">{{ item.title }}</div>
    <div v-else>...</div>
</template>
<script>
export default {
    computed: {
        //display the item from store state.
        item() {
            return this.$store.state.items[this.$route.params.id]
        }
    },

    //server-side only
    //this will be called by the server renderer automatically
    serverPrefetch() {
        //return the Promise from the action
        //so that the component waits before rendering
        return this.fetchItem()
    },
    //client-side only
    mounted () {
        //if we didn't already do it on the server
        //we fetch the item (will first show the loading text)
        if(!this.item) {
            this.fetchItem()
        }
    },
    methods: {
        fetchItem () {
            //return the Promise form the action
            return this.$store.dispatch('fetchItem', this.$route.params.id)
        }
    }
}
</script>