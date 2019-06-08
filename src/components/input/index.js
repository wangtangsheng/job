import React from 'react';
import css from './index.less';
import { Input, Button} from 'antd';

class MyInput extends React.PureComponent {
    render(){
        return <div className={css.box}>
            <Input type='text' className={css.input} placeholder='请输入职位关键词'></Input>
            <Button className={css.btn}>
                搜索
            </Button>
        </div>
    }
}

export default MyInput