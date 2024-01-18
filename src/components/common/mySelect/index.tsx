import React, {FC, useEffect, useState} from 'react'
import {Select} from 'antd'

import sysParamConfigApi from '@/api/sys/sysParamConfig'

const {Option} = Select

interface Props {
    data?: CommonObjectType<string>[];
    paramType?:string;
    placeholder?: string;
    allowClear?: boolean;
    rules?: Object[];
    value?: string;
    onChange?: (arg0: unknown) => void;
    width?: string | number;
    disabled?: boolean;
    onSearch?: () => void;
    defaultValue?: string | number;
}

const MySelect: FC<Props> = (props) => {
    const {
        data,
        paramType,
        allowClear = false,
        rules,
        placeholder = '请选择',
        value,
        onChange = () => {
        },
        width = '100%',
        disabled,
        onSearch,
        defaultValue
    } = props
    
    const [selectData, setSelectData] = useState<CommonObjectType<string>[]>([]);
    const [selectDefaultValue, setSelectDefaultValue] = useState<string | number>()
    const handerChange = (val: string | number): void => {
        setSelectDefaultValue(val)
        onChange(val)
    }

    useEffect(()=>{
        if((data==undefined||data.length==0)&& paramType!='' &&paramType!=undefined){
            sysParamConfigApi.queryByPage({configKey:paramType}).then(res=>{
                var list=res.list;
                if(Array.isArray(list)){
                    setSelectData(list.map((obj: any) => ({
                        name: obj.configName,
                        key: obj.configValue
                    })));
                    // const defaultKey = value || defaultValue //|| list[0].configValue;
                    // setSelectDefaultValue(defaultKey);
                }
            })
        }else{
            setSelectData(data);
            // var key=value || defaultValue //|| (data.length > 0 && data[0].key) || null;
            // setSelectDefaultValue(key);
        }
    },[])

    useEffect(() => {
        //TODO 增加规则解析器
    }, [props.value])

    return (
        <Select
            allowClear={allowClear}
            disabled={disabled}
            onChange={handerChange}
            optionFilterProp="children"
            placeholder={placeholder}
            showSearch
            style={{width}}
            value={value}
            onSearch={onSearch}
            defaultValue={selectDefaultValue}
        >
            {selectData.map((item) => (
                <Option key={item.key} title={item.name} value={item.key}>
                    {item.name}
                </Option>
            ))}
        </Select>
    )
}

export default MySelect
