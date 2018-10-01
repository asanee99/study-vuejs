<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" 
                @click="selectedBox = 'appBlue',
                boxName = 'Blue Box'
                ">Load Blue Template</button>

                <button class="btn btn-success" 
                @click="selectedBox = 'appGreen',
                boxName = 'Green Box'
                ">Load Green Template</button>

                <button class="btn btn-danger" 
                @click="selectedBox = 'appRed',
                boxName = 'Red Box'
                ">Load Red Template</button>

                <hr>
                {{ selectedBox }}
                {{ boxName }}

                <component :is="selectedBox">
                    <h1 slot="bName">{{ boxName }}</h1>
                </component>
                <!-- <app-blue>
                    <h1>Blue Box</h1>
                </app-blue>
                <app-green>
                    <h1>Green Box</h1>
                </app-green>
                <app-red>
                    <h1>Red Box</h1>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedBox: 'appBlue',
                boxName: 'Blue Box'    
            };
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
