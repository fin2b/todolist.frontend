<template>
    <v-container>
        {{ storedItem }}
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters({
                storedItem: 'getItem'
            })
        },
        methods: {},
        date: () => ({

        })
    }
</script>
