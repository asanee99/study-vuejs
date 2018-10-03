import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
    bind(el, binding, vnode) {
      //el.style.backgroundColor = 'green'; 
      //pass directive to el

      // el.style.backgroundColor = binding.value;
      //revice value from el

      /* if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }*/
      //revice argrument from el

      var delay = 0;
      if (binding.modifiers['delayed']) {
          delay = 3000;
      }
        if (binding.modifiers['blink']) {
            let mainColor = binding.value;
            let secondColor = 'blue';
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                if (binding.arg == 'background') {
                  el.style.backgroundColor = currentColor;
                } else {
                  el.style.color = currentColor;
                }
              }, 1000);
            }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === 'background') {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
