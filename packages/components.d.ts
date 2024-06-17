import JButton from './button/src/index.vue'


declare module 'vue' {
  export interface GlobalComponents {
    JButton: typeof JButton
  }
}
