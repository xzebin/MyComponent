export default {
    data() {
        return {
            imgs: [
                require("../../assets/imgs/1.jpg"),
                require("../../assets/imgs/2.jpg"),
                require("../../assets/imgs/3.jpg"),
                require("../../assets/imgs/4.jpg"),
                require("../../assets/imgs/5.jpg"),
                require("../../assets/imgs/6.jpg"),
                require("../../assets/imgs/7.jpg"),
                require("../../assets/imgs/8.jpg"),
                require("../../assets/imgs/9.jpg"),
            ],
            checkDatas: [
                require("../../assets/imgs/1.jpg"),
                require("../../assets/imgs/2.jpg"),
                require("../../assets/imgs/3.jpg"),
                require("../../assets/imgs/4.jpg"),
                require("../../assets/imgs/5.jpg"),
                require("../../assets/imgs/6.jpg"),
                require("../../assets/imgs/7.jpg"),
                require("../../assets/imgs/8.jpg"),
                require("../../assets/imgs/9.jpg"),
            ],
            selectImgs: [],
            currentIndex: -1,
        };
    },
    methods: {
        checkTheData() {
            let length = this.checkDatas.length;
            for (let index = 0; index < length; index++) {
                const element1 = this.selectImgs[index];
                const element2 = this.checkDatas[index];
                console.log("element1", element1);
                console.log("element2", element2);
                if (element1 !== element2) {
                    return false
                }
            }
            return true
        },
    },
    mounted() {
        this.imgs.sort(() => (Math.random() > 0.5 ? -1 : 1));
        let lis = document.querySelectorAll("li");
        let rightBox = document.querySelector(".right-box");
        let prompt = document.querySelector(".prompt");
        let commit = document.querySelectorAll("button")[0];
        let reset = document.querySelectorAll("button")[1];
        lis.forEach((v, index) => {
            v.setAttribute("draggable", "true");
            v.ondragstart = (e) => {
                console.log(e.dataTransfer);
                this.currentIndex = index;
            };
        });
        rightBox.ondragenter = function () {
            prompt.innerText = "请释放你的鼠标";
        };
        rightBox.ondragleave = function () {
            prompt.innerText = "拖进来";
        };
        //阻止默认事件
        rightBox.ondragover = function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };
        rightBox.ondrop = (e) => {
            console.log("e", e);
            prompt.innerText = "放开了，结束";
            this.imgs.splice(this.currentIndex, 1);
            this.selectImgs.push(lis[this.currentIndex].childNodes[0].src);
            if (this.imgs.length === 0) {
                lis.map(v => {
                    v.removeEventListener("ondragstart", false);
                })
            }
        };
        commit.onclick = function () {
            alert("太棒了")
        };
        reset.onclick = function () {
            location.reload();
        };
    },
};