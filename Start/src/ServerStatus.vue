<template>
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li
                        class="list-group-item"
                        v-for="index in 5">
                    Server # {{ index }}{{ status }}
                </li>
            </ul>
        </div>
</template>

<script>
    export default {
        data: function() {
            return {
                status: 'LIVE'
            }
        }        
    }
</script>

