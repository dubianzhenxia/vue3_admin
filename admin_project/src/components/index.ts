//引入全剧组件
import SvgIcon from '@/components/SvgIcon.vue'


//设置包含全剧组件的对象
const allGlobalComponents = {SvgIcon}

//对外暴露插件
export default{
    install(app){
        //遍历并注册组件
        Object.keys(allGlobalComponents).forEach(key => 
            app.component(key, allGlobalComponents[key])
        )
    }
}
