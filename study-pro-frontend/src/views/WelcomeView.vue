<template>
    <div style="width: 100vw; height: 100vh ;overflow: hidden;display: flex">
        <div style="flex: 1">
            <el-image style="width: 100%;height: 100%" fit="cover"
                      src="https://img2.baidu.com/it/u=4235495964,2152129518&fm=253&fmt=auto&app=120&f=JPEG?w=1180&h=800"/>
        </div>
        <div class="welcome-text">
            <div style="font-size: 30px">欢迎来到study平台</div>
            <div>这是一个java开源框架,提供登录，注册的脚手架</div>
        </div>
        <div style="width: 400px;background: white;text-align: center;z-index: 1">
            <router-view v-slot="{ Component }">
                <transition name="el-fade-in-linear">
                    <component :is="Component"/>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.welcome-text {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: white;
    text-shadow: 0 0 10px black;
}
</style>