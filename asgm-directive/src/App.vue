<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-mydiv:font="'cursive'">Directives Exercise</h1>
                <h1 v-mydiv:font.intervaled="'cursive'">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'mydiv': {
                bind(el, binding, vnode) {
                    if (binding.modifiers['intervaled']) {
                        setTimeout(() => {
                            let nowFont = binding.value;
                            let fontOne = 'fantasy';
                            let fontTwo = 'monospace';
                            let currentFont = binding.value;
                            setInterval(() => {
                                if ( currentFont == nowFont) {
                                    currentFont = fontOne;
                                } else if (currentFont == fontOne) {
                                    currentFont = fontTwo;
                                } else {
                                    currentFont = nowFont;
                                }
                                el.style.fontFamily = currentFont;
                            }, 1000);
                        },3000);
                        } else {
                            if (binding.arg == ['font']) {
                                el.style.fontFamily = binding.value;
                            }
                        }
                }
            }
        }
    }
</script>

<style>
</style>
