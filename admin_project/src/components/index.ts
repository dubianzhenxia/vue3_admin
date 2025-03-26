/**
 * 配置全局组建，将组件引入并加入到allGlobalComponents后面的对象里即可
 */

//引入全剧组件
import SvgIcon from '@/components/SvgIcon.vue'


//设置包含全剧组件的对象
const allGlobalComponents:any = {SvgIcon}

//对外暴露插件
export default{
    install(app:any){
        //遍历并注册组件
        Object.keys(allGlobalComponents).forEach(key => 
            app.component(key, allGlobalComponents[key])
        )
    }
}
