<template>
    <v-list-item-group>
        <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
                <v-icon v-text="i"/>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="item.text"/>
            </v-list-item-content>
        </v-list-item>
    </v-list-item-group>
</template>

<script>
    export default {
        data: () => ({
            item: 1,
            items: [
                {text: 'Real-Time', icon: 'mdi-clock', desc: 'hihihihihihihihi \n hihihihi111'},
                {text: 'Audience', icon: 'mdi-account', desc: 'hihihihihihihihi \n hihihihi222'},
                {text: 'Conversions', icon: 'mdi-flag', desc: 'hihihihihihihihi \n hihihihi33'},
            ]
        }),
        methods: {}
    }
</script>