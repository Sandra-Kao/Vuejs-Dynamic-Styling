Vue.createApp({
    data() {
        return {
            userInputText: '',
            isHidden: false,
            isVisible: true,
            backgroundColor: 'green'
        }
    },
    computed: {
        classNameUser1() {
            if (this.userInputText === 'user1') {
                return true;
            }
            return false;
        },
        classNameUser2() {
            if (this.userInputText === 'user2') {
                return true;
            }
            return false;
        }
    },
    methods: {
        toggleParagraph() {
            this.isHidden = !this.isHidden;
            this.isVisible = !this.isVisible;
        }
    }
}).mount('#assignment');