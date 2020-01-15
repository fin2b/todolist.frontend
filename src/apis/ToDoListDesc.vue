<template>
    <v-container>
        {{ desc }}
    </v-container>
</template>

<script>
    export default {
        props: [
            'desc'
        ],
        date: () => ({

        })
    }
</script>