<template>
    <div class="center">
        <div class="section">
            <img src="/images/logo.svg" class="top-logo">
            <h1># <span class="green">Welcome</span> <span class="white">to</span> <span class="red">Lighter</span></h1>
            <div class="message" v-html="message"> </div>
            <img :style="{marginTop: arrowMarginTop + 'px'}" class="arrow-down" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4xNzEgNTEyLjE3MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjE3MSA1MTIuMTcxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDc5LjA0NiwyODMuOTI1Yy0xLjY2NC0zLjk4OS01LjU0Ny02LjU5Mi05Ljg1Ni02LjU5MkgzNTIuMzA1VjEwLjY2N0MzNTIuMzA1LDQuNzc5LDM0Ny41MjYsMCwzNDEuNjM4LDBIMTcwLjk3MSAgICBjLTUuODg4LDAtMTAuNjY3LDQuNzc5LTEwLjY2NywxMC42Njd2MjY2LjY2N0g0Mi45NzFjLTQuMzA5LDAtOC4xOTIsMi42MDMtOS44NTYsNi41NzFjLTEuNjQzLDMuOTg5LTAuNzQ3LDguNTc2LDIuMzA0LDExLjYyNyAgICBsMjEyLjgsMjEzLjUwNGMyLjAwNSwyLjAwNSw0LjcxNSwzLjEzNiw3LjU1MiwzLjEzNnM1LjU0Ny0xLjEzMSw3LjU1Mi0zLjExNWwyMTMuNDE5LTIxMy41MDQgICAgQzQ3OS43OTMsMjkyLjUwMSw0ODAuNzEsMjg3LjkxNSw0NzkuMDQ2LDI4My45MjV6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>
        <div class="section">
            <h1># Set up</h1>
            <div class="card">
                <div class="card-title">Command</div>
                <div class="card-text">
                    yarn<br>
                    yarn run lighter:setup<br>
                    <span style="color: #9e9e9e;"># or</span><br>
                    npm install<br>
                    npm run lighter:setup<br>
                    <br>
                    # Enjoy the coding!<br>
                </div>
            </div>
            <div class="links">
                <h2># Links</h2>
                <p class="white">These links open new tab.</p>
                <a href="" target="_blank">Documents</a>
                <a href="" target="_blank"></a>
                <a href="" target="_blank">Github</a>
                <a href="https://discord.gg/F7wnfsJ" target="_blank">Discord</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "example",
        data () {
            return {
                message: '',
                messageCount: 0,
                fullMessage: 'The Laravel and Vue.js based SPA framework.',
                arrowMarginTop: 32,
                counter: 0,
            }
        },
        mounted () {
            var vm = this
            const interval = setInterval(() => {
                let char = vm.fullMessage[vm.messageCount]
                if(vm.messageCount >= 4 && vm.messageCount <= 10) char = `<span style="color: #f44336;">${char}</span>`
                if(vm.messageCount >= 16 && vm.messageCount <= 21) char = `<span style="color: #66B26B;">${char}</span>`
                if(vm.messageCount >= 29 && vm.messageCount <= 31) char = `<span style="color: #2196F3;">${char}</span>`
                vm.message += char
                console.log(char)
                vm.messageCount++
                if(vm.messageCount >= vm.fullMessage.length) clearInterval(interval)
            }, 50)

            setInterval(() => {
                vm.arrowMarginTop = 48 + Math.cos(vm.counter / 25) * 10
                vm.counter++
            }, 10)
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Inconsolata');

    h1 {
        margin: 12px 0 32px 0;
        font-family: 'Inconsolata', monospace;
        font-size: 6em;
        color: white;
    }

    h2 {
        margin: 12px 0 32px 0;
        font-family: 'Inconsolata', monospace;
        font-size: 3em;
        color: white;
    }

    a {
        color: #2196F3;
    }

    .links {
        margin-top: 450px;
    }

    .card {
        box-shadow: 0 5px 10px rgba(0,0,0,0.26);
        text-align: left;
        color: white;
        border-radius: 4px;
        background-color: #101010;
        width: 300px;
        height: 200px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        margin: auto;
    }

    .card-title {
        border-top-left-radius: 4px;
        padding-left: 6px;
        padding-right: 6px;
        background-color: #424242;
        margin: 0 !important;
        display: inline-block;
    }

    .card-text {
        margin-left: 12px;
    }

    .message{
        color: white;
        font-size: 1.5em;
    }

    .section{
        height: 100vh;
        position: relative;
    }

    .center {
        text-align: center;
    }

    .top-logo {
        margin-top: 32px;
        width: 256px;
    }

    .white {
        color: white;
    }

    .green {
        color: #66B26B !important;
    }

    .red {
        color: #f44336 !important;
    }
</style>