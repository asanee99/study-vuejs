<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server-list
                v-for="server in servers"
                :server="server"></app-server-list>
        </ul>
    </div>
</template>

<script>
    import ServerList from './ServerList.vue';

    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Unknown'},
                    { id: 4, status: 'Normal'}
                ]
            };
        },
        components: {
            'app-server-list': ServerList
        }
    }
</script>

<style>

</style>
