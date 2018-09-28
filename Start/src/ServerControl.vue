<template>
    <div class="col-xs-12">
        <footer>
            <ul class="list-group">
                <li
                        class="list-group-item">
                    <button @click="updateServer">Update Server #</button> 
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue'

    export default {
        data: {
            status: ''
        },
        methods: {
            updateServer: function() {
                return {
                    status: 'NOT LIVE' 
                }
            }
        }
    }
</script>

