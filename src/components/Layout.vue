<template>
    <v-sheet>
        <v-app-bar max-height="65px">
            <v-app-bar-nav-icon @click="onClickToChooseProject"/>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-spacer/>
        </v-app-bar>
        <slot />
    </v-sheet>
</template>

<script>
    export default {
        props: [
            'title'
        ],
        components: {
        },
        data: () => ({
            drawer: false,
            group: null,
        }),
        methods: {
            onClickToChooseProject() {
                window.console.log(this);
            }
        },
        watch: {
            group() {
                this.drawer = false;
            },
        }

    }
</script>

<style>

</style>