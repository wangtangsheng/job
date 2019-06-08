import React from 'react';
import css from './index.less';

// 定时器
let timer = null;

class Job extends React.Component {
    state={
        top: 0
    }
    componentDidMount() {
        this.scrollAnimation();
    }
    componentWillUnmount() {
        clearInterval(timer)
    }

    // 滚动动画
    scrollAnimation = () => {
        let { height=50, list=[] } = this.props;  
        let { top } = this.state;

        timer && clearInterval(timer);
        timer = setInterval(()=>{
            top--;

            if(top === list.length * height * (-1)) {
                top = 0
            }
            this.setState({
                top
            })
        }, 50)
    }

    handleEnter=()=>{
        clearInterval(timer)
    }

    handleLeave=()=>{
        this.scrollAnimation();
    }

    handleClick=(item)=>{
        if(this.props.onClickItem){
            this.props.onClickItem(item)
        }
    }

    render(){
        let { top } = this.state;
        let { list=[],title, moreText } = this.props;
        let nextList = JSON.parse(JSON.stringify(list)).map((item)=>{
            item.id = item.id+'_2'
            return item
        })
        let doubleList = [...list,...nextList];
        let styleConfig = {
            transform: `translateY(${top}px)`
        }

        return (<div className={css.job_box}>
            <div className={css.title}>
                <span>{title}</span>
                <span className={css.more} onClick={this.props.onClickMore}>{moreText}</span>
            </div>
            <div className={css.content} style={styleConfig}>
                {
                    doubleList.map((item)=>{
                        return <div key={item.id}  onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} onClick={()=>{this.handleClick(item)}} className={css.item}>
                            <div className={css.item1}>{item.name}</div>
                            <div className={css.item2}>{item.address}</div>
                            <div className={css.item3}>{item.publishTime}</div>
                        </div>
                    })
                }
            </div>
        </div>)
    }
}


Job.defaultProps={
    // 点击需要传入事件
    onClickItem: null,
    // 数据列表
    list:[],
    title: '最新职位',
    onClickMore: null,
    moreText: '更多'
}

export default Job