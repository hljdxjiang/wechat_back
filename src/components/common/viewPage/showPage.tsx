import { Button, DatePicker, Descriptions, Input, TimePicker } from "antd"
import Editor from "../editor"
import FileUpload from "../fileUpload"
import MySelect from "../mySelect"
import ImgUpload from "../imgUpload"
import React, { FC } from 'react'

interface PageProps {
    row?: object
    columns?: Object[]
    canEdit?: boolean
    onOk?: (arg0?: unknown) => void
    onBack?: (arg0?: unknown) => void
    okApiFun?: (arg0?: unknown[]) => Promise<{}>
    onCancel?: (arg0?: unknown) => void
    onChange?: (arg0: object, arg1?: unknown, arg2?: unknown) => void
    visible?: boolean
    width?: string | number
    cancelText?: String
    okText?: String
    keyboard?: boolean
    title: String
    children?: React.ReactNode;
}

const ShowPage: FC<PageProps> = (props: PageProps) => {
    /**
     * 引用父组件的ref实例，成为子组件的一个参数
     * 可以引用父组件的ref绑定到子组件自身的节点上.
     */
    const {
        row,
        columns,
        canEdit,
        onOk,
        onCancel,
        onChange,
        onBack,
        children,
        visible,
        width,
        cancelText,
        okText,
        keyboard,
        title
    } = props


    const handOk = (): void => {
        onOk()
    }
    const handCancle = (): void => {
        onCancel();
    }


    const handChange = (e, stype?, sid?) => {
        onChange(e, stype, sid)
    }


    const createItems = () => {
        return columns.map((item, _) => {
            if (item["editFlag"] === false) {
                return "";
            }
            if (item["span"] !== undefined) {
                return (
                    <Descriptions.Item label={item["title"]} span={3}>
                        {createInput(item)}
                    </Descriptions.Item>
                )
            }
            return (
                <Descriptions.Item label={item["title"]}>
                    {createInput(item)}
                </Descriptions.Item>
            )
        })
    }

    const createInput = (item) => {
        var type = item["editType"]
        var idx = item["dataIndex"];
        if (type === "select") {
            return (<MySelect data={item["data"]} value={row[item["dataIndex"]]}
                onChange={handChange.bind(this, idx, "select")} disabled={!canEdit} />)
        }
        if (type === "date") {
            return <DatePicker value={row[item["dataIndex"]]} onChange={handChange.bind(this, idx, "date")}
                disabled={!canEdit}></DatePicker>
        }
        if (type === "datetime") {
            return <DatePicker showTime={true} value={row[item["dataIndex"]]}
                onChange={handChange.bind(this, idx, "datetime")} disabled={!canEdit}></DatePicker>
        }
        if (type === "time") {
            return <TimePicker value={row[item["dataIndex"]]} onChange={handChange.bind(this, idx, "time")}
                disabled={!canEdit}></TimePicker>
        }
        if (type === "upload") {
            if (canEdit) {
                console.log(row[item["picWidth"]], row[item["picHeight"]])
                return <ImgUpload value={row[item["dataIndex"]]}
                    width={item["picWidth"]}
                    height={item["picHeight"]}
                    onChange={handChange.bind(this, idx, "upload")}></ImgUpload>
            } else {
                return <img src={row[item["dataIndex"]]} width="40" alt="" />
            }
        }

        if (type === "file") {
            if (canEdit) {
                console.log(row[item["picWidth"]], row[item["picHeight"]])
                return <FileUpload value={row[item["dataIndex"]]} fileType={row[item["fileType"]]}
                    onChange={handChange.bind(this, idx, "upload")}></FileUpload>
            } else {
                return <img src={row[item["dataIndex"]]} width="40" alt="" />
            }
        }
        if (type === "edit") {
            return <Editor value={row[item["dataIndex"]]} onChange={handChange.bind(this, idx, "edit")}></Editor>
        }
        if (type === "textarea") {
            return <Input.TextArea value={row[item["dataIndex"]]} disabled={!canEdit} id={item["dataIndex"]}
                onChange={handChange}></Input.TextArea>
        }
        return <Input placeholder={item["title"]} id={item["dataIndex"]} onChange={handChange} allowClear
            value={row[item["dataIndex"]]} disabled={!canEdit} />
    }

    return (
        <div>
            <Button type="primary" className="btn" onClick={() => { onBack() }}>返回列表</Button>
            <Descriptions
                bordered
                size="small"
                extra={
                    <>
                        {canEdit ? <Button type="primary" className="fr" onClick={handOk}>保存</Button> : null}
                        <Button  type="primary" className="fr" onClick={handCancle} style={{margin:"0 5px"}}>取消</Button>
                    </>}
                title={title}>
                {createItems()}
            </Descriptions>
            {children}
        </div>
    )
}

ShowPage.defaultProps = {
    row: {},
    canEdit: false,
    onOk: () => {
    },
    onCancel: () => {
    },
    onChange: () => {
    },
    onBack: () => { },
    visible: false,
    width: "80%",
    cancelText: "取消",
    okText: "确认",
    keyboard: true,
    title: "编辑"
}

export default ShowPage