import React from 'react';
import css from './index.less';
import MyInput from  '../../components/input';
import MyJob from  '../../components/job';
class Home extends React.PureComponent{
    state={
        hotKeyWords: [
             "JAVA", "IOS", "数据", "安全", "搜索", "算法", "运营", "视觉", "交互", "前端"
        ],
        list: [
            {
                name:'菜鸟-数据分析师',
                address: '杭州',
                id: 1,
                publishTime: '0小时前'
            },
            {
                name:'菜鸟-数据分析师',
                address: '杭州',
                id: 2,
                publishTime: '1小时前'
            },
            {
                name:'菜鸟-数据分析师',
                address: '杭州',
                id: 3,
                publishTime: '2小时前'
            },
            {
                name:'菜鸟-数据分析师',
                address: '杭州',
                id: 4,
                publishTime: '3小时前'
            },
            {
                name:'菜鸟-数据分析师',
                address: '杭州',
                id: 5,
                publishTime: '4小时前'
            },
            {
                name:'菜鸟-数据分析师',
                address: '杭州',
                id: 6,
                publishTime: '5小时前'
            },
            {
                name:'菜鸟-数据分析师',
                address: '杭州',
                id:7,
                publishTime: '6小时前'
            },
            {
                name:'菜鸟-数据分析师',
                address: '杭州',
                id:8,
                publishTime: '7小时前'
            }
        ],
        cards:[
            {
                link: 'https://www.aliyun.com/careers?spm=a2obv.11410899.0.aliyun.55ef6c61z60PBp',
                src: 'https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png',
                width: '179px',
                id: 1
            },
            {
                link: 'https://job.alibaba.com/zhaopin/informationPlatformBu.htm?spm=a2obv.11410899.0.xinxipingtai.55ef6c61JwMqQd',
                src: 'https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg',
                width:'260px',
                id:2
            }
        ]
    }

    handleClick=(item)=>{
        alert('点击事件')
    }
    render(){
        return (
            <React.Fragment>
                <div className={css.search_box}>
                    <div className={css.content}>
                        <div className={css.en_text}>If not now, when?</div>
                        <div className={css.en_text}>If not me, who?</div>
                        <div className={css.zh_text}>此时此刻，非我莫属！</div>
                        <MyInput></MyInput>
                        <div className={css.keywords_box}>
                        <span className={css.sub_title}>热门搜索:</span>
                        {
                            this.state.hotKeyWords.map((item)=>{
                                return (<span key={item}  className={css.keyword}>
                                {item}</span>)
                            })
                        }
                        </div>
                        
                    </div>
                </div>
                <div className={css.detail_box}>
                    <div className={css.job_wrapper}>
                        <MyJob list={this.state.list} onClickItem={this.handleClick}></MyJob>
                    </div>
                    
                    <div className={css.card_box}>
                        <div>
                            {
                                this.state.cards.map((item)=>{
                                    return (
                                        <a href={item.link} key={item.id} className={css.href}>
                                            <img src={item.src} alt="" width={item.width} className={css.img} />
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home