<template>
    <v-list-item-group>
        <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
                <v-icon v-text="i"/>
            </v-list-item-icon>
            <v-list-item-content @click="onClickItem">
                <v-list-item-title v-text="item.text"/>
            </v-list-item-content>
        </v-list-item>
    </v-list-item-group>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        computed: {
            ...mapMutations({
                setStoredItem: 'setItems'
            })
        },
        data: () => ({
            item: 1,
            items: [
                {text: 'Real-Time', desc: 'hihihihihihihihi \n hihihihi111'},
                {text: 'Audience', desc: 'hihihihihihihihi \n hihihihi222'},
                {text: 'Conversions', desc: 'hihihihihihihihi \n hihihihi33'},
            ],
        }),
        beforeMount() {
            this.$store.commit('setItems', this.items);
        },
        methods: {
            onClickItem() {
                window.console.log('onclick item', this.item);
                this.$store.commit('setItem', this.item);
            },
        },
    };
</script>
