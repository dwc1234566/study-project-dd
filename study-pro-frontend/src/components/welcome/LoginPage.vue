<template>
    <div style="text-align: center; margin: 0 20px">
        <div style=";margin-top: 150px">
            <div style="font-size: 25px;color: chartreuse;font-weight: bold">登录</div>
            <div style="font-size: 15px;color: darkgray">进入系统之前请先登录</div>
        </div>
        <div style="margin-top: 30px">
            <el-input v-model="form.username" type="text" placeholder="用户名或者邮箱">
                <template #prefix>
                    <el-icon>
                        <User/>
                    </el-icon>
                </template>
            </el-input>

            <el-input v-model="form.password" type="password" style="margin-top: 10px" placeholder="密码 ">
                <template #prefix>
                    <el-icon>
                        <Lock/>
                    </el-icon>
                </template>
            </el-input>
        </div>
        <el-row style="margin-top: 10px">
            <el-col :span="12" style="text-align: left">
                <el-checkbox v-model="form.remember" label="记住我"/>
            </el-col>
            <el-col :span="12" style="text-align: right">
                <el-link>忘记密码</el-link>
            </el-col>
        </el-row>

        <div style="margin-top: 40px">
            <el-button @click="login()" style="width: 200px" type="success">
                立即登录
            </el-button>
        </div>
        <el-divider>
            <span>没有账号</span>
        </el-divider>
        <div style="margin-top: 40px">
            <el-button @click="router.push('/register')" style="width: 200px" type="warning">注册账号</el-button>
        </div>
    </div>
</template>

<script setup>
import {Lock, User} from "@element-plus/icons-vue";
import {reactive} from "vue";
import {ElMessage} from "element-plus";
import {post} from "@/net";
import router from "@/router";


const form = reactive({
    username: '',
    password: '',
    remember: false
})


const login = () => {
    if (form.username === '' || form.password === '') {
        ElMessage.warning('用户名或者密码不能为空')
    } else {
        post('/api/auth/login', {
            username: form.username,
            password: form.password,
            remember: form.remember
        }, (message) => {
            ElMessage.success(message)
            router.push('/index')
        })
    }


}
</script>

<style scoped>

</style>