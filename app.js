Vue.createApp({
    data() {
        return {
            userInputText: '',
            isHidden: false,
            isVisible: true,
            backgroundColor: 'green'
        }
    },
    methods: {
        toggleParagraph() {
            this.isHidden = !this.isHidden;
            this.isVisible = !this.isVisible;
        }
    }
}).mount('#assignment');
